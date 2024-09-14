import React, { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import i1 from "../assets/infraImages/i-1.jpg";
import i2 from "../assets/infraImages/i-2.jpg";
import i3 from "../assets/infraImages/i-3.png";
import i4 from "../assets/infraImages/i-4.png";
import i5 from "../assets/infraImages/i-5.jpg";
import i6 from "../assets/infraImages/i-6.jpg";
import i7 from "../assets/infraImages/i-7.png";
import i8 from "../assets/infraImages/i-8.png";
import i9 from "../assets/infraImages/i-9.png";
import i10 from "../assets/infraImages/i-10.png";
import i11 from "../assets/infraImages/i-11.jpg";
import Footer from "../components/Footer/Footer";

const Infrastructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="font-suse">
      <div className="relative">
        <Nav bgImage="i-header-image" />

        {/* TRANSPARENT HEADER TEXT */}
        <div className="w-full bg-white absolute bottom-0 pb-8">
          <h1 className="lg:text-[11rem] text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-i-header-image text-center">
            Infrastructure
          </h1>
          <h5 className="max-w-screen-xl mx-auto lg:text-2xl text-lg tracking-wider text-center px-5">
            At SIECORP, we deliver cutting-edge infrastructure solutions that
            transform communities and drive progress. With a focus on
            innovation, precision, and sustainability, we execute projects that
            meet the highest standards of quality and efficiency. From planning
            to completion, our infrastructure expertise ensures long-lasting,
            impactful results that support the growth and development of
            industries worldwide.
          </h5>
        </div>
      </div>

      {/* <div className="min-h-screen bg-[#0B2D71] flex flex-col justify-center items-center gap-8 py-14 px-8">
        <h1 className="text-white font-extrabold text-6xl text-center">
          premium way of development
        </h1>
        <h4 className="text-white max-w-screen-md text-center text-xl">
          Take your business to the next level by partnering with one of our
          iconic global brands. In addition to Chevron station franchising, we
          are looking for visionary partners to license the Texaco® or Caltex®
          brands in fuels retailing or lubricants in manufacturing, sales, and
          marketing.
        </h4>

        <div className="lg:h-96 h-56 px-8">
          <img src={i1} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div> */}

      <div className="">
        <h2 className="text-[#0B2D71] text-center font-bold py-10 text-3xl">
          just our way
        </h2>
        <h1 className="md:text-8xl text-5xl font-extrabold text-[#0B2D71] max-w-[800px] mx-auto text-center">
          work that glorifies the world
        </h1>
        <h5 className="text-2xl max-w-screen-md mx-auto text-center py-14 px-7">
          We’re working to deliver the needs today. To enhance the quality of our operations. And to build the impact on the
          system of tomorrow.
        </h5>
      </div>

      <div className="px-5 py-10 flex flex-col gap-5">
        <div className="min-h-[55vh] bg-[#0B2D71] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#009DD9] md:text-6xl text-5xl font-semibold text-center py-5">
            Buildings & Factories
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i1} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Residential and Commercial Buildings: Design and construction of
                high-rise buildings, commercial complexes, and residential
                townships.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Industrial Structures: Construction of factories, warehouses,
                and industrial facilities.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Healthcare and Educational Institutions: Development of
                hospitals, medical colleges, and educational campuses.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Sports and Recreation Facilities: Construction of sports arenas,
                stadiums, and recreational centers.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#3A0D36] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#BA3093] md:text-6xl text-5xl font-semibold text-center py-5">
            Transportation Infrastructure
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i2} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Roads and Highways: Construction of national and state highways,
                expressways, and rural roads
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Bridges and Flyovers: Design and construction of large-span
                bridges, flyovers, and viaducts.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Railway Infrastructure: Development of railway lines, stations,
                and related facilities, including high-speed rail and metro
                systems.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Airports: Construction and modernization of airport terminals,
                runways, and related infrastructure.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Ports and Harbors: Design and construction of ports, jetties,
                and related marine infrastructure.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#444B0D] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#B2CC34] md:text-6xl text-5xl font-semibold text-center py-5">
            Power Transmission & Distribution
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i3} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Transmission Lines: Construction of high-voltage transmission
                lines for power distribution.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Substations: Design and construction of electrical substations
                for power distribution and control.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Power Distribution Networks: Implementation of power
                distribution systems in urban and rural areas.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#003653] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#00B2BD] md:text-6xl text-5xl font-semibold text-center py-5">
            Water & Effluent Treatment
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i4} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Water Supply Systems: Design and construction of water treatment
                plants, reservoirs, and pipelines.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Sewage Treatment Plants: Development of sewage and effluent
                treatment plants.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Water Desalination: Implementation of desalination plants to
                convert seawater into potable water.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Irrigation Systems: Construction of dams, canals, and irrigation
                infrastructure to support agriculture.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#58001C] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#E21836] md:text-6xl text-5xl font-semibold text-center py-5">
            Renewable Energy Infrastructure
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i5} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Solar Power Plants: Design and construction of large scale solar
                photovoltaic (PV) plants
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Wind Energy Projects: Development of onshore and offshore wind
                farms.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Hydropower Projects: Construction of dams and hydropower
                stations for renewable energy generation.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#0B2D71] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#009DD9] md:text-6xl text-5xl font-semibold text-center py-5">
            Smart Cities & Urban Infrastructure
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i6} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Smart Cities: Development of smart city infrastructure,
                including integrated urban management systems, intelligent
                traffic management, and smart grids.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Urban Transit Systems: Construction of metro rail systems,
                monorails, and bus rapid transit systems (BRTS).
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Urban Development Projects: Development of mixed-use townships,
                commercial zones, and public spaces.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#3A0D36] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#BA3093] md:text-6xl text-5xl font-semibold text-center py-5">
            Heavy Civil Infrastructure
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i7} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Dams and Hydroelectric Projects: Design and construction of
                large dams, hydroelectric plants, and associated tunnels.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Tunnels and Underground Infrastructure: Construction of road,
                rail, and water supply tunnels, as well as underground metro
                systems.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Mining Infrastructure: Development of mining facilities,
                including mineral processing plants and bulk material handling
                systems.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#444B0D] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#B2CC34] md:text-6xl text-5xl font-semibold text-center py-5">
            Environmental Engineering
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i8} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Waste Management: Design and implementation of solid waste
                management systems, including waste-to-energy plants.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Pollution Control Systems: Development of air and water
                pollution control systems for industries and urban areas.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#003653] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#00B2BD] md:text-6xl text-5xl font-semibold text-center py-5">
            Telecom & IT Infrastructure
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i9} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Telecommunication Towers: Construction and maintenance of
                telecom towers for cellular and wireless networks.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Data Centers: Design and construction of data centers for IT and
                telecom companies.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Fiber Optic Networks: Implementation of fiber optic networks for
                high-speed internet and communication services.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#58001C] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#E21836] md:text-6xl text-5xl font-semibold text-center py-5">
            Oil & Gas Infrastructure
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i10} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Refineries and Petrochemical Plants: Design and construction of
                oil refineries and petrochemical plants.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Pipelines: Laying of pipelines for the transportation of oil,
                gas, and other petrochemical products.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Offshore Platforms: Development of offshore drilling platforms
                and related infrastructure.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[55vh] bg-[#3A0D36] max-w-screen-xl rounded-xl mx-auto px-4">
          <h2 className="text-[#BA3093] md:text-6xl text-5xl font-semibold text-center py-5">
            Defence Infrastructure
          </h2>
          <div className="flex lg:flex-row flex-col justify-around items-center md:gap-5 gap-8 py-5 px-5 my-4">
            <div className="flex flex-col gap-4 justify-center items-center w-[70%] h-[70%]">
              <img src={i11} alt="..." className="rounded-lg w-full h-full" />
            </div>

            <ul className="text-white max-w-screen-md lg:px-4 px-1 py-3 flex flex-col gap-3">
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Defence Facilities: Construction of military bases, airfields,
                and naval facilities.
              </li>
              <li className="md:text-2xl text-xl tracking-wider list-disc">
                Aerospace Infrastructure: Development of aerospace manufacturing
                facilities and testing centers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Infrastructure;
