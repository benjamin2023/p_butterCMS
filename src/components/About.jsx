import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-5 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[2000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About Me
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[2000px] w-full grid sm:grid-cols-2 gap-8 px-3">
            <div className="sm:text-right text-2xl font-bold">
              <p>
                Hi, I'm Benjamin, and graduated from the Federal Polytechnic, Ilaro, Ogun state, Nigeria with a degree in
                Computer Science. My interests are in Front-End Engineering and Data Analysis, and i'm passionate about crafting
                interactive and visually stunning websites that seamlessly blend form and function.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;