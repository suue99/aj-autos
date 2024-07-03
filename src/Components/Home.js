import React from "react";
import './home.css';
import carImage from '../Images/whitecamry.png';



function Home () {
    return (
        <div className="background-right">
        <div className="content-wrapper">
        <div className="text-content">
          <h1 className="premier-heading">Your Premier Vehicle Dealer for Durable Cars</h1>
          <p className="platform">
            Our platform offers a seamless experience, connecting buyers with their dream vehicles and providing dependable after-sales support.
          </p>
          <button className="btn" id="buy-cars">BUY CARS</button>
          <button className="btn" id="services">REPAIRS</button>
        </div>
        <div className="car-image">
          <img src={carImage} alt="Toyota Camry" />
          <div className="rectangle top-right"> <span className="toyota">Toyota Camry</span><br /> <span className="cylinder"> 2.5L 4-cylinder, 3.5L V6 </span></div>
          <div className="rectangle bottom-left"> <span className="toyota">$12 million</span><br /> <span className="cylinder"> 4 Seater  -  Petrol  -  Automatic </span></div>
        </div>
      </div>
    </div>
  );
}

export default Home
