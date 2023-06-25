import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Call } from "@material-ui/icons";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a target="_blank" href="https://www.linkedin.com/in/zaidloni/">
          <LinkedInIcon />
        </a>
        <a target="_blank" href="tel:+91 8898922168">
          <Call />
        </a>
        <a
          target="_blank"
          onClick={() => (window.location.href = "mailto:zaidloni20@gmail.com")}
        >
          <EmailIcon />
        </a>
        <a target="_blank" href="https://github.com/zaidloni">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2023 Zaid Loni</p>
    </div>
  );
}

export default Footer;
