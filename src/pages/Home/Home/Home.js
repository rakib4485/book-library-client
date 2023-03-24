import React from 'react';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;