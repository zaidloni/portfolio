import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { OpenInNew } from "@material-ui/icons";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  console.log(project);
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a target="_blank" href={project.live}>
        <img src={project.image} />
      </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div>
        <a target="_blank" href={project.github}>
          <GitHubIcon />
        </a>
        <a target="_blank" style={{ marginLeft: "15px" }} href={project.live}>
          <OpenInNew />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
