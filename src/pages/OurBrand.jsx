import React from "react";
import ob1 from "../assets/ourBrandImages/ob-1_resized.png";
import ob2 from "../assets/ourBrandImages/ob-2.jpg";
import ob3 from "../assets/ourBrandImages/ob-3_resized.png";
import ob4 from "../assets/ourBrandImages/ob-4_resized.png";
import ob5 from "../assets/ourBrandImages/ob-5_resized.png";
import ob7 from "../assets/ourBrandImages/ob-7.jpg";
import ob6 from "../assets/ourBrandImages/ob-6.jpg";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const OurBrand = () => {
  return (
    <div className="font-suse">
      <div className="relative">
        <Nav bgImage="ob-header-image" />

        <div className="w-full bg-white min-h-[55vh] absolute bottom-0 pb-16 flex flex-col justify-center items-center">
          <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-ob-header-image text-center">
            Our Brand
          </h1>
          <h5 className="max-w-2xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
            Whether we’re fueling cars or advancing the energy system of
            tomorrow, Chevron’s brands set the standard for excellence. With a
            rich history dating back over a century, Chevron’s family of brands
            has built trust and recognition worldwide.
          </h5>
        </div>
      </div>

      <div className="bg-[#0B2D71] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl text-[#009DD9] font-bold">
            {" "}
            Customer Focus
          </h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Teamwork is essential to achieving our goals. We value the diverse
            talents and perspectives of our team members and recognize that
            collaboration drives success. At SIECORP, we work together as one
            cohesive unit, supporting each other, sharing knowledge, and
            celebrating our achievements. We believe that by fostering a
            collaborative environment, we can achieve more together than we ever
            could alone.
          </h4>
        </div>

        <div className="h-96">
          <img src={ob1} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <div className="bg-[#58001C] flex lg:flex-row flex-col justify-around items-center py-14">
        <div className="h-96">
          <img src={ob2} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl font-bold text-[#E21836]">
            Innovation
          </h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Innovation is at the heart of our success. We embrace creativity and
            forward-thinking in everything we do, constantly seeking new ways to
            solve challenges and improve our processes. At SIECORP, we foster a
            culture of innovation where ideas can flourish, and cutting-edge
            solutions are developed. We believe that by staying ahead of
            industry trends and adopting the latest technologies, we can deliver
            superior results that exceed our clients’ expectations
          </h4>
        </div>
      </div>

      <div className="bg-[#3A0D36] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl text-[#BA3093] font-bold">
            Sustainability
          </h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Sustainability is a core principle that drives our approach to
            business. We are committed to minimizing our environmental impact,
            promoting sustainable practices, and contributing to the well-being
            of the communities we serve. At SIECORP, we integrate sustainability
            into our projects and operations, ensuring that our work supports a
            healthy planet for future generations. We believe that by adopting
            responsible practices, we can make a positive difference in the
            world.
          </h4>
        </div>

        <div className="h-96 px-8">
          <img src={ob3} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <div className="bg-[#003653] flex lg:flex-row flex-col justify-around items-center py-14">
        <div className="h-96">
          <img src={ob4} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl text-[#00B2BD] font-bold">
            Excellence
          </h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            At SIECORP, excellence is more than a goal; it’s our standard. From
            the quality of our work to the relationships we build, we pursue
            excellence in every facet of our operations. This commitment ensures
            that we consistently deliver exceptional value and unmatched results
            to our clients. By maintaining a focus on superior quality and
            best-in-class performance, SIECORP continues to set the benchmark
            for success across industries.
          </h4>
        </div>
      </div>

      <div className="bg-[#0B2D71] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl font-bold text-[#009DD9]">
            Integrity
          </h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            Integrity is the foundation of SIECORP’s brand. We believe that
            strong ethics and transparency are crucial to fostering trust with
            our clients, partners, and employees. Our commitment to honesty,
            accountability, and ethical conduct is reflected in every decision
            we make. At SIECORP, we honor our commitments, uphold our values,
            and ensure that our business practices align with the highest
            standards of integrity.
          </h4>
        </div>

        <div className="h-96">
          <img src={ob5} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <div className="bg-[#58001C] flex lg:flex-row flex-col justify-around items-center py-14">
        <div className="h-96 px-8">
          <img src={ob6} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl text-[#E21836] font-bold">
            Global Reach, Local Impact
          </h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            While SIECORP operates on a global scale, we recognize the
            importance of making a positive impact in the communities where we
            work. We take pride in our ability to deliver world-class solutions
            tailored to the unique needs of each region. Whether we’re enhancing
            infrastructure or advancing sustainable energy projects, SIECORP
            remains dedicated to creating meaningful, lasting change for the
            communities we serve.
          </h4>
        </div>
      </div>

      <div className="bg-[#3A0D36] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-2xl px-4 lg:text-left text-center py-4">
          <h3 className="lg:text-6xl text-4xl text-[#BA3093] font-bold">
            Adaptability
          </h3>
          <h4 className="lg:text-xl text-lg py-4 tracking-wider">
            In a rapidly evolving world, adaptability is key to staying ahead.
            SIECORP is built on the ability to respond to change with agility
            and resilience. We are continuously adapting our strategies and
            refining our processes to meet new challenges and opportunities. By
            embracing flexibility, we ensure that SIECORP remains at the
            forefront of innovation and is well-positioned to thrive in any
            environment.
          </h4>
        </div>

        <div className="h-96 px-8">
          <img src={ob7} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurBrand;
