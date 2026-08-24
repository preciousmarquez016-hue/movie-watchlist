export default function MovieCard(props) {
    const {
        id,
        title,
        poster,
        year,
        genre,
        rating,
        watched,
        onToggleWatched,
        onDelete,
    } = props;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={poster}
                    alt={title}
                    className="w-full h-80 object-cover"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    {title}

                    {rating >= 8 && (
                        <span className="badge badge-warning">
                            Top Rated
                        </span>
                    )}
                </h2>

                <p className="text-sm opacity-70">
                    {genre} • {year}
                </p>

                <p className="text-sm">
                    ⭐ {rating}
                </p>

                <div className="card-actions justify-end mt-2">
                    <button
                        onClick={() => onToggleWatched(id)}
                        className={
                            watched
                                ? "badge badge-success cursor-pointer"
                                : "badge badge-ghost cursor-pointer"
                        }
                    >
                        {watched ? "Watched ✓" : "Unwatched"}
                    </button>

                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-error btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}