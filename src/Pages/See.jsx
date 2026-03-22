import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import robotics from "../Img/see-robotics.jpg";
import automation from "../Img/see-automation.jpg";
import controlpanel from "../Img/see-controlpanel.jpg";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";

const See = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    setIsVisible(false);
    navigate("/contact")
    // setTimeout(() => navigate(-1), 300);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const [animate4, setAnimate4] = useState(false);
  const [animate5, setAnimate5] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
    if (inView2) {
      setAnimate2(true);
    }
    if (inView3) {
      setAnimate3(true);
    }
    if (inView4) {
      setAnimate4(true);
    }
    if (inView5) {
      setAnimate5(true);
    }
  }, [inView, inView2, inView3, inView4, inView5]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-red-50 to-white transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />
      {/* Back Button */}
      {/* <div className="container mx-auto px-4 sm:px-6 pt-8">
        <button 
          onClick={handleBack}
          className="flex items-center text-red-600 hover:text-red-700 font-medium transition duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </div> */}

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 mt-6 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div
            ref={ref}
            className={`mb-12 text-center transition-all duration-700 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Driving Industrial Excellence with{" "}
              <span className="text-red-600">Advanced Solutions</span>
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Introduction */}
          <div
            ref={ref2}
            className={`mb-16 transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
            style={{
              opacity: animate2 ? 1 : 0,
              transform: animate2 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
            }}
          >
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              At Santoshi Electro Engineering, situated in the heart of Rajkot,
              Gujarat, we are at the forefront of transforming manufacturing
              landscapes through the seamless integration of cutting-edge
              technology. We specialize in providing comprehensive Advanced
              Robotics Solutions, Advanced Automation Solutions, and expert
              Control Panel Building, designed to optimize your operations,
              enhance productivity, and secure your competitive edge in today's
              dynamic industrial world.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              In an era where efficiency and precision are paramount, our
              solutions are engineered to meet the complex demands of modern
              industries. We understand that every business has unique
              challenges, which is why we offer tailored approaches, from
              concept to implementation and ongoing support.
            </p>
          </div>

          {/* Solutions Sections */}
          <div className="space-y-20">
            {/* Robotics Solution */}
            <div
              ref={ref3}
              className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <div
                className="order-2 md:order-1"
                style={{
                  opacity: animate3 ? 1 : 0,
                  transform: animate3 ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
                }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                  <span className="text-red-600">
                    Advanced Robotics Solutions:
                  </span>{" "}
                  Precision and Power for the Future
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our Advanced Robotics Solutions harness the power of
                  intelligent machines to revolutionize your production lines.
                  Whether it's for intricate assembly, heavy-duty material
                  handling, precise welding (as seen with systems like the DELTA
                  robotic welding solutions), pick-and-place operations, or
                  specialized SPM tending, our robots bring unparalleled
                  accuracy, speed, and consistency.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We integrate state-of-the-art articulated robots,
                  collaborative robots, and vision camera systems to perform
                  repetitive tasks with tireless precision, reduce human error,
                  and operate safely in hazardous environments. This not only
                  boosts throughput but also frees up your human workforce for
                  more complex and value-added tasks.
                </p>
              </div>
              <div
                className="order-1 md:order-2 bg-white p-6 rounded-xl shadow-lg"
                style={{
                  opacity: animate3 ? 1 : 0,
                  transform: animate3 ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
                }}
              >
                <img
                  src={robotics}
                  alt="Robotics Solutions"
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Automation Solution */}
            <div
              ref={ref4}
              className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <div
                className="bg-white p-6 rounded-xl shadow-lg"
                style={{
                  opacity: animate4 ? 1 : 0,
                  transform: animate4 ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
                }}
              >
                <img
                  src={automation}
                  alt="Automation Solutions"
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div
                style={{
                  opacity: animate4 ? 1 : 0,
                  transform: animate4 ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
                }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                  <span className="text-red-600">
                    Advanced Automation Solutions:
                  </span>{" "}
                  Intelligent Systems for Seamless Operations
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Beyond robotics, Santoshi Electro Engineering excels in
                  providing comprehensive Advanced Automation Solutions. This
                  encompasses a wide spectrum, from fully automated production
                  lines to retrofitting existing machinery with the latest PLC,
                  HMI, and SCADA systems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We analyze your current processes to identify bottlenecks and
                  design intelligent automation strategies that streamline
                  workflows, reduce operational costs, and improve overall
                  efficiency. Our expertise extends to AC/DC drive maintenance
                  and sophisticated machine panel maintenance, ensuring your
                  automated systems run smoothly and reliably. We're dedicated
                  to helping businesses move towards smart manufacturing and
                  smart factories, embracing the future of industrial
                  production.
                </p>
              </div>
            </div>

            {/* Control Panel */}
            <div
              ref={ref5}
              className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <div
                className="order-2 md:order-1"
                style={{
                  opacity: animate5 ? 1 : 0,
                  transform: animate5 ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
                }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                  <span className="text-red-600">Control Panel Building:</span>{" "}
                  The Brains Behind Your Machinery
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A robust and intelligently designed control panel is the
                  backbone of any automated system. Our Control Panel Building
                  expertise ensures that your machinery is powered by a
                  reliable, intuitive, and precisely engineered command center.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We custom-build CNC, PLC, and SPM machine control panels,
                  integrating the highest quality components. These panels are
                  meticulously designed for various applications, from turning
                  and grinding machines (like the Siemens 828D controlled
                  retrofitted machines you work with) to 12-axis press brake
                  machines and multi-starter panels. Our panels provide the
                  critical interface for monitoring, controlling, and diagnosing
                  machine operations, ensuring safety, efficiency, and optimal
                  performance for every industrial process.
                </p>
              </div>
              <div
                className="order-1 md:order-2 bg-white p-6 rounded-xl shadow-lg"
                style={{
                  opacity: animate5 ? 1 : 0,
                  transform: animate5 ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
                }}
              >
                <img
                  src={controlpanel}
                  alt="Control Panel"
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Conclusion */}
      <div
        className={`mt-20 text-center bg-red-500 p-8 w-full transition-all duration-700 delay-600 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
          Your Trusted Partner in Industrial Innovation
        </h2>
        <p className="text-white max-w-4xl mx-auto leading-relaxed">
          Located in Rajkot, Gujarat, Santoshi Electro Engineering is committed
          to delivering quality production and exceptional service. Our team of
          experts utilizes supreme quality raw materials and advanced technology
          to ensure our products and services are perfect in all aspects. We
          pride ourselves on creating quality production, delivering quality
          service, and ensuring the complete satisfaction of our clients.
        </p>
        <button
          onClick={handleBack}
          className="mt-8 bg-white hover:bg-gray-100 text-red-500 px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105"
        >
          Get in Touch
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default See;
