import React from "react";
import Button from "../../components/Button";
import './style.scss';
import {withI18n} from 'react-i18next';

const Mail = ({bgColor = 'var(--primary)', t}) => {
    return (
        <div className="mail" style={{'backgroundColor': bgColor}}>
            <div className="page-container">
                <h2 className="mail__title">{t('mail.title')}</h2>

                <form className="mail__form">
                    <div className="mail__form-inputs">
                        <div className="mail__form-inputs-top">
                            <input type="text" placeholder={t('mail.placeholders.name')} className="mail__form-input"/>
                            <input type="text" placeholder={t('mail.placeholders.number')} className="mail__form-input"/>
                        </div>
                        <input type="mail" placeholder={t('mail.placeholders.email')} className="mail__form-input"/>
                    </div>
                    <Button color='black' text={t('buttons.primary')}/>
                </form>
            </div>
        </div>
    );
};

export default withI18n()(Mail);
