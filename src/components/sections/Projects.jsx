import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl fond-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">
          Featured prjects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/39 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3>Health</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              quasi labore quidem eligendi qui necessitatibus.
            </p>
            <div>
              {["PHP", "MySQL", "Nginx"].map((v, k) => (
                <span
                  key={k}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/39 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3>Health</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              quasi labore quidem eligendi qui necessitatibus.
            </p>
            <div>
              {["PHP", "MySQL", "Nginx"].map((v, k) => (
                <span
                  key={k}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/39 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3>Health</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              quasi labore quidem eligendi qui necessitatibus.
            </p>
            <div>
              {["PHP", "MySQL", "Nginx"].map((v, k) => (
                <span
                  key={k}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/39 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3>Health</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              quasi labore quidem eligendi qui necessitatibus.
            </p>
            <div>
              {["PHP", "MySQL", "Nginx"].map((v, k) => (
                <span
                  key={k}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
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
