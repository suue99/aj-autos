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
        </div>
      </div>
    </div>
  );
}

export default Home
