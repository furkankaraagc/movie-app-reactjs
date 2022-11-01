import { useMovieContext } from "../context/MovieContext";
import { useRef } from "react";
import AutoComplete from "./AutoComplete";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const Navbar = ({ fetchMovies, apiImg }) => {
  const { setSearchKey, searchKey, watchlistId, inputFocus } =
    useMovieContext();
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
  const onBlur = (e) => {
    setTimeout(() => {
      inputFocus.current && inputFocus.current.classList.add("focus-out");
    }, 100);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to="/">
          <h2>MovieDB</h2>
        </NavLink>
        <form onSubmit={onSubmit}>
          <input
            value={searchKey}
            ref={inputRef}
            onChange={onChange}
            // onBlur={onBlur}
            // onFocus={(e) =>
            //   inputFocus.current &&
            //   inputFocus.current.classList.remove("focus-out")
            // }
            placeholder="Search"
            type="text"
          />
          <AutoComplete isTyping={isTyping} apiImg={apiImg} />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
        <div className="watchlist">
          <NavLink to="/watchList">
            <h3>Watchlist</h3>
          </NavLink>
          <div className="count-watchlist">
            <h3>{watchlistId.length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
