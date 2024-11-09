import { v4 as uuidv4 } from 'uuid';
import css from "../assets/css.png";
import html from "../assets/html.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import AntDesign from "../assets/AntDesign.png";
import Mui from "../assets/Mui.png";
import Typescript from "../assets/Typescript.png";

import React from "react";

const Skills = () => {

    const techs = [
        {
            id: uuidv4(),
            src: Typescript,
            title: "Typescript",
            style: "shadow-blue-400",
            max: 85
        },
        {
            id: uuidv4(),
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500",
            max: 75
        },
        {
            id: uuidv4(),
            src: react,
            title: "ReactJS",
            style: "shadow-blue-400",
            max: 80
        },
        {
            id: uuidv4(),
            src: nextjs,
            title: "NextJS",
            style: "shadow-white",
            max: 68
        },
        {
            id: uuidv4(),
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
            max: 98
        },
        {
            id: uuidv4(),
            src: github,
            title: "Github",
            style: "shadow-gray-400",
            max: 75
        },
        {
            id: uuidv4(),
            src: AntDesign,
            title: "Ant Design",
            style: "shadow-red-700",
            max: 85
        },
        {
            id: uuidv4(),
            src: Mui,
            title: "Mui",
            style: "shadow-blue-800",
            max: 85
        },
        {
            id: uuidv4(),
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
            max: 95
        },
        {
            id: uuidv4(),
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
            max: 90
        },
    ];

    return (
        <div
            name="skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-5 text-white"
        >
            <div className="max-w-screen-lg sm:p-4 p-1 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Skills & Abilities
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 text-center">
                    {techs.map(({id, src, title, max, style}) => (
                        <div
                            key={id}
                            className={
                                "duration-200 hover:scale-105 shadow-md rounded-lg p-2 border-gray-100" +
                                " " +
                                style
                            }
                        >
                            <img src={src} alt="" className="w-20 mx-auto"/>
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

export default Skills;
