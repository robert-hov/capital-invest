import React from "react";
import "./style.scss";
import tsaghkadzor from "../../../assets/img/porjects/tsaghkadzor.png";
import dilijan from "../../../assets/img/porjects/dilijan.png"
import ProjectsItem from "./ProjectsItem";
import ButtonSecondary from "../../components/ButtonSecondary";

const Projects = (props) => {
  return (
    <div className="projects">
      <div className="projects__content">
        <ProjectsItem link="/" title="tsaghkadzor hills" img={tsaghkadzor} />
        <ProjectsItem link="/" title="Dilijan hills" img={dilijan} />
      </div>
      <ButtonSecondary link="/" text="see more" />
    </div>
  );
};

export default Projects;
