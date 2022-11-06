import { useMovieContext } from "../context/MovieContext";
import { NavLink } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import useAxios from "../useAxios";
import allURLs from "../allURLs";
import MovieListSk from "./Skeleton";

const MovieList = () => {
  const {
    setPage,
    page,
    setWatchlistId,
    setDetailId,
    setPopular,
    apiImg,
    popular,
    isLoading,
  } = useMovieContext();
  const [] = useAxios(allURLs.popular, setPopular, page);

  const addWatchlist = (e) => {
    setWatchlistId((prev) =>
      prev.includes(e.target.id) ? [...prev] : [...prev, e.target.id]
    );
  };

  return (
    <div className="main">
      <div className="movie-list">
        <h2>Popular Movies</h2>
        {isLoading ? (
          <div className="movie-list-container">
            <MovieListSk type="movie-list" />
          </div>
        ) : (
          <ul>
            {popular && (
              <>
                {popular.flat().map((movie) => (
                  <li key={movie.id} className="fade-in">
                    <NavLink to="/details">
                      <img
                        id={movie.id}
                        onClick={(e) => setDetailId(e.target.id)}
                        src={apiImg + movie.poster_path}
                        alt=""
                      />
                    </NavLink>
                    <div className="details">
                      <div className="front-detail">
                        <div className="movie-rate">
                          <StarBorderIcon />
                          {movie.vote_average}
                        </div>
                        <div className="movie-name">{movie.title}</div>
                      </div>

                      <button
                        className="watchlist"
                        id={movie.id}
                        onClick={addWatchlist}
                      >
                        <AddIcon /> Watchlist
                      </button>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
        )}

        <div className="load-more">
          <button
            className="load-more-btn"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
