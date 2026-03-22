import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import careersHero from "../Img/careers-hero.png";
import bg from "../Img/service-bg-layer-red.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

const Careers = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowImage(true), 50);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Electrical Engineer",
      department: "Engineering",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "2-5 years",
      description: "Design and develop electrical systems and components for industrial applications.",
      requirements: [
        "B.E./B.Tech in Electrical Engineering",
        "Experience with CAD software",
        "Knowledge of electrical codes and standards",
        "Strong problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "3-7 years",
      description: "Oversee production processes and ensure quality standards are met.",
      requirements: [
        "Diploma/Degree in Mechanical/Electrical Engineering",
        "Experience in manufacturing supervision",
        "Knowledge of quality control processes",
        "Leadership skills"
      ]
    },
    {
      id: 3,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      description: "Build client relationships and promote our electrical engineering solutions.",
      requirements: [
        "Bachelor's degree in any field",
        "Excellent communication skills",
        "Sales experience preferred",
        "Willingness to travel"
      ]
    },
    {
      id: 4,
      title: "Quality Control Inspector",
      department: "Quality Assurance",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "2-4 years",
      description: "Ensure all products meet quality standards and specifications.",
      requirements: [
        "Diploma in Engineering",
        "Experience in quality control",
        "Attention to detail",
        "Knowledge of testing equipment"
      ]
    }
  ];

  // Why work with us features
  const benefits = [
    {
      id: 1,
      title: "Competitive Salary",
      description: "Attractive compensation package with performance bonuses",
      icon: "💰"
    },
    {
      id: 2,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      icon: "🏥"
    },
    {
      id: 3,
      title: "Skill Development",
      description: "Regular training and workshops for professional growth",
      icon: "📚"
    },
    {
      id: 4,
      title: "Work-Life Balance",
      description: "Flexible working hours and paid time off",
      icon: "⚖️"
    },
    {
      id: 5,
      title: "Modern Workplace",
      description: "State-of-the-art facilities and equipment",
      icon: "🏢"
    },
    {
      id: 6,
      title: "Career Growth",
      description: "Clear career progression paths and opportunities",
      icon: "📈"
    }
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload only PDF, DOC, or DOCX files");
        return;
      }
      
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if resume is uploaded
    if (!resumeFile) {
      alert("Please upload your resume");
      setIsSubmitting(false);
      return;
    }

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("resume", resumeFile);
    formDataToSend.append("_subject", `Job Application - ${formData.position}`);
    formDataToSend.append("_replyto", formData.email);
    formDataToSend.append("_template", "table");

    try {
      // Method 1: Using EmailJS (Recommended for file attachments)
      // You need to sign up at https://www.emailjs.com/
      // const emailjsResponse = await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formDataToSend,
      //   'YOUR_PUBLIC_KEY'
      // );

      // Method 2: Using your own backend endpoint (Best practice)
      // const response = await fetch('YOUR_BACKEND_ENDPOINT', {
      //   method: 'POST',
      //   body: formDataToSend
      // });

      // Method 3: Using FormSubmit with separate email for resume
      // Send form data to FormSubmit
      const formSubmitResponse = await fetch(
        "https://formsubmit.co/ajax/santoshi.electro@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Job Application - ${formData.position}`,
            _replyto: formData.email,
            _template: "table",
            _autoresponse: `Thank you for applying to Santoshi Electro Engineering, ${formData.name}! We have received your application for ${formData.position} and will review it shortly.`,
            resumeAttached: resumeFile ? "Yes" : "No",
            resumeFileName: resumeFile?.name || "Not provided"
          }),
        }
      );

      // Send resume as attachment via email (alternative method)
      if (resumeFile) {
        // Create a mailto link as fallback
        const mailtoLink = `mailto:santoshi.electro@gmail.com?subject=Resume for ${formData.position} - ${formData.name}&body=Application details:%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0APosition: ${formData.position}%0D%0AExperience: ${formData.experience}%0D%0A%0D%0AMessage:%0D%0A${formData.message}%0D%0A%0D%0A(Resume attached separately)`;
        
        // You can show a message to user to also send resume via email
        console.log("For resume attachment, user should also send to:", mailtoLink);
        
        // Or open email client automatically
        // window.location.href = mailtoLink;
      }

      const result = await formSubmitResponse.json();
      if (result.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          message: "",
        });
        setResumeFile(null);
        document.getElementById("resume-upload").value = "";
        
        // Show instructions for resume
        alert("Form submitted successfully! Please send your resume separately to santoshi.electro@gmail.com with the subject: 'Resume for [Position] - [Your Name]'");
        
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative: Direct email with attachment using mailto
  const handleSubmitWithAttachment = () => {
    if (!resumeFile) {
      alert("Please upload your resume first");
      return;
    }

    const subject = `Job Application - ${formData.position || "Open Position"}`;
    const body = `
Application Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}
Experience: ${formData.experience}

Cover Letter:
${formData.message}

Note: Resume attached as file.
    `.trim();

    const mailtoLink = `mailto:santoshi.electro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Helmet>
        <title>Careers - Santoshi Electro Engineering</title>
        <meta
          name="description"
          content="Join our team at Santoshi Electro Engineering. Explore career opportunities in electrical engineering and manufacturing."
        />
      </Helmet>

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
                Join Our Team
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-md mb-6 max-w-lg">
                Build your career with Santoshi Electro Engineering. We're looking for talented individuals to grow with us.
              </p>
              <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
                <span className="text-gray-800">Home</span>
                <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
                <span className="text-red-600">Careers</span>
              </div>
            </div>
            <div
              className={`w-full lg:w-1/2 transition-all duration-1000 ease-out relative ${
                showImage
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              } hidden sm:block`}
            >
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍🔧👩‍🔧</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Careers at Santoshi</h3>
                  <p className="text-gray-600">Add your career hero image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
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
              WHY JOIN US
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Work With The Best
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg group"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${0.1 * index}s, transform 0.5s ease-out ${0.1 * index}s`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-red-600 font-semibold mb-3 md:mb-4 text-base md:text-lg uppercase tracking-wider">
              OPEN POSITIONS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Current Job Openings
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.5s ease-out ${0.1 * index}s, transform 0.5s ease-out ${0.1 * index}s`,
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                        Experience: {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <button
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 group-hover:shadow-lg whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
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
                  Application Submitted!
                </h3>
                <p className="text-gray-600 mb-4">
                  Thank you for your application. We'll review your profile and get back to you soon.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 text-left">
                  <p className="text-sm text-yellow-700">
                    <strong>Note:</strong> Please also send your resume to <strong>santoshi.electro@gmail.com</strong> with the subject: "Resume for [Position] - [Your Name]"
                  </p>
                </div>
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
                  There was a problem submitting your application. Please try again later or send your application directly to santoshi.electro@gmail.com
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
                    Apply for Position
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Fill out the form below to submit your application
                  </p>
                  <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Important:</strong> After submitting this form, please also send your resume to <strong>santoshi.electro@gmail.com</strong> with the subject: "Resume for [Position] - [Your Name]"
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>

                    {/* Position Field */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Position Applying For <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        required
                      >
                        <option value="">Select Position</option>
                        {jobOpenings.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                    </div>

                    {/* Experience Field */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        required
                      >
                        <option value="">Select Experience</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV (Preview)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-500 transition-colors">
                        <input
                          type="file"
                          name="resume"
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-upload"
                          accept=".pdf,.doc,.docx"
                        />
                        <label htmlFor="resume-upload" className="cursor-pointer">
                          <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm text-gray-600">
                            {resumeFile ? resumeFile.name : 'Click to upload resume (PDF, DOC, DOCX)'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                        </label>
                      </div>
                      {resumeFile && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ Resume uploaded: {resumeFile.name} ({Math.round(resumeFile.size / 1024)}KB)
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Tell us why you'd be a great fit for this position..."
                      required
                    ></textarea>
                  </div>

                  {/* Alternative Method Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-blue-500 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          <strong>Alternative:</strong> You can also send your complete application (form details + resume) directly via email.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center ${
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
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

                    <button
                      type="button"
                      onClick={handleSubmitWithAttachment}
                      className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      Send via Email Client
                      <svg
                        className="w-5 h-5 ml-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;