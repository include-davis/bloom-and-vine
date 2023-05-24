import facebookLogo from '../Images/facebookLogo.png'
import pinterestLogo from '../Images/pinterestLogo.png'
import instagramLogo from '../Images/instagramLogo.png'
import mailLogo from '../Images/mailLogo.png'
import './Footer.css';

function Footer() {
	return (
		<div className="Footer">
			<div className='wrapper'>
				<div className='Logo'>
					<p>Bloom & Vine</p>
				</div>

				<p className='Description'>
				Boutique floral design studio serving
				<b> Northern California.</b> 
				We work to make every event unforgettable. 
				</p>

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

				<div className='Socials'>
					<a href='https://pinterest.com' target='_blank'>
						<div className='Pinterest'>
							<img src={pinterestLogo} alt='null' />
						</div>
					</a>
					<a href='https://gmail.com' target='_blank'>
						<div className='Mail'>
							<img src={mailLogo} alt='null' />
						</div>
					</a>
					<a href='https://instagram.com' target='_blank'>
						<div className='Instagram'>
							<img src={instagramLogo} alt='null' />
						</div>
					</a>
					<a href='https://facebook.com' target='_blank'>
						<div className='Facebook'> 
							<img src={facebookLogo} alt='null' />
						</div>
					</a>
				</div>

				<p className='des1'>  Designed & Developed with <svg className='heart' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.6301 3.4575C15.247 3.07425 14.7922 2.77023 14.2916 2.56281C13.791 2.35539 13.2545 
					2.24863 12.7126 2.24863C12.1707 2.24863 11.6342 2.35539 11.1336 2.56281C10.633 2.77023 
					10.1782 3.07425 9.79509 3.4575L9.00009 4.2525L8.20509 3.4575C7.43132 2.68373 6.38186 2.24903 
					5.28759 2.24903C4.19331 2.24903 3.14386 2.68373 2.37009 3.4575C1.59632 4.23127 1.16162 5.28072 
					1.16162 6.375C1.16162 7.46927 1.59632 8.51873 2.37009 9.2925L3.16509 10.0875L9.00009 15.9225L14.8351 
					10.0875L15.6301 9.2925C16.0133 8.90943 16.3174 8.45461 16.5248 7.95402C16.7322 7.45342 16.839 6.91687 
					16.839 6.375C16.839 5.83313 16.7322 5.29658 16.5248 4.79598C16.3174 4.29539 16.0133 3.84057 15.6301 
					3.4575Z" fill="#FFFDF1"/>
				</svg> 
				
				by <strong>#include </strong> @ <strong>Davis </strong> 
				
				</p>
			</div>
		</div>
	);
}

export default Footer;