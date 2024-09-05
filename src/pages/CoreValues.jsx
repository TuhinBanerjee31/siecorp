import React from "react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/siecorp_logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./test.css";
import {Navigation } from "swiper/modules";
import testImage from "../assets/ct-2.jpg";
import Footer from "../components/Footer/Footer";

const CoreValues = () => {
  // NAVBAR-CONTENTS
  function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
          onMouseEnter={() => setStatus(false)}
          // onMouseLeave={() => setStatus(true)}
        >
          <a href="#" className=" flex items-center p transition-colors">
            who we are
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            what we do
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            sustainability
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            investors
          </a>
        </Typography>
      </ul>
    );
  }

  function NavList2() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center transition-colors p">
            careers
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center transition-colors p">
            newsroom
          </a>
        </Typography>
      </ul>
    );
  }

  function NavListMerge() {
    return (
      <ul className="my-2 pt-5 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="black"
          className="nav1 p-1 font-medium"
          onMouseEnter={() => setStatus(false)}
        >
          <a href="#" className="flex items-center p transition-colors">
            who we are
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            what we do
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            sustainability
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            investors
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center transition-colors p">
            careers
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center transition-colors p">
            newsroom
          </a>
        </Typography>
      </ul>
    );
  }

  const [openNav, setOpenNav] = React.useState(false);
  const [status, setStatus] = React.useState(true);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="min-h-screen text-black font-suse">
      <div
        id="hover-sheet1"
        className={`min-h-screen bg-[#0A3277] lg:w-[45%] w-full absolute z-10 transition-colors ${
          status ? "hidden" : "block"
        } ${status ? "" : "hover:block"}`}
      >
        <XMarkIcon
          className="h-8 absolute right-0 bottom-[40%] cursor-pointer text-black mr-2 z-40"
          onClick={() => setStatus(true)}
        />

        <div className="nav-content font-suse absolute bottom-[30%] text-center px-6 w-[90%] flex flex-col">
          <NavLink
            to={"/core-values"}
            className="lg:text-5xl text-3xl text-black font-light tracking-wider p pt-5"
          >
            core values
          </NavLink>
          <NavLink
            to={"/our-brand"}
            className="lg:text-5xl text-3xl text-black font-light tracking-wider p pt-5"
          >
            our brand
          </NavLink>
          <NavLink
            to={"/our-leadership"}
            className="lg:text-5xl text-3xl text-black font-light tracking-wider p pt-5"
          >
            our leadership
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="lg:text-5xl text-3xl text-black font-light tracking-wider p pt-5"
          >
            contact us
          </NavLink>
        </div>
      </div>

      {/* NAVBAR */}
      <Navbar className="mx-auto max-w-screen-2xl bg-transparent backdrop-saturate-100 shadow-none border-0 backdrop-blur-none py-3 z-20 relative">
        <div className="flex items-center justify-between text-black">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="md:w-12 w-10 md:h-10 h-5 mr-36">
            <img src={logo} alt="Siecorp" />
          </div>

          <div className="hidden lg:block">
            <NavList2 />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-10 w-8 mt-4" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-10 w-8 mt-4" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <NavListMerge />
        </Collapse>
      </Navbar>

      {/* Header Image */}
      <div className="min-h-[70vh] bg-cv-header-image bg-cover bg-no-repeat max-w-screen-2xl mx-auto my-10"></div>

      {/* CONTENT AREA */}
      <div className="content-info min-h-screen max-w-screen-md mx-auto px-10">
        <h5 className="text-[#0B2D71] text-2xl font-semibold">culture</h5>
        <h1 className="text-6xl font-bold text-[#0B2D71]">
          our employees put values into action
        </h1>
        <h4 className="text-xl py-10 tracking-wider">
          We’re a global team united by a shared set of values, called The
          Chevron Way. From our volunteering initiatives to our commitment to
          diversity and inclusion, you’ll see that our values are so much more
          than words on a screen – they’re our way of life.
        </h4>
        <h5 className="text-[#0066B2] font-semibold text-center text-xl py-10">
          learn more about the chevron way{" "}
        </h5>
        <h1 className="text-4xl font-bold text-[#0B2D71]">
          volunteering around the world
        </h1>
        <h4 className="text-xl py-10 tracking-wider">
          In countries around the world, Chevron employees are applying their
          skills, experience and energy in volunteer activities that help
          improve education, provide basic needs, foster new business
          opportunities and ultimately strengthen the communities in which we
          operate.
        </h4>
      </div>

      {/* Slider Area */}
      <div className="my-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-[100%] h-[100%]"
        >
          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Chevron’s Anar Aitekenova is pictured conducting a cooking class
                at Almaty orphanage in Kazakhstan.
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Members of Chevron Knitting Club presented almost 100 warm
                vests, hats and scarves to children from the Almaty orphanage
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Tengizchevroil employees and their families joined the campaign
                ‘Plant a tree,’ organized by the Yntymak Volunteer Organization,
                at the Speech Impaired School in Atyrau, Kazakhstan.
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Sightings of olive ridley sea turtles were reported soon after
                300 Chevron volunteers and residents held the 10th annual
                coastal clean-up along the terminal coastline in San Pascual,
                Batangas, in the Philippines. About 2.4 tons of litter was
                cleared from the beach
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                In October 2018, the International Products’ leadership team
                visited local food charity, Food from the Heart. A total of 19
                volunteers dedicated their time to packing 183 food packs that
                were sent to families and school children across Singapore
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto"> 
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                As part of their team-building efforts, the International
                Products’ Legal team of 29 volunteers contributed 101.5
                volunteer hours to Willing Hearts, a soup kitchen that provides
                meals to some 5,000 Singaporeans in need.
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Chevron employees contributed their time to tree planting and
                beautification of the landscape of Orphanage #10 in Almaty.
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* MIDDLE CONTENT AREA */}
      <div className="max-w-screen-md mx-auto px-10">
        <h1 className="text-4xl font-bold text-[#0B2D71]">chevron humankind</h1>
        <h4 className="text-xl py-10 tracking-wider">
          Through Chevron Humankind, employees, retirees and contractors in the
          United States provide support for their communities throughout the
          year.
        </h4>
      </div>

      {/* Slider Area */}
      <div className="my-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-[100%] h-[100%]"
        >
          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Chevron’s Anar Aitekenova is pictured conducting a cooking class
                at Almaty orphanage in Kazakhstan.
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Members of Chevron Knitting Club presented almost 100 warm
                vests, hats and scarves to children from the Almaty orphanage
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Tengizchevroil employees and their families joined the campaign
                ‘Plant a tree,’ organized by the Yntymak Volunteer Organization,
                at the Speech Impaired School in Atyrau, Kazakhstan.
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Sightings of olive ridley sea turtles were reported soon after
                300 Chevron volunteers and residents held the 10th annual
                coastal clean-up along the terminal coastline in San Pascual,
                Batangas, in the Philippines. About 2.4 tons of litter was
                cleared from the beach
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                In October 2018, the International Products’ leadership team
                visited local food charity, Food from the Heart. A total of 19
                volunteers dedicated their time to packing 183 food packs that
                were sent to families and school children across Singapore
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                As part of their team-building efforts, the International
                Products’ Legal team of 29 volunteers contributed 101.5
                volunteer hours to Willing Hearts, a soup kitchen that provides
                meals to some 5,000 Singaporeans in need.
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ml-auto mr-auto">
            <div className="flex md:flex-row flex-col items-center border-2 mx-10">
              <div className="h-96 w-auto">
                <img src={testImage} alt="..." className="object-cover block w-[100%] h-[100%]" />
              </div>
              <h3 className="text-xl max-w-xl py-12 px-5">
                Chevron employees contributed their time to tree planting and
                beautification of the landscape of Orphanage #10 in Almaty.
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="max-w-screen-2xl mx-auto px-10 py-20">
        <h1 className="md:text-6xl text-4xl font-extrabold text-[#0B2D71] text-center">2019 chevron humankind snapshot</h1>
        <div className="bg-[#0B2D71] min-h-sm flex lg:flex-row flex-col gap-4 px-5 text-center my-10">
          <div className="box-1 py-10 lg:border-r-2 border-b-2 pr-3">
            <h1 className="text-white font-bold text-4xl">$36.7million</h1>
            <h3 className="text-white">has been contributed to U.S. nonprofits through a combination of employee and retiree giving and company matching funds</h3>
          </div>
          <div className="box-1 py-10 lg:border-r-2 border-b-2 pr-3">
            <h1 className="text-white font-bold text-4xl">7,752</h1>
            <h3 className="text-white">employees and retirees volunteered through Chevron Humankind</h3>
          </div>
          <div className="box-1 py-10 lg:border-r-2 border-b-2 pr-3">
            <h1 className="text-white font-bold text-4xl">193,369+</h1>
            <h3 className="text-white">volunteer hours were logged in the United States</h3>
          </div>
          <div className="box-1 py-10">
            <h1 className="text-white font-bold text-4xl">2,125</h1>
            <h3 className="text-white">charitable organizations in the United States benefited from our volunteer time</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoreValues;
