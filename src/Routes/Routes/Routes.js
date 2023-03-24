import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import AuthLayout from "../../layout/Main/AuthLayout";
import Main from "../../layout/Main/Main";
import AddBooks from "../../pages/AddBooks/AddBooks";
import SingleCategory from "../../pages/Chategories/SingleCategory/SingleCategory";
import AllOrders from "../../pages/Dashboard/AllOrders/AllOrders";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/books/${params.id}`)
                }
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/bookDetails/${params.id}`)
            }
            
            
        ]
    },
    {
        path: '/login',
        element:<AuthLayout></AuthLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/signup',
        element:<AuthLayout></AuthLayout>,
        children: [
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/allUsers',
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/addBooks',
                element: <AdminRoutes><AddBooks></AddBooks></AdminRoutes>
            },
            {
                path: '/dashboard/allOrders',
                element: <AdminRoutes><AllOrders></AllOrders></AdminRoutes>
            }
        ]
    }
]);

export default router;