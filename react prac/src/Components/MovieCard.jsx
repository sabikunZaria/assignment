function MovieCard({ movie, onSeeDetails }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image?.medium || "https://via.placeholder.com/210x295"}
        alt={movie.name}
      />

      <div className="movie-card-content">
        <h2>{movie.name}</h2>

        <div className="movie-info">
          <span>
            ⭐ {movie.rating?.average || "N/A"}
          </span>

          <span>
            📅 {movie.premiered?.slice(0, 4) || "N/A"}
          </span>
        </div>

        <button onClick={() => onSeeDetails(movie)}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;