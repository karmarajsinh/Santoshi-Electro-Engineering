import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import contactus from "../Img/contactus.png";
import bg from "../Img/service-bg-layer-red.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";
const Contact = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      id: 1,
      title: "Location",
      description:
        "3/6 Corner ,Samrat Industrial Area,Near Chandan Marbel, B/H ST Workshop, Gondal Road, Chandan Marble, Rajkot-360004, Gujarat, India",
      icon: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    },
    {
      id: 2,
      title: "Phone",
      description: "(+91) 6355965505",
      icon: "https://cdn-icons-png.flaticon.com/128/484/484525.png",
    },
    {
      id: 3,
      title: "Email",
      description: "santoshi.electro@gmail.com",
      icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/santoshi.electro@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Contact Form Submission - ${formData.subject}`,
            _replyto: formData.email,
            _template: "table",
            _autoresponse: `Thank you for contacting us, ${formData.name}! We'll get back to you soon.`,
          }),
        }
      );

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  <Helmet>
    <title>Contact Us - Santoshi Electro Engineering</title>
    <meta
      name="description"
      content="Get in touch with Santoshi Electro Engineering for inquiries, support, or custom project discussions. We're here to help!"
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
                Contact Us
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-md mb-6 max-w-lg">
                Tell us what you need, and we'll help you get quotes.
              </p>
              <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
                <span className="text-gray-800">Home</span>
                <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
                <span className="text-red-600">Contact Us</span>
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
                src={contactus}
                alt="Robotics Banner"
                className="w-full h-auto max-w-lg mx-auto"
                width={896}
                height={432}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        ref={ref}
        className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div
            className="text-center mb-14 md:mb-20"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <p className="text-red-600 font-semibold mb-3 md:mb-4 text-base md:text-lg uppercase tracking-wider">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Contact Information
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Location Card */}
            <div
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${
                  animate ? 0.1 : 0
                }s, transform 0.5s ease-out ${animate ? 0.1 : 0}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br  group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100 rounded-2xl group-hover:bg-red-500 transition-all duration-300 group-hover:scale-105">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                    alt="Location"
                    className="h-12 w-12 object-contain group-hover:invert transition-filter duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    Our Location
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    3/6 Corner, Samrat Industrial Area
                    <br />
                    Near Chandan Marble, Gondal Road
                    <br />
                    Rajkot-360004, Gujarat, India
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Santoshi+Electro+Engineering/@22.2591272,70.7970675,21z/data=!4m6!3m5!1s0x3959ca62f0c3cea3:0x3eb6be04e01dd7ad!8m2!3d22.2591208!4d70.7971733!16s%2Fg%2F11c1l6ltpm?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 group"
                >
                  Get Directions
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${
                  animate ? 0.2 : 0
                }s, transform 0.5s ease-out ${animate ? 0.2 : 0}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br  group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100 rounded-2xl group-hover:bg-red-500 transition-all duration-300 group-hover:scale-105">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/484/484525.png"
                    alt="Phone"
                    className="h-12 w-12 object-contain group-hover:invert transition-filter duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    Phone Numbers
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-700 font-medium hover:text-red-600 transition-colors">
                      +91 9925025806
                    </p>
                    <p className="text-gray-700 font-medium hover:text-red-600 transition-colors">
                      +91 9825797917
                    </p>
                    <p className="text-gray-700 font-medium hover:text-red-600 transition-colors">
                      +91 6355965505
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+916355965505"
                  className="inline-flex items-center px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 group"
                >
                  Call Now
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${
                  animate ? 0.3 : 0
                }s, transform 0.5s ease-out ${animate ? 0.3 : 0}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br  group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-red-100 rounded-2xl group-hover:bg-red-500 transition-all duration-300 group-hover:scale-105">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Email"
                    className="h-12 w-12 object-contain group-hover:invert transition-filter duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    Email Address
                  </h3>
                  <p className="text-gray-600 mb-6 break-all hover:text-red-600 transition-colors duration-300">
                    santoshi.electro@gmail.com
                  </p>
                </div>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:santoshi.electro@gmail.com")
                  }
                  className="px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center group-hover:shadow-lg"
                >
                  Send Email
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Two-column layout for form and map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form Section */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="text-center py-8">
                  <svg
                    className="w-16 h-16 text-red-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Error!
                  </h3>
                  <p className="text-gray-600">
                    There was a problem sending your message. Please try again
                    later.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Get In Touch
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Have questions or need assistance? We're here to help!
                    </p>
                    <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Enter Your Full Name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-1">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-1">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Information">
                          Product Information
                        </option>
                        <option value="Feeback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Please describe your inquiry in detail..."
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            className="w-5 h-5 ml-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Google Map Section */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h3>
              <div className="aspect-w-16 aspect-h-9 w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4979208256545!2d70.7971733!3d22.259120799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca62f0c3cea3%3A0x3eb6be04e01dd7ad!2sSantoshi%20Electro%20Engineering!5e0!3m2!1sen!2sin!4v1751875611644!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-2xl"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Address:</strong> 3/6 Corner, Samrat Industrial Area,
                  Near Chandan Marble, Gondal Road, Rajkot-360004, Gujarat,
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
