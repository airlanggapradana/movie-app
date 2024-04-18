import Image from "next/image";
import React from "react";

const style = {
  title: "font-medium text-base text-neutral-500",
};

const CardContainer = ({ data }) => {
  function minutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours + " hours " + remainingMinutes + " minutes";
  }
  function addCommasToNumber(number) {
    if (typeof number === "undefined" || number === null) {
      return "0"; // or any other default value you prefer
    }
    const numberWithCommas = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "$" + numberWithCommas;
  }

  return (
    <div className="max-w-full flex flex-col md:flex-row gap-5 border-2 rounded-xl p-4 border-neutral-500">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${data.poster_path}`}
        width={400}
        height={400}
        alt="..."
        className="min-h-64 object-cover object-center rounded-xl drop-shadow-md"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl text-neutral-700 mb-3">
          {data.title}
        </h1>
        <div className="flex items-center gap-3 mb-5">
          <li className={style.title}>{data.release_date}</li>
          <li className={style.title}>{minutesToHours(data.runtime)}</li>
        </div>

        <div className="space-y-3 mb-7">
          <h1 className="font-normal text-base text-neutral-500 italic">
            {data.tagline}
          </h1>
          <h1 className="font-bold text-2xl text-neutral-600">Overview</h1>
          <p className="font-normal text-base text-neutral-500 tracking-wide leading-relaxed max-w-md md:max-w-2xl">
            {data.overview}
          </p>
        </div>

        <div className="w-full p-4 border-2 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0">
            <div className="space-y-2 md:border-r-2 border-neutral-300">
              <h2 className="font-semibold text-lg text-neutral-400">Budget</h2>
              <h1 className="font-bold text-2xl text-neutral-500">
                {addCommasToNumber(data.budget)}
              </h1>
            </div>
            <div className="space-y-2 md:ml-2 md:border-r-2 border-neutral-300">
              <h2 className="font-semibold text-lg text-neutral-400">
                Revenue
              </h2>
              <h1 className="font-bold text-2xl text-neutral-500">
                {addCommasToNumber(data.revenue)}
              </h1>
            </div>
            <div className="space-y-2 md:ml-2">
              <h2 className="font-semibold text-lg text-neutral-400">
                Overall Rate
              </h2>
              <h1 className="font-bold text-2xl text-neutral-500">
                {`${Math.round(data.vote_average)}/10`}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
