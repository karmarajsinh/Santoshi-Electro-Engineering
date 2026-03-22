import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import aboutimg from "./../Img/automation-robot-2.png";
import aboutsee from "./../Img/about-see.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRight, FaCirclePlay } from "react-icons/fa6";
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
import bg from "../Img/service-bg-layer-red.png";
import { useInView } from "react-intersection-observer";
import ceoImage from "./../Img/CEO.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    threshold: 0.1,
  });

  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refclient, inViewClient] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refCeo, inViewCeo] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [animate, setAnimate] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateClient, setAnimateClient] = useState(false);
  const [animateCeo, setAnimateCeo] = useState(false);

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
    if (inViewCeo) {
      setAnimateCeo(true);
    }
  }, [inView, inViewAbout, inViewClient, inViewCeo]);

  <Helmet>
    <title>About Us - Santoshi Electro Engineering</title>
    <meta
      name="description"
      content="Learn more about Santoshi Electro Engineering , our mission and vision."
    />
  </Helmet>;

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
                About Us
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 max-w-lg">
                Driving Innovation in Electrical Control Panels and Robotic
                Systems Since 2011.
              </p>
              <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
                <span className="text-gray-800">Home</span>
                <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
                <span className="text-red-500">About</span>
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
                src={aboutimg}
                alt="About Banner"
                className="w-96 h-80 max-w-lg mx-auto"
                width={896}
                height={432}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={refAbout}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div
              className="w-full lg:w-2/5 relative"
              style={{
                opacity: animateAbout ? 1 : 0,
                transform: animateAbout ? "translateX(0)" : "translateX(-50px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={aboutsee}
                  alt="Technology"
                  className="w-full h-auto object-cover"
                  width={1200}
                  height={602}
                />
                <div className="absolute -left-4 sm:-left-6 md:-left-8 -top-4 sm:-top-6 md:-top-8 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 animate-spin-slow">
                  <img
                    src="https://elementorpress.com/templatekit-pro/layout45/wp-content/uploads/2022/06/about-circle-line.png"
                    alt="Circle"
                    className="w-full h-full"
                    width={550}
                    height={550}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/@santoshielectro.engineerin4289"
                    target="_blank"
                    className="bg-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"
                    aria-label="Youtube Channal"
                  >
                    <FaCirclePlay className="text-red-500 text-lg sm:text-xl md:text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="w-full lg:w-3/5"
              style={{
                opacity: animateAbout ? 1 : 0,
                transform: animateAbout ? "translateX(0)" : "translateX(50px)",
                transition:
                  "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
              }}
            >
              <span className="inline-block bg-red-50 text-red-500 px-3 py-1 rounded-full text-sm sm:text-base font-medium mb-4">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 mb-6 leading-tight">
                We Believe That Best Service Always Gives Satisfaction To
                Clients
              </h2>

              <div className="space-y-4 sm:space-y-5 text-gray-600 text-base sm:text-lg">
                <p>
                  Our Goal Is To Make Our Technological Knowledge And Service
                  Better Day By Day. Satisfied Clients Improve Our Quality And
                  Economical Standard In Industries.
                </p>
                <p>
                  In Order To Manufacture These Products, Our Experts Utilize
                  Supreme Quality Raw Material And Advanced Technology To Make
                  Certain That Products Offered By Us Are Perfect In All
                  Aspects.
                </p>
                <p>
                  Offered Conveyor Machines Are Known For Features Like High
                  Performance, Sturdy Construction, Easy Maintenance, Simple
                  Operation And Longer Service Life. Apart From Machines,
                  Offered Accessories, Tank, Belt And Spring Are Highly
                  Appreciated For Robustness, Dimensional Accuracy, Corrosion
                  Resistance And High Strength.
                </p>
                <p>
                  As Per The Precise Necessities Of Our Respected Clients, We
                  Offer These Products In Different Specifications And Also Can
                  Be Customized According To The Information Provided By Them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section
        ref={refCeo}
        className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div
              className="w-full lg:w-1/3"
              style={{
                opacity: animateCeo ? 1 : 0,
                transform: animateCeo ? "translateX(0)" : "translateX(-50px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={ceoImage}
                  alt="Company CEO"
                  className="w-full h-auto object-cover"
                  width={500}
                  height={600}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  CEO
                </div>
              </div>
            </div>
            <div
              className="w-full lg:w-2/3"
              style={{
                opacity: animateCeo ? 1 : 0,
                transform: animateCeo ? "translateX(0)" : "translateX(50px)",
                transition:
                  "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
              }}
            >
              <span className="inline-block bg-red-50 text-red-500 px-3 py-1 rounded-full text-sm sm:text-base font-medium mb-4">
                LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 mb-6 leading-tight">
                Meet Our Visionary Leader
              </h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Mayursinh Chudasama
              </h3>
              <p className="text-red-600 font-medium mb-6">CEO</p>

              <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                <p>
                  With over 14 years of experience in the automation industry,
                  Mayursinh has been the driving force behind our company's
                  success since its inception in 2011. His visionary leadership
                  and technical expertise have shaped our company's direction
                  and growth.
                </p>
                <p>
                  Mayursinh's hands-on approach and commitment to excellence
                  ensure that every project meets the highest standards.
                </p>
                <p>
                  Under his leadership, our company has grown from a small
                  startup to a recognized name in the automation industry,
                  serving clients across multiple sectors with cutting-edge
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        ref={ref}
        className="py-16 sm:py-20 md:py-24 lg:py-28 bg-red-50 bg-opacity-90 relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 sm:opacity-30 md:opacity-50 lg:opacity-70 xl:opacity-90 2xl:opacity-100"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-12 md:mb-16"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <p className="text-red-500 font-medium mb-3 md:mb-4 text-sm sm:text-base md:text-lg uppercase tracking-wider">
              OUR ACHIEVEMENTS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              Celebrating <span className="text-red-600">Success</span> Through
              <br className="hidden sm:inline" />
              Dedicated Service
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                value: "398+",
                label: "Completed Projects",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ),
                value: "120+",
                label: "Satisfied Clients",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                ),
                value: "99%",
                label: "Success Rate",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ),
                value: "100+",
                label: "Happy Empolyees",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 mb-1 sm:mb-2">
                    <span className="text-red-600">{item.value}</span>
                  </div>
                  <p className="text-gray-600 font-medium text-sm sm:text-base text-center">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={refclient}
        className="py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden bg-white"
      >
        <div className="absolute inset-0 bg-red-50 bg-opacity-30"></div>
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

      <Footer />
    </div>
  );
};

export default About;
