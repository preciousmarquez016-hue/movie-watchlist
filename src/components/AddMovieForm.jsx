import { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            id: Date.now(),
            title: title,
            poster: poster,
            genre: genre,
            year: Number(year),
            rating: Number(rating),
            watched: false,
        };

        onAddMovie(newMovie);

        setTitle("");
        setPoster("");
        setGenre("");
        setYear("");
        setRating(5);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="card bg-base-200 shadow-xl p-6 mb-6"
        >
            <h2 className="text-2xl font-bold mb-4">
                Add a Movie
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Movie Title"
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    type="url"
                    placeholder="Poster URL"
                    className="input input-bordered w-full"
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Genre"
                    className="input input-bordered w-full"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Year"
                    className="input input-bordered w-full"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />

                <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="Rating"
                    className="input input-bordered w-full"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary mt-4"
            >
                Add Movie
            </button>
        </form>
    );
}