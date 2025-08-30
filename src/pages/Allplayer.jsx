import React, { useEffect, useState } from "react";
import Itemplayer from "../components/Itemplayer";
import axios from "axios";
export default function Projects() {
  const [listPlayer, setListPlayer] = useState([]);

  const fetchListPlayer = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/api/whitelist`);
      // console.log(res.data.whitelist.slice(35).split(", "));
      setListPlayer(await res.data.whitelist.slice(35).split(", "));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchListPlayer();
  }, []);
  // console.log(listPlayer);

  return (
    <section
      id="friends"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent text-center">
          Friends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="p-12 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/39 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3>List of all players</h3>
            <p className="text-gray-400 mb-4">รายชื่อผู้เล่นทั้งหมด</p>
            <div className="flex flex-wrap">
              <Itemplayer listPlayer={listPlayer} />
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-green-400 hover:text-green-300 transition-colors my-4"
              >
                View More.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
