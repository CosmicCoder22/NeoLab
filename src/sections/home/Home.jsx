import React from "react";
import "./home.css";
import "./responsiveHome.css";

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
        </div>
        <div className="homeAboutUs">
          <div className="homeFacts">
            <div className="factContainer">
              <div className="factImgName">
                <img src={factImgTarget} alt="" />
                <span>
                  Target <br /> identification
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, pariatur?
              </p>
            </div>
            <div className="factContainer">
              <div className="factImgName">
                <img src={factImgCompound} alt="" />
                <span>
                  Compound <br />
                  screening
                </span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia, adipisci!
              </p>
            </div>
            <div className="factContainer">
              <div className="factImgName">
                <img src={factImgPreclinical} alt="" />
                <span>
                  Preclinical <br />
                  testing
                </span>
              </div>
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
                <video
                  src={aboutUsLogoVideo}
                  autoplay
                  muted
                  loop
                  playsinline
                ></video>
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
                  <div className="scrollSector">
                    <FontAwesomeIcon icon={faDna} />
                    <h1>Genomic data analysis</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque perspiciatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrollEffectContainer">
            <div className="scrollLeft">
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
