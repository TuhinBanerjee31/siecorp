import React from "react";
import logo from "../../assets/siecorp_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B2D71] font-suse dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col gap-2 items-center">
              <img src={logo} className="h-28 w-28 me-3" alt="Siecorp Logo" />
              <span className="text-2xl font-semibold whitespace-nowrap text-white tracking-wider">
                Siecorp
              </span>
              <p className="text-white max-w-[30rem] text-center">
                Founded in 2010, Singapore Infrastructure and Energy Corporation
                has emerged as a leader in the global infrastructure and energy
                sectors. With a legacy built over decades, we have earned a
                reputation for reliability, trust, and excellence in delivering
                high-quality projects that meet the dynamic
                needs of our clients.
              </p>

              <div className="flex pt-8 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white ms-5"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white ms-5"
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white ms-5"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                  <span className="sr-only">Instagram account</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white cursor-pointer dark:hover:text-white ms-5"
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
                  <p className="p">Who we are</p>
                </li>
                <li>
                  <p className="p">Our Leadership</p>
                </li>
                <li>
                  <p className="p">What we do</p>
                </li>
                <li>
                  <p className="p">Our brands</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white font-medium flex flex-col gap-3">
                <li>
                  <p className="p">Newsroom</p>
                </li>
                <li>
                  <p className="p">Core Values</p>
                </li>
                <li>
                  <p className="p">Infrastructure</p>
                </li>
                <li>
                  <p className="p">Maritime</p>
                </li>
                <li>
                  <p className="p">Energy</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white font-medium flex flex-col gap-3">
                <li>
                  <p className="p">Location</p>
                </li>
                <li>
                  <p className="p">Careers</p>
                </li>
                <li>
                  <p className="p">Contact Us</p>
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
