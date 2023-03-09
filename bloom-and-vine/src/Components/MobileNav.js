import './MobileNav.css'
import menu from '../Images/menu.png'
import React, {useState, useEffect, useRef} from 'react';

function MobileNav() {

  const [open, setOpen] = useState(false);
  const [subopen, setSubOpen] = useState(false);


  return (
    <div className="MobileNav">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={menu} alt='test'></img>
        </div>

        <div className='sub-menu-trigger' onClick={()=>{setSubOpen(!subopen)}}>
          <img alt='test'></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <li className='main-category'>
              <a href='/home'>Home</a>
            </li>
            <li className='main-category'>
                <a href='/gallery'>Gallery</a>
              </li>
            <div className={`gallery-menu ${subopen? 'active' : 'inactive'}`} >
              
              <li className='subcategory'>
                <a href='/gallery/Weddings'>Weddings</a>
              </li>
              <li className='subcategory'>
                <a href='/gallery/Parties'>Parties</a>
              </li>
              <li className='subcategory'>
                <a href='/gallery/Flowers'>Flowers</a>
              </li>
              <li className='subcategory'>
                <a href='/gallery/Flowers'>Films</a>
              </li>
            </div>
            <div className={`services-menu ${open? 'active' : 'inactive'}`} >
              <li className='main-category'>
                <a href='/services'>Services</a>
              </li>
              <li className='subcategory'>
                <a href='/services/Wedding'>Wedding</a>
              </li>
              <li className='subcategory'>
                <a href='/services/Rentals'>Rentals</a>
              </li>
              <li className='subcategory'>
                <a href='/services/Funerals'>Funerals</a>
              </li>
              <li className='subcategory'>
                <a href='/services/Classes'>Classes</a>
              </li>
              <li className='subcategory'>
                <a href='/services/Parties'>Parties</a>
              </li>
              <li className='subcategory'>
                <a href='/services/Custom-Order'>Custom Order</a>
              </li>
            </div>

            <li className='main-category'>
              <a href='/about'>About</a>
            </li>

            <li className='main-category'>
              <a href='/contact'>Contact</a> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default MobileNav;
