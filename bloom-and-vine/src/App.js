import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ServiceBarList from './Components/serviceBarList';

function App() {
  return (
    <div className="App">
      <ServiceBarList/>
    </div>
  );
}

export default App;
