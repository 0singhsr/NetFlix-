import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">  
      <div className="footer__section">
      <div className="footer__question">Questions? Call 000-800-919-1743</div>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#"> Speed Test</a></li>
         
        </ul>
      </div>
      <div className="footer__section">
        <ul>
          <li><a href="#">Help Centre</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Legal Notices</a></li>
          
        </ul>
      </div>

      <div className="footer__section">
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Only on Netflix</a></li>
          <li><a href="#">Netflix India</a></li>
          
        </ul>
      </div>

      <div className="footer__section">
        <ul>
          <li><a href="#">Media Centre</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">English</a></li>
          
        </ul>
      
      </div>
   
    </div >
  );
};

export default Footer;
