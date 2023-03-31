import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import homeOffer from '../../../assets/images/books/offer/homeOffer.jpg'
import TimeCounter from './TimeCounter';
import SingleBook from '../../../components/SingleBook/SingleBook';
import CategoryModal from '../../Chategories/CattegoryModal/CategoryModal';

const HomeOffer = () => {

    const [offerProduct, setOfferProduct] = useState([]);
    const [bookName, setBookName] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/books/01')
            .then(res => res.json())
            .then(data => setOfferProduct(data));
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-100 mb-20'>
            <div className='text-white h-full' style={{ background: `url(${homeOffer})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className='w-[70%] mx-auto text-center my-24 md:mt-44'>
                    <div>
                        <h2 className="text-3xl font-semibold">Start A new series - up to 50% off</h2>
                        <p className='my-4'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                        <TimeCounter offerEndTime="2024-04-04T00:00:00" />
                    </div>
                </div>
            </div>
            <div className='lg:w-[80%] my-5 mx-auto w-[90%]'>
                <Swiper className="mySwiper">
                    {
                        offerProduct.map(offer => <SwiperSlide key={offer._id}>
                            <SingleBook product={offer} 
                        setBookName={setBookName}></SingleBook>
                        </SwiperSlide>)
                    }
                </Swiper>
                {
        bookName && 
        <CategoryModal
            bookName= {bookName}
            setBookName={setBookName}
        ></CategoryModal>
      }
            </div>
        </div>
    );
};

export default HomeOffer;