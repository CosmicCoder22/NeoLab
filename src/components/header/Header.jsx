import React, { useState } from 'react'
import './header.css'
import './responsiveHeader.css'
import logo from '../../assets/logoDark.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faBars, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";


function Header({ setActiveSection }) {

  const [activeHeaderBtn, setActiveHeaderBtn] = useState('home')

  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <div className='headerBody'>
        <div className="headerContent">
            <div className="logoContainer">
                <img src={logo} alt="" />
            </div>
            <div className="navContainer">
                <button className={activeHeaderBtn === 'home' ? 'activeNavBtn' : 'navBtn'} onClick={() => {setActiveSection('home');setActiveHeaderBtn('home')}}>HOME</button>
                <button className={activeHeaderBtn === 'analisys' ? 'activeNavBtn' : 'navBtn'} onClick={() => {setActiveSection('analisys');setActiveHeaderBtn('analisys')}}>LABORATORY ANALISYS</button>
                <button className={activeHeaderBtn === 'research' ? 'activeNavBtn' : 'navBtn'} onClick={() => {setActiveSection('research');setActiveHeaderBtn('research')}}>RESEARCH CENTER</button>
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