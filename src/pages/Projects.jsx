import { Link } from "react-router-dom";
import "../Layout.css";

export default function Projects({ projects }) {
  return (
    <div className="projects">
      <h2 className="courses-title">Projects</h2>

      {projects.map((item, index) => (
        <Link
          to={`/projects/${index}`}
          key={index}
          className="course-item"
        >
          <span className="course-code">{item.title}</span>
          <span className="course-name">{item.description}</span>
        </Link>
      ))}
    </div>
  );
}
