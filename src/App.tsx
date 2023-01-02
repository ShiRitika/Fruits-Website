import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDeatails";
import MyCart from "./components/MyCart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer /> {/* allow to use toast container */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/MyCart" element={<MyCart />}></Route>
      </Routes>
    </>
  );
};

export default App;
