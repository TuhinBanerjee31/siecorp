import React, { useEffect } from "react";
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
import mo5 from "../assets/illustrations/m-overlay5.svg";
import m1 from "../assets/m-1.jpg";
import m2 from "../assets/m-2.jpg";
import m3 from "../assets/m-3.jpg";
import m4 from "../assets/m-4.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import Footer from "../components/Footer/Footer";

const Maritime = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="font-suse">
      <div className="relative">
        <Nav bgImage="m-header-image" />

        {/* TRANSPARENT HEADER TEXT */}
        <div className="w-full bg-white absolute bottom-0">
          <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-m-header-image text-center">
            Maritime
          </h1>
          <h5 className="max-w-screen-xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
            Our Maritime Division provides a comprehensive suite of services
            that support the full lifecycle of maritime operations. We partner
            with stakeholders across the globe to deliver projects that enhance
            connectivity, promote environmental stewardship, and contribute to
            global trade.
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
          Our Commitment to Sustainability
        </h1>
        <h4 className="text-2xl max-w-screen-lg text-white text-center pt-10 mx-auto tracking-wider">
          As global trade continues to grow, so do the challenges of minimizing
          the environmental impact of maritime operations. At SIECORP,
          sustainability is not just a goal; it's a guiding principle embedded
          in every project we undertake. Our maritime solutions emphasize
          eco-friendly technologies and practices that aim to reduce emissions,
          optimize energy use, and protect marine ecosystems. From utilizing
          renewable energy sources in port operations to implementing
          energy-efficient maritime transport solutions, SIECORP is dedicated to
          building a greener future for the industry.
        </h4>
      </div>

      <div className="bg-[#00708C] min-h-screen flex flex-col justify-center items-center py-20 px-8">
        <h4 className="text-white font-bold text-2xl text-center tracking-wide">
          designing the facilities and operations of tomorrow
        </h4>
        <h2 className="text-white text-6xl font-bold text-center max-w-screen-lg mx-auto py-10">
          Global Reach and Strategic Partnerships
        </h2>
        <h4 className="text-2xl text-white text-center pt-4 max-w-screen-lg mx-auto tracking-widest mb-10">
          With a global presence and a network of strategic partnerships,
          SIECORP’s Maritime Division is equipped to handle complex projects in
          diverse geographies. We work closely with governments, private
          enterprises, and international organizations to create customized
          solutions that meet local needs while adhering to international
          standards. Our ability to operate in different markets and adapt to
          varying regulatory environments enables us to provide clients with the
          flexibility and expertise required for successful maritime development
          projects.
        </h4>

        <img src={mh8} className="lg:max-w-[60%] max-w-[85%] rounded-2xl" />
      </div>

      <div className="min-h-screen bg-[#0B2D71] py-10">
        <div className="sticky top-0 z-10 px-4">
          <h1 className="text-white lg:text-8xl text-5xl font-bold max-w-screen-lg mx-auto text-center py-5">
            Why Choose SIECORP Maritime?
          </h1>
          {/* <h4 className="text-white max-w-screen-md text-2xl mx-auto text-center">
            Every day, Chevron's leading experts, solution developers, energy
            innovators and problem solvers are searching for the next
            breakthrough.
          </h4> */}
        </div>

        {/* OVERLAY CARD 1 */}
        <div className="info-card max-w-screen-2xl bg-[#003653] mx-auto mt-10 sticky top-0 rounded-lg z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left">
            <h2 className="md:text-7xl text-4xl font-bold text-[#0BA4B0] md:max-w-[90%] py-10">
              Industry Expertise
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              With decades of experience in maritime infrastructure, we have
              successfully delivered a wide range of engineering projects. Our
              expertise ensures innovative solutions and reliable outcomes for
              complex challenges in the industry.
            </h5>
            {/* <div className="bg-transparent transition-colors hover:bg-[#0BA4B0] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about renewable fuels</p>
            </div> */}
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
              Sustainable Practices
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              We are deeply committed to minimizing environmental impact by
              implementing sustainable practices. Through innovative green
              technologies, we strive to protect ecosystems while delivering
              efficient solutions.
            </h5>
            {/* <div className="bg-transparent transition-colors hover:bg-[#751269] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about carbon capture</p>
            </div> */}
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
              Global Reach
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              With a proven ability to execute projects across diverse regions,
              we adapt to various market conditions seamlessly. Our expertise
              ensures successful outcomes regardless of geographical or cultural
              challenges.
            </h5>
            {/* <div className="bg-transparent transition-colors hover:bg-[#769231] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about hydrogen</p>
            </div> */}
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
              Innovative Solutions
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              We leverage cutting-edge technology and advanced smart port
              systems to enhance operational efficiency and competitiveness.
              These innovations streamline processes, optimize resource use, and
              boost overall performance in the maritime industry.
            </h5>
            {/* <div className="bg-transparent transition-colors hover:bg-[#751269] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about geothermal</p>
            </div> */}
          </div>

          <div className="content-right w-3/5">
            <img
              src={mo4}
              alt="card-image"
              className="md:h-auto h-auto w-full"
            />
          </div>
        </div>

        {/* OVERLAY CARD 5 */}
        <div className="info-card max-w-screen-2xl bg-[#58001C] mx-auto mt-10 sticky top-0 rounded-lg z-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left">
            <h2 className="md:text-7xl text-4xl font-bold text-[#E21836] md:max-w-[90%] py-10">
              Tailored Approach
            </h2>
            <h5 className="md:text-2xl text-white md:max-w-[90%]">
              Our customized solutions are tailored to address the unique
              challenges of each client and project. By focusing on individual
              needs, we deliver precise, effective strategies that ensure
              optimal outcomes and client satisfaction.
            </h5>
            {/* <div className="bg-transparent transition-colors hover:bg-[#751269] text-white font-semibold hover:text-white my-10 py-2 px-1 border border-white hover:border-transparent rounded flex justify-center items-center max-w-72 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p">learn about geothermal</p>
            </div> */}
          </div>

          <div className="content-right w-3/5">
            <img
              src={mo5}
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
          Safety and Compliance
        </h1>
        <h4 className="text-white max-w-screen-lg tracking-wider text-2xl mx-auto text-center py-5">
          Safety is paramount in all of our maritime operations. We adhere to
          the highest international standards and regulatory frameworks,
          ensuring that every project meets or exceeds compliance requirements.
          Our commitment to safety extends to our workforce, partners, and the
          communities we serve, as we maintain rigorous safety protocols in
          every phase of project execution.
        </h4>

        <div className="max-w-screen-md mx-auto">
          <img src={m1} alt="..." className="w-full my-10 rounded-2xl" />
        </div>
      </div>

      <div className="min-h-screen bg-[#751269] py-14 px-5">
        {/* TEXT CONTENT */}
        <h3 className="text-white font-bold text-2xl text-center tracking-wide">
          building a resilient system
        </h3>
        <h1 className="text-white font font-extrabold lg:text-7xl text-5xl text-center max-w-screen-lg mx-auto py-6">
          Projects and Case Studies
        </h1>
        <h4 className="text-white max-w-screen-lg tracking-wider text-2xl mx-auto text-center py-5">
          We take pride in the successful delivery of numerous high-profile
          maritime projects across the globe. Our portfolio includes major port
          developments, offshore energy installations, and coastal
          infrastructure upgrades, demonstrating our capacity to handle complex,
          large-scale undertakings.
        </h4>

        {/* CARD CONTENT-1 */}
        <div className="max-w-screen-2xl mx-auto mt-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left px-4 flex flex-col items-start text-left">
            <h2 className="md:text-4xl text-2xl font-bold text-white md:max-w-[90%] py-5">
              Port and Terminal Development
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[80%] tracking-wider">
              We specialize in the planning, design, and construction of
              world-class ports and terminals. Our projects are tailored to
              optimize cargo flow and improve port logistics, ensuring smooth
              and efficient operations. We take pride in our ability to develop
              sustainable, future-ready facilities that meet the growing demands
              of global commerce.
            </h5>
            {/* <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">explore our methane management</p>
            </div> */}
          </div>

          <div className="content-right lg:w-[100%]">
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
            <h2 className="md:text-4xl text-2xl text-white font-bold md:max-w-[90%] py-5">
              Marine Engineering and Construction
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[80%] tracking-wider">
              Our marine engineering and construction services focus on
              developing robust and resilient infrastructure, including
              breakwaters, seawalls, and dredging services. Using the latest
              technology and methodologies, we ensure that our projects meet the
              highest standards of safety, reliability, and environmental
              protection.
            </h5>
            {/* <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">see how we use renewable energy</p>
            </div> */}
          </div>

          <div className="content-right lg:w-[100%]">
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
            <h2 className="md:text-4xl text-2xl font-bold text-white md:max-w-[90%] py-5">
              Coastal and Offshore Energy Solutions
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[80%] tracking-wider">
              At SIECORP, we understand the vital role the maritime sector plays
              in the energy industry. Our expertise extends to the development
              of offshore energy infrastructure, including oil & gas platforms,
              wind farms, and subsea cabling. We support clients through every
              phase, from feasibility studies and design to installation and
              commissioning.
            </h5>
            {/* <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">explore our methane management</p>
            </div> */}
          </div>

          <div className="content-right lg:w-[100%]">
            <img
              src={m2}
              alt="card-image"
              className="md:h-auto h-auto w-full rounded-lg"
            />
          </div>
        </div>

        {/* CARD CONTENT-4 */}
        <div className="max-w-screen-2xl mx-auto mt-10 flex md:flex-row-reverse flex-col-reverse md:px-16 px-4 py-12 justify-between items-center">
          <div className="content-left px-4 flex flex-col items-end text-right">
            <h2 className="md:text-4xl text-2xl text-white font-bold md:max-w-[90%] py-5">
              Environmental Impact and Sustainability Initiatives
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[80%] tracking-wider">
              We recognize that sustainable development is the cornerstone of
              the modern maritime industry. Our Maritime Division is at the
              forefront of implementing environmentally responsible practices.
              From reducing the carbon footprint of port operations to enhancing
              the resilience of coastal infrastructure against climate change,
              our solutions are designed with long-term sustainability in mind.
            </h5>
            {/* <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">see how we use renewable energy</p>
            </div> */}
          </div>

          <div className="content-right lg:w-[100%]">
            <img
              src={m3}
              alt="card-image"
              className="md:h-auto h-auto w-full rounded-lg"
            />
          </div>
        </div>

        {/* CARD CONTENT-5 */}
        <div className="max-w-screen-2xl mx-auto mt-10 flex md:flex-row flex-col-reverse md:px-16 px-4 py-12 items-center">
          <div className="content-left px-4 flex flex-col items-start text-left">
            <h2 className="md:text-4xl text-2xl font-bold text-white md:max-w-[90%] py-5">
              Maritime Technology and Smart Port Solutions
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[80%] tracking-wider">
              Embracing digital transformation is essential for the future of
              the maritime sector. We provide cutting-edge technology solutions,
              including automation, AI-driven logistics, and smart port
              management systems, which enhance operational efficiency and
              safety. Our digital solutions help ports streamline operations,
              reduce costs, and enhance their global competitiveness.
            </h5>
            {/* <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">explore our methane management</p>
            </div> */}
          </div>

          <div className="content-right lg:w-[100%]">
            <img
              src={m2}
              alt="card-image"
              className="md:h-auto h-auto w-full rounded-lg"
            />
          </div>
        </div>

        {/* CARD CONTENT-6 */}
        <div className="max-w-screen-2xl mx-auto mt-10 flex md:flex-row-reverse flex-col-reverse md:px-16 px-4 py-12 justify-between items-center">
          <div className="content-left px-4 flex flex-col items-end text-right">
            <h2 className="md:text-4xl text-2xl text-white font-bold md:max-w-[90%] py-5">
              Shipyard and Vessel Maintenance
            </h2>
            <h5 className="md:text-xl text-white md:max-w-[80%] tracking-wider">
              SIECORP offers a full range of shipyard and vessel maintenance
              services. Our expert teams provide retrofitting, repair, and
              maintenance solutions to ensure that vessels operate efficiently
              and meet international standards for safety and performance.
            </h5>
            {/* <div className="bg-transparent text-white font-semibold my-10 py-2 flex justify-center items-center max-w-96 gap-3 cursor-pointer">
              <ArrowRightIcon className="h-5 w-5" />
              <p className="p font-semibold">see how we use renewable energy</p>
            </div> */}
          </div>

          <div className="content-right lg:w-[100%]">
            <img
              src={m3}
              alt="card-image"
              className="md:h-auto h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#3A0D36] py-10 px-5">
        <h2 className="text-5xl font-bold text-[#BA3093] text-center">
          Join Hands with SIECORP
        </h2>
        <h4 className="text-white max-w-screen-lg text-xl mx-auto text-center pt-5 tracking-wider">
          The future of the maritime industry is evolving rapidly, and at
          SIECORP, we are positioned to lead this transformation. Whether you
          are looking to build cutting-edge port facilities, enhance marine
          logistics, or explore offshore energy opportunities, we are here to
          offer expert guidance and comprehensive solutions.<br></br>
          Let’s work together to create sustainable, innovative, and resilient
          maritime infrastructure that supports global trade and growth. For
          inquiries or partnership opportunities, please contact us at maritime
        </h4>
      </div>

      {/* <NewsSlider title="meet our innovators" /> */}

      <Footer />
    </div>
  );
};

export default Maritime;
