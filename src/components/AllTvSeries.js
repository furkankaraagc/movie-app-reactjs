import { useMovieContext } from "../context/MovieContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const AllTvSeries = ({ apiImg, fetchMovies }) => {
  const { series } = useMovieContext();

  return (
    <>
      <Navbar apiImg={apiImg} fetchMovies={fetchMovies} />
      <div className="main">
        <div className="tv-list">
          <ul>
            {series.map((tv) => (
              <li key={tv.id}>
                <img src={apiImg + tv.poster_path} alt="" />
                <div className="details">
                  <div className="front-detail">
                    <div className="tv-rate">
                      <StarBorderIcon />
                      {tv.vote_average}
                    </div>
                    <div className="tv-name">{tv.name}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AllTvSeries;
