import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🎬 MovieBinge
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies" className="nav-button">
          Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;