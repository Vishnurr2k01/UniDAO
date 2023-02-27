import { useEffect, useState } from "react";
import Chart from "../components/Chart";

export default function Votechart() {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("");
      const data = await res.json();
      setdata(data?.data);
    };
    fetchDatas();
  }, []);

  return (
    <div className="text-white">
      Bar Graph for Upvotes,Downvotes and total votes
      <Chart data={data} />
    </div>
  );
}