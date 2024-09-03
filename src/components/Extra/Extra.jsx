import React from "react";
import cardImage from "../../assets/card-image.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Extra = () => {
  return (
    <div className="min-h-screen mt-32 font-suse px-5">
      <h1 className="md:text-9xl text-7xl font-bold text-[#009DD9] max-w-screen-lg mx-auto mb-10 sticky top-0 z-0">
        know little more about us
      </h1>

      <div className="info-card min-h-96 max-w-screen-2xl bg-[#009DD9] mx-auto mt-10 relative rounded-md z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
        <div className="content-left">
          <h2 className="md:text-7xl text-4xl font-bold text-[#0B2D71] md:max-w-[90%] py-10">
            carbon capture and storage
          </h2>
          <h5 className="md:text-2xl text-white md:max-w-[90%]">
            We’re targeting 25 million tonnes of CO2 per year in offsets
            business and CCUS by the end of this decade. Captured carbon
            emissions are safely stored several thousand feet below ground.
          </h5>
          <div className="bg-transparent hover:bg-[#0B2D71] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
            <ArrowRightIcon className="h-5 w-5" />
            <p className="p">learn more about us</p>
          </div>
        </div>

        <div className="content-right w-3/5">
          <img src={cardImage} alt="card-image" className="md:h-auto h-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default Extra;
