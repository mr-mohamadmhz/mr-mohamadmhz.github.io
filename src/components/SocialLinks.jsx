import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    child: (
      <>
        Linkedin
        <FaLinkedin size={25} />
      </>
    ),
    href: "https://www.linkedin.com/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        Github
        <FaGithub size={25} />
      </>
    ),
    href: "https://github.com/mr-mohamadmhz",
  },
  {
    id: 3,
    child: (
      <>
        Mail
        <HiOutlineMail size={25} />
      </>
    ),
    href: "mailto:mrmohamadmhz@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume
        <BsFillPersonLinesFill size={25} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

const SocialLinks = () => {
  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialLinks;
