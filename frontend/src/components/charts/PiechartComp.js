import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Number of users', value: 200 },
    { name: 'Number of Admins', value: 20},
    
  ];
  const COLORS = ['#0088FE', '#00df9a'];
export default class Example extends PureComponent {
   
    render() {
      return (
       <div className=' w-fit  rounded-md flex flex-col justify-center'> 
         <PieChart width={300} height={350} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={120}
            innerRadius={100}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <>
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /></>
            ))}
          </Pie>
          
        </PieChart>
        <div className='text-center text-xl '>
            <span className='text-[#0088FE]'>Number of users</span> <br/>
            <span className='text-[#00C49F]'>Number of Admins</span>
        </div>

       </div>
      );
    }
  }