import React, { useRef, useState } from "react";
import "./Hero.css";
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
// import { Carousel } from "flowbite-react";

const Hero = () => {
  return (
    <div className="header">
      <div className="nav_slide"></div>

      <nav>
        <div className="nav_left">
          <p>who we are</p>
          <p>what we do</p>
          <p>sustainability</p>
          <p>investors</p>
        </div>

        <div className="nav_middle">
          <h5>LOGO</h5>
        </div>

        <div className="nav_right">
          <p>newsroom</p>
          <p>careers</p>
          <MagnifyingGlassIcon className="nav-search" />
        </div>
      </nav>

      {/* <div className="h-56 w-1/2 flex m-auto text-center sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <div className="blur_sheet">
            <h1>seeking solutions using human ingenuity</h1>
            <h5>
              How do you help change the global energy system? By combining bold
              thinking with diverse ideas to solve problems.
            </h5>
            <div className="slide_btn">
              <ArrowRightIcon
                style={{ height: "22px", alignSelf: "flex-end" }}
              />
              <p>discover our solutions</p>
            </div>
          </div>
        </Carousel>
      </div> */}

      <div className="slides-container">
        <div className="blur_sheet">
          <h1>seeking solutions using human ingenuity</h1>
          <h5>
            How do you help change the global energy system? By combining bold
            thinking with diverse ideas to solve problems.
          </h5>
          <div className="slide_btn">
            <ArrowRightIcon style={{ height: "22px", alignSelf: "flex-end" }} />
            <p>discover our solutions</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
