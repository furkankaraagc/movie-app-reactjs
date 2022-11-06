import { Route, Routes } from "react-router-dom";
import "../src/style/app.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";
import Watchlist from "./components/Watchlist";
import Details from "./components/Details";
import AllTvSeries from "./components/AllTvSeries";

const App = () => {
  console.log("app rendred");

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Carousels />
              <MovieList />
            </>
          }
        />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/details" element={<Details />} />
        <Route path="tvseries" element={<AllTvSeries />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
