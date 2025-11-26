import { Link } from "react-router-dom";
import "../Layout.css";

export default function Experience({ experience }) {
  return (
    <div className="courses">
      <h2 className="courses-title">Experience</h2>

      {experience.map((item, index) => (
        <Link
          to={`/experience/${index}`}
          key={index}
          className="course-item"
        >
          <span className="course-code">{item.position}</span>
          <span className="course-name">{item.context}</span>
        </Link>
      ))}
    </div>
  );
}
