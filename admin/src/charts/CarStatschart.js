
import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, CartesianGrid, YAxis, Line, Legend } from 'recharts';

import data from '../assets/dummy-data/data';

const CarStatschart = () => {
  return (
    <ResponsiveContainer width='100%'>
   <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
   
</LineChart>
  </ResponsiveContainer>
  )
}

export default CarStatschart;
