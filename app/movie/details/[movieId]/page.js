"use client";
import { getMovieDetail } from "@/api";
import CardContainer from "@/components/CardContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MovieDetails({ params }) {
  const router = useRouter();
  const [getDetail, setGetDetail] = useState([]);

  useEffect(() => {
    getMovieDetail(params.movieId).then((hasil) => {
      setGetDetail(hasil);
    });
  }, []);

  //   console.log({ detailFilm: getDetail });

  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="container">
        <div className="w-full px-5 pt-16 pb-14">
          <button
            type="button"
            onClick={(e) => router.back()}
            className="w-24 h-12 border-2 rounded-lg mb-5"
          >
            Back
          </button>
          <CardContainer data={getDetail} />
        </div>
      </section>
    </main>
  );
}
