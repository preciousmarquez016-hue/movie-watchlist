export default function SummaryBar({ total, watched, unwatched }) {
    return (
        <div className="stats shadow mb-6 w-full">
            <div className="stat">
                <div className="stat-title">Total Movies</div>
                <div className="stat-value">{total}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Watched</div>
                <div className="stat-value text-success">
                    {watched}
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Unwatched</div>
                <div className="stat-value">
                    {unwatched}
                </div>
            </div>
        </div>
    );
}