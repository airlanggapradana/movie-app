"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie, getTVSeries } from "@/api";
import Link from "next/link";

const Hero = () => {
  const [PopularMovie, setPopularMovie] = useState([]);
  const [TVSeries, setTVSeries] = useState([]);
  const [MultiSearch, setMultipleSearch] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });

    getTVSeries().then((hasil) => {
      setTVSeries(hasil);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      setIsSearching(true);
      const query = await searchMovie(q);
      setMultipleSearch(query.results);
    }
  };

  return (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-4xl text-neutral-700">Movie App</h1>
        <p className="font-medium text-lg text-neutral-500">
          Created using Nextjs14
        </p>
      </div>

      <form className="w-full border-2 border-neutral-400 rounded-lg p-4">
        <input
          onChange={(e) => search(e.target.value)}
          type="search"
          placeholder="Search for a Movie or TV Series..."
          className="w-full outline-none bg-transparent placeholder:text-base text-neutral-700"
        />
      </form>

      {MultiSearch.length !== 0 && (
        <>
          <h1 className="font-bold text-2xl text-neutral-700">
            Hasil Pencarian...
          </h1>
          <div className="flex flex-wrap gap-5 justify-center md:justify-between">
            {MultiSearch?.map(
              (item, index) =>
                item.vote_average !== 0 &&
                (item.media_type === "movie" ? (
                  <Link
                    href={`/movie/details/${item.id}`}
                    key={index}
                    className="min-h-full hover:scale-105 transition-all duration-200 ease-out"
                  >
                    <MovieCard movie={item} key={index} />
                  </Link>
                ) : (
                  <Link
                    href={`/tv/details/${item.id}`}
                    key={index}
                    className="min-h-full hover:scale-105 transition-all duration-200 ease-out"
                  >
                    <MovieCard movie={item} key={index} />
                  </Link>
                ))
            )}
          </div>
        </>
      )}

      {isSearching === false && (
        <>
          <h1 className="font-bold text-2xl text-neutral-700">
            Popular Movies
          </h1>
          <div className="flex flex-wrap gap-5 justify-center md:justify-between border-b-2 pb-9 border-neutral-300">
            {PopularMovie.map(
              (movie, index) =>
                movie.vote_average !== 0 && (
                  <Link
                    href={`/movie/details/${movie.id}`}
                    key={index}
                    className="min-h-full hover:scale-105 transition-all duration-200 ease-out"
                  >
                    <MovieCard movie={movie} key={index} />
                  </Link>
                )
            )}
          </div>

          <h1 className="font-bold text-3xl text-neutral-700">
            Popular TV Series
          </h1>
          <div className="flex flex-wrap gap-5 justify-center md:justify-between">
            {TVSeries.map((series, index) => (
              <Link
                href={`/tv/details/${series.id}`}
                key={index}
                className="min-h-full hover:scale-105 transition-all duration-200 ease-out"
              >
                <MovieCard movie={series} key={index} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-[20rem] h-full p-4 border-2 rounded-xl shadow-md">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${movie.poster_path}`}
        width={500}
        height={500}
        alt="..."
        className="h-[400px] object-cover object-center rounded-lg drop-shadow-md"
      />
      <div className="space-y-2 mt-3">
        <h1 className="font-bold text-lg text-neutral-700">
          {movie.title || movie.name}
        </h1>
        <h2 className="font-semibold text-base text-neutral-500">
          {movie.release_date || movie.first_air_date}
        </h2>
        <p className="font-medium text-base text-neutral-400">
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Hero;
