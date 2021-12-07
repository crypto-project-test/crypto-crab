import React from 'react';
import './market.scss';
import MarketCard from '../marketCards/MarketCard';

const Market = () => {
    return (
        <section className="market" id="market">
            <div className="market__container">
                <h2 className="market__title">Market</h2>
                <span className="market__subtitle">
                    BUY, SELL AND TRACK 150+ cryptocurrencies with 20+ flat currencies
                </span>

                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
            </div>
        </section>
    )
};

export default Market;