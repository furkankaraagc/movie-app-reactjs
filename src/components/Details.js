import { useMovieContext } from "../context/MovieContext";
import Navbar from "./Navbar";
import useAxios from "../useAxios";
import allURLs from "../allURLs";

const Details = () => {
  const {
    detailId,
    moreDetail,
    setMoreDetail,
    setSearchKey,
    fetchMovies,
    setDetailId,
    apiImg,
  } = useMovieContext();
  const url = `${allURLs.baseUrl}/movie/${detailId}?api_key=${allURLs.apiKey}&language=en-US`;

  const [] = useAxios(url, setMoreDetail);

  setDetailId("");
  setSearchKey("");

  return (
    <div className="more-detail">
      <Navbar apiImg={apiImg} fetchMovies={fetchMovies} />
      <div className="about-the-movie">
        <h3>{moreDetail.title}</h3>
        <div className="details">
          <img src={apiImg + moreDetail.backdrop_path} alt="" />
          <p>{moreDetail.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
