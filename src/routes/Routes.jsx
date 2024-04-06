import {
    createBrowserRouter
  } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
           
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/news/:id',
            element:
            <PrivateRoute>
                  <NewsDetails></NewsDetails>
            </PrivateRoute>
         
        }
      ]
    },
  ]);


export default router