import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import roboticssys from "./../../../Img/robotic-automation.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const RoboticAutomation = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div
              className={`w-full lg:w-1/2 mb-8 lg:mb-0 transition-all duration-1000 ease-out ${
                showContent
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl mt-10 lg:text-[3.5rem] font-bold text-gray-800 mb-4 leading-tight">
                Robotic Automation
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-md mb-6 max-w-lg">
                Offering you a complete choice of services which include
                Industrial Robotics Automations.
              </p>
              <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
                <span className="text-gray-800">Home</span>
                <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
                <span className="text-gray-600">Product</span>
                <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
                <span className="text-red-600">Robotic Automation</span>
              </div>
            </div>
            <div
              className={`w-full lg:w-1/2 transition-all duration-1000 ease-out relative ${
                showImage
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              } hidden sm:block`}
            >
              <img
                src={roboticssys}
                alt="Robotics Banner"
                className="w-full h-auto max-w-lg mx-auto"
                width={896}
                height={432}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoboticAutomation;
