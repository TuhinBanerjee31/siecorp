import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./Hero.css";
import { Carousel } from "@material-tailwind/react";
// import "./Nav.css";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/siecorp_logo.png";

const Nav1 = () => {

  function NavLeft() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
        <div
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(true);
            setMenu2(false);
          }}
          // onMouseLeave={() => setMenu1(true)}
        >
          <p className="flex items-center p transition-colors">who we are</p>
        </div>
        <div
          color="white"
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(false);
            setMenu2(true);
          }}
        >
          <p className="flex items-center p transition-colors">what we do</p>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors"
          >
            why us
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors"
          >
            projects
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
            careers
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <a href="#" className="flex items-center transition-colors p">
            newsroom
          </a>
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
            }}
          >
            who we are
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <p
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
            onMouseEnter={() => {
              setSubMenu(true);
              setMenu1(false);
              setMenu2(true);
            }}
          >
            what we do
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            why us
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            projects
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            careers
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <a href="#" className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider">
            newsroom
          </a>
        </div>
      </ul>
    );
  }

  const [hamMenu, setHamMenu] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(false);
  const [menu1, setMenu1] = React.useState(false);
  const [menu2, setMenu2] = React.useState(false);
  return (
    <div
      className={`header bg-card1-image bg-cover bg-no-repeat min-h-screen font-suse`}
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
            core values
          </NavLink>
          <NavLink
            to={"/our-brand"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our brand
          </NavLink>
          <NavLink
            to={"/our-leadership"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our leadership
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            contact us
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
            infrastructure
          </NavLink>
          <NavLink
            to={"/energy"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            energy
          </NavLink>
          <NavLink
            to={"/maritime"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            maritime
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
            <EnvelopeIcon className="h-6 w-10 mt-3 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}

const Nav2 = () => {

  function NavLeft() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
        <div
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(true);
            setMenu2(false);
          }}
          // onMouseLeave={() => setMenu1(true)}
        >
          <p className="flex items-center p transition-colors">who we are</p>
        </div>
        <div
          color="white"
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(false);
            setMenu2(true);
          }}
        >
          <p className="flex items-center p transition-colors">what we do</p>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors"
          >
            why us
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors"
          >
            projects
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
            careers
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <a href="#" className="flex items-center transition-colors p">
            newsroom
          </a>
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
            }}
          >
            who we are
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <p
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
            onMouseEnter={() => {
              setSubMenu(true);
              setMenu1(false);
              setMenu2(true);
            }}
          >
            what we do
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            why us
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            projects
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            careers
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <a href="#" className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider">
            newsroom
          </a>
        </div>
      </ul>
    );
  }

  const [hamMenu, setHamMenu] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(false);
  const [menu1, setMenu1] = React.useState(false);
  const [menu2, setMenu2] = React.useState(false);
  return (
    <div
      className={`header bg-card2-image bg-cover bg-no-repeat min-h-screen font-suse`}
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
            core values
          </NavLink>
          <NavLink
            to={"/our-brand"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our brand
          </NavLink>
          <NavLink
            to={"/our-leadership"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our leadership
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            contact us
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
            infrastructure
          </NavLink>
          <NavLink
            to={"/energy"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            energy
          </NavLink>
          <NavLink
            to={"/maritime"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            maritime
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
            <EnvelopeIcon className="h-6 w-10 mt-3 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}

const Nav3 = () => {

  function NavLeft() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
        <div
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(true);
            setMenu2(false);
          }}
          // onMouseLeave={() => setMenu1(true)}
        >
          <p className="flex items-center p transition-colors">who we are</p>
        </div>
        <div
          color="white"
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(false);
            setMenu2(true);
          }}
        >
          <p className="flex items-center p transition-colors">what we do</p>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors"
          >
            why us
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors"
          >
            projects
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
            careers
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <a href="#" className="flex items-center transition-colors p">
            newsroom
          </a>
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
            }}
          >
            who we are
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <p
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
            onMouseEnter={() => {
              setSubMenu(true);
              setMenu1(false);
              setMenu2(true);
            }}
          >
            what we do
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            why us
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            projects
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            careers
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <a href="#" className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider">
            newsroom
          </a>
        </div>
      </ul>
    );
  }

  const [hamMenu, setHamMenu] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(false);
  const [menu1, setMenu1] = React.useState(false);
  const [menu2, setMenu2] = React.useState(false);
  return (
    <div
      className={`header bg-card3-image bg-cover bg-no-repeat min-h-screen font-suse`}
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
            core values
          </NavLink>
          <NavLink
            to={"/our-brand"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our brand
          </NavLink>
          <NavLink
            to={"/our-leadership"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our leadership
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            contact us
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
            infrastructure
          </NavLink>
          <NavLink
            to={"/energy"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            energy
          </NavLink>
          <NavLink
            to={"/maritime"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            maritime
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
            <EnvelopeIcon className="h-6 w-10 mt-3 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}

const Nav4 = () => {

  function NavLeft() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
        <div
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(true);
            setMenu2(false);
          }}
          // onMouseLeave={() => setMenu1(true)}
        >
          <p className="flex items-center p transition-colors">who we are</p>
        </div>
        <div
          color="white"
          className="p-1 font-medium"
          onMouseEnter={() => {
            setSubMenu(true);
            setMenu1(false);
            setMenu2(true);
          }}
        >
          <p className="flex items-center p transition-colors">what we do</p>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors"
          >
            why us
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors"
          >
            projects
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
            careers
          </NavLink>
        </div>
        <div color="white" className="p-1 font-medium">
          <a href="#" className="flex items-center transition-colors p">
            newsroom
          </a>
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
            }}
          >
            who we are
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <p
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
            onMouseEnter={() => {
              setSubMenu(true);
              setMenu1(false);
              setMenu2(true);
            }}
          >
            what we do
          </p>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/why-us"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            why us
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/projects"}
            className="flex items-center p transition-colors lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            projects
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <NavLink
            to={"/careers"}
            className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider"
          >
            careers
          </NavLink>
        </div>
        <div className="p-1 font-medium flex">
          <a href="#" className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider">
            newsroom
          </a>
        </div>
      </ul>
    );
  }

  const [hamMenu, setHamMenu] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(false);
  const [menu1, setMenu1] = React.useState(false);
  const [menu2, setMenu2] = React.useState(false);
  return (
    <div
      className={`header bg-card4-image bg-cover bg-no-repeat min-h-screen font-suse`}
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
            core values
          </NavLink>
          <NavLink
            to={"/our-brand"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our brand
          </NavLink>
          <NavLink
            to={"/our-leadership"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            our leadership
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            contact us
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
            infrastructure
          </NavLink>
          <NavLink
            to={"/energy"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            energy
          </NavLink>
          <NavLink
            to={"/maritime"}
            className="lg:text-5xl text-3xl text-white font-light tracking-wider pt-5 hover:text-[#0066b2] transition-colors"
          >
            maritime
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
            <EnvelopeIcon className="h-6 w-10 mt-3 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}

const Hero = () => {
  return (
    <>
      <Carousel
        autoplay
        loop
        prevArrow={false}
        nextArrow={false}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative">
          <Nav1 />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Together, we build success
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                Discover how SIECORP empowers clients worldwide on the journey
                to success through Innovative solutions, execptional service,
                and a team of dedicated professionals.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about anchor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Nav2 />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Proven Excellence in Infrastructure
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                Discover how SIECORP excels in delivering high-quality
                infrastructure projects, combining innovation with expertise to
                achieve superior results and meet the highest strandards.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about our infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Nav3 />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Leading the way in Sustainable Energy Transformation
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                At SICORP,we are experts in renewable energy and are dedicated to transforming how sustainable energy is utilized to drive a lower carbon future.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about our energy solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Nav4 />

          {/* HEADER-CARD */}
          <div className="slides-container text-white md:bottom-[20%] bottom-0 absolute left-0 right-0">
            <div className="blur_sheet border-2 max-w-4xl mx-auto p-5 md:rounded-3xl">
              <h1 className="lg:text-6xl text-4xl text-center font-bold p-4">
                Navigating excellence in the Maritime Industry
              </h1>
              <h5 className="mx-auto text-center lg:max-w-lg max-w-xl p-4 tracking-widest">
                Discover how SIECORP delivers top-tier maritime solutions with precision and innovation, setting new standards in the industry.
              </h5>
              <div className="slide_btn flex justify-center p-4 gap-3">
                <ArrowRightIcon
                  style={{ height: "22px", alignSelf: "flex-end" }}
                />
                <p className="p">learn more about our maritime</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
