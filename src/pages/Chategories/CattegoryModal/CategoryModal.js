import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const CategoryModal = ({ bookName, setBookName }) => {
  const { _id, title, resaleP, sellerName } = bookName;

  const { user, loading } = useContext(AuthContext)
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  }

  if(loading){
    return <Loading></Loading>
  }

  const handlebuying = (event) => {
    event.preventDefault();

    if (!user) {
      navigate('/login');
    }
    else {
      const form = event.target;
      const phone = form.phone.value;
      const location = form.location.value;
      const quantities = quantity;
      const name = user.displayName;
      const email = user.email;
      const price = resaleP;
      const bookId = _id;

      const booking = {
        bookId, name, title, email, phone, price, location, quantities, sellerName
      }
      fetch(`http://localhost:5000/bookings/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            setBookName(null);
            toast.success("Booking Confirm Successfully Done")
          }
          else {
            alert(data.message);
          }
        })
    }




  };
  return (
    <>
      <input type="checkbox" id="buyNow-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="buyNow-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form onSubmit={handlebuying} className="grid gap-5 mt-12">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="price"
              defaultValue={resaleP}
              disabled
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered w-full"
            />
            <div className="flex items-center">
              <p className="text-md">Quantity:</p>
              <div className="flex w-[200px] h-[50px] border my-2 ml-4">
                <div className='text-center w-[80px] border-r flex justify-center items-center cursor-pointer' onClick={handleDecrease}>
                  <AiFillCaretLeft />
                </div>
                <div className='text-center w-[140px] flex justify-center items-center'>
                  <p>{quantity}</p>
                </div>
                <div className='text-center w-[80px] border-l flex justify-center items-center cursor-pointer' onClick={handleIncrease}>
                  <AiFillCaretRight />
                </div>
              </div>
            </div>
            <input
              className="btn btn-secondary btn-outline w-full"
              type="submit"
              value="Buy Now"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
