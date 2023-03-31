import React from "react";
import { FaArrowRight, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBook = ({ product, setBookName }) => {
  const { _id,img, title, sellerName, location, resaleP, orginialP, used, posted } = product;

  return (
    <div className="card shadow-xl bg-white">
      <figure className="h-[400px]">
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="grid  grid-cols-2">
          <div className="flex items-center">
            <FaUser></FaUser>
            <p className="ml-1">{sellerName}</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            <p className="ml-1">{location}</p>
          </div>
          <p>
            <span className="font-semibold">Resale Price</span> : {resaleP}
          </p>
          <p>
            <span className="font-semibold">Orginal Price</span> : {orginialP}
          </p>
          <p>
            <span className="font-semibold">Using Time</span>:{used}
          </p>
          <p>
            <span className="font-semibold">Posted</span> : {posted}
          </p>
        </div>
        <div className="flex justify-between">
        <div className="card-actions mt-2">
          <Link to={`/productDetails/${_id}`}>
          <label 
          className="btn btn-primary btn-outline"
          >
            Details <FaArrowRight className="ml-2"></FaArrowRight>
          </label>
          </Link>
        </div>
        <div className="card-actions mt-2">
          <label 
          htmlFor="buyNow-modal" 
          className="btn btn-secondary btn-outline"
          onClick={()=> setBookName(product)}
          >
            Buy Now <FaArrowRight className="ml-2"></FaArrowRight>
          </label>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
