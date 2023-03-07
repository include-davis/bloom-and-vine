import './MobileNav.css'
import menu from '../Pages/images/menu.png';
import React, {useState, useEffect, useRef} from 'react';

function MobileNav() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={menu} alt='test'></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <li>
              <a href='/home' target='_blank'>Home</a>
            </li>

            <li>
              <a href='/gallery' target='_blank'>Gallery</a>
            </li>
            
            <li>
              <a href='/services' target='_blank'>Services</a>
            </li>
            <li>
              <a href='/about' target='_blank'>About</a>
            </li>
            <li>
              <a href='/contact' target='_blank'>Contact</a> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default MobileNav;
