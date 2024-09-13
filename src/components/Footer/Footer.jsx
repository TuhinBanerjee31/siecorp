import React from "react";
import logo from "../../assets/siecorp_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B2D71] font-suse dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col justify-center items-center">
              <div className="flex md:flex-row flex-col gap-2 items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={logo}
                    className="h-28 w-28 me-3"
                    alt="Siecorp Logo"
                  />
                  <span className="text-2xl font-semibold whitespace-nowrap text-white tracking-wider">
                    Siecorp
                  </span>
                </div>
                <p className="text-white max-w-[30rem] md:text-left text-center">
                  Founded in 2010, Singapore Infrastructure and Energy
                  Corporation has emerged as a leader in the global
                  infrastructure and energy sectors. With a legacy built over
                  decades, we have earned a reputation for reliability, trust,
                  and excellence in delivering high-quality projects that meet
                  the dynamic needs of our clients.
                </p>
              </div>

              <div className="flex gap-5 pt-3 justify-center sm:mt-0 md:ml-14">
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white"
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                  <span className="sr-only">Instagram account</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white"
                >
                  <ion-icon name="logo-youtube"></ion-icon>
                  <span className="sr-only">Youtube account</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-between justify-center flex-wrap lg:gap-28 gap-5">
            <div>
              <ul className="text-white font-medium flex flex-col gap-3">
                <li>
                  <Link to={'/why-us'} className="p">Why us</Link>
                </li>
                <li>
                  <Link to={'/our-leadership'} className="p">Our Leadership</Link>
                </li>
                <li>
                  <Link to={'/core-values'} className="p">Core Values</Link>
                </li>
                <li>
                  <Link to={'/our-brand'} className="p">Our Brand</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white font-medium flex flex-col gap-3">
                <li>
                  <Link to={'/newsroom'} className="p">Newsroom</Link>
                </li>
                <li>
                  <Link to={'/projects'} className="p">Our Projects</Link>
                </li>
                <li>
                  <Link to={'/infrastructure'} className="p">Infrastructure</Link>
                </li>
                <li>
                  <Link to={'/maritime'} className="p">Maritime</Link>
                </li>
                <li>
                  <Link to={'/energy'} className="p">Energy</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white font-medium flex flex-col gap-3">
                <li>
                  <Link to={'/location'} className="p">Location</Link>
                </li>
                <li>
                  <Link to={'/careers'} className="p">Careers</Link>
                </li>
                <li>
                  <Link to={'/contact-us'} className="p">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2010 <span className="">Siecorp™</span>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
