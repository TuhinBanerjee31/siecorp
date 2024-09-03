import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import p1 from "../../assets/cth-1.jpg";
import p3 from "../../assets/cth-2.jpg";
import p4 from "../../assets/cth-3.jpg";
import p5 from "../../assets/cth-4.jpg";
import v1 from "../../assets/construction1.jpg";
import v2 from "../../assets/ct-6.jpg";
import v3 from "../../assets/ct-3.jpg";
import v4 from "../../assets/ct-2.jpg";
import v5 from "../../assets/ct-1.jpg";
import v6 from "../../assets/ct-7.png";
import v7 from "../../assets/ct-8.jpg";
import p2 from "../../assets/ct-5.jpg";

const OurWork = () => {
  return (
    <div className="min-h-screen font-suse">
      <h2 className="text-[#0B2D71] text-center font-bold py-10 text-3xl">
        who we do
      </h2>
      <h1 className="md:text-8xl text-5xl font-extrabold text-[#0B2D71] max-w-screen-md mx-auto text-center">
        energy that fuels the world
      </h1>
      <h5 className="text-2xl max-w-screen-md mx-auto text-center py-14 px-7">
        We’re working to deliver the energy needed today. To lower the carbon
        intensity of our operations. And to build the lower carbon energy system
        of tomorrow.
      </h5>

      <div className="bg-transparent hover:bg-[#009DD9] text-[#009DD9] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex justify-center items-center max-w-xs mx-auto gap-3 cursor-pointer">
        <ArrowRightIcon className="h-5 w-5" />
        <p className="p">see our solutions</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto py-10 px-7">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={p1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={v1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={v2}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={p2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={p3}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={v3}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={p5}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={v4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={v6}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={v7}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={p4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:animate-jump animate-infinite animate-ease-in-out cursor-pointer animate-duration-[5000ms]"
              src={v5}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
