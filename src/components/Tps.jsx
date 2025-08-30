import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Tps() {
  const [tps, setTps] = useState(0);
  const fetchTps = async () => {
    try {
      const respone = await axios.get(`${import.meta.env.VITE_API}/api/tps`);
      setTps(respone.data.tps);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTps();
  }, []);
  return (
    <>
      <strong> TPS </strong> - <span className="text-green-500">{tps}</span>
    </>
  );
}
