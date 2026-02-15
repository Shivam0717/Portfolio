import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Redux",
        "TanStack Query",
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Webhooks",
        "Redis",

        "WebSockets",
        "Cloud Functions",
        "MongoDB",
        "Firebase",
      ],
    },
    // {
    //   title: "Cloud & DevOps",
    //   skills: ["AWS (EC2, S3, Lambda)", "Google Cloud", "Vercel", "Netlify", "Render", "Railway"]
    // },
    {
      title: "Payment & APIs",
      skills: [
        "Stripe API",
        "Meta Ads API",
        "OpenAI API",
        "TypeSense",
        "Reddit API",
        "Third-party Integrations",
      ],
    },
    {
      title: "Auth & Tools",
      skills: [
        "OAuth",
        "JWT",
        "RBAC",
        "Clerk Auth",
        "Git",
        "GitHub",
        "Postman",
        "Docker",
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Technical Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
