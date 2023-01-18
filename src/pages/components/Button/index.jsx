import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ text, click, link }) => {
  return (
    <>
      {link ? (
        <Link className="btn" to={link} onClick={click}>
          <span className="btn__text">
            <span>{text}</span>
          </span>
        </Link>
      ) : (
        <span className="btn" onClick={click}>
          <span className="btn__text">
            <span>{text}</span>
          </span>
        </span>
      )}
    </>
  );
};

export default Button;
