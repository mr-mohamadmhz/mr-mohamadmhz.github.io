import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-auto py-5 text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="justify-center w-full h-full max-w-screen-lg p-4 mx-auto felx-col">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <p className="flex flex-col mt-20 text-xl text-justify">
          <strong>
            {" "}
            Frontend developer | Weton |{" "}
            <a
              className="text-blue-400"
              href="https://metanext.biz/"
              target="_blank"
            >
              https://metanext.biz/
            </a>{" "}
            | 2023 - 2024
          </strong>
          I worked as a front-end developer at Weton, responsible for the HRM
          section of an integrated system.
          <ul className="pl-6 text-base list-none list-custom">
            <li>
              {" "}
              Developed, maintained, and troubleshot HRM software solutions.
            </li>
            <li>
              {" "}
              Collaborated with cross-functional teams to define requirements
              and deliverables.
            </li>
            <li> Conducted system tests and prepared project documentation.</li>
            <li> Provided technical support and training to end-users.</li>
            <li>
              {" "}
              Ensured compliance with quality standards and participated in code
              reviews.
            </li>
          </ul>
        </p>
        <br />
        <p className="flex flex-col text-xl text-justify">
          <strong>
            Frontend developer | Larisa |{" "}
            <a
              className="text-blue-400"
              href="https://web.larisapooshak.com/"
              target="_blank"
            >
              https://web.larisapooshak.com/
            </a>{" "}
            | 2023 - 2024
          </strong>
          <span>
            As a front-end developer, I collaborated with the team to build and
            develop the Larisa website . Notably, we utilized NextJS as our
            framework and Material-UI (MUI) to create a seamless user
            experience.
          </span>
        </p>
        <br />
        <p className="flex flex-col text-xl text-justify">
          <strong>
            Frontend Developer | MZI Logistics |{" "}
            <a
              className="text-blue-400 pointer-events-none"
              href="http://mziexpoinstc.ir/"
              target="_blank"
            >
              http://mziexpoinstc.ir/
            </a>{" "}
            | 2024 - Present
          </strong>
          <span>
            As a Frontend Developer at MZI Logistics, I contribute to the
            development of intelligent logistics and navigation solutions.
          </span>
          <ul className="pl-6 text-base list-none list-custom">
            <li>
              Designed and implemented innovative projects using Next.js, React,
              and Vue.js.
            </li>
            <li>
              Leveraged modern UI libraries and tools such as Ant Design (AntD),
              Material-UI (MUI), and TailwindCSS.
            </li>
            <li>
              Collaborated with cross-functional teams to enhance user
              experiences and streamline operations.
            </li>
            <li>
              Ensured seamless integration with backend systems for robust and
              reliable solutions.
            </li>
            <li>
              Participated in project planning, testing, and optimization to
              meet the company’s vision of smart logistics transformation.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Experience;
