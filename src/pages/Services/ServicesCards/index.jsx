import React from "react";
import "./style.scss";

const ServicesCards = (props) => {
  const serviceCards = [
    "Legal services",
    "ADVERTISING IMPLEMENTATION",
    "Project management",
    "fINANCIAL MANAGEMENT",
    "organization and implementation of sales",
    "organiziNG and RELYING of DOCUMENTATION",
    "Market research and analysis",
    "cREATION, ANALYSIS AND IMPLEMENTATION OF INVESTMENT PLANS",
  ];
  return (
    <div className="service-cards">
      <div className="page-container">
        <ul className="service-cards__list">
          {serviceCards.map((el, i) => {
            return (
              <li key={i} className="service-cards__item">
                <span>{el}</span>
                <div />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCards;
