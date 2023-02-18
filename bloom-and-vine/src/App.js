import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage'
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </div>
  );
}

export default App;
