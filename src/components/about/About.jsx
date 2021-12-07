import React from 'react';
import './about.scss';
import Statistics from '../../img/statistics.png';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__container">
                <div className="about__content">
                    <h1 className="about__title">
                        The World's <br/> Fastest Growing <br/> Crypto App
                    </h1>

                    <ul className="about__list">
                        <li className="about__list-item">
                            <i class='bx bxs-check-circle about__list-icon'></i>
                            Join 10m+ users buying and selling 100+ cryptocurrencies
                        </li>

                        <li className="about__list-item">
                            <i class='bx bxs-check-circle about__list-icon'></i>
                            Spend with Visa Card and get up to 10% back
                        </li>

                        <li className="about__list-item">
                            <i class='bx bxs-check-circle about__list-icon'></i>
                            Grow your portfolio by receiving rewards up to 14.5%
                        </li>
                    </ul>

                    <button className="about__btn button">
                        Learn More
                    </button>
                </div>

                <img src={Statistics} alt="About Us" className="about__img"/>
            </div>
        </section>
    )
};

export default About;