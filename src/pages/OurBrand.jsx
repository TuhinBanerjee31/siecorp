import React from "react";
import sampleImage from "../assets/sample.jpg";
import ob1 from "../assets/ob1.png";
import ob2 from "../assets/ob2.png";
import ob3 from "../assets/ob3.jpg";
import ob4 from "../assets/ob4.jpg";
import ob5 from "../assets/ob5.jpg";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const OurBrand = () => {
  return (
    <div className="font-suse">
      <Nav bgImage="ob-header-image" />

      <div className="w-full bg-white min-h-[55vh] absolute bottom-0 pb-16 flex flex-col justify-center items-center">
        <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-ob-header-image text-center">
          Our Brand
        </h1>
        <h5 className="max-w-2xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
          Whether we’re fueling cars or advancing the energy system of tomorrow,
          Chevron’s brands set the standard for excellence. With a rich history
          dating back over a century, Chevron’s family of brands has built trust
          and recognition worldwide.
        </h5>
      </div>

      {/* <div className="py-20">
        <img
          src={sampleImage}
          alt="...."
          className="h-[27rem] w-auto mx-auto"
        />
      </div> */}

      <div className="min-h-screen bg-[#0B2D71] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl text-[#009DD9] font-bold"> Customer Focus</h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Teamwork is essential to achieving our goals. We value the diverse
            talents and perspectives of our team members and recognize that
            collaboration drives success. At SIECORP, we work together as one
            cohesive unit, supporting each other, sharing knowledge, and
            celebrating our achievements. We believe that by fostering a
            collaborative environment, we can achieve more together than we ever
            could alone.
          </h4>
        </div>

        <div className="h-96">
          <img src={ob1} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <div className="min-h-screen bg-[#58001C] flex lg:flex-row flex-col justify-around items-center py-14">
        <div className="h-96">
          <img src={ob2} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl font-bold text-[#E21836]">Innovation</h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Innovation is at the heart of our success. We embrace creativity and
            forward-thinking in everything we do, constantly seeking new ways to
            solve challenges and improve our processes. At SIECORP, we foster a
            culture of innovation where ideas can flourish, and cutting-edge
            solutions are developed. We believe that by staying ahead of
            industry trends and adopting the latest technologies, we can deliver
            superior results that exceed our clients’ expectations
          </h4>
        </div>
      </div>

      <div className="min-h-screen bg-[#3A0D36] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl text-[#BA3093] font-bold">Sustainability</h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Sustainability is a core principle that drives our approach to
            business. We are committed to minimizing our environmental impact,
            promoting sustainable practices, and contributing to the well-being
            of the communities we serve. At SIECORP, we integrate sustainability
            into our projects and operations, ensuring that our work supports a
            healthy planet for future generations. We believe that by adopting
            responsible practices, we can make a positive difference in the
            world.
          </h4>
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
          <h1 className="text-[#0066B2] text-6xl font-bold max-w-xs mx-auto">
            gift and credit cards
          </h1>
          <h4 className="text-black text-xl max-w-[480px]">
            Wherever you’re headed, it pays to have a Chevron card. Feel
            confident on your travels when you keep our gift cards and personal
            and business credit cards by your side.
          </h4>
          <p className="text-black cursor-pointer transition-colors hover:text-[#0B2D71] font-semibold">
            explore our gift and credit cards
          </p>
        </div>
      </div>

      {/* <div className="min-h-screen bg-[#0B2D71] flex flex-col justify-center items-center gap-8 py-14 px-8">
        <h1 className="text-white font-extrabold text-6xl text-center">
          brand licensing opportunities
        </h1>
        <h4 className="text-white max-w-screen-md text-center text-xl">
          Take your business to the next level by partnering with one of our
          iconic global brands. In addition to Chevron station franchising, we
          are looking for visionary partners to license the Texaco® or Caltex®
          brands in fuels retailing or lubricants in manufacturing, sales, and
          marketing.
        </h4>

        <div className="lg:h-96 h-56 px-8">
          <img src={ob5} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="min-h-20 bg-[#0066B2] lg:w-[60vw] w-[95vw] text-center py-10 rounded-2xl my-14">
          <h2 className="lg:text-5xl text-3xl text-white font-bold">
            alternative fuel for fleet
          </h2>
          <span className="flex justify-center gap-2 items-center py-7">
            <ArrowRightIcon className="h-5 text-white" />
            <p className="text-white p font-semibold">
              we work every day to provide energy
            </p>
          </span>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default OurBrand;
