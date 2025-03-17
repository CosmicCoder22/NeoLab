import React from "react";
import './ourClients.css'
import './ourClientsResponsive.css'

import client1 from "../../assets/homePage/client1.webp";
import client2 from "../../assets/homePage/client2.webp";
import client3 from "../../assets/homePage/client3.webp";
import client4 from "../../assets/homePage/client4.webp";
import client5 from "../../assets/homePage/client5.webp";
import client6 from "../../assets/homePage/client6.webp";

function OurClients() {
  return (
    <div className="clients">
      <div className="clientLogo">
        <img src={client1} alt="" />
      </div>
      <div className="clientLogo">
        <img src={client2} alt="" />
      </div>
      <div className="clientLogo">
        <img src={client3} alt="" />
      </div>
      <div className="clientLogo">
        <img src={client4} alt="" />
      </div>
      <div className="clientLogo">
        <img src={client5} alt="" />
      </div>
      <div className="clientLogo">
        <img src={client6} alt="" />
      </div>
    </div>
  );
}

export default OurClients;
