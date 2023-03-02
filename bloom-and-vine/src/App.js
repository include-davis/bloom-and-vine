import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/Contact' element={< Contact />}></Route>
      </Routes>
{/* 
    
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p> */}
      <Footer/>

      </Router>
    
  );
}

export default App;
