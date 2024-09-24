import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import oc1 from "../assets/collaboratorsImage/oc-1.png"
import oc2 from "../assets/collaboratorsImage/oc-2.png"
import oc3 from "../assets/collaboratorsImage/oc-3.png"
import oc4 from "../assets/collaboratorsImage/oc-4.png"
import oc5 from "../assets/collaboratorsImage/oc-5.png"
import oc6 from "../assets/collaboratorsImage/oc-6.png"
import oc7 from "../assets/collaboratorsImage/oc-7.png"
import oc8 from "../assets/collaboratorsImage/oc-8.png"
import oc9 from "../assets/collaboratorsImage/oc-9.png"
import oc10 from "../assets/collaboratorsImage/oc-10.png"
import oc11 from "../assets/collaboratorsImage/oc-11.png"
import oc12 from "../assets/collaboratorsImage/oc-12.png"
import oc13 from "../assets/collaboratorsImage/oc-13.png"
import oc14 from "../assets/collaboratorsImage/oc-14.png"
import oc15 from "../assets/collaboratorsImage/oc-15.png"

const Collaborators = () => {
  return (
    <div className="font-suse overflow-x-hidden">
      <div className="relative">
        <Nav bgImage="oc-header-image" />

        {/* TRANSPARENT HEADER TEXT */}
        <div className="w-full bg-white absolute bottom-0 pb-8 px-4">
          <h1 className="lg:text-9xl text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-oc-header-image text-center">
            Our Collaborators
          </h1>
        </div>
      </div>

      <h2 className="md:text-2xl text-lg tracking-wider max-w-screen-xl text-center mx-auto p-4">
        SIECORP collaborates with major industry players to enhance its
        capabilities and deliver cutting-edge solutions. By partnering with
        leading technology firms, engineering companies, and energy innovators,
        SIECORP gains access to advanced technologies and broadens its service
        offerings. These strategic collaborations ensure that SIECORP stays at
        the forefront of industry trends, providing clients with the most
        efficient, innovative, and sustainable solutions possible
      </h2>

      <div className="flex flex-wrap gap-4 justify-center items-center py-20 px-5">
        <div className="md:w-auto w-28">
            <img src={oc1} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc2} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc3} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc4} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc5} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc6} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc7} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc8} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc9} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc10} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc11} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc12} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc13} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc14} alt="..." />
        </div>
        <div className="md:w-auto w-28">
            <img src={oc15} alt="..." />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collaborators;
