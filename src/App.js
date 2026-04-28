import React, { useState, useEffect } from "react";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
    document.title = "Sudhanshu Patel | Portfolio";
  }, []);


  return (
    <div className="bg-white text-gray-900 scroll-smooth">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 sticky top-0 bg-white border-b z-50">
        <h1 className="text-blue-600 font-bold text-lg">SUDHANSHU</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl">
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-3 border-b bg-white">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a><br/>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><br/>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a><br/>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <img
          src="/profile.jpeg"
          alt="profile"
          className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg mb-4"
        />

        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-600">Sudhanshu Patel</span>
        </h1>

        <p className="text-gray-600 mt-2">
          Data Analyst | ML Engineer | Full Stack Developer
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl mb-5 font-semibold">About Me</h2>

        <p className="text-gray-600 leading-relaxed">
          I am a passionate <b>Data Analyst</b>, <b>Machine Learning Engineer</b>, 
          and <b>Full Stack Developer</b>. I specialize in analyzing data, building 
          ML models, and developing modern web applications using technologies 
          like Python and React.

          <br /><br />

          I enjoy solving real-world problems and continuously improving my skills. 
          I am open to internship and job opportunities.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-10 text-center font-semibold">Projects</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          <a href="https://github.com/sudhanshupatel5986-hash/Sales-Forecast-Prediction---Python" target="_blank" rel="noopener noreferrer"
            className="bg-gray-100 p-4 rounded hover:shadow-lg">
            <img src="/project1.png" alt="" />
            <h3 className="mt-2 font-semibold">Sales Forecast</h3>
          </a>

          <a href="https://github.com/sudhanshupatel5986-hash/Sales-Forecast-Prediction---Python" target="_blank" rel="noopener noreferrer"
            className="bg-gray-100 p-4 rounded hover:shadow-lg">
            <img src="/project2.png" alt="" />
            <h3 className="mt-2 font-semibold">House Price Prediction</h3>
          </a>

          <a href="https://github.com/sudhanshupatel5986-hash/Sales-Forecast-Prediction---Python" target="_blank" rel="noopener noreferrer"
            className="bg-gray-100 p-4 rounded hover:shadow-lg">
            <img src="/project3.png" alt="" />
            <h3 className="mt-2 font-semibold">Spam Classifier</h3>
          </a>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl mb-5 font-semibold">Skills</h2>

        <div className="flex flex-wrap justify-center gap-3">

          <a href="/certificates/python.pdf" target="_blank" rel="noopener noreferrer"
            className="bg-gray-200 px-4 py-2 rounded-full hover:bg-blue-200">
            Python
          </a>

          <a href="/certificates/ml.pdf" target="_blank" rel="noopener noreferrer"
            className="bg-gray-200 px-4 py-2 rounded-full hover:bg-blue-200">
            Machine Learning
          </a>

          <a href="/certificates/github.pdf" target="_blank" rel="noopener noreferrer"
            className="bg-gray-200 px-4 py-2 rounded-full hover:bg-blue-200">
            GitHub
          </a>

          <a href="/certificates/fullstack.pdf" target="_blank" rel="noopener noreferrer"
            className="bg-gray-200 px-4 py-2 rounded-full hover:bg-blue-200">
            Full Stack
          </a>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl mb-5 font-semibold">Contact</h2>
        <p>Email: sudhanshupatel5986@gmail.com</p>
        <p>Phone: 9713791233</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-5">
        © 2026 Sudhanshu Patel
      </footer>

    </div>
  );
}