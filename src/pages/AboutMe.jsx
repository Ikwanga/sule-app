import { Link } from "react-router-dom";
import "../Layout.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <Link>
        <img src="./images/suleiman-ubuntu" alt="" />
        <p>
          I am a CS and Physics student curious about how technology improves our lives as humans and how Physics defines all the components of humanity.
        </p>
      </Link>
    </div>
  );
}
