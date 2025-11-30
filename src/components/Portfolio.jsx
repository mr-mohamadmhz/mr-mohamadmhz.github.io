import React from "react";
import Avaex from "../assets/portfolio/avaex.png";
import Larisa from "../assets/portfolio/larisa.svg";
import Logestic from "../assets/portfolio/logestic.svg";
import Metanext from "../assets/portfolio/metanext.webp";
import Mzi from "../assets/portfolio/mzi.svg";
import Fandogh from "../assets/portfolio/logo-fandogh.svg";
import arazScarf from "../assets/portfolio/logo-arazScarf.svg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Metanext,
      href: "https://metanext.biz/",
      description:
        "Metanext provides cutting-edge solutions for businesses, combining advanced technology and strategic consulting to foster growth and innovation.",
    },
    {
      id: 2,
      src: arazScarf,
      href: "https://arazscarf.com/",
      description:
        "Araz Scarf provides a wide range of elegant and fashionable scarves, perfect for every occasion and personal style.",
    },
    {
      id: 3,
      src: Mzi,
      href: "https://mzilogistics.ir/fa",
      description:
        "Mzi is a software development company delivering innovative solutions, custom applications, and transformative digital strategies for businesses.",
    },
    {
      id: 4,
      src: Logestic,
      href: "https://railcargo.ir/",
      description:
        "Logestic focuses on delivering efficient and scalable logistics and supply chain solutions to help businesses streamline operations.",
    },
    {
      id: 5,
      src: Avaex,
      href: "https://avaex.ir/",
      description:
        "Avaex offers reliable postal and logistics services, ensuring fast and secure delivery solutions tailored to client needs.",
    },
    {
      id: 6,
      src: Fandogh,
      href: "https://fandoq.shop/",
      description:
        "Fandogh is an online store featuring a curated selection of unique, high-quality products for an enjoyable shopping experience.",
    },

    {
      id: 7,
      src: Larisa,
      href: "",
      description:
        "Larisa specializes in offering high-quality, stylish clothing for all seasons, blending modern designs with premium craftsmanship.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-auto py-5 text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {portfolios.map(({ id, src, href, description }) => (
            <div
              key={id}
              className="relative p-2 border-gray-100 rounded-lg shadow-md shadow-gray-600"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={src}
                  alt={`Portfolio ${id}`}
                  className="rounded-md object-fill duration-200 hover:scale-105 bg-gradient-to-t from-white h-[15rem] w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center text-justify text-white transition-transform duration-500 translate-y-full bg-black bg-opacity-70 group-hover:translate-y-0">
                  <p className="p-4">{description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={href || "#"}
                  target={href ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className={`w-full rounded-md my-3 py-3 duration-200 hover:scale-105 bg-gradient-to-b from-cyan-500 to-blue-500 font-bold text-1xl text-center inline-block ${
                    !href ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {href ? "Go to site" : "Coming Soon"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
