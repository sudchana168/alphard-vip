import React from 'react';
import FleetCard from './FleetCard';
import { fleetData } from '../data/fleetData';

const PopularFleet = () => {
  return (
    <section className="popular-fleet">
      <h2>Our Popular Fleet</h2>
      <div className="fleet-grid">
        {fleetData.slice(0, 3).map(car => (
          <FleetCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default PopularFleet;