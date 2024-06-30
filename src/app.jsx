import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./pages/Footer";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
