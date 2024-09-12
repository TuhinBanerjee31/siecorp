import React from "react";
import extraCardImage from "../../assets/extraCardImage.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Extra = () => {
  return (
    <div className="min-h-screen mt-32 font-suse px-5">
      <h1 className="md:text-9xl text-7xl font-bold text-[#009DD9] max-w-screen-lg mx-auto mb-10 sticky top-0 z-0">
        know little more about us
      </h1>

      <div className="info-card min-h-96 max-w-screen-2xl bg-[#009DD9] mx-auto mt-10 relative rounded-md z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
        <div className="content-left flex flex-col gap-5">
          <div>
            <h2 className="md:text-7xl text-4xl font-bold text-[#0B2D71] md:max-w-[90%] py-5">
              Our Core Values
            </h2>
            <h5 className="md:text-2xl text-[#0B2D71] md:max-w-[90%] font-semibold border-b-4 rounded-b-md border-[#0B2D71]">
              Explore the principles that drive our commitment to excellence,
              integrity, and innovation.
            </h5>
          </div>

          <div>
            <h2 className="md:text-7xl text-4xl font-bold text-[#0B2D71] md:max-w-[90%] py-5">
              Our Brand
            </h2>
            <h5 className="md:text-2xl text-[#0B2D71] md:max-w-[90%] font-semibold border-b-4 rounded-b-md border-[#0B2D71]">
              Learn how our values, vision, and commitment shape the essence of
              who we are.
            </h5>
          </div>

          <div>
            <h2 className="md:text-7xl text-4xl font-bold text-[#0B2D71] md:max-w-[90%] py-5">
              Our Leadership
            </h2>
            <h5 className="md:text-2xl text-[#0B2D71] md:max-w-[90%] font-semibold border-b-4 rounded-b-md border-[#0B2D71]">
              Get to know the visionaries guiding our company with expertise and
              dedication.
            </h5>
          </div>
        </div>

        <div className="content-right w-[80%]">
          <img
            src={extraCardImage}
            alt="card-image"
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Extra;
