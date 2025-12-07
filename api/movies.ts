import type { VercelRequest, VercelResponse } from "@vercel/node";

const memoryCache: Record<string, { data: any; expires: number }> = {};
const CACHE_TTL = 1000 * 60 * 10; // 10 minutos

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const API_KEY = process.env.TMDB_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({ error: "TMDB_API_KEY no configurada" });
    }

    const currentYear = new Date().getFullYear();

    const { type, id, query, page = "1", genres = "18", cast, year = currentYear, language = "es-ES" } = req.query;
    const cacheKey = JSON.stringify(req.query);
    const now = Date.now();

    // Cache hit
    if (memoryCache[cacheKey] && memoryCache[cacheKey].expires > now) {
        return res.status(200).json(memoryCache[cacheKey].data);
    }

    let url = "";

    const appendYearParam = () => {
        if (year) url += `&year=${year}`;
    };

    switch (type) {
        case "discover":
            url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&primary_release_year=${year}&api_key=${API_KEY}&page=${page}&language=${language}`;
            if (cast) url += `&with_cast=${cast}`;
            break;

        case "details":
            if (!id) return res.status(400).json({ error: "Falta el id" });
            url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`;
            break;

        case "search":
            if (!query) return res.status(400).json({ error: "Falta query" });
            url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=${language}`;
            appendYearParam();
            break;

        case "popular":
            url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}&language=${language}`;
            appendYearParam();
            break;

        case "comedy":
            url = `https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=${cast ?? "23659"}&sort_by=revenue.desc&api_key=${API_KEY}&page=${page}&primary_release_year=${year}&language=${language}`;
            break;

        case "drama":
            url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${API_KEY}&page=${page}&primary_release_year=${year}&language=${language}`;
            break;

        case "kids":
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16,10751&page=${page}&primary_release_year=${year}&language=${language}`;
            break;

        default:
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751&page=${page}&primary_release_year=${year}&language=${language}`;
            break;
    }

    try {
        const result = await fetch(url);
        const data = await result.json();

        memoryCache[cacheKey] = {
            data,
            expires: now + CACHE_TTL,
        };

        return res.status(200).json(data);
    } catch {
        return res.status(500).json({ error: "Error conectando con TMDB" });
    }
}
