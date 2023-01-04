import "./App.css";
import { useEffect } from "react";
import { NavHeader, Body, Cards, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { PrivacyPolicy } from "./components/footer/PrivacyPolicy/PrivacyPolicy";
import { ContactUs } from "./components/footer/ContactUs/ContactUs";
import { AboutUS } from "./components/footer/AboutUs/AboutUs";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:data/:news" element={<Cards />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUS />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
