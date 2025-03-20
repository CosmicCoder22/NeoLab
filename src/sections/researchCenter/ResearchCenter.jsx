import React, { useState } from "react";
import "./researchCenter.css";
import { motion, AnimatePresence } from "framer-motion";

import researchCenterLogoVideo from "../../assets/ResearchCenterPage/researchCenterLogoVideo.mp4";
import researchCenterLogoImg from "../../assets/ResearchCenterPage/ResearchCenterLogo.png";

import AI from "../../assets/ResearchCenterPage/AI.webp";
import microScope from "../../assets/ResearchCenterPage/microScope.webp";
import windMill from "../../assets/ResearchCenterPage/windMill.webp";
import robot from "../../assets/ResearchCenterPage/robot.webp";
import nanotechology from "../../assets/ResearchCenterPage/nanotechology.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faBrain,
  faCapsules,
  faRobot,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";

import Marquee from "react-fast-marquee";
function ResearchCenter() {
  const [activeFact, setActiveFact] = useState("ArtificialIntelligence");

  const facts = {
    ArtificialIntelligence: {img: AI, icon: faViruses, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequatur!"},
    Biotechnology: {img: microScope, icon: faBrain, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur optio ea."},
    Nanotechnology: {img: nanotechology, icon: faCapsules, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sunt."},
    RenewableEnergy: {img: windMill, icon: faArrowsRotate, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis!"},
    RoboticsAutomation: {img: robot, icon: faRobot, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, est!"}
  }

  const factsBtn = [
    { key: "ArtificialIntelligence", label: "ArtificialIntelligence" },
    { key: "Biotechnology", label: "Biotechnology" },
    { key: "Nanotechnology", label: "Nanotechnology" },
    { key: "RenewableEnergy", label: "RenewableEnergy" },
    { key: "RoboticsAutomation", label: "Robotics&Automation" },
  ];

  return (
    <div className="researchCenterBody">
      <div className="researchCenterContent">
        <div className="researchCenterLogo">
          <img src={researchCenterLogoImg} alt="" />
          <div className="researchCenterLogoText">
            <div>
              <motion.p 
              initial={{x: 300, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }} 
              >discovering knowledge</motion.p>
              <motion.h1 initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }} >
                Innovating
                <br />
                tomorrow's
                <br />
                solutions
              </motion.h1>
              <a href="#facts">explore now</a>
            </div>
          </div>
          <div className="researchCenterLogoVideo">
            <video src={researchCenterLogoVideo} autoPlay muted loop></video>
          </div>
        </div>
      
        <div className="researchCenterFacts" id="facts">
          <div className="researchCenterFactsContainer">
            <AnimatePresence mode="wait">
              <motion.div className="researchCenterFact" key={activeFact}>
                <motion.img src={facts[activeFact].img} alt={activeFact} initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1}} viewport={{ once: true }}/>
                <motion.div initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .2}} viewport={{ once: true }}>
                  <FontAwesomeIcon icon={facts[activeFact].icon} />
                  <p>{facts[activeFact].text}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="researchCenterFactsText">
            <p>
              Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde
              omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed
              ut perspiciatis unde omnis iste natus.
            </p>
            <div className="researchCenterFactsTextButtonsContainer">
              {factsBtn.map((factBtn) => (
                <button
                  key={factBtn.key}
                  className={activeFact === factBtn.key ? "activeFactBtn" : "factBtn"}
                  onClick={() => setActiveFact(factBtn.key)}
                >
                  {factBtn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="researchCenterContactUs">
          <p>
            From quantum computing to biotechnology, we are driving{" "}
            <span className="highlightedText">
              advancements that transform industries
            </span>{" "}
            and impact lives globally.
          </p>
          <button className="contactUsBtn">contact us</button>
        </div>
        <div className="researchCenterMarquue">
          <Marquee speed={100}>
            <p className="text-lg font-bold mx-10">
              / ONGOING PROJECTS / ONGOING PROJECTS / ONGOING PROJECTS / ONGOING
              PROJECTS /
            </p>
            <p className="text-lg font-bold mx-10">
              {" "}
              ONGOING PROJECTS / ONGOING PROJECTS / ONGOING PROJECTS / ONGOING
              PROJECTS{" "}
            </p>
          </Marquee>
        </div>
        <div className="ongoingProjects">
          <motion.div className="science" initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .2}} viewport={{ once: true }}>
            <p>Science</p>
            <h1>AI & agriculture</h1>
            <button className="contactUsBtn">Contact us</button>
          </motion.div>
          <motion.div className="achievements" initial={{x: 300, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .2}} viewport={{ once: true }}>
            <p>Achievements</p>
            <h1>Neuroscience breakthroughs</h1>
            <button className="contactUsBtn">Contact us</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResearchCenter;
