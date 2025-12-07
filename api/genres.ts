// /api/genres.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const API_KEY = process.env.TMDB_API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ error: "TMDB_API_KEY no configurada" });
    }

    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es`; // Puedes ajustar language
    try {
        const result = await fetch(url);
        const data = await result.json();
        if (data.genres) {
            return res.status(200).json(data.genres);
        } else {
            return res.status(500).json({ error: "Respuesta inesperada de TMDB", details: data });
        }
    } catch (err) {
        return res.status(500).json({ error: "Error consultando géneros", details: err });
    }
}
