import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import hc1 from "../../assets/homeCollageImage/hc1.jpg";
import hc2 from "../../assets/homeCollageImage/hc2.jpg";
import hc3 from "../../assets/homeCollageImage/hc3.jpg";
import hc4 from "../../assets/homeCollageImage/hc4.jpg";
import hc5 from "../../assets/homeCollageImage/hc5.jpg";
import hc6 from "../../assets/homeCollageImage/hc6.jpg";
import hc7 from "../../assets/homeCollageImage/hc7.jpg";
import hc8 from "../../assets/homeCollageImage/hc8.jpg";
import hc9 from "../../assets/homeCollageImage/hc9.jpg";
import hc10 from "../../assets/homeCollageImage/hc10.png";
import hc11 from "../../assets/homeCollageImage/hc11.jpg";
import hc12 from "../../assets/homeCollageImage/hc12.jpg";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="min-h-screen font-suse">
      <h2 className="text-[#0B2D71] text-center font-bold py-10 text-3xl">
        who we do
      </h2>
      <h1 className="md:text-8xl text-5xl font-extrabold text-[#0B2D71] max-w-screen-md mx-auto text-center">
        Transforming Vision into Reality
      </h1>
      <h5 className="text-2xl max-w-screen-md mx-auto text-center py-14 px-7">
        Explore how our strategic approach and expertise bring innovative
        projects to life, delivering exceptional results and driving success.
      </h5>

      <Link to={'/projects'} className="bg-transparent hover:bg-[#009DD9] text-[#009DD9] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex justify-center items-center max-w-xs mx-auto gap-3 cursor-pointer">
        <ArrowRightIcon className="h-5 w-5" />
        <p className="p">Discover our projects.</p>
      </Link>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto py-10 px-7">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc5}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc6}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc12}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc7}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc8}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc10}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc11}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc3}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
              src={hc9}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
