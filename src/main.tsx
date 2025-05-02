import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Play from "./pages/Play";
import Work from "./pages/Work";
import Home from "./pages/Home";
import './index.css' 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);