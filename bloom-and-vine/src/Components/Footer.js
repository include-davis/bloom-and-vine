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

        <div className='Instagram'> 
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 
            6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" 
            stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        
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
      
      <footer class="footer"></footer>
    </div>
    
  );
}

export default Footer;
