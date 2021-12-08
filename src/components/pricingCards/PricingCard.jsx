import React from 'react';

const PricingCard = () => {
    return (
        <article className="pricing__card">
            <div className="pricing__card-title">Basic</div>
            
            <div className="pricing__card-subscribe">
                <div className="pricing__card-subscribe_amount">10</div>
            </div>

            <ul className="pricing__card-list">
                <li className="pricing__card-item">
                    <i className='bx bxs-check-circle pricing__card-list_icon'></i>
                    Consulting
                </li>

                <li className="pricing__card-item">
                    <i className='bx bxs-check-circle pricing__card-list_icon'></i>
                    Updated News
                </li>

                <li className="pricing__card-item">
                    <i className='bx bxs-check-circle pricing__card-list_icon'></i>
                    Up to 14% p.a. stablecoins
                </li>

                <li className="pricing__card-item">
                    <i className='bx bxs-check-circle pricing__card-list_icon'></i>
                    Pay and receive up to 10% back
                </li>
            </ul>

            <button className="pricing__card-btn button">
                Get It Now
            </button>
        </article>
    )
};

export default PricingCard;