import React, { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import e1 from "../assets/energyImage/e-1.png";
import e2 from "../assets/energyImage/e-2.png";
import e3 from "../assets/energyImage/e-3.png";
import e4 from "../assets/energyImage/e-4.png";
import e5 from "../assets/energyImage/e-5.png";
import e6 from "../assets/energyImage/e-6.png";
import e7 from "../assets/energyImage/e-7.jpg";
import e8 from "../assets/energyImage/e-8.png";
import e9 from "../assets/energyImage/e-9.png";
import e10 from "../assets/energyImage/e-10.png";
import EnergyCard from "../components/EnergyCard/EnergyCard";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import Footer from "../components/Footer/Footer";

const Energy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const card1 = {
    cardImage: e1,
    initialp: "flex-row",
    partialp: "flex-col",
    bgColor: "#0B2D71",
    titleColor: "#009DD9",
  };
  return (
    <div className="font-suse">
      <div className="relative">
        <Nav bgImage="e-header-image" />

        <div className="w-full bg-white pb-24 absolute bottom-0">
          <h1 className="lg:text-9xl text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-e-header-image text-center">
            Energy Solutions
          </h1>
          <h5 className="max-w-screen-xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
            SIECORP is at the forefront of delivering advanced energy solutions
            that power a sustainable future. We specialize in renewable energy,
            innovative technologies, and efficient systems that reduce
            environmental impact while meeting global energy demands. Our
            commitment to innovation and sustainability ensures that our energy
            solutions drive progress and create long-term value for industries
            and communities alike
          </h5>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e1}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#009DD9]">
            Power Generation
          </h2>
          <p className="mb-4 text-lg md:w-[90%]">
            Gas Turbines: SIECORP designs, manufactures, and services gas
            turbines for power plants, offering high-efficiency solutions for
            electricity generation.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Steam Turbines: They provide steam turbines for power generation in
            fossil fuel plants, nuclear power plants, and industrial
            applications.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Generators: SIECORP offers a range of generators tailored for
            various types of power plants, ensuring reliable and efficient power
            output.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e2}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#003653] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#00B2BD] text-right md:w-[90%]">
            Wind Energy
          </h2>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Onshore Wind Turbines: SIECORP, they offer wind turbines designed
            for onshore installations, providing end-to-end solutions from
            design to maintenance.
          </p>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Offshore Wind Turbines: SIECORP is a leader in offshore wind,
            delivering advanced turbine technology, installation, and long-term
            service solutions for offshore wind farms.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e3}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#009DD9]">
            Transmission & Distribution High-Voltage Products
          </h2>
          <p className="mb-4 text-lg md:w-[90%]">
            SIECORP provides high-voltage transmission products, including
            transformers, circuit breakers, and switchgear for efficient and
            reliable power distribution.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Grid Stabilization: They offer solutions for grid stabilization,
            including Static VAR Compensators (SVCs) and Flexible AC
            Transmission Systems (FACTS), which help maintain grid stability in
            the face of fluctuating power supply and demand.
          </p>
          {/* <p className="mb-4 text-lg md:w-[90%]">
            Smart Grids: SIECORP is involved in developing smart grid
            technologies that enhance the efficiency and reliability of
            electricity distribution, integrating renewable energy sources with
            traditional power systems.
          </p> */}
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e4}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#3A0D36] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#BA3093] text-right md:w-[90%]">
            Solar Power
          </h2>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Solar Photovoltaic (PV) Systems: They offer components and services
            for large-scale solar PV installations, including inverters and grid
            connection solutions.
          </p>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Solar Thermal Power Plants: SIECORP provides technology for
            Concentrated Solar Power (CSP) plants, where solar energy is used to
            generate steam for electricity production.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e5}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#009DD9]">
            Industrial Applications
          </h2>
          <p className="mb-4 text-lg md:w-[90%]">
            Electrification Solutions: SIECORP provides comprehensive
            electrification solutions for industries, including power supply
            systems, automation, and digitalization services to optimize energy
            use in industrial operations.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Energy Storage: They offer energy storage solutions, including
            battery storage systems and thermal energy storage, to help
            industries manage energy demand and integrate renewable energy
            sources.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e6}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#003653] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#00B2BD] text-right md:w-[90%]">
            Nuclear Energy
          </h2>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Nuclear Power Plant Services: SIECORP provides a range of services
            for nuclear power plants, including engineering, procurement,
            construction, and maintenance. They also supply instrumentation and
            control systems, turbine generators, and other critical components
            for nuclear facilities.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e7}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#009DD9]">
            Decarbonization and Environmental Solutions
          </h2>
          <p className="mb-4 text-lg md:w-[90%]">
            Carbon Capture and Storage (CCS): SIECORP is involved in developing
            and implementing carbon capture and storage technologies to reduce
            CO2 emissions from industrial and power generation processes.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Hydrogen Solutions: SIECORP is advancing the production, storage,
            and utilization of hydrogen as a clean energy source, including
            electrolysis technology for green hydrogen production.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Emissions Reduction: They offer solutions to reduce emissions from
            power plants and industrial operations, including advanced
            combustion technologies and flue gas cleaning systems.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e8}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#3A0D36] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#BA3093] text-right md:w-[90%]">
            Digitalization and Automation
          </h2>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Digital Twin and Simulation: SIECORP offers digital twin technology,
            which creates virtual models of power plants and energy systems to
            optimize performance and predict maintenance needs.
          </p>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Automation Solutions: They provide automation and control systems
            for power plants and industrial facilities, enhancing efficiency and
            reliability through advanced monitoring and control technologies.
          </p>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Data Analytics: SIECORP uses data analytics and artificial
            intelligence to improve energy management, optimize operations, and
            enhance decision-making processes across energy sectors.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e9}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#0B2D71] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#009DD9]">
            Service and Maintenance Long-Term Service Agreements
          </h2>
          <p className="mb-4 text-lg md:w-[90%]">
            SIECORP offers comprehensive service agreements that include
            preventive maintenance, inspections, upgrades, and repairs for power
            plants and energy systems.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Remote Monitoring and Diagnostics: They provide remote monitoring
            services that allow for real time diagnostics and troubleshooting,
            helping to prevent downtime and optimize performance.
          </p>
          <p className="mb-4 text-lg md:w-[90%]">
            Retrofit and Modernization: SIECORP also offers retrofit and
            modernization services to extend the life of existing power plants,
            improve efficiency, and reduce emissions.
          </p>
        </div>
      </div>

      <div className="flex max-w-screen-2xl mx-auto flex-col-reverse md:flex-row-reverse items-stretch bg-white p-6">
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={e10}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-r-lg rounded-b-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:w-1/2 bg-[#003653] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-l-lg rounded-t-lg">
          <h2 className="text-5xl font-bold mb-4 text-[#00B2BD] text-right md:w-[90%]">
            Consulting and Engineering Energy Consulting
          </h2>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            SIECORP provides consulting services for energy projects, including
            feasibility studies, environmental impact assessments, and
            regulatory compliance.
          </p>
          <p className="mb-4 text-lg md:w-[90%] text-right">
            Project Engineering and Management: They offer engineering,
            procurement, and construction (EPC) services for energy
            infrastructure projects, managing all phases from design to
            commissioning.
          </p>
        </div>
      </div>

      <NewsSlider title="energy in action" />

      <Footer />
    </div>
  );
};

export default Energy;
