// src/pages/Fleet.js
import React from 'react';
import FleetCard from '../components/FleetCard';
import { fleetData } from '../data/fleetData';

const Fleet = () => {
  return (
    <div className="fleet-page">
      <div className="page-header">
        <h1>Our VIP Fleet</h1>
        <p>Choose from our premium collection of vehicles</p>
      </div>
      <div className="fleet-grid">
        {fleetData.map(car => (
          <FleetCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Fleet;