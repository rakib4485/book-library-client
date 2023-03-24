import React from 'react';
import author1 from '../../../assets/images/testimonial/client-3.webp'
import author2 from '../../../assets/images/testimonial/client-4.webp'
import author3 from '../../../assets/images/testimonial/client-5.webp'
import banner from '../../../assets/images/banner/5_1.jpg'
import SingleTestimonial from './SingleTestimonial';
import { Link } from 'react-router-dom';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Alan Martinexx",
            img: author1,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit cupiditate, delectus quis enim iusto repellat libero porro perspiciatis consequuntur similique provident quo fugiat quidem. Blanditiis dignissimos ducimus alias nam commodi placeat delectus praesentium ipsum!'
        },
        {
            id: 2,
            name: "Rebecka Filson",
            img: author2,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit cupiditate, delectus quis enim iusto repellat libero porro perspiciatis consequuntur similique provident quo fugiat quidem. Blanditiis dignissimos ducimus alias nam commodi placeat delectus praesentium ipsum!'
        },
        {
            id: 3,
            name: "Rebecka Filson",
            img: author3,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit cupiditate, delectus quis enim iusto repellat libero porro perspiciatis consequuntur similique provident quo fugiat quidem. Blanditiis dignissimos ducimus alias nam commodi placeat delectus praesentium ipsum!'
        },
    ]

    return (
        <div className='my-20'>
            <h1 className="text-center text-2xl font-semibold mt-14">CLIENT TESTIMONIALS</h1>
            <div className="divider w-96 mx-auto mb-12 rounded-md h-1 bg-green-400"></div> 
        <div className='grid gap-10 grid-cols-1 md:grid-cols-3 w-[90%] mx-auto'>
            {
                testimonials.map( testimonial => <SingleTestimonial
                    key={testimonial.id}
                    testimonial = {testimonial}
                ></SingleTestimonial>)
            }
        </div>
        <div className="my-20 hover:scale-110 ease-in-out duration-500">
            <Link><img src={banner} alt="" /></Link>
        </div>
        </div>
    );
};

export default Testimonials;