import { NavLink } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import allURLs from "../allURLs";
import useAxios from "../useAxios";

const AutoComplete = ({ isTyping }) => {
  const {
    searched,
    setDetailId,
    inputFocus,

    setSearched,
    apiImg,
  } = useMovieContext();

  const [] = useAxios(allURLs.search, setSearched);

  return (
    <>
      {isTyping && (
        <div ref={inputFocus} className="autocomplete">
          {searched.map((search) => (
            <NavLink to="/details">
              <div
                onClick={(e) => setDetailId(e.target.id)}
                key={search.id}
                className="searched-list "
              >
                <img
                  className="fade-in"
                  id={search.id}
                  src={apiImg + search.poster_path}
                  alt=""
                />
                <div>
                  <div id={search.id}> {search.title}</div>
                  <div id={search.id}>
                    {search.release_date && search.release_date.substring(0, 4)}
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default AutoComplete;
