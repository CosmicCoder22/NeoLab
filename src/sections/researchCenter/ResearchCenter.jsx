import React, { useState } from "react";
import "./researchCenter.css";

import researchCenterLogoVideo from "../../assets/ResearchCenterPage/researchCenterLogoVideo.mp4";
import researchCenterLogoImg from "../../assets/ResearchCenterPage/ResearchCenterLogo.png";

import AI from '../../assets/ResearchCenterPage/AI.webp'
import microScope from '../../assets/ResearchCenterPage/microScope.webp'
import windMill from '../../assets/ResearchCenterPage/windMill.webp'
import robot from '../../assets/ResearchCenterPage/robot.webp'
import nanotechology from '../../assets/ResearchCenterPage/nanotechology.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faBrain, faCapsules, faRobot, faViruses} from '@fortawesome/free-solid-svg-icons'

import Marquee from "react-fast-marquee";

function ResearchCenter() {

  const [activeFact, setActiveFact] = useState('ArtificialIntelligence')

  const [activeFactBtn, setActiveFactBtn] = useState('ArtificialIntelligence')

  return (
    <div className="researchCenterBody">
      <div className="researchCenterContent">
        <div className="researchCenterLogo">
          <img src={researchCenterLogoImg} alt="" />
          <div className="researchCenterLogoText">
            <div>
              <p>discovering knowledge</p>
              <h1>
                Innovating
                <br />
                tomorrow's
                <br />
                solutions
              </h1>
              <a href="#facts">explore now</a>
            </div>
          </div>
          <div className="researchCenterLogoVideo">
            <video src={researchCenterLogoVideo} autoPlay muted loop></video>
          </div>
        </div>
        <div className="researchCenterFacts" id="facts">
          <div className="researchCenterFactsContainer">
            {activeFact === 'ArtificialIntelligence' && (
              <div className="researchCenterFact">
                <img src={AI} alt="" />
                <div>
                  <FontAwesomeIcon icon={faViruses} />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequatur!</p>
                </div>
              </div>              
            )}
            {activeFact === 'Biotechnology' && (
              <div className="researchCenterFact">
                <img src={microScope} alt="" />
                <div>
                  <FontAwesomeIcon icon={faBrain} />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur optio ea.</p>
                </div>
              </div>              
            )}
            {activeFact === 'Nanotechnology' && (
              <div className="researchCenterFact">
                <img src={nanotechology} alt="" />
                <div>
                  <FontAwesomeIcon icon={faCapsules} />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sunt.</p>
                </div>
              </div>              
            )}
            {activeFact === 'RenewableEnergy' && (
              <div className="researchCenterFact">
                <img src={windMill} alt="" />
                <div>
                  <FontAwesomeIcon icon={faArrowsRotate} />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis!</p>
                </div>
              </div>              
            )}
            {activeFact === 'Robotics&Automation' && (
              <div className="researchCenterFact">
                <img src={robot} alt="" />
                <div>
                  <FontAwesomeIcon icon={faRobot} />
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, est!</p>
                </div>
              </div>              
            )}
          </div>
          <div className="researchCenterFactsText">
            <p>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde omnis iste natus.</p>
            <div className="researchCenterFactsTextButtonsContainer">
              <button className={`${activeFactBtn === 'ArtificialIntelligence' ? 'activeFactBtn' : 'factBtn'}`} onClick={() => {setActiveFact('ArtificialIntelligence');setActiveFactBtn('ArtificialIntelligence')}}>Artificial Intelligence</button>
              <button className={`${activeFactBtn === 'Biotechnology' ? 'activeFactBtn' : 'factBtn'}`}  onClick={() => {setActiveFact('Biotechnology');setActiveFactBtn('Biotechnology')}}>Biotechnology</button>
              <button className={`${activeFactBtn === 'Nanotechnology' ? 'activeFactBtn' : 'factBtn'}`}  onClick={() => {setActiveFact('Nanotechnology');setActiveFactBtn('Nanotechnology')}}>Nanotechnology</button>
              <button className={`${activeFactBtn === 'RenewableEnergy' ? 'activeFactBtn' : 'factBtn'}`}  onClick={() => {setActiveFact('RenewableEnergy');setActiveFactBtn('RenewableEnergy')}}>Renewable Energy</button>
              <button className={`${activeFactBtn === 'Robotics&Automation' ? 'activeFactBtn' : 'factBtn'}`}  onClick={() => {setActiveFact('Robotics&Automation');setActiveFactBtn('Robotics&Automation')}}>Robotics & Automation</button>
            </div>
          </div>
        </div>
        <div className="researchCenterMarquue">
            <Marquee speed={100}>
              <p className="text-lg font-bold mx-10">/ ONGOING PROJECTS / ONGOING PROJECTS / ONGOING PROJECTS / ONGOING PROJECTS /</p>
              <p className="text-lg font-bold mx-10"> ONGOING PROJECTS / ONGOING PROJECTS / ONGOING PROJECTS / ONGOING PROJECTS </p>
            </Marquee>
        </div>
      </div>
    </div>
  );
}

export default ResearchCenter;
