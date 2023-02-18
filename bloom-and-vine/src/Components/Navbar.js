import './Navbar.css';
import React from 'react'

function Navbar() {
  return (
    <nav className="Navbar">
      <div className='Logo'>
        <a href='/home' className='main-logo'>
          Bloom & Vine
        </a>
      </div>
      <ul className='directory'>
        <li>
          <a href='/home'>Home</a>
        </li>
        <li>
          <a href='/gallery'>Gallery</a>
        </li>
        <li>
          <a href='/services'>Services</a>
          </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
