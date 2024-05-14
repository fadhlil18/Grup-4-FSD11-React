import React from 'react';
import '../assets/aside.css';

const FloatingIcons = () => {
  return (
    <nav className="navt">
      <ul>
        <li><a href="https://www.facebook.com/fadhlilazhimfirmansyah"><i className="fab fa-facebook-f"></i><span>Facebook</span></a></li>
        <li><a href="https://www.instagram.com/azhim18/"><i className="fab fa-instagram"></i><span>Instagram</span></a></li>
        <li><a href="https://www.linkedin.com/in/fadhlilazfi/"><i className="fab fa-linkedin-in"></i><span>Linkedin</span></a></li>
        <li><a href="https://github.com/fadhlil18"><i className="fab fa-github"></i><span>Github</span></a></li>
        <li><a href="https://www.youtube.com/@fadhlilaf"><i className="fab fa-youtube"></i><span>Youtube</span></a></li>
      </ul>
    </nav>
  );
};

export default FloatingIcons;
