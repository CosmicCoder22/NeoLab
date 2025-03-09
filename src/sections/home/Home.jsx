import React, { useEffect, useState } from "react";
import "./home.css";

import homeMainImage from "../../assets/clearPill.webp";

import factImgTarget from "../../assets/target.webp";
import factImgCompound from "../../assets/compound.webp";
import factImgPreclinical from "../../assets/preclinical.webp";

import aboutUsLogoImg from "../../assets/abouUsLogoImg.webp";
import aboutUsLogoVideo from "../../assets/aboutUsLogoVideo.webm";

import scrollPills from "../../assets/scrollAnim1.webp";
import scrollDna from "../../assets/scrollAnim2.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faHexagonNodes,
  faMicroscope,
} from "@fortawesome/free-solid-svg-icons";

import { motion, useScroll, useTransform } from "framer-motion";

function Home() {


  return (
    <div className="homeBody">
      <div className="homeContent">
        <div className="homeText">
          <p>
            medical breakthroughts throught <br /> research and inovate
            solutions
          </p>
          <h1>
            Advancing <br /> Medicine for a <br /> Healthier Future
          </h1>
        </div>
        <div className="homeMainImage">
          <img src={homeMainImage} alt="" />
        </div>
        <div className="homeMarquee">
          <div>
            <p className="item item1">
              # INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY #
              INNOVATION TODAY
            </p>
            <p className="item item2">
              # INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY #
              INNOVATION TODAY
            </p>
          </div>
        </div>
        <div className="homeAboutUs">
          <div className="homeFacts">
            <div className="factContainer">
              <img src={factImgTarget} alt="" />
              <span>Target identification</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, pariatur?
              </p>
            </div>
            <div className="factContainer">
              <img src={factImgCompound} alt="" />
              <span>Compound screening</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia, adipisci!
              </p>
            </div>
            <div className="factContainer">
              <img src={factImgPreclinical} alt="" />
              <span>Preclinical testing</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, at!
              </p>
            </div>
          </div>
          <div className="aboutUsText">
            <div className="aboutUsLogo">
              <div className="aboutUsTextImg">
                <div className="aboutUsLogoText">
                  <p>WHO WE ARE</p>
                  <span>Breakthrough technologies driving drug discovery</span>
                </div>
                <div className="aboutUsLogoImg">
                  <img src={aboutUsLogoImg} alt="" />
                </div>
              </div>
              <div className="aboutUsLogoVideo">
                <video src={aboutUsLogoVideo}></video>
              </div>
            </div>
            <div className="aboutUsScroll">
              <p>About us</p>
              <h1>Pioneering innovation in drug discovery</h1>
              <span>
                Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde
                omnis iste perspiciatis ut perspiciatis unde omnis iste natus.
                Sed ut perspiciatis unde omnis iste natus.
              </span>
              <span>
                Perspic iatis unde omnis iste perspiciatis ut perspiciatis unde
                omnis iste natus. Sed ut perspiciatis.
              </span>
              <div className="scrollSectors">
                <div className="scrollSector">
                  <FontAwesomeIcon icon={faPills} />
                  <h1>AI in drug design</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque perspiciatis.
                  </p>
                </div>
                <div className="scrollSector">
                  <FontAwesomeIcon icon={faHexagonNodes} />
                  <h1>Molecular modeling</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque perspiciatis.
                  </p>
                </div>
                <div className="scrollSector">
                  <FontAwesomeIcon icon={faMicroscope} />
                  <h1>Automated high-throughput screening</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque perspiciatis.
                  </p>
                </div>
                <div className="scrollSector">
                  <FontAwesomeIcon icon={faMicroscope} />
                  <h1>Predictive analytics in drug discovery</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque perspiciatis.
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="scrollEffectContainer">
            <div className="scrollLeft" >
              Advancing medicine, <img src={scrollPills} alt="" />
            </div>

            <div className="scrollRight">
              <img src={scrollDna} alt="" />
              innovating to improve lives
            </div>
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
          <div className="homeMarqueeFocus">
            <div>
              <p className="item item1">
                # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS
                # FOCUS # FOCUS
              </p>
              <p className="item item2">
                # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS # FOCUS
                # FOCUS # FOCUS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
