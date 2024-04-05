import {
    createBrowserRouter
  } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
      ]
    },
  ]);


export default router