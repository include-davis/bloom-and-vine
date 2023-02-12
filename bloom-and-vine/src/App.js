import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Contact />

      {/* <p>test</p>
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
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p> */}

      <Footer/>
    </div>
  );
}

export default App;
