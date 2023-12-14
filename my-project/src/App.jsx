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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cheackout" element={<CheackOut />}></Route>
      </Routes>
    </>
  );
}

export default App;
