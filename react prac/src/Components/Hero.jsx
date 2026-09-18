import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small">WELCOME TO MOVIE BINGE</p>

        <h1>Discover Your Next Favorite Show</h1>

        <p>
          Explore thousands of movies and TV shows, discover new favorites,
          and learn more about the stories you love.
        </p>

        <Link to="/movies" className="hero-button">
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

export default Hero;