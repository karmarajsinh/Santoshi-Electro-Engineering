import React from "react";
import seelogo1 from "../Img/logo.png";
import seelogo from "../Img/see-big-png-white.png";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <img
              src={seelogo}
              alt="Diverge AI Logo"
              className="h-20 md:h-24 mb-3 md:mb-4"
            />
            <p className="text-gray-400 text-sm md:text-base mb-4">
              Leading the way in Automation & Robotics solutions for modern
              businesses.
            </p>
            <div className="flex space-x-8">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@santoshielectro.engineerin4289"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/santoshi.electro/"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/see-career-a1813b374/"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
               <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  About
                </Link>
              </li>
             
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
               <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Products
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  to="/products/robotic-system"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  Robotic Systems
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/products/robotic-automation"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  Robotic Automation
                </Link>
              </li> */}
              <li>
                <Link
                  to="/products/control-panel"
                  className="text-gray-400 hover:text-white transition text-sm md:text-base"
                >
                  Control Panel
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Contact
            </h4>
            <address className="text-gray-400 not-italic text-sm md:text-base">
              3/6 Corner, Samrat Industrial Area Near Chandan Marble, Gondal
              Road Rajkot-360004, Gujarat, India
              {/* 3/6 Corner ,Samrat Industrial Area,Near Chandan Marbel,
              <br />
              B/H ST Workshop, Gondal Road, Chandan Marble, Rajkot-360004,
              <br />
              Gujarat, India */}
              <br />
              <br />
              santoshi.electro@gmail.com
              <br />
              Office : +91 6355965505
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>
            &copy; {new Date().getFullYear()} Santoshi Electro Engineering. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
