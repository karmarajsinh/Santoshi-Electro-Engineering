import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import roboticssys from "./../../../Img/robotics-system-banner.png";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdStar,
  MdStarHalf,
  MdClose,
  MdContactPhone,
} from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import product1 from "../../../Img/products/scara-robots/SCARA-Robots-Systems.png";
import product2 from "../../../Img/products/robotic-handling/DIR-RH09-06 .png";
import product3 from "../../../Img/products/robotic-handling/DIR-RH07-08-DIR-RH09-07.png";
import product4 from "../../../Img/products/robotic-handling/DIR-RH14-10.png";
import product5 from "../../../Img/products/robotic-handling/DIR-RH15-12.png";
import product6 from "../../../Img/products/robotic-handling/DIR-RH18-20.png";
import product7 from "../../../Img/products/robotic-handling/DIR-RH18-25.png";
import product8 from "../../../Img/products/robotic-handling/DIR-RH20-12.png";
import product9 from "../../../Img/products/robotic-handling/DIR-RH27-50.png";
import product10 from "../../../Img/products/robotic-handling/DIR-RH22-80.png";
import product11 from "../../../Img/products/robotic-handling/DIR-RP18-25.png";
import product12 from "../../../Img/products/robotic-handling/DIR-RP15-15.png";
import product13 from "../../../Img/products/robotic-handling/DIR-RP24-130.png";
import product14 from "../../../Img/products/robotic-welding/DIR-RW14-10.png";
import product15 from "../../../Img/products/robotic-welding/DIR-RW18-20.png";
import product16 from "../../../Img/products/robotic-welding/DIR-RW20-06.png";
import pdf1 from "../../../pdfs/scara-robot.pdf";
import pdf2 from "../../../pdfs/DIR-RH09-06-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf3 from "../../../pdfs/DIR-RH07-08-DIR-RH09-07-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf4 from "../../../pdfs/DIR-RH14-10-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf5 from "../../../pdfs/DIR-RH15-12-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf6 from "../../../pdfs/DIR-RH18-20-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf7 from "../../../pdfs/DIR-RH18-25-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf8 from "../../../pdfs/DIR-RH20-12-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf9 from "../../../pdfs/DIR-RH27-50-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf10 from "../../../pdfs/DIR-RH22-80-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf11 from "../../../pdfs/DIR-RP18-25-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf12 from "../../../pdfs/DIR-RP15-15-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf13 from "../../../pdfs/DIR-RP24-130-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf14 from "../../../pdfs/DIR-RW14-10-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf15 from "../../../pdfs/DIR-RW18-20-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import pdf16 from "../../../pdfs/DIR-RW20-06-INDUSTRIAL-ROBOT-HANDLING-APPLICATION.pdf";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const RoboticSystem = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  //   const [visibleProducts, setVisibleProducts] = useState(8);
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeMedia, setActiveMedia] = useState("image");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const extractVideoId = (url) => {
    const match = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const videoId = quickViewProduct
    ? extractVideoId(quickViewProduct.video)
    : null;

  // Product data with imported images
  const products = [
    {
      id: 1,
      name: "SCARA Robots Systems",
      image: product1,
      price: "₹5,00,000",
      rating: 4.5,
      category: "scara-robots",
      pdf: pdf1,
      video: "https://www.youtube.com/embed/c8e7eSfKfJE?si=j2YAks_WPzJ4S8fy",
      description:
        "High-speed, precision SCARA robot for smart, flexible, and efficient automation in modern manufacturing.",
      features: [
        "Payload capacity: 3-12 kg",
        "Repeatability: J1 + J2 +- 0.01 mm, J3 +- 0.01 mm J4 +- 0.01 Degree",
        "I/O: 12/12",
        "Arm Length( X + Y) : 300-800mm",
        "3-axis/5-axis design for flexibility",
      ],
    },
    {
      id: 2,
      name: "DIR-RH09-06",
      image: product2,
      price: "₹1,50,000",
      rating: 4.8,
      category: "industrial-robot-handling-application",
      pdf: pdf2,
      video: "https://www.youtube.com/embed/BHT-pU8vfw8?si=ip902z-LY22SqBmp",
      description:
        "Compact, high-performance 6kg industrial robot with built-in cabling and smooth, stable motion for tight-space handling applications.",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 6KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : 士0.03mm",
        "Maximum reaching distance : 915mm",
        "Robot body weight : 60KG",
        "Installation mode : Ground, upside down mounting",
        "IP level : IP56",
      ],
    },
    {
      id: 3,
      name: "DIR-RH07-08 / DIR-RH09-07",
      image: product3,
      price: "₹10,00,000",
      category: "industrial-robot-handling-application",
      rating: 4.7,
      pdf: pdf3,
      video: "https://www.youtube.com/embed/IRw5d7oKczE?si=DvHFQP6WnDj_8Q4x",
      description:
        "Modular, compact industrial robot with up to 8kg payload and built-in cable design, ideal for flexible, space-saving automation.",
      features: [
        "Arm form : Vertical multiple joints",
        "Degree of freedom : 6 axis",
        "Maximum payload : 8KG / 7KG",
        "Repeated positioning accuracy : ±0.02mm / ±0.03mm",
        "Maximum reaching distance : 712mm / 916mm",
        "Robot body weight : 44KG / 46KG",
        "IP Level : Body IP54, wrist IP65",
      ],
    },
    {
      id: 4,
      name: "DIR-RH14-10",
      image: product4,
      price: "₹10,00,000",
      rating: 4.3,
      pdf: pdf4,
      category: "industrial-robot-handling-application",
      video: "https://www.youtube.com/embed/IRw5d7oKczE?si=DvHFQP6WnDj_8Q4x",
      description:
        "High-rigidity handling robot with dual-circuit safety system, built-in power stabilization, and optimized structure for reliable industrial performance.",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 10KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 1454mm",
        "Robot body weight : 170KG",
        "IP Level : Body IP54, wrist IP67",
      ],
    },
    {
      id: 5,
      name: "DIR-RH15-12",
      image: product5,
      price: "₹10,00,000",
      pdf: pdf5,
      video: "https://www.youtube.com/embed/BHT-pU8vfw8?si=ip902z-LY22SqBmp",
      category: "industrial-robot-handling-application",
      rating: 4.6,
      description:
        "High-speed, high-precision industrial robot with IP67 protection, compact design, advanced control algorithms, and enhanced durability for demanding handling tasks.",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 12KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.05mm",
        "Maximum reaching distance : 1510mm",
        "Robot body weight : 160KG",
        "IP Level : Wrist Ip67, others IP54 ",
      ],
    },
    {
      id: 6,
      name: "DIR-RH18-20",
      image: product6,
      price: "₹10,00,000",
      rating: 4.9,
      pdf: pdf6,
      category: "industrial-robot-handling-application",
      video: "https://www.youtube.com/embed/URB53TIuZCM?si=nhhxAb36t-bRokgK",
      description:
        "Versatile 20kg-payload robot with 1.8m reach, compact design, and dual-circuit safety system for high-speed handling, welding, and multi-scene automation.",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 20KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 1730mm",
        "Robot body weight : 285KG",
        "IP Level : Body IP54 , wrist IP67",
      ],
    },
    {
      id: 7,
      name: "DIR-RH18-25",
      image: product7,
      price: "₹10,00,000",
      rating: 4.4,
      pdf: pdf7,
      category: "industrial-robot-handling-application",
      video: "https://www.youtube.com/embed/BHT-pU8vfw8?si=ip902z-LY22SqBmp",
      description:
        "Compact, high-speed 25kg-payload robot with advanced control, dual-circuit safety, and flexible design for stable, high-performance industrial automation.",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 25KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.05mm",
        "Maximum reaching distance : 1835.6mm",
        "Robot body weight : 250KG",
        "IP Level : Wrist Ip67, others IP54",
      ],
    },
    {
      id: 8,
      name: "DIR-RH20-12",
      image: product8,
      price: "₹10,00,000",
      rating: 4.2,
      pdf: pdf8,
      category: "industrial-robot-handling-application",
      description:
        "High-rigidity, IP67-rated 12kg-payload robot with advanced PID control, dual-circuit safety, collision detection, and compact design for precise, durable industrial automation.",
      video: "https://www.youtube.com/embed/M1jcRVc3mF0?si=Oq2jqWH8ntl4yT5y",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 12KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 2015mm",
        "Robot body weight : 262KG",
        "IP Level : Wrist Ip67 ,others IP54",
      ],
    },
    {
      id: 9,
      name: "DIR-RH27-50",
      image: product9,
      price: "10,00,000",
      rating: 4.8,
      pdf: pdf9,
      category: "industrial-robot-handling-application",
      description:
        "High-payload 50kg robot with 2.7m reach, built-in cabling, dual-circuit safety, and flexible design for efficient handling, assembly, and large-scale automation tasks.",
      video: "https://www.youtube.com/embed/O6A4Vu0NKd4?si=y4WCIRG_uQSSUg2y",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 50KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 2680mm",
        "Robot body weight : 730KG",
        "IP Level : Body IP54 , wrist IP67",
      ],
    },
    {
      id: 10,
      name: "DIR-RH22-80",
      image: product10,
      price: "₹10,50,000",
      rating: 4.5,
      pdf: pdf10,
      category: "industrial-robot-handling-application",
      description:
        "Powerful 80kg-payload robot with 2.2m reach, built-in cabling, high flexibility, and dual-circuit safety—ideal for heavy-duty handling, assembly, and automation tasks.",
      video: "https://www.youtube.com/embed/O6A4Vu0NKd4?si=pc2FOCyD1mR_AXu1",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 80KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 2200mm",
        "Robot body weight : 730KG",
        "IP Level : Body IP54 , wrist IP67",
      ],
    },
    {
      id: 11,
      name: "DIR-RP18-25",
      image: product11,
      price: "₹10,00,000",
      rating: 4.7,
      pdf: pdf11,
      category: "industrial-robot-handling-application",
      description:
        "Durable 25kg-payload robot with high protection design, built-in dual-circuit gas pipe, and enhanced EMC filtering—ideal for reliable, dustproof, and waterproof handling operations.",
      video: "https://www.youtube.com/embed/y-N8bSe5UxA?si=viR6rqqKk_qod8kz",
      features: [
        "Arm form : Multi joints+connecting rod",
        "Maximum payload : 25KG",
        "Degree of freedom : 4 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 1885mm",
        "Robot body weight : 155KG",
        "IP Level : IP56",
      ],
    },
    {
      id: 12,
      name: "DIR-RP15-15",
      image: product12,
      price: "₹11,00,000",
      rating: 4.9,
      pdf: pdf12,
      category: "industrial-robot-handling-application",
      description:
        "High-speed, high-precision 15kg-payload robot with gravity compensation, enhanced waterproof design, and strong bearing capacity for versatile handling and palletizing tasks.",
      video: "https://www.youtube.com/embed/_hp760ng_Tg?si=3UBz5In2LEOYUTP2",
      features: [
        "Arm form : Multi joints+connecting rod",
        "Maximum payload : 15KG",
        "Degree of freedom : 4 axis",
        "Repeated positioning accuracy : ±0.05mm",
        "Maximum reaching distance : 1530mm",
        "Robot body weight : 155KG",
        "IP Level : IP56",
      ],
    },
    {
      id: 13,
      name: "DIR-RP24-130",
      image: product13,
      price: "₹10,10,000",
      rating: 4.6,
      pdf: pdf13,
      category: "industrial-robot-handling-application",
      description:
        "Heavy-duty 130kg-payload robot with 2.4m reach, gravity compensation, and load-adaptive control for high-precision, energy-efficient handling and vacuum applications.",
      video: "https://www.youtube.com/embed/M1jcRVc3mF0?si=G8xEcZL4aAfVM-mb",
      features: [
        "Arm form : Multi joints+connecting rod",
        "Maximum payload : 130KG",
        "Degree of freedom : 4 axis",
        "Repeated positioning accuracy : ±0.02mm",
        "Maximum reaching distance : 2485mm",
        "Robot body weight : 820KG",
        "IP Level : IP54",
      ],
    },
    {
      id: 14,
      name: "DIR-RW14-10",
      image: product14,
      price: "₹10,50,000",
      category: "industrial-robot-welding-application",
      rating: 4.8,
      pdf: pdf14,
      description:
        "Compact 1.4m-reach welding robot with built-in welding cables, dual-circuit safety, and high precision—ideal for fast, stable, and flexible welding applications.",
      video: "#",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 10KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 1454mm",
        "Robot body weight : 170KG",
        "IP Level : Body IP54 , wrist IP67",
      ],
    },
    {
      id: 15,
      name: "DIR-RW18-20",
      image: product15,
      price: "₹11,00,000",
      rating: 4.9,
      pdf: pdf15,
      category: "industrial-robot-welding-application",
      description:
        "Compact 1.8m-reach welding robot with high-speed, precise performance and built-in safety, ideal for flexible installation in diverse welding applications.",
      video: "#",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 20KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 1730mm",
        "Robot body weight : 285KG",
        "IP Level : Body IP54 , wrist IP67",
      ],
    },
    {
      id: 16,
      name: "DIR-RW20-06",
      image: product16,
      price: "₹11,00,000",
      rating: 4.9,
      pdf: pdf16,
      category: "industrial-robot-welding-application",
      description:
        "Versatile 2.0m-reach welding robot with compact design, built-in power stabilization, and high precision—ideal for flexible, high-performance welding operations.",
      video: "#",
      features: [
        "Arm form : Vertical multiple joints",
        "Maximum payload : 6KG",
        "Degree of freedom : 6 axis",
        "Repeated positioning accuracy : ±0.08mm",
        "Maximum reaching distance : 2012mm",
        "Robot body weight : 291KG",
        "IP Level : Body IP54 , wrist IP67",
      ],
    },
  ];
  const [visibleProducts, setVisibleProducts] = React.useState({
    "scara-robots": 4,
    "industrial-robot-handling-application": 4,
    "industrial-robot-welding-application": 4,
  });
  const downloadPdf = (pdfFile) => {
    // Extract filename from the path (for the download attribute)
    const fileName = pdfFile.split("/").pop();

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = fileName || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewPdf = (pdfFile) => {
    window.open(pdfFile, "_blank");
  };
  const loadMoreProducts = (category) => {
    setVisibleProducts((prev) => ({
      ...prev,
      [category]: prev[category] + 4,
    }));
  };

  const categories = [
    "industrial-robot-handling-application",
    "industrial-robot-welding-application",
    "scara-robots",
  ];
  // const toggleWishlist = (productId) => {
  //   if (wishlist.includes(productId)) {
  //     setWishlist(wishlist.filter((id) => id !== productId));
  //   } else {
  //     setWishlist([...wishlist, productId]);
  //   }
  // };
  // const renderRatingStars = (rating) => {
  //   const stars = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;

  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push(<MdStar key={`full-${i}`} className="text-yellow-400" />);
  //   }

  //   if (hasHalfStar) {
  //     stars.push(<MdStarHalf key="half" className="text-yellow-400" />);
  //   }

  //   return stars;
  // };
  const contactUs = () => {
    navigate("/contact");
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    document.body.style.overflow = "auto";
  };

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
                Robotic Systems
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-md mb-6 max-w-lg">
                Cutting-edge robotic solutions for industrial automation,
                precision manufacturing, and smart factory applications.
              </p>
              <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
                <span className="text-gray-800">Home</span>
                <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
                <span className="text-gray-600">Product</span>
                <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
                <span className="text-red-600">Robotic Systems</span>
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

      {/* Products Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        ref={refProduct}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
          <div
            className="text-center mb-12"
            // style={{
            //   opacity: animate ? 1 : 0,
            //   transform: animate ? "translateY(0)" : "translateY(-40px)",
            //   transition: "opacity 0.5s ease-out, transform 0.7s ease-out",
            // }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Products
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Premium quality robotic systems for industrial automation
            </p>
          </div>

          {categories.map((category) => {
            const categoryProducts = products.filter(
              (product) => product.category === category
            );
            const categoryName = category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            if (categoryProducts.length === 0) return null;

            return (
              <div
                key={category}
                className="mb-16 last:mb-0"
                style={animationStyle}
              >
                <div className="flex items-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3272/3272665.png"
                      alt="Category Icon"
                      className="w-10 h-10 mr-4 inline-block"
                    />
                    {categoryName}
                  </h3>
                  <span className="ml-3 px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                    {categoryProducts.length} Products
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categoryProducts
                    .slice(0, visibleProducts[category])
                    .map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group"
                      >
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            onClick={() => openQuickView(product)}
                            className="w-full h-64 object-contain p-4 bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-4 flex-grow flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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

                {/* Load More Button for this category */}
                {visibleProducts[category] < categoryProducts.length && (
                  <div className="text-center mt-10">
                    <button
                      onClick={() => loadMoreProducts(category)}
                      className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 font-medium py-3 px-8 rounded-full transition-colors duration-300 hover:shadow-md"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={closeQuickView}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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

                {quickViewProduct.pdf && (
                  <div className="grid grid-cols-1 md:grid-cols-2 p-2 mb-5">
                    {/* Download Brochure Section */}
                    <div
                      className="flex items-center space-x-2 mb-3 md:mb-0.5 sm:mb-2"
                      onClick={() => downloadPdf(quickViewProduct.pdf)}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/25/25407.png"
                        alt="brochure-icon"
                        className="h-6 w-6"
                      />
                      <div className="text-red-500 font-semibold text-sm underline">
                        Download Brochure
                      </div>
                    </div>

                    <div
                      className="flex items-center space-x-2"
                      onClick={() => viewPdf(quickViewProduct.pdf)}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/7710/7710466.png"
                        alt="browse-icon"
                        className="h-6 w-6"
                      />
                      <div className="text-red-500 font-semibold text-sm underline">
                        View Brochure
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4 flex-wrap gap-2">
                  <button
                    className="flex-grow bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded transition-colors duration-300 flex items-center justify-center"
                    onClick={contactUs}
                  >
                    <MdContactPhone className="mr-2" />
                    Contact US{" "}
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

export default RoboticSystem;
