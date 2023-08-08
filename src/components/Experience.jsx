import css from "../assets/css.png";
import html from "../assets/html.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import heroImage from "../assets/heroImage.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

import React from "react";

const Experience = () => {

    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
        max:80
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
        max:75
      },
      {
        id: 3,
        src: javascript,
        title: "Javascript",
        style: "shadow-yellow-500",
        max:60
      },
      {
        id: 4,
        src: react,
        title: "ReactJS",
        style: "shadow-blue-600",
        max:60
      },
      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
        max:80
      },
      {
        id: 6,
        src: github,
        title: "Github",
        style: "shadow-gray-400",
        max:70
      },
    ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-5 text-white"
    >
      <div className="max-w-screen-lg sm:p-4 p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 text-center">
          {techs.map(({ id, src, title, max, style }) => (
            <div
              key={id}
              className={
                "duration-200 hover:scale-105 shadow-md rounded-lg p-2 border-gray-100" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <input
                type="range"
                min="0"
                max="100"
                value={max}
                className="w-full mt-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
