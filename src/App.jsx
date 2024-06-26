import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./screens/Landing";
import { About } from "./screens/About";
import Programs from "./screens/Programs";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
