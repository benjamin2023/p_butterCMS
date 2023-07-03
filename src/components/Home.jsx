import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/ben.jpg';
import { Link } from "react-scroll"; 
import Resume from "../assets/ABEGUNDE_BEN.pdf";

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-7 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-4xl px-7 font-bold text-white">
          Abegunde Benjamin
        </h2>
        <p className="text-gray-500 py-6 px-7 max-w-md">
          A frontend developer with 1 year of experience designing and building responsive web design for diverse organisations and individuals. Proficient with HTML, CSS, JavaScript libraries
          and frameworks, with extensive knowledge of user psychology. I'm also a Data Analyst with 6months experience analyzing data for organizations.
        
        </p>
        <div className="flex flex-row">
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-7 py-3 my-2 mx-7 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
          <a href
            ={Resume} download
            smooth
            duration={500}
            className="group text-white w-fit px-7 py-3 my-2 mx-7 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-full mx-auto w-64 h-64 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;