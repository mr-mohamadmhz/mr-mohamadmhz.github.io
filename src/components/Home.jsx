import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Frontend Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div>
              <button className="group text-white flex items-center py-3 px-6 my-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                <Link to="portfolio" smooth duration={500}>
                  Portfolio
                </Link>
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex m-0">
            <img
              src={heroImage}
              alt="my profile"
              className="rounded-2xl w-[265px] md:w-[455px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
