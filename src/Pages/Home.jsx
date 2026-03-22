import React, { useEffect, useRef, useState } from "react";
import hero from "../Img/automation-robot-1.png";
import innovation from "../Img/innovation-robot.jpg";
import bg from "../Img/service-bg-layer-red.png";
import seelogo1 from "../Img/logo.png";
import mainlogo from "../Img/see-logo-white.jpg";
import Atul from "./../Img/clients/Atul.png";
import Patel from "./../Img/clients/Patel-tech.png";
import aec from "./../Img/clients/aec.png";
import akshar from "./../Img/clients/akshar-industries.png";
import applerollers from "./../Img/clients/applerollers.png";
import balark_metals from "./../Img/clients/balark_metals.jpg";
import bath from "./../Img/clients/bath-touch.jpg";
import dncastech from "./../Img/clients/dncastech.png";
import esteemauto from "./../Img/clients/esteemauto.jpg";
import geetajam from "./../Img/clients/geetajam.png";
import macpowercnc from "./../Img/clients/macpowercnc.jpg";
import rekha from "./../Img/clients/rekha.png";
import shaildeep from "./../Img/clients/shaildeep.jpg";
import shining from "./../Img/clients/shining.png";
import shree from "./../Img/clients/shree-butbhavani.jpg";
import sunchaser from "./../Img/clients/sunchaser.png";
import texspin from "./../Img/clients/texspin.png";
import v from "./../Img/clients/v-cube.png";
import vishalbearings from "./../Img/clients/vishalbearings.png";
import { useInView } from "react-intersection-observer";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [showContent, setShowContent] = useState(true);

  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const wordIndexRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const words = ["Robotics", "Automation"];

    const type = () => {
      const fullWord = words[wordIndexRef.current % words.length];

      if (isDeleting) {
        // Delete character
        setCurrentWord(fullWord.substring(0, currentWord.length - 1));
        setTypingSpeed(100);
      } else {
        // Type character
        setCurrentWord(fullWord.substring(0, currentWord.length + 1));
        setTypingSpeed(150);
      }

      // Transition between typing/deleting states
      if (!isDeleting && currentWord === fullWord) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && currentWord === "") {
        // Move to next word after deleting
        setIsDeleting(false);
        wordIndexRef.current++;
        // Pause before typing next word
        setTimeout(() => {}, 500);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, typingSpeed]);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   if (window.scrollY > 0) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }, []);
  const handleButtonClick = () => {
    navigate("/see");
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else if (currentScrollPos > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when scrolling down
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const services = [
    {
      id: 1,
      title: "Robotic Automation",
      description:
        "Advanced robotic solutions tailored to your business needs for maximum efficiency.",
      icon: "https://cdn-icons-png.flaticon.com/128/18245/18245575.png",
    },
    {
      id: 2,
      title: "Automation Solution",
      description:
        "Comprehensive automation strategies designed to optimize your operations, boost productivity, and drive growth.",
      icon: "https://cdn-icons-png.flaticon.com/128/17756/17756681.png",
    },
    {
      id: 3,
      title: "Control Panel Building",
      description:
        "Custom-engineered control panels, precisely crafted to power and streamline your industrial processes for optimal performance.",
      icon: "https://cdn-icons-png.flaticon.com/128/8716/8716834.png",
    },
  ];

  const clientLogos = [
    { src: Atul, alt: "Atul" },
    { src: Patel, alt: "Patel-tech" },
    { src: aec, alt: "AEC" },
    { src: akshar, alt: "Akshar Industries" },
    { src: applerollers, alt: "Apple Rollers" },
    { src: balark_metals, alt: "Balark Metals" },
    { src: bath, alt: "Bath Touch" },
    { src: dncastech, alt: "DnCastech" },
    { src: esteemauto, alt: "Esteem Auto" },
    { src: geetajam, alt: "Geetajam" },
    { src: macpowercnc, alt: "Macpower CNC" },
    { src: rekha, alt: "Rekha" },
    { src: shaildeep, alt: "Shaildeep" },
    { src: shining, alt: "Shining" },
    { src: shree, alt: "Shree Butbhavani" },
    { src: sunchaser, alt: "Sunchaser" },
    { src: texspin, alt: "Texspin" },
    { src: v, alt: "V-Cube" },
    { src: vishalbearings, alt: "Vishal Bearings" },
  ];

  const allLogos = [...clientLogos, ...clientLogos];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refclient, inViewClient] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [animate, setAnimate] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateClient, setAnimateClient] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
    if (inViewAbout) {
      setAnimateAbout(true);
    }
    if (inViewClient) {
      setAnimateClient(true);
    }
  }, [inView, inViewAbout, inViewClient]);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-r from-red-50 to-white overflow-hidden">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div
            className={`md:w-1/2 mb-8 md:mb-0 px-2 sm:px-0 transition-all duration-1000 ease-out ${
              showContent
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-4 leading-tight">
              Advanced <span className="text-red-500">{currentWord}</span>{" "}
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
              We engineer precision and efficiency into your operations, driving
              sustainable productivity and growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleButtonClick}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
              {/* <button
                onClick={handleButtonClick}
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105"
              >
                Learn More
              </button> */}
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`md:w-1/2 transition-all duration-1000 ease-out ${
              showImage
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <img
              src={hero}
              alt="AI Robot"
              className="w-full max-w-md mx-auto h-64 sm:h-80 object-contain transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        ref={refclient}
        className="py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden bg-white"
        style={{ overflowX: "hidden" }}
      >
        <div className="absolute inset-0 bg-blue-50 bg-opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header - Added to match features section */}
          <div
            className="text-center mb-14 md:mb-20"
            style={{
              opacity: animateClient ? 1 : 0,
              transform: animateClient ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <p className="text-red-500 font-semibold mb-3 md:mb-4 text-sm md:text-base uppercase tracking-widest">
              TRUSTED PARTNERS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-5 md:mb-6">
              Our <span className="text-red-600">Valued</span> Clients
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div
            className="flex items-center whitespace-nowrap"
            style={{
              animation: "marquee 60s linear infinite",
              width: "fit-content",
              opacity: animateClient ? 1 : 0,
              transform: animateClient ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s",
            }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-4 p-4 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{
                  minWidth: "150px",
                  touchAction: "pan-y",
                  flex: "0 0 auto",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto mx-auto object-contain"
                  style={{ touchAction: "pan-y" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Inline styles for the animation */}
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={ref}
        className="py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden bg-red-50 bg-opacity-90"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="absolute inset-0 bg-red-50 bg-opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div
            className="text-center mb-12 md:mb-16"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <p className="text-red-500 font-medium mb-3 md:mb-4 text-base md:text-lg uppercase tracking-wider">
              OUR EXPERTISE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              Delivering <span className="text-red-600">Excellence</span>{" "}
              Through
              <br className="hidden sm:inline" />
              Innovative Solutions
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white p-6 md:p-8 rounded-xl border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl group"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${
                    animate ? index * 0.1 : 0
                  }s, transform 0.5s ease-out ${animate ? index * 0.1 : 0}s`,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-100 rounded-full group-hover:bg-red-500 transition-colors duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:invert transition-filter duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                      {service.description}
                    </p>
                  </div>
                  {/* <button className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center text-sm md:text-base">
                    Learn more
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          {/* <div
            className="mt-12 md:mt-16 text-center"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s",
            }}
          >
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Ready to transform your business with our solutions?
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 md:py-3 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base">
              Get Started Today
            </button>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section
        ref={refAbout}
        className="py-16 md:py-20 px-4 sm:px-6 bg-gray-50"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div
            className="md:w-1/2 mb-8 md:mb-0"
            style={{
              opacity: animateAbout ? 1 : 0,
              transform: animateAbout ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <img
              src={innovation}
              alt="About our robotics"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div
            className="md:w-1/2 md:pl-8 lg:pl-12"
            style={{
              opacity: animateAbout ? 1 : 0,
              transform: animateAbout ? "translateX(0)" : "translateX(50px)",
              transition:
                "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
              Innovating the Future of Automation & Robotics
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              "Innovating the Future of Automation & Robotics" is a
              forward-thinking company committed to transforming industries with
              cutting-edge automation and robotics solutions. By blending
              advanced technology with engineering expertise, they aim to
              streamline processes, enhance efficiency, and shape the future of
              smart manufacturing and automation systems.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {[
                "14+ Years of combined experience",
                "398+ Successful projects delivered",
                // "24/7 Support and maintenance",
                "Custom solutions for every need",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start"
                  style={{
                    opacity: animateAbout ? 1 : 0,
                    transform: animateAbout
                      ? "translateX(0)"
                      : "translateX(20px)",
                    transition: `opacity 0.4s ease-out ${
                      0.4 + index * 0.1
                    }s, transform 0.4s ease-out ${0.4 + index * 0.1}s`,
                  }}
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 md:mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
