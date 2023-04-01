import './Navbar.css'
import mobile from '../Images/b&v.png'
import React from 'react';


function Navbar() {
  return (
    <nav className="Navbar">
      <div className='Logo'>
        <a href='/Home' className='main-logo'>
          Bloom & Vine
        </a>
      </div>
      <div className='mobile-logo'>
        <a href='/Home' className='main-mobile-logo'>
          <img src={mobile} alt='Bloom & Vine' />
        </a>
      </div>

      <ul className='directory'>
        <li>
          <a href='/Home'>Home</a>
        </li>
        <li>
          <a href='/Gallery'>Gallery</a>
        </li>
        <li>
          <a href='/Services'>Services</a>
          </li>
        <li>
          <a href='/About'>About</a>
        </li>
        <li>
          <a href='/Contact'>Contact</a>
        </li>
      </ul>

      <div className='Contact-Button'>
          <a href='/Contact'>
            Contact
            </a>
      </div>

    </nav>
  );
}

export default Navbar;