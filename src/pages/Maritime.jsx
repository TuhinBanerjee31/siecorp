import React from "react";
import Nav from "../components/Nav/Nav";
import mh1 from "../assets/mh1.jpg";
import mh2 from "../assets/mh2.jpg";
import mh3 from "../assets/mh3.jpg";
import mh4 from "../assets/mh4.jpg";
import mh5 from "../assets/mh5.jpg";
import mh6 from "../assets/mh6.jpg";
import mh7 from "../assets/mh7.jpg";
import mh8 from "../assets/mh8.jpg";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

const Maritime = () => {
  return (
    <div className="font-suse">
      <Nav bgImage="m-header-image" />

      <div className="w-full bg-white absolute bottom-0">
        <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-m-header-image text-center">
          maritime
        </h1>
        <h5 className="max-w-2xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
          Accelerating progress to power our world today and build the lower
          carbon energy system of the future.
        </h5>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- First Image (Spans 2 columns on large screens) --> */}
          <div className="col-span-1 lg:col-span-2">
            <img
              src={mh4}
              alt="Person with Color Display"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* <!-- Second Image --> */}
          <div className="col-span-1">
            <img
              src={mh2}
              alt="Control Room2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* <!-- Third Image --> */}
          <div className="col-span-1">
            <img
              src={mh5}
              alt="Touch Interface"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* <!-- Fourth Image --> */}
          <div className="col-span-1">
            <img
              src={mh1}
              alt="Engineer at Work"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* <!-- Fifth Image --> */}
          <div className="col-span-1">
            <img
              src={mh6}
              alt="Engineer at Work"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* <!-- sixth Image --> */}
          <div className="col-span-1">
            <img
              src={mh7}
              alt="Engineer at Work"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* <!-- seventh Image --> */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src={mh3}
              alt="Person at Computer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#003653] py-32 px-8">
        <h1 className="lg:text-8xl text-6xl font-extrabold text-center text-[#00B2BD] max-w-screen-xl mx-auto">maritime for our growing world relies on technology</h1>
        <h4 className="text-2xl text-white text-center pt-10">We aim to scale affordable, innovative technology solutions to help support a resilient energy system.</h4>
      </div>

      <div className="bg-[#00708C] min-h-screen flex flex-col justify-center items-center py-20 px-8">
        <h4 className="text-white font-bold text-2xl text-center tracking-wide">designing the facilities and operations of tomorrow</h4>
        <h2 className="text-white text-6xl font-bold text-center max-w-screen-lg mx-auto py-10">working smarter and safer with robotics</h2>
        <h4 className="text-2xl text-white text-center pt-4 max-w-screen-md mx-auto">Robots, drones, machine learning, artificial intelligence and beyond. Digital technologies are helping us integrate data, reduce costs and enhance safety.</h4>

        <div className="bg-transparent hover:bg-[#009DD9] text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded flex items-center gap-4 cursor-pointer my-5">
            <ArrowRightIcon className='h-5 w-5' /> 
            <p className= "p">discover more about it</p>
        </div>

        <img src={mh8} className="lg:max-w-[60%] max-w-[85%] rounded-2xl" />
      </div>
    </div>
  );
};

export default Maritime;
