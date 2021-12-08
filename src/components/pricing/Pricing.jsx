import React from 'react';
import './pricing.scss';
import Membership from '../pricingCards/PricingCard';

const Pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <div className="pricing__container">
                <h2 className="pricing__title">Pricing</h2>
                <span className="pricing__subtitle">
                    We offer the best deals for our membership
                </span>

                <div className="pricing__cards">
                    <Membership/>
                    <Membership/>
                    <Membership/>
                </div>
            </div>
        </section>
    )
};

export default Pricing;