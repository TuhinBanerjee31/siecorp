import React from "react";
import testImage from "../assets/ct-2.jpg";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Slider from "../components/Slider/Slider";

const CoreValues = () => {
  const data1 = [
    {
      id: 1,
      image: testImage,
      content: 'Chevron’s Anar Aitekenova is pictured conducting a cooking classat Almaty orphanage in Kazakhstan.'
    },
    {
      id: 2,
      image: testImage,
      content: 'Members of Chevron Knitting Club presented almost 100 warm vests, hats and scarves to children from the Almaty orphanage'
    },
    {
      id: 3,
      image: testImage,
      content: 'Tengizchevroil employees and their families joined the campaign ‘Plant a tree,’ organized by the Yntymak Volunteer Organization, at the Speech Impaired School in Atyrau, Kazakhstan.'
    },
    {
      id: 4,
      image: testImage,
      content: 'Sightings of olive ridley sea turtles were reported soon after 300 Chevron volunteers and residents held the 10th annual coastal clean-up along the terminal coastline in San Pascual, Batangas, in the Philippines. About 2.4 tons of litter was cleared from the beach'
    },
    {
      id: 5,
      image: testImage,
      content: 'In October 2018, the International Products’ leadership team visited local food charity, Food from the Heart. A total of 19 volunteers dedicated their time to packing 183 food packs that were sent to families and school children across Singapore'
    },
    {
      id: 6,
      image: testImage,
      content: 'As part of their team-building efforts, the International Products’ Legal team of 29 volunteers contributed 101.5 volunteer hours to Willing Hearts, a soup kitchen that provides meals to some 5,000 Singaporeans in need.'
    },
    {
      id: 7,
      image: testImage,
      content: 'Chevron employees contributed their time to tree planting and beautification of the landscape of Orphanage #10 in Almaty.'
    }
  ]

  return (
    <div className="min-h-screen text-black font-suse">
      <Nav bgImage="m-header-image" />

      {/* CONTENT AREA */}
      <div className="content-info max-w-screen-md mx-auto px-10 absolute bottom-0">
          <h5 className="text-[#00A3C3] text-xl font-semibold">culture</h5>
          <h1 className="md:text-6xl text-4xl font-bold text-[#00A3C3]">
            our employees put values into action
          </h1>
          <h4 className="text-lg py-10 tracking-wider text-white">
            We’re a global team united by a shared set of values, called The
            Chevron Way. From our volunteering initiatives to our commitment to
            diversity and inclusion, you’ll see that our values are so much more
            than words on a screen – they’re our way of life.
          </h4>
      </div>

      {/* HEADER CONTENT */}
      <div className="max-w-screen-md mx-auto px-5">
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
      <div className="my-20">
        <Slider dataSet= {data1} />
      </div>

      {/* MIDDLE CONTENT AREA */}
      <div className="max-w-screen-md mx-auto px-10">
        <h1 className="text-4xl font-bold text-[#0B2D71]">chevron humankind</h1>
        <h4 className="text-xl py-10 tracking-wider">
          Through Chevron Humankind, employees, retirees and contractors in the
          United States provide support for their communities throughout the
          year.
        </h4>
      </div>

      {/* Slider Area */}
      <div className="my-20">
        <Slider dataSet= {data1} />
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
