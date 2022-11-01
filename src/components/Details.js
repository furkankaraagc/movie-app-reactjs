import { useEffect } from "react";
import { useMovieContext } from "../context/MovieContext";
import Navbar from "./Navbar";

const Details = ({ baseUrl, apiKey, apiImg }) => {
  const { detailId, moreDetail, setMoreDetail, setSearchKey, fetchMovies } =
    useMovieContext();
  console.log("detail");

  useEffect(() => {
    fetch(`${baseUrl}/movie/${detailId}?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })

      .then((data) => setMoreDetail(data))
      .catch((err) => console.log(err));
    setSearchKey("");
  }, [detailId]);

  return (
    <div className="more-detail">
      <Navbar apiImg={apiImg} fetchMovies={fetchMovies} />
      <div className="about-the-movie">
        <h3>{moreDetail.title}</h3>
        <img src={apiImg + moreDetail.backdrop_path} alt="" />
        <p>{moreDetail.overview}</p>
      </div>
    </div>
  );
};

export default Details;
