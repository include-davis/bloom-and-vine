import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Contact /> */}
      <Footer/>
    </div>
  );
}

export default App;
