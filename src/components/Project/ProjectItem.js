import React from "react";
import classes from "./ProjectItem.module.css";

const ProjectItem = ({ name, github, image, description, demo }) => {
  return (
    <div className={classes.main}>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
      <div className={classes.actions}>
        <a href={demo} target="_blank" rel="noreferrer">
          DEMO
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GITHUB
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
