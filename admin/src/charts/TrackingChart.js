


import React from 'react';

import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip,
  CartesianGrid 
} from 'recharts';
import trackingData from '../assets/dummy-data/trackingData';

const TrackingChart = () => {
  return (
    <ResponsiveContainer width="100%">
       < LineChart>
        <CartesianGrid strokeDasharray='0' stroke='#b7ffe913'/>
        <XAxis dataKey='name' stroke='#ddd'/>
        <YAxis dataKey='mt' stroke='#ddd'/>

        <Line type='monotone' 
        dataKey='km' 
        data={trackingData} 
        stroke='#e1424e'
        activeDot={{ r:8}}
        />

        <Tooltip wrapperClassName='tooltip__style' />
       </LineChart>
    </ResponsiveContainer>
  );
};

export default TrackingChart;
