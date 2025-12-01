import { Link } from "react-router-dom";
import MenuButton from "./MenuButton.jsx";
import logo from "../components/images/logo2.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/main-home" className="logo-link">
          <img src={logo} alt="Logo" className="header-logo" />
        </Link>
        <h1 className="header-title">Portfolio Dashboard</h1>
      </div>
      <nav className="header-nav">
        <Link to="/aboutme">About Me</Link>
        <Link to="/courses">Relevant Courses</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </nav>
      <MenuButton />
    </header>
  );
}
