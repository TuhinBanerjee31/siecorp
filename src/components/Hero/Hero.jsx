import React from "react";
import "./Hero.css";
import {
  MagnifyingGlassIcon,
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

// NAVBAR-CONTENTS
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
          who we are
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
          what we do
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
          sustainability
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
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
        <a
          href="#"
          className="flex items-center transition-colors p"
        >
          careers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors p"
        >
          newsroom
        </a>
      </Typography>
    </ul>
  );
}

function NavListMerge() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
          who we are
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
          what we do
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
          sustainability
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center p transition-colors"
        >
          investors
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors p"
        >
          careers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors p"
        >
          newsroom
        </a>
      </Typography>
    </ul>
  );
}
// NAVBAR-CONTENTS

const Hero = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="header bg-header-image bg-cover bg-no-repeat min-h-screen">

      {/* NAVBAR */}
      <Navbar className="mx-auto max-w-screen-xl bg-transparent backdrop-saturate-100 shadow-none border-0 backdrop-blur-none py-3">
        <div className="flex items-center justify-between text-white">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            SIECORP
          </Typography>

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
