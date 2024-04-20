import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/search/multi?query=${q}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};

export const getMovieDetail = async (id) => {
  const detail = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return detail.data;
};

export const getMovieCast = async (id) => {
  const cast = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return cast.data;
};

// TV Series

export const getTVSeries = async () => {
  const series = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return series.data.results;
};

export const getTVDetails = async (seriesId) => {
  const tvDetail = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/tv/${seriesId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=credits`
  );
  return tvDetail.data;
};
