import Navbar from "./Navbar";
import { useMovieContext } from "../context/MovieContext";
import { useEffect } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Watchlist = ({ baseUrl, apiKey, apiImg }) => {
  const { watchlistId, watchListData, setListData, setSearchKey } =
    useMovieContext();

  setSearchKey("");

  useEffect(() => {
    watchlistId.length !== watchListData.length &&
      watchlistId.map((item) => {
        !watchListData.map((x) => x.id).includes(parseInt(item)) &&
          fetch(`${baseUrl}/movie/${item}?api_key=${apiKey}&language=en-US`)
            .then((res) => {
              if (res.ok && res.status === 200) {
                return res.json();
              }
            })

            .then((data) => setListData((prev) => [...prev, data]))
            .catch((err) => console.log(err));
      });
  }, []);

  // const x = [1, 2];
  // const y = [{ id: 1 }, { id: 5 }];

  // console.log(x.map((a) => y.map((x) => x.id).includes(a)));

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="movie-list">
          <ul>
            {watchListData &&
              watchListData.map((movie) => (
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
