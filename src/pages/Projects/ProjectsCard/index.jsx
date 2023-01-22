import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import './style.scss';

const ProjecstCard = ({ content }) => {
  const titleArr = content && content.title.split("");
  return (
    <div className="project-card">
      <h3 className="project-card__title">
        <span>{content.title}</span>
        <div />
      </h3> 
      <Link to={`${content.id}`} className="project-card__link">
        <div
          className="project-card__img"
          style={{ backgroundImage: `url(${content.img})` }}
        />
        <div className="project-card__content">
          <h4 className="project-card__content-title">
            {titleArr.map((el, i) => {
              return <span key={i}>{el}</span>;
            })}
          </h4>
          <Button text="view" />
        </div>
      </Link>
    </div>
  );
};

export default ProjecstCard;
