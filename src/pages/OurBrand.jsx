import React from "react";
// import "./Hero.css";
import {
  ArrowRightIcon,
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
import sampleImage from "../assets/sample.jpg";
import ob1 from "../assets/ob1.png";
import ob2 from "../assets/ob2.png";
import ob3 from "../assets/ob3.jpg";
import Footer from "../components/Footer/Footer";

const OurBrand = () => {
  function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
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
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            what we do
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            sustainability
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
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
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center transition-colors p">
            careers
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
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
          color="white"
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
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            what we do
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            sustainability
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center p transition-colors">
            investors
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center transition-colors p">
            careers
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
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
    <>
      <div className="bg-ob-header-image md:bg-cover bg-auto bg-no-repeat min-h-screen font-suse relative">
        <div
          id="hover-sheet1"
          className={`min-h-screen bg-[#0A3277] lg:w-[45%] w-full absolute z-10 transition-colors ${
            status ? "hidden" : "block"
          } ${status ? "" : "hover:block"}`}
        >
          <XMarkIcon
            className="h-8 absolute right-0 bottom-[40%] cursor-pointer text-white mr-2 z-40"
            onClick={() => setStatus(true)}
          />

          <div className="nav-content font-suse absolute bottom-[30%] text-center px-6 w-[90%] flex flex-col">
            <NavLink
              to={"/core-values"}
              className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5"
            >
              core values
            </NavLink>
            <NavLink
              to={"/our-brand"}
              className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5"
            >
              our brand
            </NavLink>
            <NavLink
              to={"/our-leadership"}
              className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5"
            >
              our leadership
            </NavLink>
            <NavLink
              to={"contact-us"}
              className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5"
            >
              contact us
            </NavLink>
          </div>
        </div>

        <Navbar className="mx-auto max-w-screen-2xl bg-transparent backdrop-saturate-100 shadow-none border-0 backdrop-blur-none py-3 z-20 relative">
          <div className="flex items-center justify-between text-white">
            <div className="hidden lg:block">
              <NavList />
            </div>

            <div className="md:w-16 w-10 md:h-10 h-5 mr-36">
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
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>

          <Collapse open={openNav}>
            <NavListMerge />
          </Collapse>
        </Navbar>

        <div className="w-full bg-white min-h-[55vh] absolute bottom-0">
          <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-ob-header-image text-center">
            our brand
          </h1>
          <h5 className="max-w-xl mx-auto lg:text-2xl text-xl tracking-wider text-center px-5">
            Whether we’re fueling cars or advancing the energy system of
            tomorrow, Chevron’s brands set the standard for excellence. With a
            rich history dating back over a century, Chevron’s family of brands
            has built trust and recognition worldwide.
          </h5>
        </div>
      </div>

      <div className="py-20">
        <img
          src={sampleImage}
          alt="...."
          className="h-[27rem] w-auto mx-auto"
        />
      </div>

      <div className="min-h-screen bg-[#0B2D71] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-xl px-4 lg:text-left text-center py-4">
          <h3 className="text-4xl">chevron</h3>
          <h4 className="text-xl py-4 tracking-wider">
            Quality and reliability drive customers to Chevron. Innovative and
            forward looking, our high quality fuel and customer experience mean
            Chevron is trusted by our customers.
          </h4>
          <span className="flex lg:justify-start justify-center py-4">
            <p className="p tracking-wider">
              learn more about chevron with techron
            </p>
          </span>
          <span className="flex lg:justify-start justify-center">
            <p className="p tracking-wider">find a chevron service station</p>
          </span>
        </div>

        <div className="h-96">
          <img src={ob1} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <div className="min-h-screen bg-[#58001C] flex lg:flex-row flex-col justify-around items-center py-14">
        <div className="h-96">
          <img src={ob2} alt="..." className="h-full w-full rounded-2xl" />
        </div>

        <div className="text-white max-w-xl px-4 lg:text-left text-center py-4">
          <h3 className="text-4xl">texaco</h3>
          <h4 className="text-xl py-4 tracking-wider">
            The Texaco star stands for more than a century of quality fuels and
            lubricants. A global icon with a powerful presence in the United
            States and Europe, Texaco delivers the high performance and customer
            satisfaction drivers trust.
          </h4>
          <span className="flex lg:justify-start justify-center py-4">
            <p className="p tracking-wider">learn more about texaco</p>
          </span>
          <span className="flex lg:justify-start justify-center">
            <p className="p tracking-wider">find a chevron service texaco</p>
          </span>
        </div>
      </div>

      <div className="min-h-screen bg-[#3A0D36] flex lg:flex-row flex-col-reverse justify-around items-center py-14">
        <div className="text-white max-w-xl px-4 lg:text-left text-center py-4">
          <h3 className="text-4xl">caltex</h3>
          <h4 className="text-xl py-4 tracking-wider">
            For more than 70 years, Caltex has symbolized uncompromising
            products and services. Quality fuels and lubricants and a pedigree
            in technology set Caltex apart.
          </h4>
          <span className="flex lg:justify-start justify-center py-4">
            <p className="p tracking-wider">
              learn more about caltex
            </p>
          </span>
          <span className="flex lg:justify-start justify-center">
            <p className="p tracking-wider">find a caltex service station</p>
          </span>
        </div>

        <div className="h-96 px-8">
          <img src={ob3} alt="..." className="h-full w-full rounded-2xl" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurBrand;
