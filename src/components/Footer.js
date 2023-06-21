import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/zaidloni/">
          <LinkedInIcon />
        </a>
        <a
          onClick={() => (window.location.href = "mailto:zaidloni20@gmail.com")}
        >
          <EmailIcon />
        </a>
        <a href="https://github.com/zaidloni">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2023 Zaid Loni</p>
    </div>
  );
}

export default Footer;
