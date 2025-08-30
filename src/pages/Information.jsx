import React from "react";
import Addwhitelist from "../components/Addwhitelist";
import Tps from "../components/Tps";
import Onlineplayer from "../components/Onlineplayer";

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
            <span className="text-xl font-bold text-green-500"> username </span>
            และทุกครั้งก่อนเข้าเซิฟเวอร์ต้องทำการเชื่อมต่อ{" "}
            <span className="text-xl font-bold text-green-500 cursor-pointer">
              tailscale Vpn{" "}
              <a href={`${import.meta.env.VITE_HOWTOPLAY}`} target="_blank">
                (Click)
              </a>
            </span>{" "}
            ก่อนนะคับ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Add player</h3>
              <div className="inline-block">
                <div className="bg-gray-800 rounded-xl">
                  <Addwhitelist />
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <Onlineplayer />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border  hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">services status</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <Tps />
              </li>
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
            <h3 className="text-xl font-bold mb-4">How to join & play</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4>วิธีการเชื่อมVPN</h4>
                <p className="">
                  <a
                    href={`${import.meta.env.VITE_HOWTOPLAY}`}
                    target="_blank"
                    className="text-green-500"
                  >
                    (Click)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
