import React from 'react';
import './About.css';

function About(props){
    document.body.style = 'background: #faf0ef;';
    return(
        <div>
        <div className = "final-header">
          <br></br>
          <div className = "bloom-logo">
            Bloom and Vine
          </div>
          </div>


          <div className = "get-to-know-me">
          Get to Know Me!
        </div>
            
        <div className = "Outline1">
            <h1 className = "hello">
             Hello! I'm Bekah Tsai.
            </h1>
        </div>


        <div className = "Outline2">
            <h2 className = "love">
                I love...
            </h2>
        </div>

        <p className = "trained">
        I’m a trained biologist turned 
        floral designer with a passion
        for combining florals to make
        your event unforgettable.
        </p>

        <img className = "image1">
        </img>

        <div className = "image3">
        </div>

        <div className = "image2">
        </div>

        

        <div className = "texture">
        Using texture and unusual design elements to elevate my flower combinations.
        </div>

        <div className = "believe-block">
        <div className = "believe">
            I believe in...
            </div>
        </div>

        <div className = "focus">
        Focusing all of my creative 
        attention on you and your event. 
        From weddings to showers to funerals, I am happy 
        to provide complimentary 
        consultations, where I can get  
        to know you and thoroughly 
        understand your vision.

        </div>
        
        <div className = "sun">

        </div>

        <div className = "last">
            
        </div>
        

        

        



        <div className='footer'></div>
        </div>

        
       
    )
}


export default About;