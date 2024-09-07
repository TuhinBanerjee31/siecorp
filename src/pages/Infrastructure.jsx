import React from "react";
import Nav from "../components/Nav/Nav";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import i1 from "../assets/i-1.jpg";
import i2 from "../assets/i-2.jpg";
import i3 from "../assets/i-3.jpg";
import ct6 from "../assets/ct-6.jpg";
import m2 from "../assets/m-2.jpg";
import s2 from "../assets/slide2.jpg";
import Footer from "../components/Footer/Footer";

const Infrastructure = () => {
  return (
    <div className="font-suse">
      <Nav bgImage="i-header-image" />

      {/* TRANSPARENT HEADER TEXT */}
      <div className="w-full bg-white absolute bottom-0 pb-8">
        <h1 className="lg:text-[11rem] text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-i-header-image text-center">
          infrastructure
        </h1>
        <h5 className="max-w-2xl mx-auto lg:text-2xl text-lg tracking-wider text-center px-5">
          Our company has a long, robust history that began when a group of
          explorers and merchants established the Pacific Coast Oil Co. on
          September 10, 1879. Since then, our company’s name has changed more
          than once, but we’ve always retained our founders’ spirit, grit,
          innovation and perseverance.
        </h5>
      </div>

      <div className="min-h-screen bg-[#0B2D71] flex flex-col justify-center items-center gap-8 py-14 px-8">
        <h1 className="text-white font-extrabold text-6xl text-center">
          premium way of development
        </h1>
        <h4 className="text-white max-w-screen-md text-center text-xl">
          Take your business to the next level by partnering with one of our
          iconic global brands. In addition to Chevron station franchising, we
          are looking for visionary partners to license the Texaco® or Caltex®
          brands in fuels retailing or lubricants in manufacturing, sales, and
          marketing.
        </h4>

        <div className="lg:h-96 h-56 px-8">
          <img src={i1} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="min-h-20 bg-[#0066B2] lg:w-[60vw] w-[95vw] text-center py-10 rounded-2xl my-14">
          <h2 className="lg:text-5xl text-3xl text-white font-bold">
            never compromise on quality
          </h2>
          <span className="flex justify-center gap-2 items-center py-7">
            <ArrowRightIcon className="h-5 text-white" />
            <p className="text-white p font-semibold">
              we work every day to provide satisfaction
            </p>
          </span>
        </div>
      </div>

      <div className="">
        <h2 className="text-[#0B2D71] text-center font-bold py-10 text-3xl">
          just our way
        </h2>
        <h1 className="md:text-8xl text-5xl font-extrabold text-[#0B2D71] max-w-[800px] mx-auto text-center">
          work that glorifies the world
        </h1>
        <h5 className="text-2xl max-w-screen-md mx-auto text-center py-14 px-7">
          We’re working to deliver the energy needed today. To lower the carbon
          intensity of our operations. And to build the lower carbon energy
          system of tomorrow.
        </h5>
      </div>

      <div className="bg-[#009DD9] p-8">
        {/* <!-- Text Section --> */}
        <div className="mb-8 text-center py-5">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0B2D71] mb-6">
            The Agency of Architecture
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            What applies to the beginning of cultural evolution and consequently
            to human evolution per se still applies today in relation to the
            developmental tasks currently facing us. For architecture is not
            only an expression of human progress.
          </p>
          <div className="bg-transparent hover:bg-[#0B2D71] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 mx-auto cursor-pointer">
            <ArrowRightIcon className="h-5 w-5" />
            <p className="p">learn more about us</p>
          </div>
        </div>

        {/* <!-- Images Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full h-64">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={m2}
              alt="Building Image 1"
            />
          </div>
          <div className="w-full h-64">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={ct6}
              alt="Building Image 2"
            />
          </div>
          <div className="w-full h-64">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={s2}
              alt="Building Image 3"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl flex flex-wrap justify-center items-center gap-5 mx-auto py-20">
        <div className="flex flex-col justify-center gap-3 bg-[#0B2D71] min-h-64 max-w-96 rounded-lg p-5">
          <BuildingOffice2Icon className="h-9 w-9 text-white" />
          <h2 className="text-[#009DD9] font-bold text-2xl">
            Service Premises
          </h2>
          <h5 className="text-white tracking-wide w-[90%]">
            Our complex has office space and convenience stores on the ground
            floor. There's lot of hate out there for a text
          </h5>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#0B2D71] min-h-64 max-w-96 rounded-lg p-5">
          <ShieldCheckIcon className="h-9 w-9 text-white" />
          <h2 className="text-[#009DD9] font-bold text-2xl">
            Safety and Security
          </h2>
          <h5 className="text-white tracking-wide w-[90%]">
            Reliable round-the-clock surveillance by a security system using
            modern technologies. The villagers are out there with
          </h5>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#0B2D71] min-h-64 max-w-96 rounded-lg p-5">
          <PhotoIcon className="h-9 w-9 text-white" />
          <h2 className="text-[#009DD9] font-bold text-2xl">
            Environmental Solutions
          </h2>
          <h5 className="text-white tracking-wide w-[90%]">
            We care about the environment, which is why we use LED lighting and
            have a charging station for electric vehicles clients
          </h5>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#0B2D71] min-h-64 max-w-96 rounded-lg p-5">
          <WrenchScrewdriverIcon className="h-9 w-9 text-white" />
          <h2 className="text-[#009DD9] font-bold text-2xl">
            Ease of Management
          </h2>
          <h5 className="text-white tracking-wide w-[90%]">
            You just buy an apartment, and a professional hotel operator will do
            the rest for you. That Amounts to little more than garbled words.
          </h5>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#0B2D71] min-h-64 max-w-96 rounded-lg p-5">
          <BanknotesIcon className="h-9 w-9 text-white" />
          <h2 className="text-[#009DD9] font-bold text-2xl">
            Guaranteed Income
          </h2>
          <h5 className="text-white tracking-wide w-[90%]">
            Guaranteed monthly incom is prescribed in advance in the contract.
            True enough, but that's not all that it takes to get things
          </h5>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#0B2D71] min-h-64 max-w-96 rounded-lg p-5">
          <MapPinIcon className="h-9 w-9 text-white" />
          <h2 className="text-[#009DD9] font-bold text-2xl">Great Location</h2>
          <h5 className="text-white tracking-wide w-[90%]">
            A pledge of a secure rental of your apartment. A client that's
            unhappy for a reason is a problem, a client that's unhappy
          </h5>
        </div>
      </div>

      {/* <div className="min-h-screen"></div> */}

      <Footer />
    </div>
  );
};

export default Infrastructure;
