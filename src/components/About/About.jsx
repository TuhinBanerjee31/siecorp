import React from "react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import "./About.css";

const About = () => {

  return (
    <div className="bg-[#07478F] min-h-screen font-suse">
      <h2 className="text-white text-center py-10 text-3xl">who we are</h2>

      <div className="moving-title py-10 px-5 flex flex-col">
        <h1 className="md:text-9xl text-5xl font-bold text-[#009DD9] md:self-end self-center animate-bounce animate-infinite animate-duration-[3000ms]">precision</h1>
        <h1 className="md:text-9xl text-5xl font-bold text-[#0066B2] self-center animate-bounce animate-infinite animate-duration-[3000ms]">performance</h1>
        <h1 className="md:text-9xl text-5xl font-bold text-[#0B2D71] md:self-start self-center animate-bounce animate-infinite animate-duration-[3000ms]">progress</h1>
      </div>

      <div className="about-info py-14 flex flex-col items-center gap-10">
        <h2 className="md:text-7xl text-4xl md:max-w-screen-2xl max-w-screen-lg px-5 font-light text-center tracking-wide text-white">We believe that humanity can solve any challenge. <span className="opacity-40">That our greatest resource is our people. And that responsibility, trust and integrity will help us drive a prosperous future.</span></h2>
        <div className="bg-transparent hover:bg-[#009DD9] text-[#009DD9] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-4 cursor-pointer">
            <ArrowRightIcon className='h-5 w-5' /> 
            <p className= "p">discover who we are</p>
        </div>
      </div>
    </div>
  );
};

export default About;
