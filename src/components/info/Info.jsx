import React from 'react';
import './info.scss';
import Wallet from '../../img/wallet.png';

const Info = () => {
    return (
        <section className="info" id="info">
            <div className="info__container">
            <div className="info__content">
                    <h2 className="info__title">
                        Easy Organize
                    </h2>

                    <ul className="info__list">
                        <li className="info__list-item">
                            <i className='bx bxs-check-circle info__list-icon'></i>
                            Pay the lowest fees when you purchase with
                            a credit/debit card or bank transfer
                        </li>

                        <li className="info__list-item">
                            <i className='bx bxs-check-circle info__list-icon'></i>
                            Easy organize with other digital payments
                        </li>

                        <li className="info__list-item">
                            <i className='bx bxs-check-circle info__list-icon'></i>
                            Choose from 40+ cryptocurrencies and stablecoins
                        </li>
                    </ul>
                </div>

                <img src={Wallet} alt="Wallet Img" className="info__img"/>
            </div>
        </section>
    )
};

export default Info;