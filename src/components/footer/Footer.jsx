import React from 'react';
import './footer.scss';
import Logo from '../../img/logo.png';
import AppStore from '../../img/appstore.jpg';
import GooglePlay from '../../img/googleplay.jpg';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <a rel="noreferrer" href="https://www.yandex.ru" target="_blank" className="footer__logo">
                        <img className="footer__img" src={Logo} alt="Our Logo"/>
                    </a>

                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                Download Now
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                License
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                About
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                Features
                            </a>
                        </li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                Pricing
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                Careers
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                Help
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a rel="noreferrer" href="##" className="footer__link">
                                Privacy & Policy
                            </a>
                        </li>
                    </ul>

                    <span className="footer__copy">
                        &#169; {new Date().getFullYear()} Evgeniy Vasiliev & Timofey Torshin. All rights reserved.
                    </span>
                </div>

                <div className="footer__apps">
                    <h3 className="footer__apps-title">Get The App</h3>

                    <a rel="noreferrer" href="##">
                        <img src={AppStore} className="footer__apps-img" alt="App in AppStore"/>
                    </a>

                    <a rel="noreferrer" href="##">
                        <img src={GooglePlay} className="footer__apps-img" alt="App in AppStore"/>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;