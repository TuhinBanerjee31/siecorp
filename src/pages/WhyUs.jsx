import React, {useEffect} from "react";
import Nav from "../components/Nav/Nav";
import mh1 from "../assets/mh1.jpg";
import mh2 from "../assets/mh2.jpg";
import mh3 from "../assets/mh3.jpg";
import mh4 from "../assets/mh4.jpg";
import mh5 from "../assets/mh5.jpg";
import mh6 from "../assets/mh6.jpg";
import mh7 from "../assets/mh7.jpg";
import wu1 from "../assets/whyUsImages/wu-1.jpg";
import wu2 from "../assets/whyUsImages/wu-2.jpg";
import wu3 from "../assets/whyUsImages/wu-3.jpg";
import wu4 from "../assets/whyUsImages/wu-4.jpg";
import wu5 from "../assets/whyUsImages/wu-5.png";
import wu6 from "../assets/whyUsImages/wu-6.jpg";
import wu7 from "../assets/whyUsImages/wu-7.jpg";
import wu8 from "../assets/whyUsImages/wu-8.jpg";
import wu9 from "../assets/whyUsImages/wu-9.jpg";
import wu10 from "../assets/whyUsImages/wu-10.jpg";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import Footer from "../components/Footer/Footer";

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="font-suse">
      <div className="relative">
        <Nav bgImage="wu-header-image" />

        <div className="w-full bg-white min-h-[55vh] absolute bottom-0 pb-16 flex flex-col justify-center items-center">
          <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-wu-header-image text-center">
            Why Us
          </h1>
          <h5 className="max-w-screen-lg mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
            Choosing SIECORP as your partner in infrastructure and energy
            solutions offers a multitude of advantages, ensuring that your
            projects are executed with excellence, innovation, and
            sustainability.
          </h5>
        </div>
      </div>

      <div className="min-h-screen bg-[#0B2D71] pt-20 px-5">
        <h1 className="lg:text-9xl text-6xl text-white font-bold text-center max-w-screen-xl mx-auto">
          Here’s why siecorp stands out:
        </h1>
        <h5 className="text-white text-xl max-w-screen-md text-center mx-auto tracking-wide py-5">
          Our north star is The Siecorp Way. A set of values that inspires our
          culture. And guides us to get results the right way.
        </h5>

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
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#3A0D36] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Diverse Portfolio: SIECORP’s extensive experience across various
              sectors—ranging from renewable energy to infrastructure
              development—ensures that we bring a deep understanding of
              industry-specific challenges and solutions. Global Reach: With
              operations in numerous countries, SIECORP has the global expertise
              to navigate complex international markets while adapting to local
              conditions and regulations.
            </p>
          </div>

          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu1}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#751269] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Comprehensive Expertise
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#00657E] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu2}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#003653] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Cutting-Edge Technology
              </h2>
            </div>
          </div>

          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Innovation-Driven: SIECORP invests heavily in research and
              development, ensuring that we stay at the forefront of
              technological advancements, offering state-of-the-art solutions in
              renewable energy, smart grids, and industrial automation.
              Digitalization and Automation: Our use of digital twin technology,
              data analytics, and automation ensures that projects are optimized
              for performance, efficiency, and longevity.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#0066B2] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Green Energy Solutions: SIECORP is committed to driving the global
              transition to renewable energy, offering sustainable solutions
              like wind, solar, hydroelectric power, and green hydrogen
              production. Decarbonization Leadership: We are at the forefront of
              decarbonization efforts, providing carbon capture and storage
              (CCS) technologies and emissions reduction solutions to help
              clients meet environmental goals.
            </p>
          </div>

          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu3}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#0B2D71] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Sustainability Commitment
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#E21836] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu4}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#58001C] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Proven Track Record
              </h2>
            </div>
          </div>

          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Successful Projects: SIECORP has a long history of delivering
              successful projects across various sectors, including
              infrastructure, power generation, and industrial applications. Our
              portfolio includes landmark projects that set industry benchmarks.
              Reliable Partnerships: Our reputation for reliability and quality
              has earned us long-term partnerships with governments, leading
              corporations, and industries worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#B2CC34] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              End-to-End Solutions: SIECORP provides complete project lifecycle
              services, from initial consulting and engineering to construction,
              commissioning, and maintenance. Our integrated approach ensures
              seamless project execution. Customization: We tailor our solutions
              to meet the specific needs of our clients, ensuring that every
              project is unique and aligns perfectly with your goals.
            </p>
          </div>

          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu5}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#444B0D] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Comprehensive Services
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#751269] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu6}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#3A0D36] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Strong Financial Stability
              </h2>
            </div>
          </div>

          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Financial Strength: As a globally recognized conglomerate,
              SIECORP’s financial stability ensures that your projects are
              backed by a partner with the resources to manage large-scale,
              complex initiatives. Risk Management: Our robust risk management
              practices and sound financial strategies minimize project risks,
              ensuring successful outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#00657E] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Top-Quality Standards: SIECORP adheres to the highest quality
              standards in every project, ensuring durability, reliability, and
              superior performance. Safety First: We prioritize safety in all
              our operations, ensuring that every project meets stringent safety
              regulations and protects the well-being of all stakeholders.
            </p>
          </div>

          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu7}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#003653] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Commitment to Quality and Safety
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#0066B2] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu8}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#0B2D71] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Global Talent Pool
              </h2>
            </div>
          </div>

          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Expert Team: Our team comprises highly skilled professionals with
              expertise in engineering, project management, technology, and
              more. Their diverse backgrounds and experiences drive innovation
              and excellence in every project. Continuous Learning: SIECORP
              invests in the continuous development of our workforce, ensuring
              they are equipped with the latest knowledge and skills to meet
              evolving industry demands.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#E21836] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              Sustainable Growth: SIECORP is committed to creating long-term
              value for our clients, communities, and stakeholders. Our focus on
              sustainability, innovation, and social responsibility ensures that
              we contribute positively to society and the environment.
            </p>
          </div>

          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu9}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#58001C] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Long-Term Vision
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-16">
        {/* <!-- Card Container --> */}
        <div className="bg-[#B2CC34] text-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg max-w-screen-2xl">
          {/* <!-- Image Section --> */}
          <div className="relative">
            <img
              src={wu10}
              alt="siecorp Image"
              className="object-cover h-full w-full"
            />
            <div className="h-[30%] absolute bottom-0 left-0 p-6 bg-[#444B0D] text-white w-full flex justify-center items-center">
              <h2 className="md:text-5xl text-3xl font-bold text-center">
                Future-Ready Solutions
              </h2>
            </div>
          </div>

          {/* <!-- Text Section --> */}
          <div className="md:p-8 p-4 flex justify-center items-center">
            <p className="md:text-2xl text-xl mb-6">
              We design our projects with the future in mind, ensuring that our
              solutions are scalable, adaptable, and ready to meet the
              challenges of tomorrow. By choosing SIECORP, you are partnering
              with a leader in innovation, sustainability, and excellence. Our
              commitment to delivering world-class solutions, coupled with our
              extensive experience and global expertise, makes us the ideal
              choice for your infrastructure and energy needs.
            </p>
          </div>
        </div>
      </div>

      <NewsSlider title="latest at siecorp" />

      <Footer />
    </div>
  );
};

export default WhyUs;
