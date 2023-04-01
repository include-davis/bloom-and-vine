import {useState} from 'react';
import mobileMenu from '../Images/mobileMenuBar.png'
import menuExpandArrow from '../Images/whiteDownArrow.png'
import menuCollapseArrow from '../Images/whiteUpArrow.png'
import './MobileNav.css'


function MobileNav() {
//   const mediaQuery = window.matchMedia('(min-width: 900px)')
  const [open, setOpen] = useState(false);
  const [subopen, setSubOpen] = useState(false);
  const [subopen2, setSubOpen2] = useState(false);
  
  return (
	<div className="MobileNav">
		<div className='menu-container'>
			<div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
				<img src={mobileMenu} alt='test'></img>
			</div>

			<div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
				<ul>
					<li className='main-category'>
						<a href='/Home'>Home</a>
					</li>

					<li className='main-category'>
						<a href='/Gallery'>Gallery</a>
						<div className='sub-menu-trigger' onClick={()=>{setSubOpen(!subopen)}  }>
							<img src={subopen ? menuCollapseArrow : menuExpandArrow} alt='test'></img>
						</div>
					</li>

					<div className={`gallery-menu ${subopen ? 'active' : 'inactive'}`} >
						<li className='subcategory'>
							<a href='/Gallery/Weddings'>Weddings</a>
						</li>
						<li className='subcategory'>
							<a href='/Gallery/Parties'>Parties</a>
						</li>
						<li className='subcategory'>
							<a href='/Gallery/Flowers'>Flowers</a>
						</li>
						<li className='subcategory'>
							<a href='/Gallery/Flowers'>Films</a>
						</li>
					</div>

					<li className='main-category'>
						<a href='/Services'>Services</a>
						<div className='sub-menu-trigger2' onClick={()=>{setSubOpen2(!subopen2)}}>
							<img src={subopen2 ? menuCollapseArrow : menuExpandArrow} alt='test2'></img>
						</div>
					</li>

					<div className={`services-menu ${subopen2? 'active' : 'inactive'}`} >
						<li className='subcategory'>
							<a href='/Services/Wedding'>Wedding</a>
						</li>
						<li className='subcategory'>
							<a href='/Services/Rentals'>Rentals</a>
						</li>
						<li className='subcategory'>
							<a href='/Services/Funerals'>Funerals</a>
						</li>
						<li className='subcategory'>
							<a href='/Services/Classes'>Classes</a>
						</li>
						<li className='subcategory'>
							<a href='/Services/Parties'>Parties</a>
						</li>
						<li className='subcategory'>
							<a href='/Services/Custom-Order'>Custom Order</a>
						</li>
					</div>

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
