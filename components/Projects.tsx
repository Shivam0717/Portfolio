import React from "react";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Subscription & Analytics Platform",
      description:
        "Built a comprehensive Stripe subscription system with dynamic pricing, Cloud Functions for lifecycle management, and real-time dashboards. Implemented subscription splitting that reduced manual effort by ~60% and improved checkout flexibility by ~40%.",
      tech: ["Stripe", "Cloud Functions", "Webhooks", "React", "Node.js"],
    },
    {
      number: "02",
      title: "Product Sentiment & Comparison Platform",
      description:
        "Created a Reddit data ingestion pipeline with sentiment analysis and scheduled daily updates. Integrated TypeSense-powered search and dynamic product comparison modules, reducing search latency by ~70% and enhancing user decision workflows.",
      tech: [
        "TypeSense",
        "Node.js",
        "Sentiment Analysis",
        "Next.js",
        "MongoDB",
      ],
    },
    {
      number: "03",
      title: "Creative Management SaaS",
      description:
        "Contributed to a multi-tenant SaaS dashboard with centralized Brand Kit module for asset management. Integrated Meta Ads API for programmatic campaign creation and performance metric syncing, enhancing team efficiency and brand consistency.",
      tech: ["Next.js", "MongoDB", "RBAC", "Meta Ads API", "OpenAI API"],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">Key Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              <div>
                <div className="project-number">{project.number}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
