import React from 'react'
import './researchCenter.css'

import researchCenterLogoVideo from '../../assets/ResearchCenterPage/researchCenterLogoVideo.mp4'
import researchCenterLogoImg from '../../assets/ResearchCenterPage/ResearchCenterLogo.png'

function ResearchCenter() {
  return (
    <div className='researchCenterBody'>
      <div className="researchCenterContent">
        <div className="researchCenterLogo">
          <img src={researchCenterLogoImg} alt="" />
          <div className="researchCenterLogoText">
            <div>
              <p>discovering knowledge</p>
              <h1>Innovating<br/>tomorrow's<br/>solutions</h1>
              <button>explore now</button>              
            </div>
          </div>
          <div className="researchCenterLogoVideo">
            <video src={researchCenterLogoVideo} autoPlay muted loop></video>
          </div>   

        </div>

      </div>
    </div>
  )
}

export default ResearchCenter