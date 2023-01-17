import React from "react";
import { LanguageSvg } from "../../../components/Svg";
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
          <svg class="icon">
            <use xlinkHref="#language" />
          </svg>
          <LanguageSvg className="language__icon" color="var(--primary)" />
        </div>
      </div>
      <div className="language__text">En</div>
    </div>
  );
};

export default Language;
