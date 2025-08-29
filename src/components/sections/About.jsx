import React from "react";

export default function About() {
  const frontendSkill = ["HTML", "CSS", "Boostrap", "TailwindCSS"];
  const backendSkill = ["Node.js", "Python", "Java", "MySql"];
  return (
    <section
      id="abour"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me{" "}
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gary-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, id
            expedita rerum, unde magnam dolor, voluptatum at sapiente sunt
            debitis cupiditate aliquam doloremque perferendis. Esse.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-warp gap-2">
                {frontendSkill.map((t, k) => (
                  <span
                    key={k}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-warp gap-2">
                {backendSkill.map((t, k) => (
                  <span
                    key={k}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
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
      </div>
    </section>
  );
}
