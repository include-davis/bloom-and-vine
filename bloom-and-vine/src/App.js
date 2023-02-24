import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ServiceBarList from './Components/serviceBarList';
import ServicesCarousel from './Components/carousel';

function App() {
  return (
    <div className="App">
      <ServiceBarList/>
      <ServicesCarousel/>
    </div>
  );
}

export default App;
