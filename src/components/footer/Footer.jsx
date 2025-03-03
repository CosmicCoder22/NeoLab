import React from "react";
import "./footer.css";
import "./responsiveFooter.css";

import footerLogo from "../../assets/logoDark.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCompass} from "@fortawesome/free-solid-svg-icons";

function Footer({ setActiveSection, setActiveHeaderBtn }) {
  return (
    <div className="footerBody">
      <div className="footerLogo">
        <div className="footerNav">
          <img src={footerLogo} alt="" />
          <div className="footerNavBtn">
            <button href="" onClick={() => {setActiveSection('home');setActiveHeaderBtn('home')}}>HOME</button>
            <button href="" onClick={() => {setActiveSection('analisys');setActiveHeaderBtn('analisys')}}>LABORATORY ANALISYS</button>
            <button href="" onClick={() => {setActiveSection('research');setActiveHeaderBtn('research')}}>RESEARCH CENTER</button>
          </div>
        </div>
        <div className="footerLine"></div>
      </div>

      <div className="footerInfo">
        <div className="footerContacts">
          <div className="address">
            123 Lab Street —
            <br />
            Science City,Researchland
            <br />
            RL 45678, USA
          </div>
          <div className="phone">
            +1 (555) 123-4567<button>info@email.com</button>
          </div>
          <div className="updates">
            Get fresh updates.
            <br />
            <button>Just Subscribe</button>
          </div>
        </div>
        <div className="footerCopyright">
          <p>NeoLab © 2025. All rights reserved.</p>
          <div className="footerSocials">
            <div className="footerSocialIcon"><FontAwesomeIcon icon={faCompass} /></div>
            <div className="footerSocialIcon"><FontAwesomeIcon icon={faSquareFacebook} /></div>
            <div className="footerSocialIcon"><FontAwesomeIcon icon={faSquareXTwitter} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
