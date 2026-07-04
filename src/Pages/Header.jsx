import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../Img/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [showHeader, setShowHeader] = useState(true);
  // const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products", isDropdown: true },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  const productItems = [
    { name: "Robotic System", path: "/products/robotic-system" },
    { name: "Control Panel", path: "/products/control-panel" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header when at top of page
      if (currentScrollY <= 10) {
        // setIsAtTop(true);
        // setShowHeader(true);
        setLastScrollY(currentScrollY);
        return;
      } else {
        // setIsAtTop(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        // setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        // setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [isVisible, setIsVisible] = useState(true);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else if (currentScrollPos > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false);
        setProductsDropdownOpen(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed w-full bg-white shadow-md z-50 transition-all duration-300 ease-out ${
        isVisible ? "top-0" : "-top-24"
      }`}
    >
    
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* <img src={logo} alt="Logo" className="h-10" /> */}
         <div className="flex items-center ">
          <img src={logo} alt="SEE Logo" className="h-10 md:h-12" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div key={item.name} className="relative group">
                  <button
                    className={`px-2 py-1 relative text-md transition-all duration-200 ${
                      location.pathname.includes(item.path)
                        ? "text-red-600 font-semibold"
                        : "text-gray-700 hover:text-red-500"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                        location.pathname.includes(item.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </button>
                  <div className="absolute left-0 mt-2 bg-white border rounded-xl shadow-xl opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 min-w-max">
                    {productItems.map((product) => (
                      <Link
                        key={product.name}
                        to={product.path}
                        className="group relative block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-150"
                      >
                        {product.name}
                        {/* <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-red-500 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span> */}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <div key={item.name} className="group">
                <Link
                  to={item.path}
                  className={`px-2 py-1 relative text-md transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 hover:text-red-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none transition-transform duration-200 hover:scale-110"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-2xl mx-3 mb-2 p-4 space-y-3 transition-all duration-300">
          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex justify-between items-center w-full text-left px-3 py-2 rounded-lg text-base text-gray-700 hover:bg-gray-100 transition-all duration-200"
                  >
                    <span className="font-medium">Products</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {productsOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {productItems.map((product) => (
                        <button
                          key={product.name}
                          onClick={() => {
                            navigate(product.path);
                            setMobileMenuOpen(false);
                            setProductsOpen(false);
                          }}
                          className="group relative block w-full text-left text-sm px-3 py-2 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
                        >
                          {product.name}
                          <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-red-500 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div key={item.name} className="group">
                <button
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`relative w-1/6 text-left px-3 py-2 rounded-lg text-base transition-colors duration-200 ${
                    isActive(item.path)
                      ? " text-red-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-2 left-3 right-3 h-0.5 bg-red-500 transition-all duration-300 ${
                      isActive(item.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
