import { Route, Routes } from "react-router-dom";
import { useMovieContext } from "./context/MovieContext";
import { useEffect, lazy, Suspense } from "react";
import "../src/style/app.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";

// const Watchlist = lazy(() => import("./components/Watchlist"));
// const Details = lazy(() => import("./components/Details"));
// const AllTvSeries = lazy(() => import("./components/AllTvSeries"));

import Watchlist from "./components/Watchlist";
import Details from "./components/Details";
import AllTvSeries from "./components/AllTvSeries";

const App = () => {
  const {
    popular,
    setPopular,
    searchKey,
    setSearched,
    searched,
    page,
    setTopRated,
    setSeries,
  } = useMovieContext();
  const apiKey = process.env.REACT_APP_ACCESS_KEY;
  const baseUrl = "https://api.themoviedb.org/3/";
  const apiImg = "https://image.tmdb.org/t/p/w500/";

  const fetchTopRated = (set) => {
    fetch(`${baseUrl}movie/top_rated?api_key=${apiKey}&language=en-US&`)
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => set(data.results))
      .catch((err) => console.log(err));
    console.log("fetch1..");
  };

  const fetchTvSeries = () => {
    fetch(`${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setSeries(data.results))
      .catch((err) => console.log(err));
  };

  const fetchMovies = (set) => {
    const type = searchKey ? "search/movie" : "movie/popular";
    const query = searchKey;
    const isPageOne = searchKey ? 1 : page;

    fetch(
      `${baseUrl}${type}?api_key=${apiKey}&language=en-US&query=${query}&page=${isPageOne}`
    )
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) =>
        set(popular && !searchKey ? [...popular, data.results] : data.results)
      )
      .catch((err) => console.log(err));

    console.log("fetch2..");
  };

  useEffect(() => {
    fetchTopRated(setTopRated);
  }, []);

  useEffect(() => {
    fetchTvSeries();
  }, []);

  useEffect(() => {
    fetchMovies(setPopular);
  }, [page]);

  useEffect(() => {
    !searchKey && searched && setSearched([]);
    //if I'm typing faster than half second then wait half second and fetch the data.
    const getData = setTimeout(() => {
      searchKey && fetchMovies(setSearched);
    }, 250);

    return () => {
      clearTimeout(getData);
    };
  }, [searchKey]);

  console.log("app rendred");

  return (
    <div className="app">
      <Suspense fallback={<p>loading......</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar apiImg={apiImg} fetchMovies={fetchMovies} />
                <Carousels apiImg={apiImg} />
                <MovieList popular={popular} apiImg={apiImg} />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist baseUrl={baseUrl} apiKey={apiKey} apiImg={apiImg} />
            }
          />
          <Route
            path="/details"
            element={
              <Details
                fetchMovies={fetchMovies}
                baseUrl={baseUrl}
                apiKey={apiKey}
                apiImg={apiImg}
              />
            }
          />
          <Route
            path="tvseries"
            element={
              <AllTvSeries
                fetchMovies={fetchMovies}
                baseUrl={baseUrl}
                apiKey={apiKey}
                apiImg={apiImg}
              />
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
