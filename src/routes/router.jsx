import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import BookingServices from "../pages/BookingServices";
import Bookings from "../pages/Bookings";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/loading",
        element: <Loader />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookingServices/:id",
        element: (
          <PrivateRoute>
            <BookingServices />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;
