import React, {useEffect} from "react";
import Nav from "../components/Nav/Nav";
import c1 from "../assets/careerImages/c-1.jpg";
import c2 from "../assets/careerImages/c-2.jpg";
import c3 from "../assets/careerImages/c-3.jpg";
import c4 from "../assets/careerImages/c-4.jpg";
import Footer from "../components/Footer/Footer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="relative">
        <Nav bgImage="c-header-image" />

        {/* TRANSPARENT HEADER TEXT */}
        <div className="w-full bg-white absolute bottom-0 pb-8">
          <h1 className="lg:text-[11rem] text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-c-header-image text-center">
            careers
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
            <h2 className="text-5xl font-bold mb-4 text-[#009DD9] text-center">
              careers at siecorp
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              Siecorp only accepts job applications through our Careers website.
              The site features information about careers at Siecorp and current
              job openings.
            </p>
            <p className="text-white p font-bold">view careers</p>
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
            <h2 className="text-5xl font-bold mb-4 text-[#E21836] text-center">
              service station employment
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              Siecorp Service Stations, Inc. is looking for Customer Service
              Representatives who are 18 years or older.
            </p>
            <p className="text-white p font-bold">view service station jobs</p>
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
            <h2 className="text-5xl font-bold mb-4 text-[#00B2BD] text-center">
              students and recent grads
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              Meet employees and recruiters on your college campus or at a
              special event.
            </p>
            <p className="text-white p font-bold">learn more</p>
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
            <h2 className="text-5xl font-bold mb-4 text-[#BA3093] text-center">
              recruiting fraud
            </h2>
            <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
              Chevron never seeks fees from job applicants under any
              circumstances. If you receive a job offer that you believe is
              fraudulent, contact your local law enforcement agency.
            </p>
            <p className="text-white p font-bold">
              contact our fraud department
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0B2D71] flex flex-col justify-center items-center gap-8 py-14 px-8 mt-10">
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
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
