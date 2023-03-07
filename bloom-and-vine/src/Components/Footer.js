import './Footer.css';
import React from 'react'

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

        <div className='Socials'>
          <a href='https://pinterest.com' target='_blank'>
            <div className='Pinterest'>
              <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50211 15.719C8.23021 15.7425 8.88785 16.7055 
                10.8138 16.7055C14.4308 16.729 16.9204 13.9575 17.6955 10.317C20.3965 -2.29555 2.00615 -3.30549 
                0.127182 7.07578C-0.319072 9.51843 0.409027 12.3369 2.31148 13.2529C3.76767 13.9575 3.86162 11.9376 
                3.41537 11.0686C1.44246 7.2167 3.81465 3.74062 6.91494 2.75416C9.82733 1.81468 11.8942 2.58976 13.4678 
                4.21036C15.4877 6.30071 14.5717 11.9846 12.176 13.7931C11.3305 14.4272 9.78036 14.5681 8.9818 13.8166C7.33771 
                12.2899 9.87431 9.04869 9.49851 6.6765C9.12272 4.3278 5.41177 4.6801 5.22387 8.1327C5.12992 9.89423 5.64664 10.4109 
                5.24736 12.1725C4.61321 14.9909 2.68727 20.7452 4.04952 23C6.04592 22.0605 7.03237 16.4236 7.50211 15.719Z" fill="#FFFDF1"/>
              </svg>

            </div>
          </a>
          <a href='https://gmail.com' target='_blank'>
            <div className='Mail'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                stroke="#FFFDF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" 
                stroke="#FFFDF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
          <a href='https://instagram.com' target='_blank'>
            <div className='Instagram'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" 
                stroke="#FFFDF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" 
                stroke="#FFFDF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 6.5H17.51" 
                stroke="#FFFDF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
          <a href='https://facebook.com' target='_blank'>
            <div className='Facebook'> 
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 
                6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" 
                stroke="#FFFDF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
         
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
      <div className='pagefooter'></div>
    </div>
    
  );
}

export default Footer;
