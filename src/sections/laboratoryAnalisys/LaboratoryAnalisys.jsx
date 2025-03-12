import React from "react";
import "./laboratoryAnalisys.css";

import chemicalImg from "../../assets/LaboratoryAnalisysPage/chemical.png";
import microScopeImg from "../../assets/LaboratoryAnalisysPage/microScope.png";

import ourServicesFoodTesting from "../../assets/LaboratoryAnalisysPage/ourServicesFoodTesting.jpg";
import ourServicesCropAnalisys from "../../assets/LaboratoryAnalisysPage/ourServicesCropAnalisys.jpg";
import ourServicesSoilAnalisys from "../../assets/LaboratoryAnalisysPage/ourServicesSoilAnalisys.jpg";
import ourServicesWaterTesting from "../../assets/LaboratoryAnalisysPage/ourServicesWaterTesting.jpg";

function LaboratoryAnalisys() {
  return (
    <div className="laboratoryAnalisysBody">
      <div className="laboratoryAnalisysContent">
        <div className="analisysLogo">
          <div className="logoTop">
            <h1>accurate </h1>
            <img src={chemicalImg} alt="" />
          </div>
          <div className="logoMidle">
            <h1>analitycal</h1>
          </div>
          <div className="logoBottom">
            <img src={microScopeImg} alt="" />
            <h1>results</h1>
          </div>
        </div>
        <div className="laboratoryAnalisysLine"></div>
        <div className="ourServices">
          <p>welcome to NeoLab</p>
          <h1>Our laboratory services</h1>
          <div className="ourServicesContainer">
            <div className="servicesContainer">
              <img src={ourServicesFoodTesting} alt="" />
              <div className="servicesNameContainer">
                <p className="serviceNumber">01.</p>
                <span className="serviceName">Food Testing</span>
              </div>
              <div className="servicesUnderline"></div>
            </div>
            <div className="servicesContainer">
              <img src={ourServicesCropAnalisys} alt="" />
              <div className="servicesNameContainer">
                <p className="serviceNumber">02.</p>
                <span className="serviceName">Crop Analisys</span>
              </div>
              <div className="servicesUnderline"></div>
            </div>
            <div className="servicesContainer">
              <img src={ourServicesSoilAnalisys} alt="" />
              <div className="servicesNameContainer">
                <p className="serviceNumber">03.</p>
                <span className="serviceName">Soil Analisys</span>
              </div>
              <div className="servicesUnderline"></div>
            </div>
            <div className="servicesContainer">
              <img src={ourServicesWaterTesting} alt="" />
              <div className="servicesNameContainer">
                <p className="serviceNumber">04.</p>
                <span className="serviceName">Water Testing</span>
              </div>
              <div className="servicesUnderline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaboratoryAnalisys;
