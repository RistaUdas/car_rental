import React from 'react';

import "../styles/dashboard.css";
import SingleCard from '../components/reuseable/SingleCard';

import CarStatschart from '../charts/CarStatschart';


const carObj ={
  title: 'Total Cars',
  totalNumber: 750,
  icon:"ri-police-car-line",
};

const tripObj ={
  title: 'Daily Trips',
  totalNumber: 500 ,
  icon:"ri-steering-2-line",
};

const clientObj ={
  title: 'Clients Anually',
  totalNumber: '85k' ,
  icon:"ri-user-line",
};

const distanceObj ={
  title: 'Kilometers ',
  totalNumber: '2500' ,
  icon:"ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__card">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
        
         <div className="stats">
            <h3 className='stats__title'>Earning Summary</h3>
            <CarStatschart />
         </div>
        </div>

        
      </div>
    </div>
  );
}

export default Dashboard;
