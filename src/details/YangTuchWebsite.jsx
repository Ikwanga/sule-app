import yangtuchImage from "../components/images/yangtuch.png";
import "../Layout.css";

export default function YangTuchWebsite() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <p>
          Designed the content strategy and overall structure of the <a href="https://yangtuch.com/" className="styled-link">YangTuch recruitment
          platform </a> and worked closely with a web developer to translate the vision into a
          functional, intuitive, and easy-to-use website connecting Kenyan workers to global
          employers.
        </p>

        <ul>
          <li>
            Carefully organized website information and defined a clear user flow to improve
            accessibility, ease of navigation, and clarity of services offered.
          </li>
          <li>
            Developed the page hierarchy, menu structure, and navigation logic with attention
            to how different user groups would interact with the platform.
          </li>
          <li>
            Collaborated with the developer throughout implementation, reviewing drafts,
            refining layouts, and ensuring that the final website aligned with the intended
            user experience.
          </li>
        </ul>
      </div>

      <figure className="project-detail-figure">
        <img
          src={yangtuchImage}
          alt="YangTuch Recruitment Platform Preview"
          className="project-detail-image"
        />
        <figcaption className="project-detail-caption">
          <i>A preview of the YangTuch recruitment platform.</i>
        </figcaption>
      </figure>
    </div>
  );
}
