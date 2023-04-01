import { Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/Home' element={<Homepage />} />
            <Route exact path='/Gallery' element={<Gallery />} />
            <Route exact path='/Services' element={<Services />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route path="*" element={<div>error</div>} />
        </Routes>
    </div>
  );
}

export default App;