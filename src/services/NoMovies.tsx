

interface NoMoviesProps {
    title: string;
}

const NoMovies = ({ title }: NoMoviesProps) => {

    return (
        <h1 className="titulo text-center">{title}</h1>
    )
}

export default NoMovies