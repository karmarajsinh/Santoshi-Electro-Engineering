import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import ComingSoon from "./Pages/Practice";
import RoboticSystem from "./Pages/Products/Robotic System/RoboticSystem";
import RoboticAutomation from "./Pages/Products/Robotic Automation/RoboticAutomation";
import Contact from "./Pages/Contact";
import ControlPanel from "./Pages/Products/Control Panel/ControlPanel";
import See from "./Pages/See";
import Gallery from "./Pages/Gallery";
import Careers from "./Pages/Careers";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/products/robotic-system" element={<RoboticSystem />} />
        <Route path="/products/robotic-automation" element={<RoboticAutomation />} />
        <Route path="/products/control-panel" element={<ControlPanel />} />
        <Route path="/see" element={<See />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
