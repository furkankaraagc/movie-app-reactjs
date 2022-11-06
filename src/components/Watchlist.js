import { useMovieContext } from "../context/MovieContext";
import { useEffect } from "react";
import Navbar from "./Navbar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import axios from "axios";
import allURLs from "../allURLs";

const Watchlist = () => {
  const {
    watchlistId,
    watchListData,
    setListData,
    setSearchKey,
    apiImg,
    setWatchlistId,
  } = useMovieContext();

  setSearchKey("");

  const deleteMovie = (movie) => {
    const filteredData = watchListData.filter((data) => data.id !== movie.id);
    const filteredId = watchlistId.filter((id) => parseInt(id) !== movie.id);

    setListData(filteredData);
    setWatchlistId(filteredId);
  };

  useEffect(() => {
    watchlistId.length !== watchListData.length &&
      watchlistId.map((item) => {
        !watchListData.map((x) => x.id).includes(parseInt(item)) &&
          axios
            .get(
              `${allURLs.baseUrl}/movie/${item}?api_key=${allURLs.apiKey}&language=en-US`
            )
            .then((res) => setListData((prev) => [...prev, res.data]));
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="movie-list">
          <ul>
            {watchListData &&
              watchListData.map((movie) => (
                <li key={movie.id}>
                  <div
                    onClick={() => deleteMovie(movie)}
                    className="delete-btn"
                  >
                    Delete
                  </div>
                  <img src={apiImg + movie.poster_path} alt="" />
                  <div className="details">
                    <div className="front-detail">
                      <div className="movie-rate">
                        <StarBorderIcon />
                        {movie.vote_average}
                      </div>
                      <div className="movie-name">{movie.title}</div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
