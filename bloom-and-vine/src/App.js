import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact';
import MobileNav from './Components/MobileNav';
import scrollarrow from './Images/scrollarrow.png';

function App() {
  return (
      
      <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Homepage />}></Route>
        <Route exact path='/Gallery' element={< Gallery />}></Route>
        <Route exact path='/Services' element={< Services />}></Route>
        <Route exact path='/About' element={< About />}></Route>
        <Route exact path='/Contact' element={< Contact />}></Route>
        <Route path="*" element={<div>error</div>} />
      </Routes>

      {/* <div class="scroll-container">
        <a href="#top">
          <img src={scrollarrow}></img>
        </a>
      </div> */}

      <Footer/>
      <MobileNav/>
    
      </>
    
  );
}

export default App;