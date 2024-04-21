"use client";
import React from "react";
import { getTVDetails } from "@/api";
import { useEffect, useState } from "react";
import CardContainer from "@/components/CardContainer";
import { RiArrowLeftLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const [getTVDetail, setTVDetail] = useState([]);
  const seriesCredits = getTVDetail.credits;
  const router = useRouter();

  useEffect(() => {
    getTVDetails(params.seriesId).then((hasil) => {
      setTVDetail(hasil);
    });
  }, [params.seriesId]);

  // console.log({ details: getTVDetail });

  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="container">
        <div className="w-full px-5 pt-16 pb-14">
          <button
            type="button"
            onClick={(e) => router.back()}
            className="w-14 h-14 border-2 rounded-lg mb-5 flex items-center justify-center"
          >
            <RiArrowLeftLine size={25} className="fill-neutral-500" />
          </button>
          {seriesCredits && (
            <CardContainer
              data={getTVDetail}
              casts={seriesCredits.cast}
              key={getTVDetail.id}
            />
          )}
        </div>
      </section>
    </main>
  );
}
