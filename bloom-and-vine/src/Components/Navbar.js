import mobileBVLogo from '../Images/mobileBVLogo.png'
import './Navbar.css'


function Navbar() {
  return (
    <nav className="Navbar">
		<div className='Logo'>
			<a href='/' className='main-logo'>
				Bloom & Vine
			</a>
		</div>
		<div className='mobile-logo'>
			<a href='/' className='main-mobile-logo'>
				<img src={mobileBVLogo} alt='Bloom & Vine' />
			</a>
		</div>

		<ul className='directory'>
			<li>
				<a href='/'>Home</a>
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