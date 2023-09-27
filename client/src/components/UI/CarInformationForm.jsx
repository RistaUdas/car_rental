import React, { useState } from 'react';

import "../../styles/car-information.css";

import { Link } from 'react-router-dom';

const CarInformationForm = () => {
  const [carType, setCarType] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [ setBluebook] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className='car__information-form mb-4 mt-4'>
       <h4 className="fw-bold fs-large verify ">Car Information</h4>
      <div>
        <label className='car__label'>Car Type:</label>
        <input 
          type="text" 
          value={carType} 
          onChange={(e) => setCarType
            (e.target.value)}
          required
        />
      </div>
      <div>
        <label className='car__label'>Car Brand:</label>
        <input 
          type="text" 
          value={carBrand} 
          onChange={(e) => setCarBrand(e.target.value)} 
          required
        />
      </div>
      <div>
        <label className='car__label'>Car Model:</label>
        <input type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} required />
      </div>
      <div>
        <label className='car__label'>License Plate Number:</label>
        <input type="text" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} required />
      </div>
      <div>
        <label className='car__label'>Upload Bluebook:</label>
        <input type="file" onChange={(e) => setBluebook(e.target.files[0])} required />
      </div>
      
      <button type="submit" className=' mt-4'>
         <Link to='/nextci' className="  justify-content-center fw-bold next__btn  ">
          Next
         </Link>
      </button>

    </form>
  );
};

export default CarInformationForm;
