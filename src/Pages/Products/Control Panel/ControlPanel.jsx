import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import controlpanel from "./../../../Img/cp-banner-1.png";
import {
  MdClose,
  MdContactPhone,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useInView } from "react-intersection-observer";
import product1 from "../../../Img/products/control-panel/_VTL-CNC-Machine-Panel.png";
import product2 from "../../../Img/products/control-panel/Turning-Machine-(CNC Panel).png";
import product3 from "../../../Img/products/control-panel/CNC-Press-Brake-Machine-Panel.png";
import product4 from "../../../Img/products/control-panel/Roll-Forming-Machine-Panel.png";
import product5 from "../../../Img/products/control-panel/CNC-Grinding-Machine-Panel.png";
import product6 from "../../../Img/products/control-panel/SPM-Panel.png";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const ControlPanel = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeMedia, setActiveMedia] = useState("image");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);
  const extractVideoId = (url) => {
    const match = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const videoId = quickViewProduct
    ? extractVideoId(quickViewProduct.video)
    : null;

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [refProduct, inViewProduct] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inViewProduct) {
      setAnimate(true);
    }
  }, [inViewProduct]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint as needed
    };
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize); // check on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const animationStyle = !isMobile
    ? {
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(-40px)",
        transition: "opacity 0.5s ease-out, transform 0.7s ease-out",
      }
    : {};
  const products = [
    {
      id: 1,
      name: "VTL CNC Machine Panel",
      image: product1,
      video: "#",
      description:
        "Our VTL (Vertical Turning Lathe) CNC Machine Panel is designed to control vertical turning machines with high precision and stability. Ideal for heavy-duty metal cutting operations, it provides seamless control and integration with industry-standard CNC systems.",
      features: [
        "Controller : Fanuc / Siemens / Mitsubishi compatible",
        "Power Supply : 3-Phase, 415V, 50Hz",
        "Display : 10.4” HMI Touch Screen (optional)",
        "Axis Control : X & Z Axis, Servo Motor Controlled",
        "Safety Features : Overload protection, emergency stop, and fault detection",
        "Cabinet Type : Powder-coated MS enclosure with ventilation",
        "Connectivity : USB, RS-232, Ethernet (optional)",
        "Cooling System : Industrial fan + optional air conditioning",
        "Additional : Inbuilt diagnostic LEDs and wiring charts",
      ],
    },
    {
      id: 2,
      name: "Turning Machine (CNC Panel)",
      image: product2,
      video: "#",
      description:
        "This CNC panel is tailored for horizontal turning machines used in high-speed, precision lathe operations. It supports real-time diagnostics, tool management, and offers robust compatibility with major CNC control systems.",
      features: [
        "Compatible Controllers : Siemens / Fanuc / Delta / LNC",
        "Input Voltage : 415V AC ±10%, 3-Phase",
        "Axes : 2 to 4 axis control",
        "Motor Interface : Servo & Stepper motor drivers",
        "Panel Enclosure : Dust-proof, IP54 rated cabinet",
        "User Interface : Color-coded switches, push buttons, and emergency stop",
        "I/O Ports : 16 Digital Input / 16 Digital Output (expandable)",
        "Cooling : Internal panel fans and filter trays",
      ],
    },
    {
      id: 3,
      name: "CNC Press Brake Machine Panel",
      image: product3,
      video: "#",
      description:
        "Our CNC Press Brake Panel ensures precision bending control with minimal operator input. It simplifies complex bends with intuitive controls and supports multi-axis movement with programmable profiles.",
      features: [
        "Controller Type : DA-52S / Cybelec / ESA / Automec / Schneider HMI",
        "Axis Control : Y1, Y2, X, R Axis (Expandable)",
        "Voltage : 3 Phase, 440V, 50Hz",
        "Interface : 7” / 10” HMI with numeric keypad or touchscreen",
        "Sensors : Linear encoders, pressure sensors compatible",
        "Cabinet : MS Sheet cabinet with IP55 protection",
        "Features : Auto back gauge adjustment, angle programming, stroke memory",
        "Communication : CAN Bus / RS485 / USB",
      ],
    },
    {
      id: 4,
      name: "Roll Forming Machine Panel",
      image: product4,
      video: "#",
      description:
        "Engineered for high-speed roll forming lines, this control panel ensures synchronized operation between uncoilers, feeders, forming stations, and cutting units for continuous, precise metal sheet profiling.",
      features: [
        "Controller Support : Delta PLC / Mitsubishi / Siemens",
        "Input Power : 415V AC, 3 Phase",
        "Control Logic : PLC based with VFD drive compatibility",
        "Display : Touch HMI 7”/10” for line monitoring",
        "Speed Control : Line speed regulation via VFD",
        "Sensors : Proximity, Encoder, Safety Interlock",
        "Enclosure : Rugged powder-coated enclosure",
        "Connectivity : Modbus RTU, TCP/IP support",
        "Protection : Overvoltage, phase loss, short circuit",
      ],
    },
    {
      id: 5,
      name: "CNC Grinding Machine Panel",
      image: product5,
      video: "#",
      description:
        "Optimized for both surface and cylindrical grinding applications, our CNC grinding machine panels deliver micro-level precision control and support high-accuracy machining with ease of use.",
      features: [
        "CNC Controller : Fanuc / Siemens / Fagor compatible",
        "Voltage Range : 380V-480V, 3 Phase",
        "Control Interface : PLC with touchscreen HMI",
        "Motor Interface : Servo/Stepper with PID tuning",
        "Axis Support : Up to 3-axis control (X, Y, Z)",
        "Features : Coolant control, dressing cycle integration, wheel speed monitor",
        "Alarm System : Visual and audible alerts",
        "Safety : Emergency stop, Interlock, Door safety relay",
        "Cabinet Design : IP54 enclosure with panel cooling",
      ],
    },
    {
      id: 6,
      name: "SPM (Special Purpose Machine) Panel",
      image: product6,
      video: "#",
      description:
        "Our SPM Control Panels are custom-built to operate machines tailored for specific industrial applications such as drilling, slotting, tapping, and custom automation tasks. Each panel is uniquely designed as per machine logic.",
      features: [
        "Design : Customized PLC logic and HMI integration",
        "Power Supply : 415V AC ±10%, 50Hz, 3 Phase",
        "Controller Options : Siemens S7, Allen Bradley, Delta, Schneider",
        "Panel Size : Based on machine operation & IO requirement",
        "Communication : RS-485, Ethernet, Modbus support",
        "Sensors & IOs : Based on the application (Inductive, Capacitive, Load Cells)",
        "Additional Features : Operator safety modules, data logging, remote troubleshooting",
        "Protection : Surge, Overcurrent, Heat trip, E-stop",
      ],
    },
  ];

  const openQuickView = (product) => {
    setQuickViewProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    document.body.style.overflow = "auto";
  };
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const contactUs = () => {
    navigate("/contact");
  };

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
                Control Panel
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
                <span className="text-red-600">Control Panel</span>
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
                src={controlpanel}
                alt="Control Panel Banner"
                className="w-[700px]  h-auto max-w-2xl mx-auto" // or max-w-3xl
                width={1024} // optional: increase width
                height={512} // optional: increase height
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        ref={refProduct}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
          <div className="text-center mb-12" style={animationStyle}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Products
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Premium quality control panel for industrial automation
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            style={animationStyle}
          >
            {products.slice(0, visibleProducts).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative group">
                  {/* Product Image (1080x1080) */}
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => openQuickView(product)}
                    className="w-full h-64 object-contain p-4 bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex space-x-2">
                      <button
                        className="flex-grow bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                        onClick={contactUs}
                      >
                        <MdContactPhone className="mr-2" />
                        Contact US
                      </button>

                      <button
                        className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-2 px-4 rounded transition-colors duration-300"
                        onClick={() => openQuickView(product)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProducts < products.length && (
            <div className="text-center mt-10">
              <button
                onClick={loadMoreProducts}
                className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Load More Products
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={closeQuickView}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full md:max-h-[120vh] sm:max-h-[90vh] lg:max-h-[120vh] max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold">{quickViewProduct.name}</h3>
              <button
                onClick={closeQuickView}
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <MdClose size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Product Image */}
              {/* Media Slider */}
              <div className="flex flex-col items-center">
                {/* Main Media Display */}
                <div className="w-full h-80 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                  {activeMedia === "image" ? (
                    <img
                      src={quickViewProduct.image}
                      alt={quickViewProduct.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src={quickViewProduct.video}
                      title="Product Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>

                {/* Thumbnail Previews */}
                <div className="flex mt-4 gap-4">
                  {/* Image Thumbnail */}
                  <button
                    onClick={() => setActiveMedia("image")}
                    className={`border rounded-md p-1 ${
                      activeMedia === "image"
                        ? "border-red-500"
                        : "border-transparent"
                    } transition`}
                  >
                    <img
                      src={quickViewProduct.image}
                      alt="Preview"
                      className="w-20 h-16 object-contain rounded"
                    />
                  </button>

                  {/* Video Thumbnail */}
                  {videoId && (
                    <button
                      onClick={() => setActiveMedia("video")}
                      className={`border rounded-md p-1 ${
                        activeMedia === "video"
                          ? "border-red-500"
                          : "border-transparent"
                      } transition`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                        alt="Video Preview"
                        className="w-20 h-16 object-cover rounded"
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div>
                {/* <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {renderRatingStars(quickViewProduct.rating)}
                        </div>
                        <span className="text-gray-500 text-sm">
                          ({quickViewProduct.rating} Rating)
                        </span>
                      </div> */}

                {/* <p className="text-red-500 font-bold text-2xl mb-4">
                        {quickViewProduct.price}
                      </p> */}

                <p className="text-gray-700 mb-6">
                  {quickViewProduct.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {quickViewProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheckCircle className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 flex-wrap gap-2">
                  <button
                    className="flex-grow bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded transition-colors duration-300 flex items-center justify-center"
                    onClick={contactUs}
                  >
                    <MdContactPhone className="mr-2" />
                    Contact US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ControlPanel;
