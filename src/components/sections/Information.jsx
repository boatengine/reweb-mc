import React from "react";

export default function About() {
  const allWhitelist = [
    "g0dgameeiei",
    "sugus12",
    "boatengine",
    "doreme",
    "eiei",
  ];
  return (
    <section
      id="information"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent text-center">
          {" "}
          Information server{" "}
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gary-300 mb-6">
            หากเข้าเซิฟเวอร์ครั้งแรก กรอกชื่อในเกม
            <span className="text-xl font-bold text-emerald-500">
              (username)
            </span>
            และทุกครั้งต้องเชื่อมต่อ{" "}
            <span className="text-xl font-bold text-emerald-500">
              tailscale Vpn
            </span>{" "}
            ก่อนนะคับ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Add player</h3>
              <div className="flex flex-warp gap-2">
                <div className="bg-gray-800  rounded-xl">
                  <input
                    type="text"
                    className="pl-3 focus:outline-none "
                    placeholder="enter your username"
                  />
                  <button
                    type="submit"
                    className="bg-emerald-500 rounded-r-xl px-3 p-2 cursor-pointer font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Online Player</h3>
              <div className="flex flex-wrap gap-2">
                {allWhitelist.map((t, k) => (
                  <span
                    key={k}
                    className="bg-green-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border  hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">services status</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> VPN </strong> -{" "}
                <span className="text-yellow-500">Overload</span>.
              </li>
              <li>
                <strong>Mc.Server</strong> -{" "}
                <span className="text-green-500">Good</span>
              </li>
              <li>
                <strong>Website</strong> -{" "}
                <span className="text-blue-500">Maintenance</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">New! update</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4>Plguin update</h4>
                <p>all plugin update</p>
              </div>
              <div>
                <h4>Website update</h4>
                <p>design and implement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
