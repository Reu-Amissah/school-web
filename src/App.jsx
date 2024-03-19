import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./screens/Landing";
import { About } from "./screens/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
