import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1TdLa3SdFIUKejcbLdV7X7d1Bb8MnFlbv/view?usp=drive_link"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
