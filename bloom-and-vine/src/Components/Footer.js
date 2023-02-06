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
        
        <div className='images'>
        <div className='Pinterest'>
          <img src="https://cdn.discordapp.com/attachments/767939191962599478/1072037199161335918/image.png"></img>
        </div>
        <div className='Mail'>
          <img src="https://cdn.discordapp.com/attachments/767939191962599478/1072037099768905748/image.png"></img>
        </div>
        <div className='Instagram'>
          <img src="https://cdn.discordapp.com/attachments/767939191962599478/1072036993854353469/image.png"></img>
        </div>
        <div className='Facebook'>
          <img src="https://cdn.discordapp.com/attachments/767939191962599478/1072036913491484712/image.png"></img>
        </div>
        </div>
        <div class="push"></div>
      </div>
      <footer class="footer"></footer>
    </div>
    
  );
}

export default Footer;
