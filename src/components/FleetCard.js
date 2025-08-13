// src/components/FleetCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FleetCard = ({ car }) => {
  return (
    <div className="fleet-card">
      <img src={car.image} alt={car.name} />
      <div className="card-content">
        <h3>{car.name}</h3>
        <ul className="features">
          <li>Seats: {car.seats}</li>
          <li>Luggage: {car.luggage}</li>
          <li>Type: {car.type}</li>
        </ul>
        <div className="price">From {car.price}/day</div>
        {/* <Link to={`/booking?car=${car.id}`} className="btn-book">Book This Car</Link> */}
        <Link to={`/contact`} className="btn-book">Book This Car</Link>
      </div>
    </div>
  );
};

export default FleetCard;