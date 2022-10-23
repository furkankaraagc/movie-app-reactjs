import "../src/style/app.css";
import { useEffect } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { useMovieContext } from "./context/MovieContext";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";

const App = () => {
  const {
    popular,
    setPopular,
    searchKey,
    setSearched,
    searched,
    page,
    setTopRated,
    isLoading,
    setIsLoading,
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
    setIsLoading(isLoading + 1);

    console.log("fetch2..");
  };

  useEffect(() => {
    fetchTopRated(setTopRated);
  }, []);
  useEffect(() => {
    fetchMovies(setPopular);
  }, [page]);
  useEffect(() => {
    searchKey && fetchMovies(setSearched);
  }, [searchKey]);

  console.log(searched);
  console.log("app rendred");
  return (
    <div className="app">
      <Navbar apiImg={apiImg} fetchMovies={fetchMovies} />
      <div className="header">
        <Carousels apiImg={apiImg} />
      </div>
      <div className="main">
        <MovieList popular={popular} apiImg={apiImg} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
