/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "./Nav.css";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/siecorp_logo.png";

const Nav = ({ bgImage }) => {

  function NavLeft() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
        <div
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(true);
            setMenu2(false);
            setrmM1(true);
            handleMenu2();
          }}
          // onMouseLeave={() => setMenu1(true)}
        >
          <p className="flex items-center p transition-colors">Who we are</p>
        </div>
        <div
          color="white"
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(false);
            setMenu2(true);
            setrmM2(true);
            handleMenu1();
          }}
        >
          <p className="flex items-center p transition-colors">What we do</p>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors"
          >
            Why us
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors"
          >
            Projects
          </NavLink>
        </div>
      </ul>
    );
  }

  function NavRight() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p"
          >
            Careers
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/collaborators"}
            className="flex items-center transition-colors p"
          >
            Collaborators
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/newsroom"}
            className="flex items-center transition-colors p"
          >
            Newsroom
          </NavLink>
        </div>
      </ul>
    );
  }

  function NavHam() {
    return (
      <ul className="flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <div className="nav1 p-1 font-medium flex">
          <p
            className="flex items-center p lg:text-5xl text-3xl text-white font-light tracking-wider transition-colors"
            onMouseEnter={() => {
              setSubMenu(true);
              setMenu1(true);
              setMenu2(false);
              setrmM1(true);
              handleMenu2();
            }}
          >
            Who we are
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <p
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
            onMouseEnter={() => {
              setSubMenu(true);
              setMenu1(false);
              setMenu2(true);
              setrmM2(true);
              handleMenu1();
            }}
          >
            What we do
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            Why us
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            Projects
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            Careers
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/collaborators"}
            className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            Collaborators
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <Link
            to={"/newsroom"}
            className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            Newsroom
          </Link>
        </div>
      </ul>
    );
  }

  console.log(bgImage);
  const [openNav, setOpenNav] = React.useState(false);
  const [hamMenu, setHamMenu] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(false);
  const [menu1, setMenu1] = React.useState(false);
  const [menu2, setMenu2] = React.useState(false);

  const [rmM1, setrmM1] = React.useState(false);
  const [rmM2, setrmM2] = React.useState(false);

  const handleMenu2 = () => {
    setTimeout(() => {
      setrmM2(false);
    }, 2000);
  };

  const handleMenu1 = () => {
    setTimeout(() => {
      setrmM1(false);
    }, 2000);
  };

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
      className={`header bg-${bgImage} bg-cover bg-center bg-no-repeat min-h-screen font-suse`}
    >
      <div
        id="hover-sheet1"
        onMouseLeave={() => {
          setSubMenu(false);
          setMenu1(false);
          setMenu2(false);
        }}
        className={`min-h-screen bg-[#0A3277] lg:w-[50%] w-full absolute z-40 transition-opacity ease-in-out delay-150 duration-500 animate__animated animate__slideInLeft flex flex-col justify-center ${
          subMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* SUB MENU 1 */}
        <div
          className={`${
            menu1 ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity ease-in-out delay-150 duration-500 flex flex-col absolute left-[25%] gap-5`}
        >
          <NavLink
            to={"/core-values"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            Core Values
          </NavLink>
          <NavLink
            to={"/our-brand"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            Our Brand
          </NavLink>
          <NavLink
            to={"/our-leadership"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            Our Leadership
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            Contact Us
          </NavLink>
        </div>

        {/* SUB MENU 2 */}
        <div
          className={`${
            menu2 ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity ease-in-out delay-150 duration-500 flex flex-col absolute left-[25%] gap-5`}
        >
          <NavLink
            to={"/infrastructure"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            Infrastructure
          </NavLink>
          <NavLink
            to={"/energy"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            Energy
          </NavLink>
          <NavLink
            to={"/maritime"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            Maritime
          </NavLink>
        </div>

        <div
          className="absolute top-0 right-0 p-10"
          onClick={() => {
            setSubMenu(false);
            setMenu1(false);
            setMenu2(false);
          }}
        >
          <XMarkIcon className="h-10 text-white cursor-pointer" />
        </div>
      </div>

      {/* HAM MENU SHEET */}
      <div
        className={`min-h-screen w-full absolute z-30 flex justify-center items-center transition-opacity ease-in-out delay-150 duration-500 animate__animated animate__slideInLeft bg-[#0A3277] ${
          hamMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span
          className="absolute top-0 right-0 p-10"
          onClick={() => setHamMenu(!hamMenu)}
        >
          <XMarkIcon className="h-10 text-white cursor-pointer" />
        </span>
        <NavHam />
      </div>

      <nav className="mx-auto max-w-screen-2xl py-4 bg-transparent backdrop-saturate-100 shadow-none border-0 backdrop-blur-none z-20 relative px-4">
        <div className="flex items-center justify-between text-white">
          <div className="lg:block hidden">
            <NavLeft />
          </div>

          <span
            className="cursor-pointer lg:hidden block"
            onClick={() => {
              setHamMenu(!hamMenu);
            }}
          >
            <Bars3Icon className="h-7 mt-3" strokeWidth={2} />
          </span>

          <Link
            to={"/"}
            className="md:w-16 w-10 md:h-10 h-5 absolute left-0 right-0 mx-auto z-10"
          >
            <img src={logo} alt="Siecorp" />
          </Link>

          <div className="lg:block hidden">
            <NavRight />
          </div>

          <div className="lg:hidden block">
            <NavLink to={"/contact-us"}>
              <EnvelopeIcon className="h-6 w-10 mt-3 cursor-pointer" />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
