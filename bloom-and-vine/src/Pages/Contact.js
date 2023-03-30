import React, { useRef } from 'react';
import './Contact.css';
import contact from '../Images/contact-image.png';
import scrollarrow from '../Images/scrollarrow.png';
import emailjs from 'emailjs-com';

function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  // function sendEmail(e) {
  //   e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_w183yib', 'template_20fsmva', e.target, 'G6qLhG0KxlxRAH5ZE')
      .then((result) => {
          console.log(result.text);
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }



  return (
    <div className="Contact">

      <div className='Leftside-Screen'>
      <div className='contact-wrapper'>
        <div className='contact-image'>
          <img src={contact} alt='null' />

        </div>

        <div className='lets-talk'>
          <h1>Let's Talk!</h1>
          <p><b>Phone:</b> 530-312-9139 </p>
          <p><b>Email:</b> bloomandvine@gmail.com </p>
          <p><b>Location:</b> Davis, CA </p>

          <div className='socials-contact'>

          <ul className='directory'>
          <li>
          <a href='https://facebook.com' target='_blank'>
              <div className='FContact'> 
                <svg width="22" height="40" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 
                  6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" 
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </li>
          <li>
          <a href='https://instagram.com' target='_blank'>
              <div className='IContact'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" 
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" 
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.5 6.5H17.51" 
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </li>
          <li>
          <a href='https://gmail.com' target='_blank'>
              <div className='MContact'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 6L12 13L2 6" 
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
            </li>
          <li>
          <a href='https://pinterest.com' target='_blank'>
              <div className='PContact'>
                <svg width="40" height="40" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50211 15.719C8.23021 15.7425 8.88785 16.7055 
                    10.8138 16.7055C14.4308 16.729 16.9204 13.9575 17.6955 10.317C20.3965 -2.29555 2.00615 -3.30549 
                    0.127182 7.07578C-0.319072 9.51843 0.409027 12.3369 2.31148 13.2529C3.76767 13.9575 3.86162 11.9376 
                    3.41537 11.0686C1.44246 7.2167 3.81465 3.74062 6.91494 2.75416C9.82733 1.81468 11.8942 2.58976 13.4678 
                    4.21036C15.4877 6.30071 14.5717 11.9846 12.176 13.7931C11.3305 14.4272 9.78036 14.5681 8.9818 13.8166C7.33771 
                    12.2899 9.87431 9.04869 9.49851 6.6765C9.12272 4.3278 5.41177 4.6801 5.22387 8.1327C5.12992 9.89423 5.64664 10.4109 
                    5.24736 12.1725C4.61321 14.9909 2.68727 20.7452 4.04952 23C6.04592 22.0605 7.03237 16.4236 7.50211 15.719Z" fill="black"/>
                </svg>
              
              </div>
            </a>
          </li>
        </ul>
          </div>
        </div>
        </div>

      </div>
            
      <hr/>

      <div className='Rightside-Screen'>
        <div >
          <form className='form-wrapper' ref={form} onSubmit={sendEmail}>
            <label for="name">Name *</label>
            <input type="text" id="name" name="user_name"></input>
            <label for="email">Email *</label>
            <input type="text" id="email" name="user_email"></input>
            <label for="phone">Phone *</label>
            <input type="text" id="phone" name="phone"></input>
            <label for="date">Date of Event</label>
            <input type="date" id="date" name="date" ></input>

            <label for="subject">Subject</label>
            <select id="subject" name="subject">
              <option value="n/a"></option>
              <option value="sub1">Subject 1</option>
              <option value="Booking">Booking</option>
              <option value="Questions">Questions</option>
            </select>

            
            <label for="subject">Message</label>
            <textarea name="message" placeholder='Type message here'></textarea>
            <input type="submit" maxlength="4" size="4" value="Send"></input>
          
          </form>

          
          </div>
        <div class="scroll-container">
        <a href="#top">
          <img src={scrollarrow}></img>
        </a>
        </div>
      </div>    


    </div>
  );
}

export default Contact;
