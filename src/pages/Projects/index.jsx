import React from 'react';
import Hero from '../Home/Hero';
import bgImg from '../../assets/hero/hero.png'
import ProjecstCard from './ProjectsCard';
import './style.scss'

import { projectsData } from '../../dev-data';

const ProjectsPage = props => {
  return (
    <>
      <Hero
        other={true}
        bgImg={bgImg}
        text="projects"
      />
      <div className="project">
        <div className="page-container">
          <div className="project__container">
            {projectsData.map((el,i) => {
              return (
                <ProjecstCard key={i} content={el} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;