import React from "react";
import Button from "../../components/Button";
import {withI18n} from 'react-i18next'
import "./style.scss";

const Hero = ({
                  bgImg,
                  other = false,
                  inner = false,
                  withButton = false,
                  text,
                  btnText,
                  logo = false,
                  t
              }) => {
    const title = t(text).split("");
    return (
        <>
            <div
                className={`hero${other ? " hero--other" : ""}${
                    inner ? " hero--inner" : ""
                }`}
            >
                <div className="hero__img">
                    {/*<Parallax strength={300}*/}
                    {/*          renderLayer={x => (*/}
                    {/*              <div*/}
                    {/*                  style={{*/}
                    {/*                      width: 'auto',*/}
                    {/*                      height: '100%',*/}
                    {/*                  }}*/}
                    {/*              />*/}
                    {/*          )}*/}
                    {/*          bgImageStyle={{minHeight: '100%', width: 'auto'}}*/}
                    {/*          bgImage={bgImg}>*/}

                         <img src={bgImg} alt="capital invest" />
                    {/*</Parallax>*/}
                </div>
                <div className="hero__content">
                    {logo ? (
                        <div className="hero__logo">
                            <div className="img-container">
                                <img src={logo} alt="logo"/>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className="hero__title">
                                {title.map((el, i) => {
                                    return <span key={i}>{el}</span>;
                                })}
                            </h1>
                            {withButton ? <Button text={btnText} link="/"/> : null}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default withI18n()(Hero);
