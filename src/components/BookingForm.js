import React from 'react';

const BookingForm = ({ step, bookingData, handleInputChange, nextStep, prevStep }) => {
  return (
    <div className="booking-form">
      {step === 1 && (
        <div className="form-step">
          <h2>Select Your Vehicle</h2>
          {/* Vehicle selection form */}
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      
      {step === 2 && (
        <div className="form-step">
          <h2>Trip Details</h2>
          {/* Trip details form */}
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      
      {step === 3 && (
        <div className="form-step">
          <h2>Personal Information</h2>
          {/* Personal info form */}
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      
      {step === 4 && (
        <div className="form-step">
          <h2>Confirmation</h2>
          {/* Confirmation display */}
          <button onClick={prevStep}>Back</button>
          <button>Submit Booking</button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;