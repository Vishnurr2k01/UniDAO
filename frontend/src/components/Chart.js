import { useEffect, useState } from "react";
import { getProposal, voteOnProposal } from "../services/Blockchain.services";
import {useParams} from 'react-router-dom'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

 
  
  const ProposalDetails =() => {
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
  }
  export default function Chart({ data }) {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Acceptees" fill="#8884d8" />
          <Bar dataKey="Rejectees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }