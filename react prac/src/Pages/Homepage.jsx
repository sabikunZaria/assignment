import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default Home;