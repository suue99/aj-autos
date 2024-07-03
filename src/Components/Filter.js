import React from 'react';
import './filter.css';
import car1 from '../Images/car1.png';
import car2 from '../Images/car2.png';
import car3 from '../Images/car3.png';

export default function Filter() {
  const cars = [
    {
      id: 1,
      image: car1,
      name: '2015 Toyota Sienna XLE AWD',
      features: 'Petrol - Back-Up Camera - Blind Spot Monitoring',
      price: '₦16 million',
    },
    {
      id: 2,
      image: car2,
      name: '2010 Mercedes -Benz E 350',
      features: 'Petrol - Back-Up Camera - Blind Spot Monitoring',
      price: '₦13 million',
    },
    {
      id: 3,
      image: car3,
      name: '2015 Toyota Sienna XLE AWD',
      features: 'Petrol - Back-Up Camera - Blind Spot Monitoring',
      price: '₦12 million',
    },
  ];

  return (
    <div className="most-searched-cars">
    <div className="section-header">
      <h2 className="section-title">The most <span className="highlight">Searched Cars</span></h2>
      <div className="car-filters">
        <button className="filter-button active">All</button>
        <button className="filter-button">HatchBack</button>
        <button className="filter-button">Sedan</button>
        <button className="filter-button">SUV</button>
        <button className="filter-button">Luxury</button>
      </div>
      </div>
      <div className="car-cards-container">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-details">
              <h3 className="car-name">{car.name}</h3>
              <p className="car-features">{car.features}</p>
              <p className="car-price">{car.price}</p>
              <button className="contact-button">CONTACT</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


