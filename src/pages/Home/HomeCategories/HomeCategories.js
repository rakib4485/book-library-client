import React, { useEffect, useState } from 'react';
import HomeCategory from './HomeCategory';

const HomeCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[]);
    return (
        <div className='w-[90%] mx-auto'>
            {
                categories.map(category => <HomeCategory
                    key={category._id}
                    category={category}
                ></HomeCategory>)
            }
        </div>
    );
};

export default HomeCategories;