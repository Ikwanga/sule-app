import { Link } from "react-router-dom";
import "../Layout.css";

export default function Courses({ courses }) {
  return (
    <div className="courses">
      <h2 className="courses-title">Courses</h2>

      {courses.map((item, index) => (
        <Link
          to={`/courses/${index}`}
          key={index}
          className="course-item"
        >
          <span className="course-code">{item.code}</span>
          <span className="course-name">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
