import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1 className="h-screen flex-col flex justify-center items-center w-screen bg-gray-900 text-white uppercase"> <span className="text-2xl">404</span> <br /> not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
