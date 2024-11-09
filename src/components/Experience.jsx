import React from "react";

const Experience = () => {
    return (
        <div
            name="experience"
            className="h-auto py-5 w-full bg-gradient-to-b from-gray-800  to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto  felx-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="font-bold text-4xl inline border-b-4 border-gray-500"

                    >Experience</p>
                </div>
                <p className="text-xl mt-20 flex flex-col text-justify">
                    <strong> Frontend developer | Weton |{' '}
                        <a className='text-blue-400' href='https://metanext.biz/' target='_blank'>
                            https://metanext.biz/
                        </a> | 2023 - 2024</strong>
                    I worked as a front-end developer at Weton, responsible for the HRM section of an integrated system.
                    <ul className='text-base'>
                        <li> Developed, maintained, and troubleshot HRM software solutions.</li>
                        <li> Collaborated with cross-functional teams to define requirements and deliverables.</li>
                        <li> Conducted system tests and prepared project documentation.</li>
                        <li> Provided technical support and training to end-users.</li>
                        <li> Ensured compliance with quality standards and participated in code reviews.</li>
                    </ul>
                </p>
                <br/>
                <p className="text-xl flex flex-col text-justify">
                    <strong>Frontend developer | Larisa |{' '}
                        <a className='text-blue-400' href='https://web.larisapooshak.com/' target='_blank'>
                            https://web.larisapooshak.com/
                        </a> | 2023 - 2024</strong>
                    <span>
                      As a front-end developer, I collaborated with the team to build and develop the Larisa website . Notably, we
                      utilized NextJS as our framework and Material-UI (MUI) to create a seamless user experience.</span>
                </p>
            </div>
        </div>
    );
};

export default Experience;
