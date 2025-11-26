import { useState, useEffect } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Campus from "./Campus";

export default function Home() {
  const components = [
    <Education />,
    <Experience />,
    <Projects />,
    <Skills />,
    <Campus />,
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("forward");
      setIndex((prev) => (prev + 1) % components.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="global-background">

      {/* TOP LEFT WELCOME BOX */}
      <div className="welcome-text">
        <h3 style={{ color: "magenta", margin: 0 }}>Hi!</h3>
        <div className="typewriter-container">
          <span className="typewriter-line line1">
          Welcome to my website! I created this to learn and to tell...
          </span>
          <span className="typewriter-line line2">
        ...to learn how to code and to tell what I have done.
        </span>
        </div>
      </div>

      {/* CENTER GLASS BOX WITH SLIDES */}
      <div className="center-box">
        <div className={`animated-slide ${direction}`}>
          {components[index]}
        </div>
      </div>

      {/* BOTTOM RIGHT QUOTE */}
      <div className="bottom-right-quote">
        <p>
          “To succeed, we must react efficiently to the quiet battles of thought
          and complexity.”
        </p>
        <p>~ Okwang'ayel</p>
      </div>

    </div>
  );
}
