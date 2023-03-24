import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from '../../../components/SingleBook/SingleBook';
import CategoryModal from '../../Chategories/CattegoryModal/CategoryModal';

const HomeCategory = ({category}) => {

    const {category_id, name} = category;
    const [bookName, setBookName] = useState(null);
    const [products, setProducts] = useState([]);

    useState(()=> {
        fetch(`http://localhost:5000/books/${category_id}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // console.log(products)

    return (
        <div className='my-14'>
            <h1 className="text-center text-2xl font-semibold mt-14">{name}</h1>
            <div className="divider w-96 mx-auto mb-12 rounded-md h-1 bg-orange-400"></div> 
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.slice(0,3).map( (product, idx) => <SingleBook
                        key={idx}
                        product = {product}
                        setBookName={setBookName}
                    ></SingleBook>)

                }
            </div>
            <div className="text-center my-8">
            <Link to={`/categories/${category_id}`}>
            <button className="btn btn-wide btn-outline">View All</button>
            </Link>
            </div>
            {
        bookName && 
        <CategoryModal
            bookName= {bookName}
            setBookName={setBookName}
        ></CategoryModal>
      }
        </div>
    );
};

export default HomeCategory;