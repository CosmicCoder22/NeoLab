import React, { useEffect } from "react";
import "./laboratoryAnalisys.css";

import { motion } from "framer-motion";

import chemicalImg from "../../assets/LaboratoryAnalisysPage/chemical.png";
import microScopeImg from "../../assets/LaboratoryAnalisysPage/microScope.png";

import ourServicesFoodTesting from "../../assets/LaboratoryAnalisysPage/ourServicesFoodTesting.jpg";
import ourServicesCropAnalisys from "../../assets/LaboratoryAnalisysPage/ourServicesCropAnalisys.jpg";
import ourServicesSoilAnalisys from "../../assets/LaboratoryAnalisysPage/ourServicesSoilAnalisys.jpg";
import ourServicesWaterTesting from "../../assets/LaboratoryAnalisysPage/ourServicesWaterTesting.jpg";

import laboratoryAnalisysVideo from '../../assets/LaboratoryAnalisysPage/laboratoryAnalisysVideo.mp4'

import environmentalImpactImageHands from '../../assets/LaboratoryAnalisysPage/environmentalImpactImageHands.jpg'
import environmentalImpactImageScientists from '../../assets/LaboratoryAnalisysPage/environmentalImpactImageScientists.jpg'

import Marquee from "react-fast-marquee";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faHexagonNodes,
  faMicroscope,
  faDna,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

function LaboratoryAnalisys() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));

      const updateCounter = () => {
        start += 3;
        counter.innerText = start;
        if (start < target) {
          setTimeout(updateCounter, stepTime);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <div className="laboratoryAnalisysBody">
      <div className="laboratoryAnalisysContent">
        <div className="analisysLogo">
          <motion.div initial={{x: 500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.5, delay: .5}} viewport={{ once: true }} className="logoTop">
            <h1>accurate </h1>
            <img src={chemicalImg} alt="" />
          </motion.div>
          <div className="logoMidle">
            <h1>analitycal</h1>
          </div>
          <motion.div initial={{x: -500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.5, delay: .5}} viewport={{ once: true }} className="logoBottom">
            <img src={microScopeImg} alt="" />
            <h1>results</h1>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }} className="laboratoryAnalisysMarquee">
            <Marquee speed={100}>
              <p className="text-lg font-bold mx-10"> " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US</p>
              <p className="text-lg font-bold mx-10"> " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US " WHY CHOOSE US</p>
            </Marquee>
        </motion.div>
        <div className="ourServices">
          <p>welcome to NeoLab</p>
          <h1>Our laboratory services</h1>
          <motion.div className="ourServicesContainer" initial={{ x: -1500, opacity: 0}} whileInView={{ x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}>
            <ServiceCard img={ourServicesFoodTesting} number="01." name="Food Testing" />
            <ServiceCard img={ourServicesCropAnalisys} number="02." name="Crop Analysis" />
            <ServiceCard img={ourServicesSoilAnalisys} number="03." name="Soil Analysis" />
            <ServiceCard img={ourServicesWaterTesting} number="04." name="Water Testing" />
          </motion.div>
        </div>
        <div className="counters">
          <Counter title="Scientists" target="90" />
          <Counter title="Tests" target="1548" />
          <Counter title="Years" target="25" />
          <Counter title="Partners" target="15" />
        </div>
        <div className="laboratoryAnalisysVideo">
          <video src={laboratoryAnalisysVideo} autoPlay muted loop/>
        </div>
        <div className="laboratoryAnalisysFacts">
          <LaboratoryFact svg={<FontAwesomeIcon icon={faMicroscope} className="laboratoryAnalisysFactsIcon"/>} name="Free tailored solutions" description="Lorem ipsum dolor sit amet consectetur adipisicing." />
          <LaboratoryFact svg={<FontAwesomeIcon icon={faDna} className="laboratoryAnalisysFactsIcon"/>} name="Clinical hematology lab" description="Lorem ipsum dolor sit amet consectetur adipisicing." />
          <LaboratoryFact svg={<FontAwesomeIcon icon={faHexagonNodes} className="laboratoryAnalisysFactsIcon"/>} name="Molecular diagnostics lab" description="Lorem ipsum dolor sit amet consectetur adipisicing." />
          <LaboratoryFact svg={<FontAwesomeIcon icon={faPills} className="laboratoryAnalisysFactsIcon"/>} name="Validation & beta testing" description="Lorem ipsum dolor sit amet consectetur adipisicing." />
        </div>
        <div className="environmentalImpact">
          <div className="environmentalImpactImages">
            <motion.img src={environmentalImpactImageHands} alt="" className="environmentalImpactImage" initial={{x: -500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.3}} viewport={{ once: true }}/>
            <motion.img src={environmentalImpactImageScientists} alt="" className="environmentalImpactImage" initial={{x: -500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1}} viewport={{ once: true }}/>
          </div>
          <motion.div className="environmentalImpactBackground" initial={{x: 500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .3}} viewport={{ once: true }}>
            <p className="environmentalImpactName">Environmental impact</p>
            <h1 className="environmentalImpactLogo">Automation in<br/>modern laboratory<br/>analysis</h1>
            <span className="environmentalImpactDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
            <div className="environmentalImpactList">
              <p className="environmentalImpactListItem">
                <FontAwesomeIcon icon={faCheck} />Ut enim ad minim veniam
              </p>
              <p className="environmentalImpactListItem">
                <FontAwesomeIcon icon={faCheck} />Excepteur sint
              </p>
              <p className="environmentalImpactListItem">
                <FontAwesomeIcon icon={faCheck} />Sed ut perspiciatis unde omnis
              </p>
            </div>
            <button className="ourTeamButton">our team</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
function LaboratoryFact({ svg, name, description }) {
  return (
    <div className="laboratoryFactContainer">
      {svg}
      <h1 className="laboratoryAnalisysFactsName">{name}</h1>
      <p className="laboratoryAnalisysFactsDescription">{description}</p>
    </div>
  );
}

function ServiceCard({ img, number, name }) {
  return (
    <div className="servicesContainer">
      <div className="servicesImgContainer">
        <img src={img} alt={name} />
      </div>
      <motion.div className="servicesNameContainer" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1}} viewport={{ once: true }}>
        <p className="serviceNumber">{number}</p>
        <span className="serviceName">{name}</span>
      </motion.div>
      <div className="servicesUnderline"></div>
    </div>
  );
}

function Counter({ title, target }) {
  return (
    <div className="counterContainer">
      <h1>{title}</h1>
      <div className="counter" data-target={target}>0</div>
    </div>
  );
}

export default LaboratoryAnalisys;
