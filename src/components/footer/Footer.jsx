import React from 'react';
import './footer.scss';
import AppStore from '../../img/appstore.png';
import GooglePlay from '../../img/googleplay.png';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                <ul className="footer__list footer__list-one">
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

                <ul className="footer__list footer__list-two">
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

                <div className="footer__apps">
                    <h3 className="footer__apps-title">Get The App</h3>

                    <a rel="noreferrer" className="footer__apps-img" href="##">
                        <img src={AppStore} alt="App in AppStore"/>
                    </a>

                    <a rel="noreferrer" className="footer__apps-img" href="##">
                        <img src={GooglePlay} alt="App in AppStore"/>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;