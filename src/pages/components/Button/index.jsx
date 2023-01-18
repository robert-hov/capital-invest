import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ color, text, click, link }) => {
  return (
    <>
      {link ? (
        <Link className={`btn${color ? ' btn--' + color : ''}`} to={link} onClick={click}>
          <span className="btn__text">
            <span>{text}</span>
          </span>
        </Link>
      ) : (
        <button className={`btn${color ? ' btn--' + color : ''}`} onClick={click}>
          <span className="btn__text">
            <span>{text}</span>
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
