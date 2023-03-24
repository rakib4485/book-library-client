import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/Shared/Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;