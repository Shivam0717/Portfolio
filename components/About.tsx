import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content fade-in">
            <div className="section-label">Introduction</div>
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Hey there! 👋 I'm Shivam, a passionate full-stack developer
              specializing in crafting modern web applications. With expertise
              in both frontend and backend technologies, I bring ideas to life
              through clean, efficient code.
            </p>
            <p className="about-text">
              I love diving into complex problems and finding elegant solutions.
              Whether it's building responsive UIs, designing robust APIs, or
              optimizing database queries, I'm always up for a challenge.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Worked On</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1.5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          <div className="about-visual fade-in">
            <div className="visual-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="code-snippet">
                  <span className="code-comment">
                    // My approach to development
                  </span>
                  <br />
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">developer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="code-property">name</span>:{" "}
                  <span className="code-string">'Shivam Sharma'</span>,<br />
                  &nbsp;&nbsp;<span className="code-property">focus</span>:{" "}
                  <span className="code-string">'Full Stack'</span>,<br />
                  &nbsp;&nbsp;<span className="code-property">
                    passion
                  </span>: <span className="code-string">'Clean Code'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="code-property">
                    mindset
                  </span>:{" "}
                  <span className="code-string">'Always Learning'</span>
                  <br />
                  {"}"};
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
