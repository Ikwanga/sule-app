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

      {/* Top left welcome-text*/}
      <div className="welcome-text">
        <h3 style={{ color: "#c57cff", margin: 0 }}>Hi!</h3>
        <div className="typewriter-container">
          <span className="typewriter-line line1">
          Curious Computer Science and Physics student!
          </span>
          <span className="typewriter-line line2">
            |Tech + Physical Laws + Chess|
        </span>
        </div>
      </div>

      {/* Center animation box*/}
      <div className="center-box">
        <div className={`animated-slide ${direction}`}>
          {components[index]}
        </div>
      </div>

      {/* Bottom right quote */}
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
