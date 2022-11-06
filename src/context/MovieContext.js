import { createContext, useContext, useState, useRef } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [searched, setSearched] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);
  const [watchlistId, setWatchlistId] = useState([]);
  const [watchListData, setListData] = useState([]);
  const [detailId, setDetailId] = useState("");
  const [moreDetail, setMoreDetail] = useState("");
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const inputFocus = useRef("");

  const apiImg = "https://image.tmdb.org/t/p/w500/";

  const data = {
    popular,
    setPopular,
    searchKey,
    setSearchKey,
    setSearched,
    searched,
    page,
    setPage,
    topRated,
    setTopRated,
    watchlistId,
    setWatchlistId,
    watchListData,
    setListData,
    detailId,
    setDetailId,
    moreDetail,
    setMoreDetail,
    series,
    setSeries,
    inputFocus,
    apiImg,
    isLoading,
    setIsLoading,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useMovieContext = () => useContext(Context);

export default Provider;
