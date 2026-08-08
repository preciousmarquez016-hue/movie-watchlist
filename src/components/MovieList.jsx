import MovieCard from "./MovieCard";

export default function MovieList(props) {
    const { movies } = props;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies &&
                movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                        year={movie.year}
                        genre={movie.genre}
                        rating={movie.rating}
                        watched={movie.watched}
                    />
                ))}
        </div>
    );
}