export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
    homepage?: string;
    original_language?: string;
    original_country?: string[];
    tagline?: string;
    popularity?: number;
    runtime?: number;
    genres?: { id: number; name: string }[];
    vote_count?: number;
    budget?: number;
    revenue?: number;
    status?: string;
    video?: boolean;
}