import './MobileNav.css'
import menu from '../Pages/images/menu.png';
import React, {useState, useEffect, useRef} from 'react';

function MobileNav() {

  const [open, setOpen] = useState(false);

  return (
    <div className="MobileNav">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={menu} alt='test'></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
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
        </div>
      </div>
    </div>
  );
}


export default MobileNav;
