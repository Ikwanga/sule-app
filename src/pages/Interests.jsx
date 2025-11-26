import { Link } from "react-router-dom";
import "../Layout.css";

export default function Interests({ interests }) {
  return (
    <div className="courses">
      <h2 className="courses-title">Interests</h2>

      {interests.map((item, index) => (
        <Link
          to={`/interests/${index}`}
          key={index}
          className="course-item"
        >
          <span className="course-name">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
