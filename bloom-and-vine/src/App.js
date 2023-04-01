import { Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import MobileNav from "./Components/MobileNav"

function App() {
  return (
    <div className="App">
		<Navbar />
        <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/Gallery' element={<Gallery />} />
            <Route exact path='/Services' element={<Services />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route path="*" element={<div>error</div>} />
        </Routes>
		<Footer />
		<MobileNav />
    </div>
  );
}

export default App;