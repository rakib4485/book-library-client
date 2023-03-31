import React from 'react';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';
import HomeOffer from '../HomeOffer/HomeOffer';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <Testimonials></Testimonials>
            <HomeOffer />
        </div>
    );
};

export default Home;