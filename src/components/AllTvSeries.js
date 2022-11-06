import { useMovieContext } from "../context/MovieContext";
import { useEffect, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import axios from "axios";
import allURLs from "../allURLs";

const AllTvSeries = () => {
  const { series, apiImg, page, setPage, setSeries, popular } =
    useMovieContext();

  const lastCard = useRef(null);

  useEffect(() => {
    popular.length > 20 && setPage(1);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log("observe");

      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    observer.observe(lastCard.current);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(allURLs.series, {
        params: {
          page: page,
        },
      });
      setSeries((prev) => [...prev, res.data.results]);
    };

    page > 1 && fetchData();
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="tv-list">
          <ul>
            {series.flat().map((tv) => (
              <li key={Math.random()}>
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
          <div
            ref={lastCard}
            className="observer2"
            style={{ height: 10 }}
          ></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AllTvSeries;
