import { NavLink } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

const TvSeries = ({ apiImg }) => {
  const { series } = useMovieContext();

  return (
    <div className="tv-series">
      <h2>Popular Tv Series</h2>
      <ul>
        {series.slice(0, 3).map((tv) => (
          <li key={tv.id}>
            <img src={apiImg + tv.poster_path} alt="" />
            <div className="tv-detail">
              <h3>{tv.name}</h3>
              <p>{tv.overview}</p>
            </div>
          </li>
        ))}
      </ul>
      <NavLink to="/tvseries">
        <h3>See more</h3>
      </NavLink>
    </div>
  );
};

export default TvSeries;
