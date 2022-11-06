import axios from "axios";
import { useEffect } from "react";
import { useMovieContext } from "./context/MovieContext";

const useAxios = (url, set, pages, query) => {
  const {
    popular,
    searchKey,
    detailId,
    searched,
    setSearched,
    setIsLoading,
    setPage,
    page,
    series,
  } = useMovieContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url, {
        params: {
          page: pages,
          query: searchKey,
        },
      });
      if (popular && !searchKey && pages > 1) {
        set([...popular, res.data.results]);
      } else if (detailId) {
        set(res.data);
      } else if (searchKey) {
        set(res.data.results);
        console.log("useEfect");
      } else {
        console.log("else");

        series.length > 20 && setPage(1);
        searched && setSearched([]);
        setIsLoading(false);
        set(res.data.results);
      }
    };
    fetchData();
  }, [page, searchKey]);

  return [];
};

export default useAxios;
