import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  const menuItems = [
    { label: "Home", path: "/main-home" },
    { label: "AboutMe", path: "/aboutme"},
    { label: "Relevant Courses", path: "/courses" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" }
  ];

  return (
    <div className="menu-container">
      <button className="menu-icon" onClick={() => setOpen(!open)}>
        <div className={open ? "bar bar1 active" : "bar bar1"}></div>
        <div className={open ? "bar bar2 active" : "bar bar2"}></div>
        <div className={open ? "bar bar3 active" : "bar bar3"}></div>
      </button>
      {open && (
        <div className="menu-dropdown">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="menu-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
