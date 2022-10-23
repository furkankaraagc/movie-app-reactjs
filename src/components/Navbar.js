import { useMovieContext } from "../context/MovieContext";
import { useRef } from "react";
import AutoComplete from "./AutoComplete";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ fetchMovies, apiImg }) => {
  const { setSearchKey, searchKey } = useMovieContext();
  const inputRef = useRef();

  // if search input has space at the beginning :dont search anything
  const isTyping = searchKey.replace(/\s+/, "");

  const onSubmit = (e) => {
    e.preventDefault();

    fetchMovies();

    inputRef.current.value = "";
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearchKey(inputRef.current.value);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2>MovieDB</h2>
        <form onSubmit={onSubmit}>
          <input
            ref={inputRef}
            onChange={onChange}
            placeholder="Search"
            type="text"
          />
          <AutoComplete isTyping={isTyping} apiImg={apiImg} />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
        <div className="watchlist">
          <h3>Watchlist</h3>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
