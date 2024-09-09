import React from "react";
import Nav from "../components/Nav/Nav";
import darren from "../assets/leaders/Darren Lee Kai PRESIDENT.jpg";
import benjamin from "../assets/leaders/Benjamin Tan Wei CEO.jpg";
import samuel from "../assets/leaders/Samuel Ong CFO.jpg";
import ethan from "../assets/leaders/Ethan Ming COO.jpg";
import marcus from "../assets/leaders/Marcus Wright CTO.jpg";
import sophie from "../assets/leaders/Sophie Müller CHRO.jpg";
import amelia from "../assets/leaders/Amelia Rossi CSO.jpg";
import LeaderCard from "../components/LeaderCard/LeaderCard";
import Footer from "../components/Footer/Footer";

const OurLeadership = () => {
  const leadersData = [
    {
      id: 1,
      dp: darren,
      name: "Darren Lee Kai",
      bgColor: "#3A0D36",
      nColor: "#BA3093",
      position: "PRESIDENT",
      desc: "Darren Lee Kai Wen is the esteemed President of Singapore Infrastructure and Energy Corporation (SIECORP), a leading organization dedicated to advancing sustainable infrastructure and energy solutions in Singapore. With a strong background in engineering and business management, Darren has played a pivotal role in driving the company's growth and innovation. Under his leadership, SIECORP has achieved significant milestones in developing cutting-edge projects that contribute to Singapore's vision of becoming a global leader in green energy and smart infrastructure. Darren is known for his strategic vision, commitment to excellence, and passion for creating a sustainable future.",
    },
    {
      id: 2,
      dp: benjamin,
      name: "Benjamin Tan Wei",
      bgColor: "#003653",
      nColor:"#00B2BD",
      position: "CEO",
      desc: "Benjamin Tan Wei Jie is the dynamic CEO of Singapore Infrastructure and Energy Corporation (SIECORP), where he leads the company in pioneering sustainable infrastructure and energy initiatives across Singapore and the region. With a wealth of experience in both the energy sector and corporate leadership, Benjamin is renowned for his strategic acumen and innovative approach to business. His vision has been instrumental in steering SIECORP toward groundbreaking projects that align with Singapore's ambitious sustainability goals. Under his leadership, SIECORP continues to thrive as a key player in the global push for green energy and resilient infrastructure.",
    },
    {
      id: 3,
      dp: samuel,
      name: "Samuel Ong",
      bgColor: "#58001C",
      nColor:"#E21836",
      position: "CFO",
      desc: " Samuel Ong Kai Xiang serves as the Chief Financial Officer (CFO) of Singapore Infrastructure and Energy Corporation (SIECORP). With a robust background in finance and strategic management, Samuel oversees the financial health and sustainability of the corporation, ensuring that SIECORP remains fiscally strong while pursuing its ambitious projects. His expertise in financial planning, risk management, and investment strategy has been crucial in supporting the company's growth and its mission to drive sustainable infrastructure and energy solutions in Singapore. Samuel is known for his meticulous approach and commitment to financial excellence, playing a vital role in SIECORP's success.",
    },
    {
      id: 4,
      dp: ethan,
      name: "Ethan Ming",
      bgColor: "#0B2D71",
      nColor:"#009DD9",
      position: "COO",
      desc: "Ethan Tan Yu Ming is the Chief Operating Officer (COO) of Singapore Infrastructure and Energy Corporation (SIECORP). With extensive experience in operational management and a deep understanding of the infrastructure and energy sectors, Ethan is responsible for ensuring the seamless execution of SIECORP’s projects. His leadership is marked by a focus on efficiency, innovation, and sustainability, driving the company’s operational excellence. Ethan's strategic oversight and ability to optimize resources have been instrumental in advancing SIECORP’s mission to deliver cutting-edge infrastructure and energy solutions. He is highly regarded for his hands-on approach and commitment to operational success.",
    },
    {
      id: 5,
      dp: marcus,
      name: "Marcus Wright",
      bgColor: "#444B0D",
      nColor:"#B2CC34",
      position: "CTO",
      desc: "Marcus Wright is the CEO of Singapore Infrastructure and Energy Corporation (SIECORP), where he leads the company's strategic direction and oversees its operations in the rapidly evolving infrastructure and energy sectors. With a strong background in engineering and executive leadership, Marcus has a proven track record of driving innovation and growth. His vision for SIECORP focuses on sustainable development and cutting-edge technology, positioning the company as a leader in the global shift towards greener energy solutions. Marcus is known for his forward-thinking approach, dedication to excellence, and commitment to making a positive impact on Singapore's infrastructure landscape.",
    },
    {
      id: 6,
      dp: sophie,
      name: "Sophie Müller",
      bgColor: "#3A0D36",
      nColor: "#BA3093",
      position: "CHRO",
      desc: "Sophie Müller is the Chief Human Resources Officer (CHRO) at Singapore Infrastructure and Energy Corporation (SIECORP). With a distinguished career in human resources spanning across Europ  and Asia, Sophie brings a wealth of experience in talent management, organizational development, and employee engagement. At SIECORP, she is responsible for cultivating a high performance culture, driving diversity and inclusion initiatives, and ensuring that the company attracts and retains top talent. Known for her strategic insight and people-first approach, Sophie plays a crucial role in aligning the workforce with SIECORP’s mission to lead in sustainable infrastructure and energy solutions.",
    },
    {
      id: 7,
      dp: amelia,
      name: "Amelia Rossi",
      bgColor: "#003653",
      nColor:"#00B2BD",
      position: "CSO",
      desc: "Amelia Rossi is the Chief Sustainability Officer (CSO) at Singapore Infrastructure and Energy Corporation (SIECORP). With a deep passion for environmental stewardship and a solid background in sustainability, Amelia leads SIECORP's efforts to integrate sustainable practices across all operations and projects. She is responsible for developing and implementing strategies that minimize the company's environmental impact while driving innovation in green energy and infrastructure. Amelia's leadership is key to advancing SIECORP’s commitment to sustainable development, ensuring that the company not only meets but exceeds global sustainability standards. Her vision and expertise make her a pivotal figure in SIECORP’s journey toward a more sustainable future. ",
    },
  ];

  return (
    <div className="font-suse">
      <Nav bgImage="ol-header-image" />

      {/* NAV title */}
      <div className="w-full bg-white absolute bottom-0 flex flex-col justify-center items-center pb-10">
        <h1 className="lg:text-9xl text-6xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-ol-header-image text-center">
          Our Leadership
        </h1>
        <h5 className="max-w-2xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
          Our culture is built upon the principles of responsibility, trust and
          integrity. Our leadership is a profound source of pride, as we lead in
          the future of energy.
        </h5>
      </div>

      <div className="pb-10 text-center px-4">
        <h2 className="text-4xl font-semibold text-[#0B2D71] tracking-wide pt-6 text-center">
          meet our leaders
        </h2>

        <h4 className="max-w-screen-md mx-auto text-xl py-6 text-center">
          The Board of Directors of Chevron directs the affairs of the
          corporation and is committed to sound principles of corporate
          governance. They bring a proven track record of success across a broad
          range of experiences at the policymaking level in business; expertise
          in science, technology, engineering, research or academia; extensive
          knowledge of governmental, regulatory, legal or public policy issues;
          expertise in finance, financial disclosure or financial accounting;
          experience in global business or international affairs; environmental
          experience; experience leading business transformation; and service on
          public company boards.
        </h4>
      </div>

      <div className="px-5">
      
      </div>

      {leadersData.map((data) => (
        <div key={data.id} className="px-5">
          <LeaderCard data={data} />
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default OurLeadership;
