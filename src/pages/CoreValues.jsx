import React from "react";
// import testImage from "../assets/ct-2.jpg";
import cv1 from "../assets/coreValueImages/cv-1.jpg";
import cv2 from "../assets/coreValueImages/cv-2.jpg";
import cv3 from "../assets/coreValueImages/cv-3.jpg";
import cv4 from "../assets/coreValueImages/cv-4_resized.png";
import cv5 from "../assets/coreValueImages/cv-5_resized.png";
import cv6 from "../assets/coreValueImages/cv-6.jpg";
import cv7 from "../assets/coreValueImages/cv-7.jpg";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const CoreValues = () => {
  // const data1 = [
  //   {
  //     id: 1,
  //     image: testImage,
  //     content:
  //       "Chevron’s Anar Aitekenova is pictured conducting a cooking classat Almaty orphanage in Kazakhstan.",
  //   },
  //   {
  //     id: 2,
  //     image: testImage,
  //     content:
  //       "Members of Chevron Knitting Club presented almost 100 warm vests, hats and scarves to children from the Almaty orphanage",
  //   },
  //   {
  //     id: 3,
  //     image: testImage,
  //     content:
  //       "Tengizchevroil employees and their families joined the campaign ‘Plant a tree,’ organized by the Yntymak Volunteer Organization, at the Speech Impaired School in Atyrau, Kazakhstan.",
  //   },
  //   {
  //     id: 4,
  //     image: testImage,
  //     content:
  //       "Sightings of olive ridley sea turtles were reported soon after 300 Chevron volunteers and residents held the 10th annual coastal clean-up along the terminal coastline in San Pascual, Batangas, in the Philippines. About 2.4 tons of litter was cleared from the beach",
  //   },
  //   {
  //     id: 5,
  //     image: testImage,
  //     content:
  //       "In October 2018, the International Products’ leadership team visited local food charity, Food from the Heart. A total of 19 volunteers dedicated their time to packing 183 food packs that were sent to families and school children across Singapore",
  //   },
  //   {
  //     id: 6,
  //     image: testImage,
  //     content:
  //       "As part of their team-building efforts, the International Products’ Legal team of 29 volunteers contributed 101.5 volunteer hours to Willing Hearts, a soup kitchen that provides meals to some 5,000 Singaporeans in need.",
  //   },
  //   {
  //     id: 7,
  //     image: testImage,
  //     content:
  //       "Chevron employees contributed their time to tree planting and beautification of the landscape of Orphanage #10 in Almaty.",
  //   },
  // ];

  return (
    <div className="min-h-screen text-black font-suse">
      <div className="relative">
        <Nav bgImage="cv-header-image" />

        {/* TRANSPARENT HEADER */}
        <div className="w-full bg-white absolute bottom-0 pb-8">
          <h1 className="lg:text-9xl text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-cv-header-image text-center">
            Core Values
          </h1>
          <h5 className="max-w-2xl mx-auto lg:text-xl text-lg tracking-wider text-center px-5">
            At SIECORP, our core values underpin all that we do, guiding our
            actions, shaping our culture, and defining our interactions with
            clients, partners, and colleagues. These values are more than just
            statements; they are integral principles that we embody daily,
            driving us to achieve exceptional results and advance the industries
            we serve.
          </h5>
        </div>
      </div>

      {/* CARDS CONTAINER */}
      <div className="px-5 py-10">
        <div className="min-h-[55vh] bg-[#0B2D71] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#009DD9] md:text-6xl text-5xl font-semibold">
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
            <h2 className="text-[#BA3093] md:text-6xl text-5xl font-semibold">
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
            <h2 className="text-[#B2CC34] md:text-6xl text-5xl font-semibold">
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

        <div className="min-h-[55vh] bg-[#003653] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#00B2BD] md:text-6xl text-5xl font-semibold">
              Innovation Drives Us
            </h2>
            <img src={cv4} alt="..." className="rounded-lg" />
          </div>

          <div className="text-white max-w-screen-md lg:px-4 px-1 py-3">
            <h4 className="md:text-2xl text-xl tracking-wider text-center">
              At SIECORP, innovation is at the heart of everything we do. We are
              committed to staying at the forefront of technological
              advancements and continuously exploring new ways to enhance our
              services. Our focus on innovation allows us to adapt, evolve, and
              deliver cutting-edge solutions to meet the ever-changing needs of
              the industries we serve. By fostering a culture of creativity and
              forward-thinking, we ensure that SIECORP remains a leader in the
              market and a trusted partner for our clients.
            </h4>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#58001C] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#E21836] md:text-6xl text-5xl font-semibold">
              Excellence in Everything
            </h2>
            <img src={cv5} alt="..." className="rounded-lg" />
          </div>

          <div className="text-white max-w-screen-md lg:px-4 px-1 py-3">
            <h4 className="md:text-2xl text-xl tracking-wider text-center">
              We strive for excellence in all aspects of our business. At
              SIECORP, we set high standards for ourselves, and we are
              relentless in our pursuit of superior performance. Whether it’s in
              the quality of our work, the professionalism of our team, or the
              satisfaction of our clients, excellence is our benchmark. We
              continuously seek to improve, refine, and perfect our processes,
              ensuring that we deliver nothing but the best in every project and
              service.
            </h4>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#0B2D71] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#009DD9] md:text-6xl text-5xl font-semibold">
              Sustainability for the Future
            </h2>
            <img src={cv6} alt="..." className="rounded-lg" />
          </div>

          <div className="text-white max-w-screen-md lg:px-4 px-1 py-3">
            <h4 className="md:text-2xl text-xl tracking-wider text-center">
              At SIECORP, we are deeply committed to sustainability and reducing
              our environmental footprint. We believe that responsible business
              practices are essential to preserving the planet for future
              generations. Through innovative energy solutions, environmentally
              conscious decision-making, and a focus on sustainable practices,
              we work to minimize our impact while delivering value to our
              clients. Sustainability is not just a goal; it is a core value
              that drives our long-term vision and approach.
            </h4>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#3A0D36] max-w-screen-xl rounded-xl mx-auto flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#BA3093] md:text-6xl text-5xl font-semibold">
              Customer-Centric
            </h2>
            <img src={cv7} alt="..." className="rounded-lg" />
          </div>

          <div className="text-white max-w-screen-md lg:px-4 px-1 py-3">
            <h4 className="md:text-2xl text-xl tracking-wider text-center">
              Our clients are at the center of everything we do. At SIECORP, we
              are dedicated to understanding their needs, challenges, and goals.
              We take a proactive approach to deliver tailored solutions that
              not only meet but exceed expectations. By building strong, lasting
              relationships with our clients, we ensure their success is our
              success. We are committed to providing exceptional service, every
              step of the way.
            </h4>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoreValues;
