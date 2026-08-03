import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <nav className="navbar">
        <h2>My React Web App</h2>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>

      <div className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          A simple responsive web page built using React, HTML and CSS.
        </p>

        <button
          onClick={() => alert("Thanks for clicking!")}
          className="btn"
        >
          Click Me
        </button>
      </div>

      <div className="cards">
        <div className="card">
          <h3>HTML</h3>
          <p>Structure of a webpage.</p>
        </div>

        <div className="card">
          <h3>CSS</h3>
          <p>Responsive and modern layouts.</p>
        </div>

        <div className="card">
          <h3>React</h3>
          <p>Create interactive user interfaces.</p>
        </div>
      </div>
    </div>
  );
}

export default App;