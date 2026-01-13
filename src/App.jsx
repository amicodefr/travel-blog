import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Destination from "./pages/destinations/Destinations";
import Nav from "./components/Navbar";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/favorites" element={<Favorites />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
