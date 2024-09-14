/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "./Nav.css";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/siecorp_logo.png";

const Nav = ({bgImage}) => {
  // NAVBAR-LEFT-CONTENTS
  // function NavList() {
  //   return (
  //     <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ml-6">
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium"
  //         onMouseEnter={() => {
  //           setSubMenu(true);
  //           setMenu1(true);
  //           setMenu2(false);
  //           setrmM1(true);
  //           handleMenu2();
  //         }}
  //         // onMouseLeave={() => setMenu1(true)}
  //       >
  //         <p className=" flex items-center p transition-colors">who we are</p>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium"
  //         onMouseEnter={() => {
  //           setSubMenu(true);
  //           setMenu1(false);
  //           setMenu2(true);
  //           setrmM2(true);
  //           handleMenu1();
  //         }}
  //       >
  //         <p className="flex items-center p transition-colors">what we do</p>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium"
  //       >
  //         <NavLink
  //           to={"/why-us"}
  //           className="flex items-center p transition-colors"
  //         >
  //           why us
  //         </NavLink>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium"
  //       >
  //         <NavLink
  //           to={"/projects"}
  //           className="flex items-center p transition-colors"
  //         >
  //           projects
  //         </NavLink>
  //       </Typography>
  //     </ul>
  //   );
  // }

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
          <p className="flex items-center p transition-colors">who we are</p>
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
  // NAVBAR-RIGHT-CONTENTS
  // function NavList2() {
  //   return (
  //     <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mr-7">
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium"
  //       >
  //         <NavLink
  //           to={"/careers"}
  //           className="flex items-center transition-colors p"
  //         >
  //           careers
  //         </NavLink>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium"
  //       >
  //         <a href="#" className="flex items-center transition-colors p">
  //           newsroom
  //         </a>
  //       </Typography>
  //     </ul>
  //   );
  // }

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
          <NavLink to={'/newsroom'} className="flex items-center transition-colors p">
            newsroom
          </NavLink>
        </div>
      </ul>
    );
  }
  //HAMBURGER-NAVBAR-CONTENT
  // function NavListMerge() {
  //   return (
  //     <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="nav1 p-1 font-medium flex"
  //         onMouseEnter={() => {
  //           setSubMenu(true);
  //           setMenu1(true);
  //           setMenu2(false);
  //           setrmM1(true);
  //           handleMenu2();
  //         }}
  //       >
  //         <p className="flex items-center p transition-colors">who we are</p>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium flex"
  //         onMouseEnter={() => {
  //           setSubMenu(true);
  //           setMenu1(false);
  //           setMenu2(true);
  //           setrmM2(true);
  //           handleMenu1();
  //         }}
  //       >
  //         <p className="flex items-center p transition-colors">what we do</p>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium flex"
  //       >
  //         <NavLink
  //           to={"/why-us"}
  //           className="flex items-center p transition-colors"
  //         >
  //           why us
  //         </NavLink>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium flex"
  //       >
  //         <NavLink
  //           to={"/projects"}
  //           className="flex items-center p transition-colors"
  //         >
  //           projects
  //         </NavLink>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium flex"
  //       >
  //         <NavLink
  //           to={"/careers"}
  //           className="flex items-center transition-colors p"
  //         >
  //           careers
  //         </NavLink>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="white"
  //         className="p-1 font-medium flex"
  //       >
  //         <a href="#" className="flex items-center transition-colors p">
  //           newsroom
  //         </a>
  //       </Typography>
  //     </ul>
  //   );
  // }

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
              setrmM2(true);
              handleMenu1();
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
          <Link to={'/newsroom'} className="flex items-center transition-colors p lg:text-5xl text-3xl text-white font-light tracking-wider">
            newsroom
          </Link>
        </div>
      </ul>
    );
  }

  console.log(bgImage)
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
      className={`header bg-${bgImage} bg-cover bg-no-repeat min-h-screen font-suse`}
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

      {/* <div
        id="hover-sheet2"
        onMouseLeave={() => setMenu2(true)}
        className={`min-h-screen bg-[#0A3277] lg:w-[45%] w-full absolute z-10 transition-opacity animate__animated animate__slideInLeft flex flex-col justify-center gap-5 ${
          status2 ? "hidden" : "block"
        }`}
      >
       
      </div> */}

      {/* NAVBAR */}
      {/* <Navbar className="mx-auto max-w-screen-2xl py-4 bg-transparent backdrop-saturate-100 shadow-none border-0 backdrop-blur-none z-20 relative">
        <div className="flex items-center justify-between text-white">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            className="h-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon
                className="h-7 mt-3"
                strokeWidth={2}
                onClick={() => setMenu1(true)}
              />
            ) : (
              <Bars3Icon className="h-7 mt-3" strokeWidth={2} />
            )}
          </IconButton>

          <Link to={"/"} className="md:w-16 w-10 md:h-10 h-5 lg:mr-36">
            <img src={logo} alt="Siecorp" />
          </Link>

          <div className="hidden lg:block">
            <NavList2 />
          </div>

          <div className="lg:hidden block">
            <EnvelopeIcon className="h-6 w-10 mt-3" />
          </div>
        </div>

        <Collapse open={openNav}>
          <NavListMerge />
        </Collapse>
      </Navbar> */}

      {/* HAM-MENU */}
      {/* {hamMenu && (<div className={`min-h-screen absolute z-50 bg-[#0A3277]`}></div>)} */}

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
            <NavLink to={'/contact-us'}><EnvelopeIcon className="h-6 w-10 mt-3 cursor-pointer" /></NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
