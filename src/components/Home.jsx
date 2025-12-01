import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import heroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl font-bold text-white sm:text-7xl">
              I'm a Frontend Developer
            </h2>
            <p className="max-w-md py-4 text-gray-500">
              I'm a frontend developer with over a year and a half of work
              experience. I have moderate experience and skills in all stages of
              web development and am fully familiar with the user interface
              process
            </p>
            <p className="max-w-md py-4 text-gray-500">
              <strong className="block !font-bold text-white">EDUCATION</strong>
              Bachelor of computer | Bardaskan azad university
            </p>
            <div>
              <button className="flex items-center px-6 py-3 my-3 text-white rounded-md cursor-pointer group bg-gradient-to-r from-cyan-500 to-blue-500">
                <Link to="portfolio" smooth duration={500}>
                  Portfolio
                </Link>
                <span className="duration-300 group-hover:rotate-90">
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
