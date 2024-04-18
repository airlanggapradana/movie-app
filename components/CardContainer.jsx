import Image from "next/image";
import React from "react";

const style = {
  title: "font-medium text-base text-neutral-500",
};

const CardContainer = ({ data, casts }) => {
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
    <div className="w-full flex flex-col md:flex-row gap-5 border-2 rounded-xl p-4 border-neutral-500">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${data.poster_path}`}
        width={500}
        height={500}
        alt="..."
        className="min-h-full object-cover object-center rounded-xl drop-shadow-md"
      />
      <div className="flex flex-col items-start w-full overflow-hidden">
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
          <p className="font-normal text-base text-neutral-500 tracking-wide leading-relaxed max-w-full">
            {data.overview}
          </p>
        </div>

        <div className="w-full p-4 border-2 rounded-lg border-teal-500 mb-3">
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

        <div className="w-full max-h-[21rem] p-4 overflow-hidden border-2 border-teal-500 rounded-lg">
          {/* pp cast */}

          <div className="w-full h-full overflow-auto flex flex-wrap items-start justify-center gap-5">
            {casts &&
              Array.isArray(casts) &&
              casts
                .filter((cast, index) => index <= 9)
                .map((cast) => (
                  <div className="max-w-[12rem]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${cast.profile_path}`}
                      width={128}
                      height={128}
                      alt="..."
                      className="h-[15rem] w-full object-cover object-center rounded-lg shadow-md"
                    />

                    <div className="space-y-1 mt-2">
                      <h1 className="font-medium text-base text-neutral-700">
                        {cast.name}
                      </h1>
                      <h2 className="font-normal text-sm text-neutral-500">
                        {cast.character}
                      </h2>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
