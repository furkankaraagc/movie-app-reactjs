import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [topRated, setTopRated] = useState("");
  const [popular, setPopular] = useState("");
  const [searched, setSearched] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(0);

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
    isLoading,
    setIsLoading,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useMovieContext = () => useContext(Context);

export default Provider;
