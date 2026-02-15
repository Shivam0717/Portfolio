import Image from "next/image";
import React from "react";

const Hero = () => {
  const handleViewWork = () => {
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section id="home" className="hero">
      <div className="containerIntro">
        <div className="hero-content">
          <div className="hero-label">
            <span className="status-dot"></span>
            Full Stack Developer
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Shivam</span>
            <br />
            Sharma
          </h1>
          <p className="hero-subtitle">
            Web developer skilled in MERN and Next.js, building reliable backend
            systems, payment solutions, and real-time analytics for modern web
            applications
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <span>Let's talk</span>
            </a>
            <a onClick={handleViewWork} className="btn btn-secondary">
              View Work
            </a>
          </div>
        </div>
        <div className="hero-images">
          <Image
            className="icon-box bounce bounce-1"
            src="/dockerIcon2.png"
            alt="Docker"
            width={30}
            height={30}
          />

          <Image
            className="icon-box bounce bounce-2"
            src="/mongoIcon.png"
            alt="Mongo"
            width={30}
            height={30}
          />

          <Image
            className="icon-box bounce bounce-3"
            src="/nextIcon.jpeg"
            alt="Next"
            width={30}
            height={30}
          />

          <Image
            className="icon-box bounce bounce-4"
            src="/nodejsIcon.png"
            alt="Node"
            width={30}
            height={30}
          />
          <Image
            className="icon-box bounce bounce-5"
            src="/iconGithub.jpg"
            alt="Git"
            width={30}
            height={30}
          />

          <Image
            className="icon-box bounce bounce-5"
            src="/redisIcon.png"
            alt="Redis"
            width={30}
            height={30}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
