import React from "react";
import { useState } from "react";
import i18n from "../../../../i18n";
import "./style.scss";

const Language = ({ direction }) => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };
  const [language, setLanguage] = useState("arm");

  return (
    <div
      className={`language${
        direction === "down" ? " down" : direction === "up" ? " up" : ""
      }${direction === "top" ? " top" : ""}`}
    >
      <button className="language__container">
        <div className="language__icon-container">
          <div className="img-container">
            <svg className="icon">
              <use xlinkHref="#language" />
            </svg>
          </div>
        </div>
        <span className="language__text">{language}</span>
      </button>
      <div className="language__dropdown">
        <button
          className="language__dropdown-btn"
          onClick={() => changeLanguage("arm")}
        >
          Arm
        </button>
        <button
          className="language__dropdown-btn"
          onClick={() => changeLanguage("rus")}
        >
          Rus
        </button>
        <button
          className="language__dropdown-btn"
          onClick={() => changeLanguage("en")}
        >
          En
        </button>
      </div>
    </div>
  );
};

export default Language;
