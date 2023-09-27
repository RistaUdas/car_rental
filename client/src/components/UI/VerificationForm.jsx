import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import "../../styles/verification.css";

const VerificationForm = () => {
  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [ setIdDocument] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleIdTypeChange = (e) => {
    setIdType(e.target.value);
  };

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleIdDocumentChange = (e) => {
    setIdDocument(e.target.files[0]);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdType('');
    setIdNumber('');
    setIdDocument(null);
    setDateOfBirth('');
  };

  return (
    <form onSubmit={handleSubmit} className='verification__form mb-4 mt-4'>
         <h4 className="fw-bold fs-large verify ">Identity Verification</h4>
      <label htmlFor="idType" className='label'>ID Type:</label>
      <select id="idType" value={idType} onChange={handleIdTypeChange} required>
        <option value="">Select ID Type</option>
        <option value="passport">Passport</option>
        <option value="driverLicense">Driver's License</option>
        <option value="idCard">Citizenship Card</option>
      </select>

      <label htmlFor="idNumber" className='label'>ID Number:</label>
      <input
        type="text"
        id="idNumber"
        value={idNumber}
        onChange={handleIdNumberChange}
        required
      />

      <label htmlFor="idDocument" className='label'>Upload Your ID:</label>
      <input
        type="file"
        id="idDocument"
        accept="image/*"
        onChange={handleIdDocumentChange}
        required
      />

      <label htmlFor="dateOfBirth" className='label'>Date of Birth:</label>
      <input
        type="date"
        id="dateOfBirth"
        value={dateOfBirth}
        onChange={handleDateOfBirthChange}
        required
      />

      <button type="submit" className=' mt-4'>
         <Link to='/nextv' className="  justify-content-center fw-bold next__btn  ">
          Next
         </Link>

      </button>
    </form>
  );
};

export default VerificationForm;
