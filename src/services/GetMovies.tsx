import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ShowMovies from "../components/ShowMovies";
import NoMovies from "./NoMovies";
import MovieCarousel from "../components/carousel";
import { Movie } from "../types";
import { BASE_URL } from "../variables_env";
import ShowSingleMovie from "../components/singleMovie";
import { MoviePlaceholderCard } from "../components/moviePlaceHolder";

type MovieType = "discover" | "details" | "search" | "popular" | "comedy" | "drama" | "kids" | "action" | "adventure" | "animation" | "crime" | "family" | "fantasy" | "history" | "music" | "mistery" | "sci-fi" | "thriller" | "tv" | "war" | "western";

interface Props {
    type: MovieType;
    id?: string;
    query?: string;
    page?: number;
    genres?: string;
    year?: number;
    cast?: string;
    textTitle?: string;
    textTitleStyle?: React.CSSProperties;
}

const GetMovies = ({
    type,
    id,
    query,
    page = 1,
    genres,
    year,
    cast,
    textTitle = "Películas recientes",
    textTitleStyle,
}: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(false);
    const [cache] = useState<Record<string, Movie[]>>({});

    const url = new URL(BASE_URL, window.location.origin);
    url.searchParams.set("type", type);
    if (id) url.searchParams.set("id", id);
    if (query) url.searchParams.set("query", query);
    if (page) url.searchParams.set("page", page.toString());
    if (genres) url.searchParams.set("genres", genres);
    if (year) url.searchParams.set("year", year.toString());
    if (cast) url.searchParams.set("cast", cast);
    url.searchParams.set("language", "es-ES");

    useEffect(() => {
        let mounted = true;
        const cacheKey = url.toString();

        const fetchData = async () => {
            if (cache[cacheKey]) {
                setMovies(cache[cacheKey]);
                return;
            }

            setLoading(true);
            try {
                const res = await fetch(cacheKey);
                const data = await res.json();

                if (!mounted) return;

                if (type === "details" && id) {
                    setMovie(data);
                    return;
                }

                if (data.results) {
                    setMovies(data.results);
                    cache[cacheKey] = data.results;
                } else {
                    setMovies([]);
                }
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };

    }, [type, id, query, page, genres, cast, year]);

    if (type === "details") {
        return <>

            {loading ? <MoviePlaceholderCard /> :
                movie && <ShowSingleMovie movie={movie} />}
        </>;
    }

    return (
        <div className="row mx-auto">
            <h1
                className="titulo text-center"
                style={{ ...textTitleStyle, color: "#47428bff", fontWeight: "bold", fontFamily: "serif" }}
            >
                {textTitle}
            </h1>

            {movies.length > 0 && <MovieCarousel movies={movies.slice(0, 5)} />}

            {loading ? (
                <Loading />
            ) : movies.length > 0 ? (
                <ShowMovies movies={movies} marginTop="1rem" />
            ) : (
                <NoMovies title="No se encuentran películas" />
            )}
        </div>
    );
};

export default GetMovies;
