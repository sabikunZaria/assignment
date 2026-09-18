import MovieCard from "./MovieCard";

export function MovieGrid({ movies, onSeeDetails }) {
  if (movies.length === 0) {
    return <p className="no-results">No movies found.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSeeDetails={onSeeDetails}
        />
      ))}
    </div>
  );
}

export function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
          className="modal-image"
        />

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-info">
            <span>
              ⭐ Rating: {movie.rating?.average || "N/A"}
            </span>

            <span>
              📅 Release: {movie.premiered || "N/A"}
            </span>
          </div>

          <p>
            <strong>Genre:</strong>{" "}
            {movie.genres?.join(", ") || "N/A"}
          </p>

          <p>
            <strong>Language:</strong>{" "}
            {movie.language || "N/A"}
          </p>

          <div className="summary">
            <h3>Overview</h3>

            <div
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No summary available.",
              }}
            />
          </div>

          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

