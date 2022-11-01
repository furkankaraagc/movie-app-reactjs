import Carousel from "react-bootstrap/Carousel";
import { useMovieContext } from "../context/MovieContext";
import TvSeries from "./TvSeries";

const Carousels = ({ apiImg }) => {
  const { topRated } = useMovieContext();
  const engOnly =
    topRated && topRated.filter((movie) => movie.original_language === "en");

  return (
    <div className="header">
      <div className="carousel-container">
        <h2>Top Rated Movies</h2>
        <Carousel>
          {topRated &&
            engOnly.map((movie) => (
              <Carousel.Item interval={6000} key={movie.id}>
                <img
                  className="d-block w-100"
                  src={apiImg + movie.backdrop_path}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
      <TvSeries apiImg={apiImg} />
    </div>
  );
};

export default Carousels;
