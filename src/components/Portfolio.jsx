import Metanext from "../assets/portfolio/metanext.webp";
import Larisa from "../assets/portfolio/larisa.svg";
import Mzi from "../assets/portfolio/mzi.svg";
import Logestic from "../assets/portfolio/logestic.svg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import usestate from "../assets/portfolio/usestate.jpg";

import React from "react";

const portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Metanext,
    },
    {
      id: 2,
      src: Larisa,
    },
    {
      id: 3,
      src: Mzi,
    },
    {
      id: 4,
      src: Logestic,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-auto py-5 text-white"
    >
      <div className="max-w-screen-lg sm:p-4 p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg p-2 border-gray-100 "
            >
              <img
                src={src}
                alt={src}
                className="rounded-md object-fillduration-200 hover:scale-105 bg-gradient-to-t from-white h-[15rem] w-full"
              />
              <div className="felx items-center justify-center">
                <button disabled={true} className=" w-full rounded-md my-3 py-3 duration-200 hover:scale-105 bg-gradient-to-b from-cyan-500 to-blue-500 font-bold  text-1xl">
                  Go to git
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
