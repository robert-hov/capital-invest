import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../dev-data";
import Button from "../components/Button";
import Hero from "../Home/Hero";
import "./style.scss";

const ProjectInner = () => {
  const params = useParams();
  const { title, content } = projectsData[params.id - 1];
  console.log(params);
  return (
    <>
      <Hero inner={true} logo={content.logo} bgImg={content.cover} text={title} />
      <section className="project-inner">
        <div className="page-container">
          <div className="project-inner__container">
            <h2 className="project-inner__title">
              <span>{title}</span>
              <div />
            </h2>
            <p className="project-inner__text projects-inner__desc">
              {content.description}
            </p>
            <div className="project-inner__gallery">
              {content.imagesTop.map((el, i) => {
                return (
                  <div key={i} className="project-inner__gallery-img">
                    <div className="img-container">
                      <img src={el} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="project-inner__about">
              <p className="project-inner__text project-inner__about-text">{content.about}</p>
              <div className="project-inner__about-img">
                <div className="img-container">
                  <img src={content.cover} alt="" />
                </div>
              </div>
            </div>
            <div className="project-inner__gallery">
              {content.imagesBottom.map((el, i) => {
                return (
                  <div key={i} className="project-inner__gallery-img">
                    <div className="img-container">
                      <img src={el} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="project-inner__text project-inner__address">{content.address}</p>
            <Button text="more about project" color="black"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInner;
