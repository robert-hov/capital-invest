import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./style.scss";

const ProjectsItem = ({ title, img, link }) => {
  const titleArr = title.split("");
  console.log(titleArr);
  return (
    <Link to={link} className="projects__item">
      <div
        className="projects__item-img"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="projects__item-content">
        <h3 className="porjects__item-title">
          {titleArr.map((el, i) => {
            return <span key={i}>{el}</span>;
          })}
        </h3>
        <Button text="view" />
      </div>
    </Link>
  );
};

export default ProjectsItem;
