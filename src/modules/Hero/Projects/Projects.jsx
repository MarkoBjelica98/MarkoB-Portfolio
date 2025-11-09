import React from "react";
import styles from "./Projects.Styles.module.css";
import IoT from "../../../assets/IoT.png";
import Compass from "../../../assets/Compass.png";
import ProjectCard from "../../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={IoT}
          link="https://github.com/MarkoBjelica98/IoT-Web-Projekat.git"
          h3="IoT"
          p="Charting Data"
        />
        <ProjectCard
          src={Compass}
          link="https://github.com/MarkoBjelica98/DigitalniKompas.git"
          h3="Digitalni Kompass"
          p="EasyPIC PRO v7 + Compass 2"
        />
      </div>
    </section>
  );
}

export default Projects;
