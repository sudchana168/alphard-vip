// src/pages/Booking.js
import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    car: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="booking-page">
      <div className="booking-steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Select Car</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Trip Details</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Personal Info</div>
        <div className={`step ${step >= 4 ? 'active' : ''}`}>4. Confirmation</div>
      </div>
      
      <BookingForm 
        step={step}
        bookingData={bookingData}
        handleInputChange={handleInputChange}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
};

export default Booking;