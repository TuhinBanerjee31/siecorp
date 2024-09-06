import React from "react";
import sampleImage from "../assets/sample.jpg";
import ob1 from "../assets/ob1.png";
import ob2 from "../assets/ob2.png";
import ob3 from "../assets/ob3.jpg";
import ob4 from "../assets/ob4.jpg";
import ob5 from "../assets/ob5.jpg";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

const OurBrand = () => {
  return (
    <div className="font-suse">
      <Nav bgImage="ob-header-image" />

      <div className="w-full bg-white min-h-[55vh] absolute bottom-0">
        <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-ob-header-image text-center">
          our brand
        </h1>
        <h5 className="max-w-xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
          Whether we’re fueling cars or advancing the energy system of tomorrow,
          Chevron’s brands set the standard for excellence. With a rich history
          dating back over a century, Chevron’s family of brands has built trust
          and recognition worldwide.
        </h5>
      </div>

      <div className="py-20">
        <img
          src={sampleImage}
          alt="...."
          className="h-[27rem] w-auto mx-auto"
        />
      </div>

      <div className="min-h-screen bg-[#0B2D71] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-xl px-4 lg:text-left text-center py-4">
          <h3 className="text-4xl">chevron</h3>
          <h4 className="text-xl py-4 tracking-wider">
            Quality and reliability drive customers to Chevron. Innovative and
            forward looking, our high quality fuel and customer experience mean
            Chevron is trusted by our customers.
          </h4>
          <span className="flex lg:justify-start justify-center py-4">
            <p className="p tracking-wider">
              learn more about chevron with techron
            </p>
          </span>
          <span className="flex lg:justify-start justify-center">
            <p className="p tracking-wider">find a chevron service station</p>
          </span>
        </div>

        <div className="h-96">
          <img src={ob1} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <div className="min-h-screen bg-[#58001C] flex lg:flex-row flex-col justify-around items-center py-14">
        <div className="h-96">
          <img src={ob2} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="text-white max-w-xl px-4 lg:text-left text-center py-4">
          <h3 className="text-4xl">texaco</h3>
          <h4 className="text-xl py-4 tracking-wider">
            The Texaco star stands for more than a century of quality fuels and
            lubricants. A global icon with a powerful presence in the United
            States and Europe, Texaco delivers the high performance and customer
            satisfaction drivers trust.
          </h4>
          <span className="flex lg:justify-start justify-center py-4">
            <p className="p tracking-wider">learn more about texaco</p>
          </span>
          <span className="flex lg:justify-start justify-center">
            <p className="p tracking-wider">find a chevron service texaco</p>
          </span>
        </div>
      </div>

      <div className="min-h-screen bg-[#3A0D36] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-xl px-4 lg:text-left text-center py-4">
          <h3 className="text-4xl">caltex</h3>
          <h4 className="text-xl py-4 tracking-wider">
            For more than 70 years, Caltex has symbolized uncompromising
            products and services. Quality fuels and lubricants and a pedigree
            in technology set Caltex apart.
          </h4>
          <span className="flex lg:justify-start justify-center py-4">
            <p className="p tracking-wider">learn more about caltex</p>
          </span>
          <span className="flex lg:justify-start justify-center">
            <p className="p tracking-wider">find a caltex service station</p>
          </span>
        </div>

        <div className="h-96 px-8">
          <img src={ob3} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <div className="min-h-screen flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="h-[38rem] px-8">
          <img src={ob4} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="text-white max-w-xl px-4 text-center py-4 flex flex-col gap-4">
          <h1 className="text-[#0066B2] text-6xl font-bold max-w-xs mx-auto">gift and credit cards</h1>
          <h4 className="text-black text-xl max-w-[480px]">Wherever you’re headed, it pays to have a Chevron card. Feel confident on your travels when you keep our gift cards and personal and business credit cards by your side.</h4>
          <p className="text-black cursor-pointer transition-colors hover:text-[#0B2D71] font-semibold">explore our gift and credit cards</p>
        </div>
      </div>

      <div className="min-h-screen bg-[#0B2D71] flex flex-col justify-center items-center gap-8 py-14 px-8">
        <h1 className="text-white font-extrabold text-6xl text-center">brand licensing opportunities</h1>
        <h4 className="text-white max-w-screen-md text-center text-xl">Take your business to the next level by partnering with one of our iconic global brands. In addition to Chevron station franchising, we are looking for visionary partners to license the Texaco® or Caltex® brands in fuels retailing or lubricants in manufacturing, sales, and marketing.</h4>

        <div className="lg:h-96 h-56 px-8">
          <img src={ob5} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="min-h-20 bg-[#0066B2] lg:w-[60vw] w-[95vw] text-center py-10 rounded-2xl my-14">
          <h2 className="lg:text-5xl text-3xl text-white font-bold">alternative fuel for fleet</h2>
          <span className="flex justify-center gap-2 items-center py-7"><ArrowRightIcon className="h-5 text-white" /><p className="text-white p font-semibold">we work every day to provide energy</p></span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurBrand;
