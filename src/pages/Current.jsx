import { Link } from "react-router-dom";
import "../Layout.css";

export default function Current({ current }) {
  return (
    <div className="courses">
      <h2 className="courses-title">Current</h2>

      {current.map((item, index) => (
        <Link
          to={`/current/${index}`}
          key={index}
          className="course-item"
        >
          <span className="course-code">{item.role}</span>
          <span className="course-name">{item.organization}</span>
        </Link>
      ))}
    </div>
  );
}
