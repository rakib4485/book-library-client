import React from 'react';
import offersbg from '../../../assets/images/books/offer/offer-bg.webp'
import offers from '../../../assets/images/books/offer/8.webp'

const ChategoriesOffer = () => {
    return (
        <section className='py-8 my-16' style={{
            background: `url(${offersbg})`
        }}>
            <div className="offer px-3">
                <img src={offers} alt="" className='mx-auto rounded-md'/>
            </div>
        </section>
    );
};

export default ChategoriesOffer;