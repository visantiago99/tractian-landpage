import React from 'react';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import logo from '../images/logo.svg';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-container">
        <img src={linkedin} alt="linkedin" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={youtube} alt="youtube" />
      </div>
      <br />
      <div className="footer-infos">
        <img src={logo} alt="logo" />
        <h5>© Tractian Tecnologia Ltda</h5>
        <h5>CNPJ: 35.755.699/0001-84</h5>
      </div>
    </div>
  )
}
