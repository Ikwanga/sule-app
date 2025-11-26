import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
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

      {/* Full Navigation (visible on large screens only) */}
      <nav className="header-nav">
        <Link to="/courses">Courses</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/current">Current</Link>
        <Link to="/experience">Experience</Link>
      </nav>

      {/* Hamburger Menu (visible on small screens) */}
      <MenuButton />
    </header>
  );
}
