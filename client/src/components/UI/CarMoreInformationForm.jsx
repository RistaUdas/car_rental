import React, { useState } from 'react';

import "../../styles/car-information.css";

const CarMoreInformationForm = () => {
  const [ setCarPhoto] = useState(null);
  const [carDescription, setCarDescription] = useState('');
  const [carCapacity, setCarCapacity] = useState('');
  const [carSpeed, setCarSpeed] = useState('');
  const [carTransmission, setCarTransmission] = useState('');
  const [carFuel, setCarFuel] = useState('');
  const [carLocation, setCarLocation] = useState('');
  const [carPricePerDay, setCarPricePerDay] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className='car__information-form mt-4 mb-4' >
      <h4 className="fw-bold fs-large verify ">Cars Information</h4>
      
      <div>
        <label className='car__label'>Car Description:</label>
        <textarea value={carDescription} onChange={(e) => setCarDescription(e.target.value)} required></textarea>
      </div>
      <div>
        <label className='car__label'>Specification:</label>
        <input 
        type="text" 
        value={carCapacity} 
        onChange={(e) => setCarCapacity(e.target.value)}
        placeholder='Capacity' required />
      </div>
      <div>
        <input type="text" value={carSpeed} onChange={(e) => setCarSpeed(e.target.value)} 
        placeholder='Speed' required />
      </div>
      <div>
        <input type="text" value={carTransmission} 
        onChange={(e) => setCarTransmission(e.target.value)}
        placeholder='Transmission' required />
      </div>

      <div>
        <input type="text" value={carFuel} 
        onChange={(e) => setCarFuel(e.target.value)}
        placeholder='Fuel' required />
      </div>

      <div>
        <label className='car__label'>Upload Car Photo:</label>
        <input type="file" onChange={(e) => setCarPhoto(e.target.files[0])} required />
      </div>


      <div>
        <label className='car__label'>Location:</label>
        <input type="text" value={carLocation} onChange={(e) => setCarLocation(e.target.value)} required />
      </div>
      <div>
        <label className='car__label'>Price per Day:</label>
        <input type="text" value={carPricePerDay} onChange={(e) => setCarPricePerDay(e.target.value)} required />
      </div>
      <button type="submit" className='next__btn justify-content-center'>Submit</button>
    </form>
  );
};

export default CarMoreInformationForm;
