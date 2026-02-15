"use client";
import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorFollower = document.getElementById("cursorFollower");

    const handleMouseMove = (e: any) => {
      if (cursor && cursorFollower) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        setTimeout(() => {
          cursorFollower.style.left = e.clientX + "px";
          cursorFollower.style.top = e.clientY + "px";
        }, 100);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Expand cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .btn");

    const handleMouseEnter = () => {
      if (cursor && cursorFollower) {
        cursor.style.transform = "scale(1.5)";
        cursorFollower.style.transform = "scale(1.5)";
      }
    };

    const handleMouseLeave = () => {
      if (cursor && cursorFollower) {
        cursor.style.transform = "scale(1)";
        cursorFollower.style.transform = "scale(1)";
      }
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" className="cursor"></div>
      <div id="cursorFollower" className="cursor-follower"></div>
    </>
  );
};

export default CustomCursor;
