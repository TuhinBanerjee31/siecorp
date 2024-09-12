import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./Hero.css";
import { Carousel } from "@material-tailwind/react";

const Hero = () => {
  return (
    <>
      <Carousel
        autoplay
        loop
        prevArrow={false}
        nextArrow={false}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative">
          <Nav bgImage={"card1-image"} />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Together, we build success
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                Discover how SIECORP empowers clients worldwide on the journey
                to success through Innovative solutions, execptional service,
                and a team of dedicated professionals.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about anchor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Nav bgImage={"card2-image"} />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Proven Excellence in Infrastructure
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                Discover how SIECORP excels in delivering high-quality
                infrastructure projects, combining innovation with expertise to
                achieve superior results and meet the highest strandards.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about our infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Nav bgImage={"card3-image"} />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Leading the way in Sustainable Energy Transformation
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                At SICORP,we are experts in renewable energy and are dedicated to transforming how sustainable energy is utilized to drive a lower carbon future.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about our energy solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Nav bgImage={"card4-image"} />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Navigating excellence in the Maritime Industry
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                Discover how SIECORP delivers top-tier maritime solutions with precision and innovation, setting new standards in the industry.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about our maritime</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
