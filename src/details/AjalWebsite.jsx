import ascImage from "../components/images/asc.png";
import "../Layout.css";

export default function AjalWebsite() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <p>
          Designed and supervised the <a href="https://ajalscholarsconsultancy.com/" className="styled-link">Ajal Scholars Consultancy website</a>,
          ensuring clean structure, strong UX, and mobile responsiveness.
        </p>

        <ul>
          <li>Defined full site structure and content layout.</li>
          <li>Reviewed developer drafts and provided feedback.</li>
          <li>Improved usability, navigation, and responsiveness.</li>
        </ul>
      </div>

      <figure className="project-detail-figure">
        <img
          src={ascImage}
          alt="Ajal Scholars Consultancy Website"
          className="project-detail-image"
        />
        <figcaption className="project-detail-caption">
          <i>A preview of the Ajal Scholars Consultancy website.</i>
        </figcaption>
      </figure>
    </div>
  );
}
