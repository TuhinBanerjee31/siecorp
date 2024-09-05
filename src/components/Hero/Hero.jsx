import React from "react";
import "./Hero.css";
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
import logo from "../../assets/siecorp_logo.png";


// NAVBAR-CONTENTS

const Hero = () => {
  // NAVBAR-CONTENTS
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
    <div className="header bg-header-image md:bg-cover bg-auto bg-no-repeat min-h-screen">
      <div id="hover-sheet1" className={`min-h-screen bg-[#0A3277] lg:w-[45%] w-full absolute z-10 transition-colors ${status ? 'hidden' : 'block'} ${status ? '' : 'hover:block'}`}>
        <XMarkIcon className="h-8 absolute right-0 bottom-[40%] cursor-pointer text-white mr-2 z-40" onClick={() => setStatus(true)} />

          <div className="nav-content font-suse absolute bottom-[30%] text-center px-6 w-[90%] flex flex-col"> 
            <NavLink to={'/core-values'} className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5">core values</NavLink>
            <NavLink to={'/our-brand'} className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5">our brand</NavLink>
            <NavLink to={'/our-leadership'} className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5">our leadership</NavLink>
            <NavLink to={'/contact-us'} className="lg:text-5xl text-3xl text-white font-light tracking-wider p pt-5">contact us</NavLink>
          </div>

      </div>

      {/* NAVBAR */}
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

      {/* HEADER-CARD */}
      <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
        <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
          <h1 className="text-6xl text-center font-bold p-4">
            seeking solutions using human ingenuity
          </h1>
          <h5 className="mx-auto text-center max-w-lg p-4 tracking-widest">
            How do you help change the global energy system? By combining bold
            thinking with diverse ideas to solve problems.
          </h5>
          <div className="slide_btn flex justify-center p-4 gap-3">
            <ArrowRightIcon style={{ height: "22px", alignSelf: "flex-end" }} />
            <p className="p">discover our solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
