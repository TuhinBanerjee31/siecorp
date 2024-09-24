import React, { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import c1 from "../assets/careerImages/c-1.jpg";
import c2 from "../assets/careerImages/c-2.jpg";
import c3 from "../assets/careerImages/c-3.jpg";
import c4 from "../assets/careerImages/c-4.jpg";
import c5 from "../assets/careerImages/c-5.jpg";
import Footer from "../components/Footer/Footer";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="font-suse overflow-x-hidden">
      <div className="relative">
        <Nav bgImage="c-header-image" />

        {/* TRANSPARENT HEADER TEXT */}
        <div className="w-full bg-white absolute bottom-0 pb-8">
          <h1 className="lg:text-[11rem] text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-c-header-image text-center">
            Careers
          </h1>
          <h5 className="max-w-2xl mx-auto lg:text-2xl text-lg tracking-wider text-center px-5">
            Team members of all experience levels tackle global, real world
            problems facing our business.
          </h5>
        </div>
      </div>

      <div className="min-h-screen bg-[#F4F4F4]">
        <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch p-6">
          {/* <!-- Left Image Section --> */}
          <div className="w-full md:w-1/2">
            <img
              src={c1}
              alt="Workers in factory"
              className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
            />
          </div>

          {/* <!-- Right Text Section --> */}
          <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
            <h2 className="text-4xl font-bold mb-4 text-[#009DD9] text-center">
              Careers at SIECORP
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              Join SIECORP and be part of a dynamic team driving innovation and
              excellence across industries. We offer exciting career
              opportunities in a collaborative environment where growth,
              learning, and professional development are valued. At SIECORP, we
              invest in our people, providing them with the tools, support, and
              opportunities needed to thrive. Be a part of shaping the future
              with us while building a rewarding and impactful career.
            </p>
            {/* <p className="text-white p font-bold">view careers</p> */}
          </div>
        </div>

        <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch p-6">
          {/* <!-- Left Image Section --> */}
          <div className="w-full md:w-1/2">
            <img
              src={c2}
              alt="Workers in factory"
              className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
            />
          </div>

          {/* <!-- Right Text Section --> */}
          <div className="w-full md:w-1/2 bg-[#58001C] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
            <h2 className="text-4xl font-bold mb-4 text-[#E21836] text-center">
              Benefits of Working with Us
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              At SIECORP, we offer competitive benefits, including career
              development opportunities, comprehensive health coverage, and
              flexible work arrangements. Our inclusive culture fosters
              collaboration and growth, while our impactful projects allow you
              to make a real difference. Join us for a rewarding career where
              your well-being and professional advancement are a priority.
            </p>
            {/* <p className="text-white p font-bold">view service station jobs</p> */}
          </div>
        </div>

        <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch p-6">
          {/* <!-- Left Image Section --> */}
          <div className="w-full md:w-1/2">
            <img
              src={c3}
              alt="Workers in factory"
              className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
            />
          </div>

          {/* <!-- Right Text Section --> */}
          <div className="w-full md:w-1/2 bg-[#003653] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
            <h2 className="text-4xl font-bold mb-4 text-[#00B2BD] text-center">
              Training & Development at SIECORP
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              At SIECORP, we are dedicated to the growth and development of our
              employees. We offer a range of training programs, workshops, and
              mentoring opportunities to help our team members enhance their
              skills and advance their careers. From leadership development to
              industry-specific certifications, we provide the tools and
              resources necessary for continuous learning. At SIECORP, your
              personal and professional development is a priority, ensuring that
              you are equipped to thrive in a fast-evolving industry.
            </p>
            {/* <p className="text-white p font-bold">learn more</p> */}
          </div>
        </div>

        <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch p-6">
          {/* <!-- Left Image Section --> */}
          <div className="w-full md:w-1/2">
            <img
              src={c4}
              alt="Workers in factory"
              className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
            />
          </div>

          {/* <!-- Right Text Section --> */}
          <div className="w-full md:w-1/2 bg-[#3A0D36] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
            <h2 className="text-4xl font-bold mb-4 text-[#BA3093] text-center">
              Global Opportunities at SIECORP
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              At SIECORP, we offer the chance to work on impactful projects
              across the globe. With a presence in diverse industries and
              regions, our employees have the opportunity to collaborate on
              international initiatives, gaining exposure to new markets and
              cultures. Whether through global assignments or cross-border
              collaborations, SIECORP empowers you to expand your expertise and
              grow your career on a global scale while making a tangible
              difference in communities worldwide.
            </p>
            {/* <p className="text-white p font-bold">
              contact our fraud department
            </p> */}
          </div>
        </div>

        <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch p-6">
          {/* <!-- Left Image Section --> */}
          <div className="w-full md:w-1/2">
            <img
              src={c5}
              alt="Workers in factory"
              className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
            />
          </div>

          {/* <!-- Right Text Section --> */}
          <div className="w-full md:w-1/2 bg-[#444B0D] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
            <h2 className="text-4xl font-bold mb-4 text-[#B2CC34] text-center">
              Official Job Opportunities at SIECORP
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              SIECORP only offers job opportunities through our official
              communication channels. We strongly advise candidates to be
              cautious of anyone claiming to represent us through unofficial or
              external channels. Any communication about job openings or
              recruitment will come directly from verified SIECORP email
              addresses or through trusted platforms. Please do not engage with
              unauthorized individuals or third parties, and report any
              suspicious activity immediately. Your safety and trust are
              important to us.
            </p>
            {/* <p className="text-white p font-bold">learn more</p> */}
          </div>
        </div>
      </div>

      {/* <div className="bg-[#0B2D71] flex flex-col justify-center items-center gap-8 py-14 px-8 mt-10">
        <div className="min-h-20 bg-[#0066B2] lg:w-[60vw] w-[95vw] text-center py-10 rounded-2xl my-14">
          <h2 className="lg:text-5xl text-3xl text-white font-bold">
            siecorp email updates
          </h2>
          <span className="flex justify-center gap-2 items-center py-7">
            <ArrowRightIcon className="h-5 text-white" />
            <p className="text-white p font-semibold">
              subscribe to our newsletter to receive news and updates.
            </p>
          </span>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Careers;
