const apiKey = process.env.REACT_APP_ACCESS_KEY;
const baseUrl = "https://api.themoviedb.org/3/";

const allURLs = {
  apiKey: apiKey,
  baseUrl: baseUrl,
  popular: `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US`,
  topRated: `${baseUrl}movie/top_rated?api_key=${apiKey}&language=en-US`,

  series: `${baseUrl}tv/popular?api_key=${apiKey}&language=en-US}`,
  search: `${baseUrl}search/movie?api_key=${apiKey}&language=en-US`,
};

export default allURLs;
