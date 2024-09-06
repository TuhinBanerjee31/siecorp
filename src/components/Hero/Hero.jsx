import React from "react";
import Nav from "../Nav/Nav";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import "./Hero.css";

const Hero = () => {

  return (
    <div>
      <Nav bgImage= 'ob-header-image' />

      {/* HEADER-CARD */}
      <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
        <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
          <h1 className="text-6xl text-center font-bold p-4">
            seeking solutions using human ingenuity
          </h1>
          <h5 className="mx-auto text-center max-w-lg p-4 tracking-widest">
            How do you help change the global energy system? By combining bold
            thinking with diverse ideas to solve problems.
          </h5>
          <div className="slide_btn flex justify-center p-4 gap-3">
            <ArrowRightIcon style={{ height: "22px", alignSelf: "flex-end" }} />
            <p className="p">discover our solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
