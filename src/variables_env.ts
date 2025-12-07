
export const BASE_URL = "/api/movies"
export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
export const IMAGE_PATH_ORIGINAL = "https://image.tmdb.org/t/p/original"

export const pages = [{ page: 1, id: 12 }, { page: 2, id: 23 }, { page: 3, id: 35 }, { page: 4, id: 47 }, { page: 5, id: 59 }, { page: 6, id: 61 }, { page: 7, id: 73 }, { page: 8, id: 85 }, { page: 9, id: 97 }, { page: 10, id: 109 }];

export const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).reverse();