import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="cont">
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
