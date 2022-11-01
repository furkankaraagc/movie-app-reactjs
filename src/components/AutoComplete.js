import { NavLink } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

const AutoComplete = ({ apiImg, isTyping }) => {
  const { searched, setDetailId, inputFocus } = useMovieContext();

  return (
    <>
      {isTyping && (
        <div ref={inputFocus} className="autocomplete">
          {searched.map((search) => (
            <NavLink to="/details">
              <div
                onClick={(e) => setDetailId(e.target.id)}
                key={search.id}
                className="searched-list"
              >
                <img id={search.id} src={apiImg + search.poster_path} alt="" />
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
