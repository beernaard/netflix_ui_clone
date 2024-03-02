import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import Content from "./Components/Content/Content";
import ParentContent from "./Components/Content/ParentContent";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <div className="app-navbar">
        <NavBar />
      </div>
      <div className="app-homepage">
        <HomePage />
      </div>
      <div className="app-content">
        <ParentContent />
      </div>
      <div className="app-faq">
        <Faq />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
