import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "skills",
  },
  {
    id: 5,
    link: "contact",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center fixed px-5 bg-black w-full h-20 ">
      <div>
        <h1 className="text-5xl font-greatvibes text-white">mohammad hosein</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-gray-500 px-4 cursor-pointer hover:scale-105 font-medium capitalize duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 z-10 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex md:hidden flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" py-6 px-4 text-4xl cursor-pointer hover:scale-105 capitalize"
            >
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
