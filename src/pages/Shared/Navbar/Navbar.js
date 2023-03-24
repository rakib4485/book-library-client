import React, { useContext } from "react";
import { Link } from "react-router-dom";
import icon from "../../../assets/icons/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () =>{
    logOut()
    .then( ()=>{

    })
    .then(()=>{})
  }
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link>
          Categories
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="px-10 py-2 bg-gray-100 rounded-md z-50">
          <li><Link to='/categories/01'>Arts & Photography</Link></li>
          <li><Link to='/categories/02'>Children's Books</Link></li>
          <li><Link to='/categories/03'>Biographies Books</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        {
          user?.uid? 
          <>
          <p>{user?.displayName}</p>
          <button onClick={handleLogout} className="btn btn-active btn-ghost rounded-md">Log Out</button>
          </>:
          <Link to="/login">Login</Link>
        }
      </li>
    </React.Fragment>
  );

  return (
    <div className="md:scroll-px-10">
      <div className="navbar bg-base-100 flex justify-between md:w-5/6 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            <img src={icon} alt="" className="md:w-11/12" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
