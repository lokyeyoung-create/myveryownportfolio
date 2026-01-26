import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Play from "./pages/Play";
import Work from "./pages/Work";
import Home from "./pages/Home";
import "./index.css";
import Snapper from "./pages/Projects/Snapper";
import Vetted from "./pages/Projects/Vetted";
import BeatHive from "./pages/Projects/Beathive";
import Kindred from "./pages/Projects/Kindred";
import Roadar from "./pages/Projects/Roadar";
import StudyCafe from "./pages/Projects/StudyCafe";
import Willow from "./pages/Projects/Willow";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/work" element={<Work />} />
        <Route path="/snapper" element={<Snapper />} />
        <Route path="/vetted" element={<Vetted />} />
        <Route path="/beathive" element={<BeatHive />} />
        <Route path="/kindred" element={<Kindred />} />
        <Route path="/roadar" element={<Roadar />} />
        <Route path="/studycafe" element={<StudyCafe />} />
        <Route path="/willow" element={<Willow />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
