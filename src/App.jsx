import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./screens/Landing";
import { About } from "./screens/About";
import Programs from "./screens/Programs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </>
  );
}

export default App;
