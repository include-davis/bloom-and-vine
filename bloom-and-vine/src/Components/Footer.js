import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className='wrapper'>

      
        <div className='Logo'>
          Bloom & Vine
        </div>

        <p className='Description'>
          Boutique floral design studio serving
          <b> Northern California.</b> 
          We work to make every event unforgettable. 
        </p>

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
        <div class="push"></div>
      </div>
      <footer class="footer"></footer>
    </div>
    
  );
}

export default Footer;
