import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Registration from "../pages/Registration";
import RentYourCar from "../pages/RentYourCar";
import NextV from "../pages/NextV";
import NextCI from "../pages/NextCI";


const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/home"/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/cars" element={<CarListing/>} />
    <Route path="/cars/:slug" element={<CarDetails/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="*" element={<NotFound/>} />
    <Route path="/registration" element={<Registration/>} />
    <Route path="/rentyourcar" element={<RentYourCar/> }/>
    <Route path="/nextv" element={<NextV/>} />
    <Route path="/nextci" element={ <NextCI/>} />
     

  </Routes>
  );
};

export default Routers;
