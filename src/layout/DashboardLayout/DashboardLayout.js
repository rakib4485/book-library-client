import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import Navbar from '../../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to='/dashboard'>My Ordered</Link>
            </li>
            {
              isAdmin && <>
              <li>
              <Link to='/dashboard/allUsers'>All Users</Link>
              <Link to='/dashboard/addBooks'>Add A Book</Link>
              <Link to='/dashboard/allOrders'>All Orders</Link>
            </li>
              </>
            }
            
          </ul>
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;