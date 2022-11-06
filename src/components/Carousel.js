import { useMovieContext } from "../context/MovieContext";
import Carousel from "react-bootstrap/Carousel";
import allURLs from "../allURLs";
import TvSeries from "./TvSeries";
import useAxios from "../useAxios";
import CarouselSk from "./Skeleton";

const Carousels = () => {
  const { topRated, setTopRated, apiImg, isLoading, setIsLoading } =
    useMovieContext();
  const [] = useAxios(allURLs.topRated, setTopRated);

  const engOnly =
    topRated && topRated.filter((movie) => movie.original_language === "en");
  !topRated && setIsLoading(true);

  return (
    <div className="header">
      <div className="carousel-container fade-in">
        <h2>Top Rated Movies</h2>
        {isLoading ? (
          <CarouselSk type="carousel" />
        ) : (
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
        )}
      </div>
      <TvSeries apiImg={apiImg} />
    </div>
  );
};

export default Carousels;
