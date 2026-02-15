"use client";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: any, href: any) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      const navLinks = document.getElementById("navLinks");
      const menuToggle = document.getElementById("menuToggle");
      if (
        navLinks &&
        menuToggle &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav>
      <div id="scrollProgress" style={{ width: `${scrollProgress}%` }}></div>
      <div className="container">
        <div className="logo"></div>
        <div
          id="menuToggle"
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul id="navLinks" className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleLinkClick(e, "#experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
