import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import img1 from "../Img/gallery/img1.jpeg";
import img2 from "../Img/gallery/img2.jpeg";
import img3 from "../Img/gallery/img3.jpeg";
import img4 from "../Img/gallery/img4.jpeg";
import img5 from "../Img/gallery/img5.jpeg";
import img6 from "../Img/gallery/img6.jpeg";
import img7 from "../Img/gallery/img7.jpeg";
import img8 from "../Img/gallery/img8.jpeg";
import img9 from "../Img/gallery/img9.jpg";
import img10 from "../Img/gallery/img10.jpg";
import img11 from "../Img/gallery/img11.jpg";
import img12 from "../Img/gallery/img12.jpg";
import img13 from "../Img/gallery/img13.jpg";
import img14 from "../Img/gallery/img14.jpg";
import img15 from "../Img/gallery/img15.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

// Sample gallery data - replace with your actual images
const galleryData = [
  {
    id: 1,
    title: "Our Team at Work",
    category: "events",
    imageUrl: img4,
  },
  {
    id: 2,
    title: "Factory Visit",
    category: "visit",
    imageUrl: img7,
  },
  {
    id: 3,
    title: "Factory VisitFactory Visit",
    category: "visit",
    imageUrl: img6,
  },
  {
    id: 4,
    title: "Explaining to exhibitors",
    category: "events",
    imageUrl: img14,
  },
  {
    id: 5,
    title: "SEE Team",
    category: "events",
    imageUrl: img3,
  },
  {
    id: 6,
    title: "Leaders",
    category: "events",
    imageUrl: img1,
  },
  {
    id: 7,
    title: "SEE",
    category: "events",
    imageUrl: img9,
  },
  {
    id: 8,
    title: "Team at lunch",
    category: "events",
    imageUrl: img10,
  },
  {
    id: 9,
    title: "CEO",
    category: "events",
    imageUrl: img15,
  },
  {
    id: 10,
    title: "Achievement",
    category: "achievements",
    imageUrl: img8,
  },
  {
    id: 11,
    title: "Our Team",
    category: "team",
    imageUrl: img4,
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const filters = [
    { id: "all", name: "All" },
    { id: "events", name: "Events" },
    { id: "visit", name: "Visit" },
    { id: "achievements", name: "Achievements" },
    { id: "team", name: "Our Team" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  <Helmet>
    <title>Gallery - Santoshi Electro Engineering</title>
    <meta
      name="description"
      content="Explore photos of Santoshi Electro Engineering's projects, machinery, workspace, and client installations."
    />
  </Helmet>;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-red-50 to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 pt-8 pb-12 mt-16 lg:mt-20 md:mt-16 sm:mt-16">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Santoshi Electro Engineering{" "}
            <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our world of advanced robotics, automation solutions, and
            the team behind our success
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {filteredImages.map((item) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105"
              onClick={() => openLightbox(item)}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              layout
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-medium text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition-colors"
            >
              &times;
            </button>
            <motion.div
              className="max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
};

export default Gallery;
