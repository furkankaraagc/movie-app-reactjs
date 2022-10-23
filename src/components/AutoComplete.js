import Skeleton from "react-loading-skeleton";
import { useMovieContext } from "../context/MovieContext";

const AutoComplete = ({ apiImg, isTyping }) => {
  const { searched } = useMovieContext();
  console.log("autocomplete");

  return (
    <>
      {isTyping && (
        <div className="autocomplete">
          {searched.map((search) => (
            <div key={search.id} className="searched-list">
              <img src={apiImg + search.poster_path} alt="" />
              <div>
                <div>{search.title}</div>
                <div>
                  {search.release_date && search.release_date.substring(0, 4)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AutoComplete;
