import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </div>
  );
}

export default App;
