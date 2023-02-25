import React from 'react';
import { useEffect, useState } from "react";
import { getProposal, voteOnProposal } from "../services/Blockchain.services";
import {useParams} from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



// Sample data
const data = [
{name: 'voters', Acceptees: 400, Rejectees: 800, amt:400},
{name: 'voters', Acceptees: 700, Rejectees:300, amt:700},
{name: 'voters', Acceptees: 200, Rejectees:500, amt:1000},
{name: 'voters', Acceptees: 1000, Rejectees:400, amt:800}
];
 
  
  {/*const ProposalDetails =() => {
    const {id} =useParams()
    const[proposal,setProposal]=useState(null)
    const [data,setData]=useState([])
    //const [isStakeholder]=useGlobalState('isStakeholder')
  
    const retrieveProposal = async()=> {
      await getProposal(id).then(res=>{
        setProposal(res)
        setData([{
          name: 'Voters',
          Acceptees: 4000,
          Rejectees: 2000,
        }])
      })
    }
  }*/}
 
const Chart= () => {
  
// Sample data

  
  
return (
  <div>
<BarChart width={600} height={500} data={data}
margin={{
  top: 5,
  right: 30,
  left: 20,
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
