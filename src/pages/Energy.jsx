import React from "react";
import Nav from "../components/Nav/Nav";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.png";
import EnergyCard from "../components/EnergyCard/EnergyCard";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import Footer from "../components/Footer/Footer";

const Energy = () => {
  const card1 = {
    cardImage: e1,
    initialp: "flex-row",
    partialp: "flex-col",
    bgColor: "#0B2D71",
    titleColor: "#009DD9",
  };
  return (
    <div className="font-suse">
      <Nav bgImage="e-header-image" />

      <div className="w-full bg-white pb-24 absolute bottom-0">
        <h1 className="lg:text-9xl text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-e-header-image text-center">
          energy solutions
        </h1>
        <h5 className="max-w-xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
          Affordable, reliable and ever-cleaner energy for today and tomorrow.
          That’s what we’re working towards, every day.
        </h5>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e1}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#009DD9] text-center">
            oil and natural gas
          </h2>
          <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
            Oil and natural gas are essential to providing the energy we use
            every day. Our diverse set of assets helps us find and produce
            energy the world needs.
          </p>
          <p className="text-white p">see our portfolio</p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e2}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#003653] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#00B2BD] text-center">
            fuels
          </h2>
          <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
            From drives across town to travel across countries, we’ve been
            providing quality transportation fuels for more than 140 years. And
            we’ll continue to deliver affordable, reliable, lower carbon fuels
            into the future.
          </p>
          <p className="text-white p">learn about fuels</p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e3}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#009DD9] text-center">
            lubricants
          </h2>
          <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
            From motor oil for the family car to lubricants for heavy duty
            transportation and industrial equipment, we deliver premium products
            that help improve fuel economy and extend the period between oil
            changes.
          </p>
          <p className="text-white p">explore lubricants</p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e4}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#3A0D36] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#BA3093] text-center">
            chemicals and additives
          </h2>
          <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
            Together with our partners, Chevron is a leading manufacturer of
            petrochemicals and additives that are essential to creating everyday
            consumer and industrial products, as well as maximizing the
            reliability, efficiency and life of engines.
          </p>
          <p className="text-white p">see chemicals and additives</p>
        </div>
      </div>

      <NewsSlider title="energy in action" />

      <Footer />
    </div>
  );
};

export default Energy;
