import React from "react";
import Button from "../../components/Button";
import './style.scss';

const Mail = ({bgColor = 'var(--primary)'}) => {
  return (
    <div className="mail" style={{'backgroundColor': bgColor}}>
      <div className="page-container">
        <h2 className="mail__title">get in touch</h2>

        <form className="mail__form">
          <div className="mail__form-inputs">
            <div className="mail__form-inputs-top">
              <input type="text" placeholder="Name*" className="mail__form-input" />
              <input type="text" placeholder="Contact Number*" className="mail__form-input" />
            </div>
            <input type="mail" placeholder="Email*" className="mail__form-input" />
          </div>
          <Button color='black' text="send" />
        </form>
      </div>
    </div>
  );
};

export default Mail;
