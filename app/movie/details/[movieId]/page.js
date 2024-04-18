"use client";
import { getMovieDetail, getMovieCast } from "@/api";
import CardContainer from "@/components/CardContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RiArrowLeftLine } from "@remixicon/react";

export default function MovieDetails({ params }) {
  const router = useRouter();
  const [getDetail, setGetDetail] = useState([]);
  const [getCast, setGetCast] = useState({});

  useEffect(() => {
    getMovieDetail(params.movieId).then((hasil) => {
      setGetDetail(hasil);
    });

    getMovieCast(params.movieId).then((result) => {
      setGetCast(result);
    });
  }, []);

  // console.log({ detailFilm: getDetail });
  // console.log(getCast.cast);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="container">
        <div className="w-full px-5 pt-16 pb-14">
          <button
            type="button"
            onClick={(e) => router.back()}
            className="w-16 h-16 border-2 rounded-lg mb-5 flex items-center justify-center"
          >
            <RiArrowLeftLine size={30} className="fill-neutral-500" />
          </button>
          <CardContainer data={getDetail} casts={getCast.cast} />
        </div>
      </section>
    </main>
  );
}
