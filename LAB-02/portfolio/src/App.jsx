import { useState, useEffect } from 'react';
import './App.css';
import profileImg from './assets/profile.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <nav className="navbar glass">
        <div className="logo">AD</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#credentials">Credentials</a></li>
        </ul>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          Contact me ↗️
        </button>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-greeting">Hi, I am</span>
              <h1 className="hero-name">Ambrish Dhanvee</h1>
              <h2 className="hero-degree">[Example: Third-year BCA (Hons.) student]</h2>
              <p className="hero-uni">at [UNIVERSITY NAME]</p>
              <p className="hero-intro">
                I build modern, responsive, and dynamic web applications. Passionate about AI, web technologies, and crafting beautiful user experiences.
              </p>
              <div className="hero-actions">
                <a href="https://www.linkedin.com/in/ambrish-dhanvee-b-896870326/" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
                <a href="https://github.com/ambrish2006" target="_blank" rel="noreferrer" className="btn-primary" style={{ borderColor: 'var(--text-muted)', color: 'var(--text-main)' }}>GitHub</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="profile-container">
                <img src={profileImg} alt="Profile" className="profile-img" />
                <div className="profile-card glass">
                  <p><span>Status:</span> Open to Work</p>
                  <p><span>Certificates:</span> 3+</p>
                  <p><span>Class of:</span> [YEAR]</p>
                  <p><span>Location:</span> [CITY, STATE, COUNTRY]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile / Resume at a glance */}
        <section id="about">
          <h2 className="section-title">Resume at a Glance</h2>
          <div className="glass" style={{ padding: '1rem', borderRadius: '8px' }}>
            <table className="resume-table">
              <tbody>
                <tr>
                  <td>Education</td>
                  <td>[Degree Name], [University Name]</td>
                </tr>
                <tr>
                  <td>Current Year</td>
                  <td>[Current Year of Study]</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>[City, State, Country]</td>
                </tr>
                <tr>
                  <td>Primary Interests</td>
                  <td>Mobile Apps, Web Development, Data & AI</td>
                </tr>
                <tr>
                  <td>Contact Email</td>
                  <td><a href="mailto:ambrishdhanveeb@gmail.com">ambrishdhanveeb@gmail.com</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="section-title">Core Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Programming</h3>
              <p>[Python, C, C++, JavaScript, etc.]</p>
            </div>
            <div className="skill-card">
              <h3>Web & Mobile</h3>
              <p>[HTML, CSS, React, React Native, etc.]</p>
            </div>
            <div className="skill-card">
              <h3>Creative / Tools</h3>
              <p>[Figma, Unity, Git, VS Code, etc.]</p>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section id="credentials">
          <h2 className="section-title">Certificates</h2>
          <div className="glass" style={{ padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
            <table className="cert-table">
              <thead>
                <tr>
                  <th>Credential Name</th>
                  <th>Provider</th>
                  <th>Issue Date</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cert-name">Python 101 for Data Science</td>
                  <td>SkillsBuild</td>
                  <td>Completed</td>
                  <td><a href="https://courses.skillsbuild.skillsnetwork.site/certificates/78933247f04a47e6898ace4cb1258fce" target="_blank" rel="noreferrer">View ↗️</a></td>
                </tr>
                <tr>
                  <td className="cert-name">Data Analysis with Python</td>
                  <td>SkillsBuild</td>
                  <td>Completed</td>
                  <td><a href="https://courses.skillsbuild.skillsnetwork.site/certificates/ee41c906b97b4f94b7e23e38c06526e5" target="_blank" rel="noreferrer">View ↗️</a></td>
                </tr>
                <tr>
                  <td className="cert-name">Data Visualization with Python</td>
                  <td>SkillsBuild</td>
                  <td>Completed</td>
                  <td><a href="https://courses.skillsbuild.skillsnetwork.site/certificates/1835e022ab05442b9fe55dd3ec98ccbb" target="_blank" rel="noreferrer">View ↗️</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <h2 className="cta-text">Let's build something useful.</h2>
        <div className="footer-links">
          <a href="mailto:ambrishdhanveeb@gmail.com">Email</a>
          <a href="https://github.com/ambrish2006" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ambrish-dhanvee-b-896870326/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ambrish Dhanvee. Built with React.</p>
      </footer>

      {/* Contact Modal */}
      <div 
        className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
          <h2>Get in Touch</h2>
          <div className="contact-links">
            <a href="mailto:ambrishdhanveeb@gmail.com">
              📧 ambrishdhanveeb@gmail.com
            </a>
            <a href="tel:9080000479">
              📱 9080000479
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
