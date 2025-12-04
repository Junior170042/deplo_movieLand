export const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"

export const page_end_point_url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=${API_KEY}&page=`

export const pages = [{ page: 1, id: 12 }, { page: 2, id: 23 }, { page: 3, id: 35 }, { page: 4, id: 47 }, { page: 5, id: 59 }, { page: 6, id: 61 }, { page: 7, id: 73 }, { page: 8, id: 85 }, { page: 9, id: 97 }, { page: 10, id: 109 }];