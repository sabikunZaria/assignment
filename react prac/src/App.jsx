import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Homepage";
import Movies from "./Pages/Movies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;