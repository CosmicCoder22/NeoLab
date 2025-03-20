import React from "react";
import "./home.css";
import "./responsiveHome.css";

import { motion } from "framer-motion";

import homeMainImage from "../../assets/homePage/clearPill.webp";

import factImgTarget from "../../assets/homePage/target.webp";
import factImgCompound from "../../assets/homePage/compound.webp";
import factImgPreclinical from "../../assets/homePage/preclinical.webp";

import aboutUsLogoImg from "../../assets/homePage/abouUsLogoImg.webp";
import aboutUsLogoVideo from "../../assets/homePage/aboutUsLogoVideo.webm";

import scrollPills from "../../assets/homePage/scrollAnim1.webp";
import scrollDna from "../../assets/homePage/scrollAnim2.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faHexagonNodes,
  faMicroscope,
  faDna,
} from "@fortawesome/free-solid-svg-icons";

import OurClients from "../../components/ourClients/ourClients";

import Marquee from "react-fast-marquee";

function Home() {

const homeFacts = [
  { img: factImgTarget, name: "Target identification", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, pariatur?" },
  { img: factImgCompound, name: "Compound screening", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci!" },
  { img: factImgPreclinical, name: "Preclinical testing", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at!" }
];

const homeScroll = [
  {img: faPills, name: "AI in drug design", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis."},
  {img: faHexagonNodes, name: "Molecular modeling", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis."},
  {img: faMicroscope, name: "Automated high-throughput screening", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis."},
  {img: faPills, name: "Predictive analytics in drug discovery", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis."},
  {img: faDna, name: "Genomic data analysis", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis."}
]

  return (
    <div className="homeBody">
      <div className="homeContent">
        <div className="homeText">
          <motion.p initial={{x: -500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}>
            medical breakthroughts throught <br /> research and inovate
            solutions
          </motion.p>
          <motion.h1 initial={{x: -500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}>
            Advancing <br /> Medicine for a <br /> Healthier Future
          </motion.h1>
        </div>
        <div className="homeMainImage">
          <motion.img initial={{x: 500, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }} src={homeMainImage} alt="" />
        </div>
        <motion.div className="homeMarquee" initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}>
          <Marquee speed={100}>
            <p className="text-lg font-bold mx-10">
              {" "}
              # INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY #
              INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY
            </p>
            <p className="text-lg font-bold mx-10">
              {" "}
              # INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY #
              INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY
            </p>
          </Marquee>
        </motion.div>
        <div className="homeAboutUs">
          <div className="homeFacts">
          <div className="homeFacts">
            {homeFacts.map((homeFact) => (
              <div className="factContainer">
                  <div className="factImgName">
                    <motion.img src={homeFact.img} alt="" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} viewport={{ once: true }}/>
                    <motion.span initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}>{homeFact.name}</motion.span>
                  </div>
                  <p>{homeFact.text}</p>
              </div>
            ))}
          </div>
          </div>
          <div className="aboutUsText">
            <div className="aboutUsLogo">
              <motion.div className="aboutUsTextImg" initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}>
                <div className="aboutUsLogoText">
                  <p>WHO WE ARE</p>
                  <span>Breakthrough technologies driving drug discovery</span>
                </div>
                <div className="aboutUsLogoImg">
                  <img src={aboutUsLogoImg} alt="" />
                </div>
              </motion.div>
              <div className="aboutUsLogoVideo">
                <motion.video
                  initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}
                  src={aboutUsLogoVideo}
                  autoplay
                  muted
                  loop
                  playsinline
                />
              </div>
            </div>
            <div className="aboutUsScroll">
              <div className="aboutUsScrollInner">
                <p>About us</p>
                <h1>Pioneering innovation in drug discovery</h1>
                <span>
                  Sed ut perspiciatis unde omnis iste natus ut perspic iatis
                  unde omnis iste perspiciatis ut perspiciatis unde omnis iste
                  natus. Sed ut perspiciatis unde omnis iste natus.
                </span>
                <span>
                  Perspic iatis unde omnis iste perspiciatis ut perspiciatis
                  unde omnis iste natus. Sed ut perspiciatis.
                </span>
                <div className="scrollSectors">
                  {homeScroll.map((scrollFact) =>(
                    <motion.div className="scrollSector" initial={{x: 300}} whileInView={{x: 0}} transition={{duration: 1, delay: .5}} viewport={{ once: true }}>
                      <FontAwesomeIcon icon={scrollFact.img} />
                      <h1>{scrollFact.name}</h1>
                      <p>{scrollFact.text}</p>
                  </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="scrollEffectContainer">
            <motion.div className="scrollLeft" initial={{x: 600}} whileInView={{x: 0}} transition={{duration: 1}}>
              Advancing medicine, 
              <img src={scrollPills} alt="" />
            </motion.div>

            <motion.div className="scrollRight" initial={{x: -600}} whileInView={{x: 0}} transition={{duration: 1}}>
              <img src={scrollDna} alt="" />
              innovating to improve lives
            </motion.div>
          </div>
          <div className="links">
            <div className="link Oncology">
              <div className="linkText">
                <h1>Oncology</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="link Neurology">
              <div className="linkText">
                <h1>Neurology</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="link InfectiousDiseases">
              <div className="linkText">
                <h1>Infectious diseases</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="link Imunology">
              <div className="linkText">
                <h1>Imunology</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homeMarqueeFocus">
          <div>
            <p className="item item1">
              # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS #
              FOCUS # FOCUS
            </p>
            <p className="item item2">
              # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS #
              FOCUS # FOCUS
            </p>
          </div>
        </div>
        <OurClients />
      </div>
    </div>
  );
}

export default Home;
