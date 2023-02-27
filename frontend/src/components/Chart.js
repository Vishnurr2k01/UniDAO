import React from 'react';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
{name: 'voters', Acceptees: 700, Rejectees: 800},

];
 
 
const Chart= () => {
  


  
  
return (
  <div>
<BarChart width={300} height={500} data={data}
margin={{
  top: 20,
  right: 50,
  left: 50,
  bottom: 5
}}>
  <CartesianGrid strokeDasharray="3 3"/>
  <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Acceptees" fill="green" />
          <Bar dataKey="Rejectees" fill="blue" />
  </BarChart>
  </div>
);
}
  
export default Chart;
