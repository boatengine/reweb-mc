import axios from "axios";
import React, { use, useEffect, useState } from "react";

export default function Onlineplayer() {
  const [onlinePlayer, setOnlinePlayer] = useState([]);

  const fetchOnlinePlayer = async () => {
    try {
      const respone = await axios.get(
        `${import.meta.env.VITE_API}/api/online-player`
      );
      if (respone.data.player != "") {
        setOnlinePlayer(respone.data.player.split(", "));
      }
      //   console.log(respone.data.player.split(", "));
      //   console.log("eiei");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOnlinePlayer();
  }, []);

  return (
    <>
      <h3 className="text-xl font-bold mb-4">
        Online Player ({onlinePlayer.length}/10)
      </h3>
      <div className="flex flex-wrap gap-2">
        {onlinePlayer.map((t, k) => (
          <span
            key={k}
            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
}
