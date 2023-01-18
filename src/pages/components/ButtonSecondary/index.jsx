import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const ButtonSecondary = ({ link, text }) => {
  return (
    <Link className="button-secondary" to={link}>
      <span className="button-secondary__text">
        <span>{text}</span>
      </span>
    </Link>
  );
};

export default ButtonSecondary;
