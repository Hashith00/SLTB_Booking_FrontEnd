import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { Header } from "./header";
import Signup from "./signup";
import Signin from "./signin";
import Booking from "./booking";
import CheackOut from "./cheackout";
import Home from "./home";
import PassPage from "./pass";
import FailPage from "./fail";
// Add this
import ContactUsPage from "./contactus";

import Aboutus from "./aboutus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/success" element={<PassPage />}></Route>
        <Route path="/fail" element={<FailPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cheackout" element={<CheackOut />}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
      </Routes>
    </>
  );
}

export default App;
