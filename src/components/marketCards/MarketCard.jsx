import React from 'react';
import Green from '../../img/greenup.svg';

const MarketCard = () => {
    return (
        <article className="market__card">
            <div className="market__card-name">Etherium</div>
            <div className="market__card-price">$122,000</div>
            <div className="market__card-percents">+1.74%</div>
            <img className="market__card-img" src={Green} alt="Graphics"/>
            <button className="market__card-btn button">Trade Now</button>
        </article>
    )
};

export default MarketCard;