import {useState} from 'react';
import mobileMenu from '../Images/mobileMenuBar.png'
import './MobileNav.css'


function MobileNav() {
  const [open, setOpen] = useState(false);
  
  return (
	<div className="MobileNav">
		<div className='menu-container'>
			<div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
				<img src={mobileMenu} alt='test'></img>
			</div>

			<div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
				<ul>
					<li className='main-category'>
						<a href='/'>Home</a>
					</li>

					<li className='main-category'>
						<a href='/Gallery'>Gallery</a>
					</li>

					<li className='main-category'>
						<a href='/Services'>Services</a>
					</li>

					<li className='main-category'>
						<a href='/About'>About</a>
					</li>

					<li className='main-category'>
						<a href='/Contact'>Contact</a> 
					</li>
				</ul>
			</div>
		</div>
    </div>
  );
}


export default MobileNav;
