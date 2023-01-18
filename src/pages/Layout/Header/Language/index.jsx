import React from "react";
import "./style.scss";

const Language = ({ down }) => {
  return (
    <div
      className={`language ${down === "down" ? "down" : "up"} ${
        down === "top" ? "top" : null
      }`}
    >
      <div className="language__icon-container">
        <div className="img-container">
          <svg className="icon">
            <use xlinkHref="#language" />
          </svg>
        </div>
      </div>
      <div className="language__text">En</div>
    </div>
  );
};

export default Language;
