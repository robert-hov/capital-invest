import React from "react";
import "./style.scss";
import tsaghkadzor from "../../../assets/img/porjects/tsaghkadzor.png";
import dilijan from "../../../assets/img/porjects/dilijan.png"
import ProjectsItem from "./ProjectsItem";
import ButtonSecondary from "../../components/ButtonSecondary";
import {withI18n} from "react-i18next";

const Projects = ({t}) => {
  return (
    <div className="projects">
      <div className="projects__content">
        <ProjectsItem link="/projects/1" title="tsaghkadzor hills" img={tsaghkadzor} />
        <ProjectsItem link="/projects/2" title="Dilijan hills" img={dilijan} />
      </div>
      <ButtonSecondary link="/projects" text={t('buttons.secondary')} />
    </div>
  );
};

export default withI18n()(Projects);
