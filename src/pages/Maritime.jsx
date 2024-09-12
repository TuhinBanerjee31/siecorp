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
import mo1 from "../assets/illustrations/m-overlay1.svg";
import mo2 from "../assets/illustrations/m-overlay2.svg";
import mo3 from "../assets/illustrations/m-overlay3.svg";
import mo4 from "../assets/illustrations/m-overlay4.svg";
import m1 from "../assets/m-1.jpg";
import m2 from "../assets/m-2.jpg";
import m3 from "../assets/m-3.jpg";
import m4 from "../assets/m-4.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import Footer from "../components/Footer/Footer";

const Maritime = () => {
  return (
    <div className="font-suse">
      <div className="relative">
        <Nav bgImage="m-header-image" />

        {/* TRANSPARENT HEADER TEXT */}
        <div className="w-full bg-white absolute bottom-0">
          <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-m-header-image text-center">
            maritime
          </h1>
          <h5 className="max-w-2xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
            Accelerating progress to power our world today and build the lower
            carbon energy system of the future.
          </h5>
        </div>
      </div>

      {/* IMAGE COLLAGE CONTAINER */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- First Image (Spans 2 columns on large screens) --> */}
          <div className="col-span-1 lg:col-span-2">
            <img
              src={mh4}
              alt="Person with Color Display"
              className="w-full h-full object-cover rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
            />
          </div>

          {/* <!-- Second Image --> */}
          <div className="col-span-1">
            <img
              src={mh2}
              alt="Control Room2"
              className="w-full h-full object-cover rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
            />
          </div>

          {/* <!-- Third Image --> */}
          <div className="col-span-1">
            <img
              src={mh5}
              alt="Touch Interface"
              className="w-full h-full object-cover rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
            />
          </div>

          {/* <!-- Fourth Image --> */}
          <div className="col-span-1">
            <img
              src={mh1}
              alt="Engineer at Work"
              className="w-full h-full object-cover rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
            />
          </div>

          {/* <!-- Fifth Image --> */}
          <div className="col-span-1">
            <img
              src={mh6}
              alt="Engineer at Work"
              className="w-full h-full object-cover rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
            />
          </div>

          {/* <!-- sixth Image --> */}
          <div className="col-span-1">
            <img
              src={mh7}
              alt="Engineer at Work"
              className="w-full h-full object-cover rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
            />
          </div>

          {/* <!-- seventh Image --> */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src={mh3}
              alt="Person at Computer"
              className="w-full h-full object-cover rounded-lg hover:scale-75 transition-transform ease-in-out cursor-pointer duration-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#003653] py-32 px-8">
        <h1 className="lg:text-8xl text-6xl font-extrabold text-center text-[#00B2BD] max-w-screen-xl mx-auto">
          maritime for our growing world relies on technology
        </h1>
        <h4 className="text-2xl text-white text-center pt-10">
          We aim to scale affordable, innovative technology solutions to help
          support a resilient energy system.
        </h4>
      </div>

      <div className="bg-[#00708C] min-h-screen flex flex-col justify-center items-center py-20 px-8">
        <h4 className="text-white font-bold text-2xl text-center tracking-wide">
          designing the facilities and operations of tomorrow
        </h4>
        <h2 className="text-white text-6xl font-bold text-center max-w-screen-lg mx-auto py-10">
          working smarter and safer with robotics
        </h2>
        <h4 className="text-2xl text-white text-center pt-4 max-w-screen-md mx-auto">
          Robots, drones, machine learning, artificial intelligence and beyond.
          Digital technologies are helping us integrate data, reduce costs and
          enhance safety.
        </h4>

        <div className="bg-transparent hover:bg-[#009DD9] text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded flex items-center gap-4 cursor-pointer my-5">
          <ArrowRightIcon className="h-5 w-5" />
          <p className="p">discover more about it</p>
        </div>

        <img src={mh8} className="lg:max-w-[60%] max-w-[85%] rounded-2xl" />
      </div>

      <div className="min-h-screen bg-[#0B2D71] py-10">
        <div className="sticky top-0 z-10 px-4">
          <h1 className="text-white lg:text-8xl text-5xl font-bold max-w-screen-lg mx-auto text-center">
            pioneering breakthrough technologies for a lower carbon future
          </h1>
          <h4 className="text-white max-w-screen-md text-2xl mx-auto text-center py-5">
            Every day, Chevron's leading experts, solution developers, energy
            innovators and problem solvers are searching for the next
            breakthrough.
          </h4>
        </div>

        {/* OVERLAY CARD 1 */}
        <div className="info-card max-w-screen-2xl bg-[#003653] mx-auto mt-10 sticky top-0 rounded-lg z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left">
            <h2 className="md:text-7xl text-4xl font-bold text-[#0BA4B0] md:max-w-[90%] py-10">
              renewable fuels
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              We're growing our feedstock business to produce renewable fuels
              and help our customers achieve their lower carbon ambitions.
            </h5>
            <div className="bg-transparent transition-colors hover:bg-[#0BA4B0] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about renewable fuels</p>
            </div>
          </div>

          <div className="content-right w-3/5">
            <img
              src={mo1}
              alt="card-image"
              className="md:h-auto h-auto w-full"
            />
          </div>
        </div>

        {/* OVERLAY CARD 2 */}
        <div className="info-card max-w-screen-2xl bg-[#3a0d36] mx-auto mt-10 sticky top-0 rounded-lg z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left">
            <h2 className="md:text-7xl text-4xl font-bold text-[#751269] md:max-w-[90%] py-10">
              carbon capture
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              We're developing and deploying carbon capture, utilization and
              storage (CCUS) technologies, which experts agree are essential
              tools to making a lower carbon future possible.
            </h5>
            <div className="bg-transparent transition-colors hover:bg-[#751269] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about carbon capture</p>
            </div>
          </div>

          <div className="content-right w-3/5">
            <img
              src={mo2}
              alt="card-image"
              className="md:h-auto h-auto w-full"
            />
          </div>
        </div>

        {/* OVERLAY CARD 3 */}
        <div className="info-card max-w-screen-2xl bg-[#b2cc34] mx-auto mt-10 sticky top-0 rounded-lg z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left">
            <h2 className="md:text-7xl text-4xl font-bold text-[#769231] md:max-w-[90%] py-10">
              hydrogen
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              We're working to solve the technical challenges of transporting
              hydrogen over long-distances at a lower carbon intensity.
            </h5>
            <div className="bg-transparent transition-colors hover:bg-[#769231] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about hydrogen</p>
            </div>
          </div>

          <div className="content-right w-3/5">
            <img
              src={mo3}
              alt="card-image"
              className="md:h-auto h-auto w-full"
            />
          </div>
        </div>

        {/* OVERLAY CARD 4 */}
        <div className="info-card max-w-screen-2xl bg-[#ba3093] mx-auto mt-10 sticky top-0 rounded-lg z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left">
            <h2 className="md:text-7xl text-4xl font-bold text-[#751269] md:max-w-[90%] py-10">
              geothermal
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              Using our decades of experience and innovative partnerships, we're
              working to unlock the next generation of geothermal energy.
            </h5>
            <div className="bg-transparent transition-colors hover:bg-[#751269] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about geothermal</p>
            </div>
          </div>

          <div className="content-right w-3/5">
            <img
              src={mo4}
              alt="card-image"
              className="md:h-auto h-auto w-full"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#0B2D71] py-10 px-5">
        <h3 className="text-white font-bold text-2xl text-center tracking-wide">
          scouting at the edge of innovation
        </h3>
        <h1 className="text-white font font-extrabold lg:text-7xl text-5xl text-center max-w-screen-lg mx-auto py-6">
          scaling next-generation carbon capture technology
        </h1>
        <h4 className="text-white max-w-screen-md tracking-wide text-2xl mx-auto text-center py-5">
          We seek out emerging technologies at the cutting edge of innovation.
          From ideas to pilot projects, we use our expertise, experience and
          partnerships to evaluate and scale new solutions.
        </h4>

        <div className="max-w-screen-md mx-auto">
          <img src={m1} alt="..." className="w-full my-10 rounded-2xl" />
        </div>
      </div>

      <div className="min-h-screen bg-[#751269] py-14 px-5">
        {/* TEXT CONTENT */}
        <h3 className="text-white font-bold text-2xl text-center tracking-wide">
          building a resilient energy system
        </h3>
        <h1 className="text-white font font-extrabold lg:text-7xl text-5xl text-center max-w-screen-lg mx-auto py-6">
          delivering more affordable, reliable, ever-cleaner energy
        </h1>
        <h4 className="text-white max-w-screen-md tracking-wide text-2xl mx-auto text-center py-5">
          The energy transition is happening at different speeds across the
          world. As we innovate toward tomorrow, technology helps us deliver the
          energy the world needs today. Safely, reliably and in lower carbon
          ways.
        </h4>

        {/* CARD CONTENT-1 */}
        <div className="max-w-screen-2xl mx-auto mt-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left px-4 flex flex-col items-start text-left">
            <h2 className="md:text-4xl text-2xl text-white md:max-w-[90%] py-5">
              lowering our methane intensity
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[70%]">
              New technologies and facility design improvements are helping us
              to prevent, detect, and reduce methane emissions.
            </h5>
            <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">explore our methane management</p>
            </div>
          </div>

          <div className="content-right lg:w-3/5">
            <img
              src={m2}
              alt="card-image"
              className="md:h-auto h-auto w-full rounded-lg"
            />
          </div>
        </div>

        {/* CARD CONTENT-2 */}
        <div className="max-w-screen-2xl mx-auto mt-10 flex md:flex-row-reverse flex-col-reverse md:px-16 px-4 py-12 justify-between items-center">
          <div className="content-left px-4 flex flex-col items-end text-right">
            <h2 className="md:text-4xl text-2xl text-white md:max-w-[90%] py-5">
              powering up renewables
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[70%]">
              We're sourcing more electricity from renewables like wind and
              solar to power some of our Chevron operations.
            </h5>
            <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">see how we use renewable energy</p>
            </div>
          </div>

          <div className="content-right lg:w-3/5">
            <img
              src={m3}
              alt="card-image"
              className="md:h-auto h-auto w-full rounded-lg"
            />
          </div>
        </div>

        {/* CARD CONTENT-3 */}
        <div className="max-w-screen-2xl mx-auto mt-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left px-4 flex flex-col items-start text-left">
            <h2 className="md:text-4xl text-2xl text-white md:max-w-[90%] py-5">
              measuring our carbon footprint
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[70%]">
              Together with our partners, we've developed a standardized, data
              driven carbon footprinting methodology for delivered liquefied
              natural gas cargoes.
            </h5>
            <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">learn about the methodology</p>
            </div>
          </div>

          <div className="content-right lg:w-3/5">
            <img
              src={m4}
              alt="card-image"
              className="md:h-auto h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#3A0D36] py-10 px-5">
        <h2 className="text-5xl font-bold text-[#BA3093] text-center">
          unlocking potential to meet demand
        </h2>
        <h4 className="text-white max-w-screen-md text-xl mx-auto text-center pt-5">
          We're harnessing technology to safety drill at greater depths and
          pressures at a lower carbon intensity in the deepwater. Onshore,
          advanced technologies are improving recovery rates from our shale and
          tight and heavy oil assets.
        </h4>
      </div>

      <NewsSlider title="meet our innovators" />

      <Footer />
    </div>
  );
};

export default Maritime;
