import React from 'react';
import './nav.scss';
import Logo from '../../img/logo.png';

const Nav = () => {
    return (
        <header className="header" id="header">
            <nav className="nav" id="nav">
                <div className="nav__container">
                    <a rel="noreferrer" href="https://www.yandex.ru" target="_blank" className="nav__logo">
                        <img className="nav__img" src={Logo} alt="Our Logo"/>
                    </a>

                    <ul className="nav__list">
                        <a className="nav__link" rel="noreferrer" href="#about">
                            <li className="nav__list-item">
                                About
                            </li>
                        </a>

                        <a className="nav__link" rel="noreferrer" href="#market">
                            <li className="nav__list-item">
                                Market
                            </li>
                        </a>

                        <a className="nav__link" rel="noreferrer" href="#info">
                            <li className="nav__list-item">
                                Information
                            </li>
                        </a>

                        <a className="nav__link" rel="noreferrer" href="#pricing">
                            <li className="nav__list-item">
                                Pricing
                            </li>
                        </a>

                        <a className="nav__link" rel="noreferrer" href="#faq">
                            <li className="nav__list-item">
                                FAQ
                            </li>
                        </a>
                    </ul>

                    <button className="nav__btn button">
                        Register
                    </button>
                </div>
            </nav>
        </header>
    )
};

export default Nav;