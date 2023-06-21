import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Zaid Loni</h2>
        <div className="prompt">
          <p>A FrontEnd Engineer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/zaidloni/">
            <LinkedInIcon />
          </a>
          <a
            onClick={() =>
              (window.location.href = "mailto:zaidloni20@gmail.com")
            }
          >
            <EmailIcon />
          </a>
          <a href="https://github.com/zaidloni">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript, ReactJS, Redux-Toolkit, HTML, CSS, NPM,  BootStrap,
              MaterialUI, <br /> Yarn, TailwindCSS, RestAPI
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Python, C</span>
          </li>
          <li className="item">
            <h2>Others</h2>
            <span>
              Firebase, Figma, BitBucket, Notion, GIT, Github, Puppeteer
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
