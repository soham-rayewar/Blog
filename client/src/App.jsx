/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
