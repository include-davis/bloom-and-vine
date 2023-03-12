import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Services/>
    </div>
  );
}

export default App;
