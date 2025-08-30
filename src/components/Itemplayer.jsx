import React from "react";

export default function Itemplayer({ listPlayer }) {
  return (
    <>
      {listPlayer.map((v, k) => (
        <span
          key={k}
          className="m-2 bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
        >
          {v}
        </span>
      ))}
    </>
  );
}
