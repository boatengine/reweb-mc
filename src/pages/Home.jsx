import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent leading-right">
          NoStack Minecraft server.
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          ยินดีต้อนรับสู่ NoStack Minecraft server
          เปิด/ปิดไม่มีเวลาแน่นอนแล้วแต่เจ้าของ5555++
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#information"
            className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Status
          </a>
          <a
            href={`${import.meta.env.VITE_DISCORD}`}
            target="_blank"
            className="border border-green-500/50 text-emerald-500 py-3 px-6 rounded font-medium transition-all duration-200
            hover:-translate-y-0.5 hover:bg-green -500/10"
          >
            Discord
          </a>
        </div>
      </div>
    </section>
  );
}
