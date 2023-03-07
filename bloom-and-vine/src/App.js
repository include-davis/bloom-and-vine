import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import MobileNav from './Components/MobileNav';

function App() {
  return (
    
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/Contact' element={< Contact />}></Route>
      </Routes>
      <Footer/>
      <MobileNav/>

      </Router>
    
  );
}

export default App;
