import React from "react";
import testImage from "../assets/ct-2.jpg";
import cv1 from "../assets/cv-1.jpg";
import cv2 from "../assets/cv-2.jpg";
import cv3 from "../assets/cv-3.jpg";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Slider from "../components/Slider/Slider";

const CoreValues = () => {
  const data1 = [
    {
      id: 1,
      image: testImage,
      content:
        "Chevron’s Anar Aitekenova is pictured conducting a cooking classat Almaty orphanage in Kazakhstan.",
    },
    {
      id: 2,
      image: testImage,
      content:
        "Members of Chevron Knitting Club presented almost 100 warm vests, hats and scarves to children from the Almaty orphanage",
    },
    {
      id: 3,
      image: testImage,
      content:
        "Tengizchevroil employees and their families joined the campaign ‘Plant a tree,’ organized by the Yntymak Volunteer Organization, at the Speech Impaired School in Atyrau, Kazakhstan.",
    },
    {
      id: 4,
      image: testImage,
      content:
        "Sightings of olive ridley sea turtles were reported soon after 300 Chevron volunteers and residents held the 10th annual coastal clean-up along the terminal coastline in San Pascual, Batangas, in the Philippines. About 2.4 tons of litter was cleared from the beach",
    },
    {
      id: 5,
      image: testImage,
      content:
        "In October 2018, the International Products’ leadership team visited local food charity, Food from the Heart. A total of 19 volunteers dedicated their time to packing 183 food packs that were sent to families and school children across Singapore",
    },
    {
      id: 6,
      image: testImage,
      content:
        "As part of their team-building efforts, the International Products’ Legal team of 29 volunteers contributed 101.5 volunteer hours to Willing Hearts, a soup kitchen that provides meals to some 5,000 Singaporeans in need.",
    },
    {
      id: 7,
      image: testImage,
      content:
        "Chevron employees contributed their time to tree planting and beautification of the landscape of Orphanage #10 in Almaty.",
    },
  ];

  return (
    <div className="min-h-screen text-black font-suse">
      <Nav bgImage="m-header-image" />

      {/* TRANSPARENT HEADER */}
      <div className="w-full bg-white absolute bottom-0 pb-8">
        <h1 className="lg:text-9xl text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-m-header-image text-center">
          Core Values
        </h1>
        <h5 className="max-w-2xl mx-auto lg:text-xl text-lg tracking-wider text-center px-5">
          At SIECORP, our core values are the foundation of everything we do.
          They guide our actions, shape our culture, and define the way we
          interact with our clients, partners, and each other. These values are
          not just words on a page; they are principles we live by every day as
          we work to deliver exceptional results and drive progress in the
          industries we serve.
        </h5>
      </div>

      {/* CARDS CONTAINER */}
      <div className="px-5">
        <div className="min-h-[55vh] bg-[#0B2D71] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#009DD9] md:text-7xl text-5xl font-semibold">
              Integrity
            </h2>
            <img src={cv1} alt="..." className="rounded-lg" />
          </div>

          <div className="text-white max-w-screen-md lg:px-4 px-1 py-3">
            <h4 className="md:text-2xl text-xl tracking-wider text-center">
              Integrity is the cornerstone of our business. We believe in doing
              the right thing, always. Our commitment to honesty, transparency,
              and ethical practices is unwavering. We build trust with our
              clients and partners by being reliable, accountable, and
              consistent in our actions. At SIECORP, integrity means that we
              honor our commitments, uphold our principles, and conduct our
              business with the highest level of professionalism.
            </h4>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#3A0D36] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#BA3093] md:text-7xl text-5xl font-semibold">
              Care for Employees
            </h2>
            <img src={cv2} alt="..." className="rounded-lg" />
          </div>

          <div className="text-white max-w-screen-md lg:px-4 px-1 py-3">
            <h4 className="md:text-2xl text-xl tracking-wider text-center">
              Our employees are our greatest asset. We are dedicated to creating
              a supportive and inclusive work environment where everyone can
              thrive. At SIECORP, we invest in the growth and development of our
              team members, providing opportunities for continuous learning and
              career advancement. We care deeply about the well-being of our
              employees and are committed to ensuring their safety, health, and
              happiness. We believe that by taking care of our people, we build
              a stronger, more resilient organization.
            </h4>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#444B0D] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#B2CC34] md:text-7xl text-5xl font-semibold">
              Teamwork
            </h2>
            <img src={cv3} alt="..." className="rounded-lg" />
          </div>

          <div className="text-white max-w-screen-md lg:px-4 px-1 py-3">
            <h4 className="md:text-2xl text-xl tracking-wider text-center">
              Teamwork is essential to achieving our goals. We value the diverse
              talents and perspectives of our team members and recognize that
              collaboration drives success. At SIECORP, we work together as one
              cohesive unit, supporting each other, sharing knowledge, and
              celebrating our achievements. We believe that by fostering a
              collaborative environment, we can achieve more together than we
              ever could alone.
            </h4>
          </div>
        </div>
      </div>

      {/* HEADER CONTENT */}
      <div className="max-w-screen-md mx-auto px-10">
        <h5 className="text-[#0066B2] font-semibold text-xl pt-20">
          learn more about the chevron way{" "}
        </h5>
        <h1 className="text-4xl font-bold text-[#0B2D71]">
          volunteering around the world
        </h1>
        <h4 className="text-xl py-10 tracking-wider">
          In countries around the world, Chevron employees are applying their
          skills, experience and energy in volunteer activities that help
          improve education, provide basic needs, foster new business
          opportunities and ultimately strengthen the communities in which we
          operate.
        </h4>
      </div>

      {/* Slider Area */}
      {/* <div className="my-20">
        <Slider dataSet={data1} />
      </div> */}

      {/* MIDDLE CONTENT AREA */}
      <div className="max-w-screen-md mx-auto px-10">
        <h1 className="text-4xl font-bold text-[#0B2D71]">chevron humankind</h1>
        <h4 className="text-xl py-10 tracking-wider">
          Through Chevron Humankind, employees, retirees and contractors in the
          United States provide support for their communities throughout the
          year.
        </h4>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="max-w-screen-2xl mx-auto px-10 py-20">
        <h1 className="md:text-6xl text-4xl font-extrabold text-[#0B2D71] text-center">
          2019 chevron humankind snapshot
        </h1>
        <div className="bg-[#0B2D71] min-h-sm flex lg:flex-row flex-col gap-4 px-5 text-center my-10">
          <div className="box-1 py-10 lg:border-r-2 border-b-2 pr-3">
            <h1 className="text-white font-bold text-4xl">$36.7million</h1>
            <h3 className="text-white">
              has been contributed to U.S. nonprofits through a combination of
              employee and retiree giving and company matching funds
            </h3>
          </div>
          <div className="box-1 py-10 lg:border-r-2 border-b-2 pr-3">
            <h1 className="text-white font-bold text-4xl">7,752</h1>
            <h3 className="text-white">
              employees and retirees volunteered through Chevron Humankind
            </h3>
          </div>
          <div className="box-1 py-10 lg:border-r-2 border-b-2 pr-3">
            <h1 className="text-white font-bold text-4xl">193,369+</h1>
            <h3 className="text-white">
              volunteer hours were logged in the United States
            </h3>
          </div>
          <div className="box-1 py-10">
            <h1 className="text-white font-bold text-4xl">2,125</h1>
            <h3 className="text-white">
              charitable organizations in the United States benefited from our
              volunteer time
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoreValues;
