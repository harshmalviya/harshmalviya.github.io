import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ProjectItem from '../Project/ProjectItem';
import classes from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://api.npoint.io/fefe8202f7ce0922e2f0'
        );

        const projects = await response.json();

        setProjects(projects);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <Helmet>
        <title>Harsh - Portfolio | Projects</title>
      </Helmet>
      {isLoading ? (
        <div className={classes.wrapper}>
          <div className={classes.loading}></div>
        </div>
      ) : (
        <div className={classes.projects}>
          <h1 className={classes.heading}>
            Here are some of the projects that I've build so far...
          </h1>
          <div className={classes.projectholder}>
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                github={project.github}
                image={project.image}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
