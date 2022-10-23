import Carousel from "react-bootstrap/Carousel";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useMovieContext } from "../context/MovieContext";

const Carousels = ({ apiImg }) => {
  const { topRated } = useMovieContext();
  const engOnly =
    topRated && topRated.filter((movie) => movie.original_language === "en");

  return (
    <Carousel>
      {!topRated && (
        <SkeletonTheme baseColor="#393e46" highlightColor="#444">
          <p>
            <Skeleton height={450} />
          </p>
        </SkeletonTheme>
      )}

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
  );
};

export default Carousels;
