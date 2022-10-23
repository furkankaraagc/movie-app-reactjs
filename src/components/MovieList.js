import { useMovieContext } from "../context/MovieContext";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoading from "./SkeletonLoading";

const MovieList = ({ popular, apiImg }) => {
  const { setPage, page } = useMovieContext();

  return (
    <div className="movie-list">
      <h2>Popular</h2>

      <ul>
        {!popular && <SkeletonLoading card={20} />}
        {popular && (
          <>
            {popular.flat().map((movie) => (
              <li key={movie.id}>
                <img src={apiImg + movie.poster_path} alt="" />
                <div className="details">
                  <div className="front-detail">
                    <div className="movie-rate">
                      <StarBorderIcon />
                      {movie.vote_average}
                    </div>
                    <div className="movie-name">{movie.title}</div>
                  </div>

                  <button>
                    <AddIcon /> Watchlist
                  </button>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
      <div className="load-more">
        <button className="load-more-btn" onClick={() => setPage(page + 1)}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default MovieList;
