
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'; 
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 


import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const LandingPage = () => {

  const nav=useNavigate();

  const Navigate=()=>{
    nav('/register')
  }
  return (
  <div className='landingpage'>
      <div className="collage-container">
       
        <div className="image-grid">
          <img src={image1} alt="image 1" />
          <img src={image2} alt="image 2" />
          <img src={image3} alt="image 3" />
          <img src={image4} alt="image 4" />
          <img src={image5} alt="image 5" />
          <img src={image6} alt="image 6" />
          <img src={image7} alt="image 7" />
          <img src={image8} alt="image 8" />
          <img src={image9} alt="image 9" />
        </div>

     
        <div className="content-center">
        
          <h1> <FontAwesomeIcon icon={faCamera} size="1x" style={{ color: 'black', marginBottom: '2px' }} />Vibesnap</h1>
       
          <p>Moments That Matter, Shared Forever.</p>
          
          {/* Google Button */}
          <button className="google-button" onClick={Navigate}>
            <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px', color: 'white' }}  />
            Continue with Google/Register
          </button>
        </div>
      </div>
      </div>
  );
};

export default LandingPage;

