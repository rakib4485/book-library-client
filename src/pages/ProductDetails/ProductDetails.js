import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryModal from '../Chategories/CattegoryModal/CategoryModal';
import { FaArrowRight, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const ProductDetails = () => {
    const [bookName, setBookName] = useState(null);

    const product = useLoaderData();
    const { title, img, sellerName, location, orginialP, resaleP, used } = product;

    return (
        <div className='my-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
                <img src={img} alt="" className='w-[80%] mx-auto'/>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-xl mt-3"><strong>Price:</strong>  {resaleP}</p>
                <p className="text-xl mt-3"><strong>Original Price:</strong>  {orginialP}</p>
                <p className="text-xl mt-3"><strong>Used:</strong> {used}month</p>
                <p className="text-xl mt-3 flex items-center gap-2"><FaUser></FaUser><strong>Name:</strong> {sellerName}</p>
                <p className="text-xl mt-3 flex items-center gap-2"><FaMapMarkerAlt></FaMapMarkerAlt><strong>Location:</strong> {location}</p>
                <div className='my-10'>
                    <label
                        htmlFor="buyNow-modal"
                        className="btn btn-secondary btn-outline"
                        onClick={() => setBookName(product)}
                    >
                        Buy Now <FaArrowRight className="ml-2"></FaArrowRight>
                    </label>
                </div>


            </div>
            </div>

            {
                bookName && (
                    <CategoryModal
                        bookName={bookName}
                        setBookName={setBookName}
                    ></CategoryModal>
                )
            }
        </div >
    );
};

export default ProductDetails;