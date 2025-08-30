import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent text-center">
          Future Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/39 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3>ยังคิดไม่ออก</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              quasi labore quidem eligendi qui necessitatibus.
            </p>
            <div>
              {["11/08/2025", "in progress"].map((v, k) => (
                <span
                  key={k}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  {v}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-green-400 hover:text-green-300 transition-colors my-4"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
