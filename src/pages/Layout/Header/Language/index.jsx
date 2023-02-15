import React from "react";
import {useState} from "react";
import i18n from "../../../../i18n";
import "./style.scss";

const Language = ({direction}) => {
    const [languageOpen, setLanguageOpen] = useState(false);

    const languageMenuHandler = () => {
        setLanguageOpen(!languageOpen)
    }
    const fixLanguage = (language) => {
        if (language === 'en-US') {
            return 'en'
        } else {
            return language
        }
    }
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div
            className={`language${
                direction === "down" ? " down" : direction === "up" ? " up" : ""
            }${direction === "top" ? " top" : ""}`}
        >
            <button className="language__container" onClick={languageMenuHandler}>
                <div className="language__icon-container">
                    <div className="img-container">
                        <svg className="icon">
                            <use xlinkHref="#language"/>
                        </svg>
                    </div>
                </div>
                <span className="language__text">{fixLanguage(localStorage.getItem('i18nextLng'))}</span>
            </button>
            {languageOpen && (
                <div className="language__dropdown" onClick={languageMenuHandler}>
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
            )}
        </div>
    );
};

export default Language;
