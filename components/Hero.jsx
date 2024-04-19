"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "@/api";
import Link from "next/link";

const Hero = () => {
  const [PopularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
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

      <div className="flex flex-wrap gap-5 justify-center md:justify-between">
        {PopularMovie.map((movie, index) => (
          <Link
            href={`/movie/details/${movie.id}`}
            key={index}
            className="min-h-full hover:scale-105 transition-all duration-200 ease-out"
          >
            <MovieCard movie={movie} key={index} />
          </Link>
        ))}
      </div>
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
        <h1 className="font-bold text-lg text-neutral-700">{movie.title}</h1>
        <h2 className="font-semibold text-base text-neutral-500">
          {movie.release_date}
        </h2>
        <p className="font-medium text-base text-neutral-400">
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Hero;
