import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Bookings from '../pages/Bookings';
import RentCar from '../pages/RentCar';
import Settings from '../pages/Settings';
import Verification from '../pages/Verification';
import Notification from '../pages/Notification';

const Router = () => {
  return (
    <Routes>
      <Route path='/'
       element={<Navigate to ='/dashboard' element={<Dashboard/>} />} 
      />
      <Route path='/dashboard' element={ <Dashboard/> } />
      <Route path='/bookings' element={ <Bookings/> } />
      <Route path='/rent-car' element={ <RentCar/> } />
      <Route path='/settings' element={ <Settings/> } />
      <Route path='/verification' element={ <Verification /> } />
      <Route path='/notification' element={ <Notification /> } />

    </Routes>
  );
};

export default Router;
