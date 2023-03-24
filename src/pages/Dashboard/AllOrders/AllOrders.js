import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AllOrders = () => {
    const url = `http://localhost:5000/bookings/`;

    const { data: bookings = [], isLoading } = useQuery({
      queryKey: ["bookings"],
      queryFn: async () => {
        const res = await fetch(url, {
          headers: {
            // authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      },
    });
  
    if (isLoading) {
      return <Loading></Loading>;
    }
    return (
        <div>
      <h3 className="text-3xl mb-5">All Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Meeting Location</th>
              <th>Customer Name</th>
              <th>Seller Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr className="hover" key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.title}</td>
                <td>{booking.price}</td>
                <td>{booking.location}</td>
                <td>{booking.name}</td>
                <td>{booking?.sellerName}</td>
                <td>{booking?.quantities}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <span className='text-primary font-semibold'>Unpaid</span>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-primary">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllOrders;