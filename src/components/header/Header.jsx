import React, { useEffect, useState } from 'react'
import './header.css'
import './responsiveHeader.css'
import logoDark from '../../assets/logoDark.png'
import logoLight from '../../assets/logoLight.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faBars, faPhone } from "@fortawesome/free-solid-svg-icons";


function Header({ setActiveSection, setActiveHeaderBtn, activeHeaderBtn, isDarkText, setisDarkText }) {

  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <div className={`headerBody ${isDarkText ? "blurred" : "clear"}`} >
        <div className="headerContent">
            <div className="logoContainer">
                <img src={isDarkText ? logoDark : logoLight} alt="" />
            </div>
            <div className="navContainer">
                <button className={`${activeHeaderBtn === 'home' ? 'activeNavBtn' : 'navBtn'} ${!isDarkText ? 'clear' : ''}`} onClick={() => {setActiveSection('home');setActiveHeaderBtn('home');setisDarkText(true)}}>HOME</button>
                <button className={`${activeHeaderBtn === 'analisys' ? 'activeNavBtn' : 'navBtn'} ${!isDarkText ? 'clear' : ''}`} onClick={() => {setActiveSection('analisys');setActiveHeaderBtn('analisys');setisDarkText(true)}}>LABORATORY ANALISYS</button>
                <button className={`${activeHeaderBtn === 'research' ? 'activeNavBtn' : 'navBtn'} ${!isDarkText ? 'clear' : ''}`} onClick={() => {setActiveSection('research');setActiveHeaderBtn('research');setisDarkText(false)}}>RESEARCH CENTER</button>
            </div>
            <div className="headerSocialIconsContainer">
            <div className="socialIcon"><FontAwesomeIcon icon={faCompass} /></div>
                  <div className="socialIcon"><FontAwesomeIcon icon={faSquareFacebook} /></div>
                  <div className="socialIcon"><FontAwesomeIcon icon={faSquareXTwitter} /></div>
            </div>
            <button className="responsiveNavBtn" onClick={() => setIsToggleOpen(!isToggleOpen)}><FontAwesomeIcon icon={faBars} /></button>
            <div className={`mobileMenu ${isToggleOpen ? 'open' : ''}`}>
                <div className="mobileNavBtn">
                  <button className='navBtn' onClick={() => {setActiveSection('home');setIsToggleOpen(!isToggleOpen)}}>HOME</button>
                  <button className='navBtn' onClick={() => {setActiveSection('analisys');setIsToggleOpen(!isToggleOpen)}}>LABORATORY ANALISYS</button>
                  <button className='navBtn' onClick={() => {setActiveSection('research');setIsToggleOpen(!isToggleOpen)}}>RESEARCH CENTER</button>
                </div>
                <div className="mobileSocialIcons">
                  <div className="mobileSocialIcon"><FontAwesomeIcon icon={faCompass} /></div>
                  <div className="mobileSocialIcon"><FontAwesomeIcon icon={faSquareFacebook} /></div>
                  <div className="mobileSocialIcon"><FontAwesomeIcon icon={faSquareXTwitter} /></div>
                </div>
                <div className="mobilePhone">
                  <p><FontAwesomeIcon icon={faPhone} /> +38 (0XX) XXX-XX-XX</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header