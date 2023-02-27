import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'week 1',
    new_users: 100,
    total_users: 100,
    amt: 100,
  },
  {
    name: 'week 1',
    new_users: 17,
    total_users: 117,
    amt: 120,
  },
  {
    name: 'week 2',
    new_users: 5,
    total_users: 122,
    amt: 120,
  },
  {
    name: 'week 3',
    new_users: 23,
    total_users: 145,
    amt: 150,
  },
  {
    name: 'week 4',
    new_users: 7,
    total_users: 152,
    amt: 150,
  },
  {
    name: 'week 5',
    new_users: 13,
    total_users: 165,
    amt: 200,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <div style={{
        zIndex: 0
      }} className='w-full bg-[#0c1427] p-4 mt-12 rounded-md'>
      
       <LineChart
          width={600}
          height={450}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className='z-0'
          c
        >
          <CartesianGrid strokeDasharray="3 3" className='z-0' />
          <XAxis dataKey="name" className='z-0'/>
          <YAxis className='z-0'/>
          <Tooltip className='z-0'/>
          <Legend className='z-0'/>
          <Line type="monotone" dataKey="new_users" stroke="#8884d8" activeDot={{ r: 8 }} className='z-0'/>
          <Line type="monotone" dataKey="total_users" stroke="#00df9a" className='z-0'/>
        </LineChart>
     
      </div>
    );
  }
}
