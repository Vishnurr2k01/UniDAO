import React from 'react';
import { useEffect, useState } from "react";
import { getProposal, voteOnProposal } from "../services/Blockchain.services";
import {useParams} from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



// Sample data
const data = [
{name: 'voters', Acceptees: 700, Rejectees: 800},

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
          Acceptees: res?.upvotes,
          Rejectees: res?.downvotes,
        }])
      })
    }
  }*/}
 
const Chart= () => {
  
// Sample data

  
  
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
