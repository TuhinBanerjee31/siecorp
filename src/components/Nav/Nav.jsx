/* eslint-disable react/prop-types */
import React from "react";
import "./Nav.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/siecorp_logo.png";

const Nav = (props) => {
  // NAVBAR-LEFT-CONTENTS
  function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
          onMouseEnter={() => {
            setStatus(false);
            setStatus2(true);
          }}
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
          onMouseEnter={() => {
            setStatus2(false);
            setStatus(true);
          }}
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
  // NAVBAR-RIGHT-CONTENTS
  function NavList2() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p"
          >
            careers
          </NavLink>
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
  //HAMBURGER-NAVBAR-CONTENT
  function NavListMerge() {
    return (
      <ul className="my-2 pt-5 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="nav1 p-1 font-medium flex"
          onMouseEnter={() => {
            setStatus(false);
            setStatus2(true);
          }}
        >
          <a href="#" className="flex items-center p transition-colors">
            who we are
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium flex"
          onMouseEnter={() => {
            setStatus2(false);
            setStatus(true);
          }}
        >
          <a href="#" className="flex items-center p transition-colors">
            what we do
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium flex"
        >
          <a href="#" className="flex items-center p transition-colors">
            sustainability
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium flex"
        >
          <a href="#" className="flex items-center p transition-colors">
            investors
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium flex"
        >
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p"
          >
            careers
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium flex"
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
  const [status2, setStatus2] = React.useState(true);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div
      className={`header bg-${props.bgImage} bg-cover bg-no-repeat min-h-screen font-suse`}
    >
      <div
        id="hover-sheet1"
        onMouseLeave={() => setStatus(true)}
        className={`min-h-screen bg-[#0A3277] lg:w-[45%] w-full absolute z-10 transition-opacity animate__animated animate__slideInLeft flex flex-col justify-center gap-5 ${
          status ? "hidden" : "block"
        }`}
      >
        <NavLink
          to={"/core-values"}
          className="lg:text-5xl text-3xl text-white font-light tracking-wider right-10 pt-5 ml-36 hover:text-[#0066b2] transition-colors"
        >
          core values
        </NavLink>
        <NavLink
          to={"/our-brand"}
          className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 ml-36 hover:text-[#0066b2] transition-colors"
        >
          our brand
        </NavLink>
        <NavLink
          to={"/our-leadership"}
          className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 ml-36 hover:text-[#0066b2] transition-colors"
        >
          our leadership
        </NavLink>
        <NavLink
          to={"/contact-us"}
          className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 ml-36 hover:text-[#0066b2] transition-colors"
        >
          contact us
        </NavLink>
      </div>

      <div
        id="hover-sheet2"
        onMouseLeave={() => setStatus2(true)}
        className={`min-h-screen bg-[#0A3277] lg:w-[45%] w-full absolute z-10 transition-opacity animate__animated animate__slideInLeft flex flex-col justify-center gap-5 ${
          status2 ? "hidden" : "block"
        }`}
      >
        <NavLink
          to={"/infrastructure"}
          className="lg:text-5xl text-3xl text-white font-light tracking-wider right-10 pt-5 ml-36 hover:text-[#0066b2] transition-colors"
        >
          infrastructure
        </NavLink>
        <NavLink
          to={"/energy"}
          className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 ml-36 hover:text-[#0066b2] transition-colors"
        >
          energy
        </NavLink>
        <NavLink
          to={"/maritime"}
          className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 ml-36 hover:text-[#0066b2] transition-colors"
        >
          maritime
        </NavLink>
      </div>

      {/* NAVBAR */}
      <Navbar className="mx-auto max-w-screen-2xl bg-transparent backdrop-saturate-100 shadow-none border-0 backdrop-blur-none py-3 z-20 relative">
        <div className="flex items-center justify-between text-white">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <Link to={"/"} className="md:w-16 w-10 md:h-10 h-5 mr-36">
            <img src={logo} alt="Siecorp" />
          </Link>

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
              <XMarkIcon
                className="h-6 w-6"
                strokeWidth={2}
                onClick={() => setStatus(true)}
              />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <NavListMerge />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
