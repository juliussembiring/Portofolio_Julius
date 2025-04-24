import React, { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto">
        <button className="btn btn-sm mb-6" onClick={toggleTheme}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
            V
          </div>
          <div>
            <h1 className="text-3xl font-bold">Nama Kamu</h1>
            <p className="text-sm opacity-70">Role kamu (misal: Developer)</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Kegiatan / Project</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-300"
              >
                <div className="card-body">
                  <h3 className="card-title">Project {item}</h3>
                  <p>Deskripsi singkat project {item} (bisa kamu edit).</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
