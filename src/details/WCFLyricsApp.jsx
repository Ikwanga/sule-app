import wcfImage from "../components/images/wcf.png";
import "../Layout.css";

export default function WCFLyricsApp() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <p>
          Co-designed a worship lyrics web app for the Williams Christian Fellowship
          Wednesday Night Worship group.
        </p>
        <ul>
          <li>Built all frontend components using React.</li>
          <li>Collaboratively defined user flows and requirements.</li>
          <li>Implemented all styling with custom CSS.</li>
        </ul>
      </div>

      <figure className="project-detail-figure">
        <img
          src={wcfImage}
          alt="WCF Lyrics Web App Preview"
          className="project-detail-image"
        />
        <figcaption className="project-detail-caption">
          A preview of the WCF Lyrics Web App.
        </figcaption>
      </figure>
    </div>
  );
}
