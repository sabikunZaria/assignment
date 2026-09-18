import { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import { MovieGrid , MovieModal } from "../Components/Moviecomponent";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);

      try {
        let url = "https://api.tvmaze.com/shows";

        if (searchTerm.trim() !== "") {
          url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (searchTerm.trim() !== "") {
          setMovies(data.map((item) => item.show));
        } else {
          setMovies(data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [searchTerm]);

  return (
    <div>
      <Navbar />

      <main className="movies-page">
        <div className="page-heading">
          <h1>Explore Movies & Shows</h1>
          <p>
            Search and discover your favorite movies and TV shows.
          </p>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <MovieGrid
            movies={movies}
            onSeeDetails={setSelectedMovie}
          />
        )}
      </main>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </div>
  );
}

export default Movies;