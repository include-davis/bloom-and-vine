import React, { useState, useEffect } from 'react';
import './App.css';
import { FaHeart } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Contact />

      <Footer/>
    </div>
  );
}

export default App;
