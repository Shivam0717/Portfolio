import React from "react";

const Experience = () => {
  const experiences = [
    {
      period: "Sep 2024 - Present",
      role: "Web Developer",
      company: "Evolvan Info Solution, Ludhiana",
      achievements: [
        "Built and managed Stripe subscription system with dynamic pricing, lifecycle handling, and analytics dashboards, improving payment automation by ~60%",
        "Developed Reddit data pipelines, integrated TypeSense search, and created sentiment analysis & product comparison modules, reducing search latency by ~70% and enhancing user decision workflows",
        "Integrated OpenAI API to support prompt-based user interactions within application workflows",
        "Contributed to multi-tenant SaaS dashboard using Next.js, Node.js, and MongoDB, including RBAC and centralized Brand Kit module for improved asset management",
        "Worked on Meta Ads API to programmatically create campaigns and sync performance metrics, boosting reporting efficiency",
      ],
    },
    {
      period: "Jun 2023 - Dec 2023",
      role: "Web Developer Tranee",
      company: "Ansh InfoTech, Ludhiana",
      achievements: [
        "Gained hands-on experience with the MERN stack and Next.js",
        "Built basic modules for internal projects, learning structured frontend-backend integration",
        "Practiced connecting APIs and understanding database operations with MongoDB",
        "Developed understanding of user roles and basic RBAC concepts",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Career Path</div>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
