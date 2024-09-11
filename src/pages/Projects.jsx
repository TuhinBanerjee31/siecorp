import React from "react";
import Nav from "../components/Nav/Nav";
import p1 from "../assets/p-1.jpg";
import Footer from "../components/Footer/Footer";

const Projects = () => {
  return (
    <div className="font-suse">
      <Nav bgImage="p-header-image" />

      {/* TRANSPARENT HEADER TEXT */}
      <div className="w-full bg-white absolute bottom-0 pb-8 animate__animated animate__slideInUp">
        <h1 className="lg:text-9xl text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-p-header-image text-center">
          Projects Undertaken By The Siecorp
        </h1>
      </div>

      <div className="bg-[#0B2D71] flex-row items-center py-14">
        <div className="flex lg:flex-row flex-col justify-around max-w-screen-2xl mx-auto gap-10 px-4">
          <img src={p1} alt="..." className="h-96 min-w-96 rounded-2xl" />
          <div className="max-w-screen-md py-4 flex flex-col gap-3 self-end">
            <h3 className="lg:text-6xl text-4xl text-[#009DD9] font-bold">
              Jawa-1 Power Plant (Indonesia)
            </h3>
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Location: Cilamaya, West Java, Indonesia
            </h2>
            <h4 className="text-white text-lg tracking-wide">
              The Jawa-1 Power Plant is a major infrastructure project in
              Indonesia, located in Cilamaya, Karawang Regency, West Java. It is
              one of the largest gas-fired power plants in Southeast Asia,
              playing a crucial role in enhancing Indonesia's energy security.
            </h4>
          </div>
        </div>

        <ul className="lg:text-lg text-white max-w-screen-2xl px-4 mx-auto text-base py-10 tracking-wider flex flex-col gap-4">
          <li className="list-disc">
            Capacity: With an installed capacity of 1,760 megawatts (MW), the
            Jawa-1 Power Plant significantly contributes to the electricity
            supply in Java and Bali, regions that are central to Indonesia's
            economy.
          </li>
          <li className="list-disc">
            Technology: The plant employs combined-cycle gas turbine (CCGT)
            technology, known for its high efficiency and reduced carbon
            emissions compared to traditional coal-fired plants. This technology
            uses both gas and steam turbines, maximizing energy utilization.
          </li>
          <li className="list-disc">
            Fuel Source: The power plant is fueled by liquefied natural gas
            (LNG), sourced through an innovative floating storage and
            regasification unit (FSRU) offshore. This FSRU is the first of its
            kind in Indonesia, providing operational flexibility and
            reliability.
          </li>
          <li className="list-disc">
            Contractors: The construction of the Jawa-1 Power Plant involved
            several key contractors, including SIECORP, a notable player in the
            engineering and construction industry. SIECORP played a vital role
            in ensuring the project's success by delivering high-quality
            infrastructure and technical expertise.
          </li>
          <li className="list-disc">
            Ownership and Operation: The plant is developed and operated by PT
            Pertamina Power Indonesia, in partnership with Japan's Marubeni
            Corporation and Sojitz Corporation. It aligns with Indonesia's
            strategic goal of diversifying its energy mix and reducing reliance
            on coal.
          </li>
          <li className="list-disc">
            Environmental Impact: The Jawa-1 Power Plant is designed with
            sustainability in mind, featuring advanced emission control systems
            and adherence to international environmental standards. It is
            expected to significantly lower greenhouse gas emissions by
            replacing older, less efficient power generation methods.
          </li>
          <li className="list-disc">
            Timeline: Construction began in 2018, with commercial operations
            commencing in 2021. Despite challenges such as the COVID-19
            pandemic, the project was completed within the revised schedule.
          </li>
          <li className="list-disc">
            Strategic Importance: The plant is a crucial element of Indonesia's
            national energy plan, contributing to the target of 35,000 MW of new
            power generation capacity. It also plays a key role in stabilizing
            the power grid in Java, where electricity demand is steadily
            increasing.
          </li>
          <li className="list-disc">
            The involvement of SIECORP, along with other major players,
            underscores the collaborative efforts required to execute such a
            large scale project, which is pivotal to Indonesia's ongoing energy
            transition.
          </li>
        </ul>
        {/* <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Teamwork is essential to achieving our goals. We value the diverse
            talents and perspectives of our team members and recognize that
            collaboration drives success. At SIECORP, we work together as one
            cohesive unit, supporting each other, sharing knowledge, and
            celebrating our achievements. We believe that by fostering a
            collaborative environment, we can achieve more together than we ever
            could alone.
          </h4> */}
      </div>

      <div className="bg-[#3A0D36] flex-row items-center py-14">
        <div className="flex lg:flex-row-reverse flex-col justify-around max-w-screen-2xl mx-auto gap-10 px-4">
          <img src={p1} alt="..." className="h-96 min-w-96 rounded-2xl" />
          <div className="max-w-screen-md py-4 flex flex-col gap-3 self-end">
            <h3 className="lg:text-6xl text-4xl text-[#BA3093] font-bold">
              Nghi Son 2 Thermal Power Plant
            </h3>
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Location: Thanh Hóa Province, Vietnam
            </h2>
            <h4 className="text-white text-lg tracking-wide">
              The Jawa-1 Power Plant is a major infrastructure project in
              Indonesia, located in Cilamaya, Karawang Regency, West Java. It is
              one of the largest gas-fired power plants in Southeast Asia,
              playing a crucial role in enhancing Indonesia's energy security.
            </h4>
          </div>
        </div>

        <ul className="lg:text-lg text-white max-w-screen-2xl px-4 mx-auto text-base py-10 tracking-wider flex flex-col gap-4">
          <li className="list-disc">
            Capacity: With an installed capacity of 1,760 megawatts (MW), the
            Jawa-1 Power Plant significantly contributes to the electricity
            supply in Java and Bali, regions that are central to Indonesia's
            economy.
          </li>
          <li className="list-disc">
            Technology: The plant employs combined-cycle gas turbine (CCGT)
            technology, known for its high efficiency and reduced carbon
            emissions compared to traditional coal-fired plants. This technology
            uses both gas and steam turbines, maximizing energy utilization.
          </li>
          <li className="list-disc">
            Fuel Source: The power plant is fueled by liquefied natural gas
            (LNG), sourced through an innovative floating storage and
            regasification unit (FSRU) offshore. This FSRU is the first of its
            kind in Indonesia, providing operational flexibility and
            reliability.
          </li>
          <li className="list-disc">
            Contractors: The construction of the Jawa-1 Power Plant involved
            several key contractors, including SIECORP, a notable player in the
            engineering and construction industry. SIECORP played a vital role
            in ensuring the project's success by delivering high-quality
            infrastructure and technical expertise.
          </li>
          <li className="list-disc">
            Ownership and Operation: The plant is developed and operated by PT
            Pertamina Power Indonesia, in partnership with Japan's Marubeni
            Corporation and Sojitz Corporation. It aligns with Indonesia's
            strategic goal of diversifying its energy mix and reducing reliance
            on coal.
          </li>
          <li className="list-disc">
            Environmental Impact: The Jawa-1 Power Plant is designed with
            sustainability in mind, featuring advanced emission control systems
            and adherence to international environmental standards. It is
            expected to significantly lower greenhouse gas emissions by
            replacing older, less efficient power generation methods.
          </li>
          <li className="list-disc">
            Timeline: Construction began in 2018, with commercial operations
            commencing in 2021. Despite challenges such as the COVID-19
            pandemic, the project was completed within the revised schedule.
          </li>
          <li className="list-disc">
            Strategic Importance: The plant is a crucial element of Indonesia's
            national energy plan, contributing to the target of 35,000 MW of new
            power generation capacity. It also plays a key role in stabilizing
            the power grid in Java, where electricity demand is steadily
            increasing.
          </li>
          <li className="list-disc">
            The involvement of SIECORP, along with other major players,
            underscores the collaborative efforts required to execute such a
            large scale project, which is pivotal to Indonesia's ongoing energy
            transition.
          </li>
        </ul>
        {/* <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Teamwork is essential to achieving our goals. We value the diverse
            talents and perspectives of our team members and recognize that
            collaboration drives success. At SIECORP, we work together as one
            cohesive unit, supporting each other, sharing knowledge, and
            celebrating our achievements. We believe that by fostering a
            collaborative environment, we can achieve more together than we ever
            could alone.
          </h4> */}
      </div>

      <div className="bg-[#003653] flex-row items-center py-14">
        <div className="flex lg:flex-row flex-col justify-around max-w-screen-2xl mx-auto gap-10 px-4">
          <img src={p1} alt="..." className="h-96 min-w-96 rounded-2xl" />
          <div className="max-w-screen-md py-4 flex flex-col gap-3 self-end">
            <h3 className="lg:text-6xl text-4xl text-[#00B2BD] font-bold">
              Boundary Dam Carbon Capture Project
            </h3>
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Location: Saskatchewan, Canada
            </h2>
            <h4 className="text-white text-lg tracking-wide">
              The Boundary Dam Carbon Capture Project is a landmark initiative
              located in Estevan, Saskatchewan, Canada. It is one of the world's
              first large-scale carbon capture and storage (CCS) projects
              integrated into a coal-fired power plant, marking a significant
              advancement in reducing greenhouse gas emissions from fossil
              fuel-based energy production.
            </h4>
          </div>
        </div>

        <ul className="lg:text-lg text-white max-w-screen-2xl px-4 mx-auto text-base py-10 tracking-wider flex flex-col gap-4">
          <li className="list-disc">
            Project Overview: The Boundary Dam Carbon Capture Project involved
            the retrofitting of Unit 3 at the Boundary Dam Power Station,
            transforming it into a highly efficient and low-emission power
            generator. The project captures approximately 90% of the carbon
            dioxide (CO2) emissions from the plant, equating to around 1 million
            tonnes of CO2 annually.
          </li>
          <li className="list-disc">
            Technology: The project employs advanced amine-based carbon capture
            technology, which captures CO2 from the flue gas produced during
            coal combustion. The captured CO2 is then compressed and transported
            via pipeline to nearby oil fields for enhanced oil recovery (EOR) or
            sequestered in deep geological formations, preventing it from
            entering the atmosphere.
          </li>
          <li className="list-disc">
            Environmental Impact: In addition to capturing CO2, the project also
            significantly reduces other pollutants such as sulfur dioxide (SO2)
            and nitrogen oxides (NOx), contributing to improved air quality. The
            captured CO2 used for EOR also helps in increasing oil production,
            adding economic value while mitigating environmental impacts.
          </li>
          <li className="list-disc">
            Contractors: The development and construction of the Boundary Dam
            Carbon Capture Project involved several key contractors, including
            SIECORP, which was instrumental in the engineering, procurement, and
            construction processes. SIECORP's contribution was crucial in
            achieving the project's high standards of performance and
            reliability.
          </li>
          <li className="list-disc">
            Ownership and Operation: The project is owned and operated by
            SaskPower, Saskatchewan’s principal electric utility. SaskPower’s
            initiative reflects its commitment to reducing its carbon footprint
            and supporting Canada’s broader climate change goals.
          </li>
          <li className="list-disc">
            Innovation and Legacy: The Boundary Dam Carbon Capture Project is a
            pioneering effort that has set a global benchmark for CCS
            technology. It serves as a model for future projects, demonstrating
            that CCS can be effectively integrated into existing power plants to
            significantly reduce carbon emissions.
          </li>
          <li className="list-disc">
            Timeline: The project was officially launched in 2014, after several
            years of planning, development, and construction. It represents a
            major milestone in the global fight against climate change and a
            critical step forward for the CCS industry.
          </li>
          <li className="list-disc">
            The involvement of SIECORP in the Boundary Dam Carbon Capture
            Project highlights the company's expertise in delivering complex and
            innovative energy projects. Their role was essential in bringing
            this groundbreaking project to fruition, contributing to a more
            sustainable and environmentally responsible future.
          </li>
        </ul>
      </div>

      <div className="bg-[#58001C] flex-row items-center py-14">
        <div className="flex lg:flex-row-reverse flex-col justify-around max-w-screen-2xl mx-auto gap-10 px-4">
          <img src={p1} alt="..." className="h-96 min-w-96 rounded-2xl" />
          <div className="max-w-screen-md py-4 flex flex-col gap-3 self-end">
            <h3 className="lg:text-6xl text-4xl text-[#E21836] font-bold">
              Kaleshwaram Lift Irrigation Project
            </h3>
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Location: Telangana, India
            </h2>
            <h4 className="text-white text-lg tracking-wide">
              The Kaleshwaram Lift Irrigation Project (KLIP) is one of the
              largest and most complex multi-purpose irrigation projects in
              India. Located in the state of Telangana, this project aims to
              harness the water from the Godavari River to irrigate the
              drought-prone regions of Telangana. It was designed to address the
              challenges of water scarcity in the region and to boost
              agriculture, provide drinking water, and support industrial
              development.
            </h4>
          </div>
        </div>

        <ul className="lg:text-lg text-white max-w-screen-2xl px-4 mx-auto text-base py-10 tracking-wider flex flex-col gap-4">
          <li className="list-disc">
            Water Source: The project taps into the Godavari River, India's
            second-longest river, at Medigadda in Telangana.
          </li>
          <li className="list-disc">
            Water Lift: The project is unique for its water-lifting
            capabilities, where water is lifted to a height of about 618 meters
            using a series of reservoirs, tunnels, and pumps. It involves
            several stages of water lifting across a distance of around 500
            kilometers.
          </li>
          <li className="list-disc">
            Infrastructure: The KLIP includes numerous pump houses, extensive
            canal systems, tunnels, and underground pipelines, enabling water to
            be distributed over vast areas. The project also incorporates a
            network of barrages, which helps in storing and controlling the flow
            of water.
          </li>
          <li className="list-disc">
            Irrigation Coverage: Upon completion, the project is expected to
            irrigate around 18.25 lakh acres (approximately 7.39 lakh hectares)
            of land in 13 districts of Telangana.
          </li>
          <li className="list-disc">
            Drinking Water Supply: Apart from irrigation, the project also aims
            to provide drinking water to various towns and villages and supply
            water to Hyderabad, the capital city of Telangana.
          </li>
          <li className="list-disc">
            Power Generation: The project also contributes to hydropower
            generation, supporting the state's energy needs.
          </li>
          <li className="list-disc">
            SIECORP was one of the contractors involved in the establishment of
            the Kaleshwaram Lift Irrigation Project. The company's expertise in
            engineering and construction was instrumental in developing critical
            components of the project, including the design and installation of
            key infrastructure such as pump houses and pipelines. SIECORP's
            participation was crucial in ensuring that the project was executed
            efficiently, meeting the stringent timelines and quality standards
            required for such a massive and technically challenging undertaking.
            Their contribution played a significant role in the successful
            implementation of the project, which is now seen as a landmark
            achievement in Indian irrigation and water resource management.
          </li>
        </ul>
      </div>

      <div className="bg-[#444B0D] flex-row items-center py-14">
        <div className="flex lg:flex-row flex-col justify-around max-w-screen-2xl mx-auto gap-10 px-4">
          <img src={p1} alt="..." className="h-96 min-w-96 rounded-2xl" />
          <div className="max-w-screen-md py-4 flex flex-col gap-3 self-end">
            <h3 className="lg:text-6xl text-4xl text-[#B2CC34] font-bold">
              Rostov Nuclear Power Plant Units 3 and 4
            </h3>
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Location: Volgodonsk, Russia
            </h2>
            <h4 className="text-white text-lg tracking-wide">
              The Rostov Nuclear Power Plant is a prominent nuclear power
              facility located near Volgodonsk in the Rostov Oblast, Russia. It
              is one of the key components of Russia’s nuclear energy
              infrastructure and plays a significant role in supplying
              electricity to the southern regions of the country.
            </h4>
          </div>
        </div>

        <ul className="lg:text-lg text-white max-w-screen-2xl px-4 mx-auto text-base py-10 tracking-wider flex flex-col gap-4">
          <li className="list-disc">
            Capacity: The Rostov Nuclear Power Plant consists of four reactor
            units, each with a capacity of 1,000 megawatts (MW), providing a
            total installed capacity of 4,000 MW. This makes it one of the
            largest power plants in the region, contributing substantially to
            Russia’s overall energy grid.
          </li>
          <li className="list-disc">
            Reactor Technology: The plant utilizes VVER-1000 pressurized water
            reactors, a type of reactor that is known for its safety features
            and reliability. These reactors are part of the VVER series, which
            has been widely deployed in Russia and internationally due to their
            proven performance and safety record.
          </li>
          <li className="list-disc">
            Energy Output: The Rostov Nuclear Power Plant generates
            approximately 30 billion kilowatt-hours (kWh) of electricity
            annually, supplying power to millions of homes and businesses in
            southern Russia. It is a crucial asset for meeting the region’s
            growing energy demands.
          </li>
          <li className="list-disc">
            Safety Measures: The plant is equipped with advanced safety systems,
            including multiple layers of physical barriers, automated control
            systems, and emergency response protocols. These measures are
            designed to prevent the release of radioactive materials and ensure
            the safe operation of the plant under all conditions.
          </li>
          <li className="list-disc">
            Environmental Impact: As a nuclear facility, the Rostov Nuclear
            Power Plant produces no greenhouse gas emissions during electricity
            generation, making it a key contributor to reducing the carbon
            footprint of Russia’s energy sector. The plant also adheres to
            stringent environmental regulations to minimize its impact on the
            surrounding ecosystem.
          </li>
          <li className="list-disc">
            Contractors: The construction and development of the Rostov Nuclear
            Power Plant involved several key contractors, including SIECORP,
            which provided critical engineering, procurement, and construction
            services. SIECORP's involvement was vital in ensuring the timely
            completion and operational readiness of the plant's units.
          </li>
          <li className="list-disc">
            Ownership and Operation: The plant is owned and operated by
            Rosenergoatom, a subsidiary of Russia’s state nuclear corporation,
            Rosatom. Rosenergoatom is responsible for the safe and efficient
            operation of all nuclear power plants in Russia, and the Rostov
            plant is a flagship in their portfolio.
          </li>
          <li className="list-disc">
            Timeline: The construction of the Rostov Nuclear Power Plant began
            in the early 1980s, with the first unit becoming operational in
            2001. The subsequent units were commissioned over the following
            years, with the final unit, Unit 4, being completed in 2017. The
            plant now operates at full capacity, contributing significantly to
            the region's power supply.
          </li>
          <li className="list-disc">
            The involvement of SIECORP in the Rostov Nuclear Power Plant
            underscores the company's capabilities in handling large-scale and
            complex infrastructure projects. Their expertise was crucial in the
            successful establishment of this vital energy facility, which
            continues to be a cornerstone of Russia's nuclear energy strategy.
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
