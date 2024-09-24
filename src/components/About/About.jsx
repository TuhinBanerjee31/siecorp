import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#07478F] min-h-screen font-suse">
      <h2 className="text-white text-center py-10 text-3xl">Who we are</h2>

      <div className="moving-title py-10 px-5 flex flex-col">
        <h1 className="lg:text-[10rem] text-5xl font-bold text-[#009DD9] md:self-end self-center">
          precision
        </h1>
        <h1 className="lg:text-[10rem] text-5xl font-bold text-[#0066B2] self-center">
          performance
        </h1>
        <h1 className="lg:text-[10rem] text-5xl font-bold text-[#0B2D71] md:self-start self-center">
          progress
        </h1>
      </div>

      <div className="about-info py-14 flex flex-col items-center gap-10">
        <h2 className="md:text-6xl text-4xl md:max-w-screen-2xl max-w-screen-lg px-5 font-light text-center tracking-wide text-white">
          At SIECORP, our tagline embodies our commitment to excellence. We
          focus on precision to ensure every detail is meticulously handled,
          deliver performance that sets industry standards, and drive progress
          through innovative solutions. This approach guarantees exceptional
          results and ongoing advancement in every project we undertake.
        </h2>
        <Link to={'/why-us'} className="bg-transparent hover:bg-[#009DD9] text-[#009DD9] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-4 cursor-pointer">
          <ArrowRightIcon className="h-5 w-5" />
          <p className="p">Discover why us</p>
        </Link>
      </div>
    </div>
  );
};

export default About;
