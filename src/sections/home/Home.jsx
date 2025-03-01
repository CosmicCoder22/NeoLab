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
        </div>
    </div>
  )
}

export default Home