import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import TestPrivate from "../pages/TestPrivate/TestPrivate";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dasboard/Cart/Cart";
import AllUsers from "../pages/Dasboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <TestPrivate></TestPrivate>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      // Admin routes
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
