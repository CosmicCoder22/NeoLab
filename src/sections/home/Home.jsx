import React from 'react'
import './home.css'

import homeMainImage from '../../assets/clearPill.webp'

function Home() {
  return (
    <div className='homeBody'>
        <div className="homeContent">
            <div className="homeText">
                <p>medical breakthroughts throught <br/> research and inovate solutions</p>
                <h1>Advancing <br/> Medicine for a <br/> Healthier Future</h1>
            </div>
            <div className="homeMainImage">
                <img src={homeMainImage} alt="" />
            </div>
            <div className="homeMarquee">
                <div>
                    <p className='item item1'># INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY</p>
                    <p className='item item2'># INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY # INNOVATION TODAY</p>                  
                </div>
            </div>
            <div className="homeAboutUs">
                <div className='homeFacts'>
                    <div>
                        <h1>Target identification</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, pariatur?</p>
                    </div>
                    <div>
                        <h1>Compound screening</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci!</p>
                    </div>
                    <div>
                        <h1>Preclinical testing</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at!</p>
                    </div>
                </div>
                <div className="aboutUsText">
                    <div className="sboutUsLogo">
                        <p>WHO WE ARE</p>   
                        <p>Breakthrough technologies driving drug discovery</p>
                    </div>
                </div>
                <div className="aboutUsScroll"></div>
            </div>
        </div>
    </div>
  )
}

export default Home