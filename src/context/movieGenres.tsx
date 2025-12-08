import React from "react";
import { useState } from "react";

/* a context to set genres an get genres*/
const MovieGenresContext = React.createContext({
    currentGenre: "",
    setCurrentGenre: (_: string) => { }
});

export const MovieGenresProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentGenre, setCurrentGenre] = useState<string>("");
    return (
        <MovieGenresContext.Provider value={{ currentGenre, setCurrentGenre }}>
            {children}
        </MovieGenresContext.Provider>
    );
};

export const useMovieGenres = () => {
    return React.useContext(MovieGenresContext);
};
