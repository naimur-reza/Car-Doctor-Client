import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location.pathname }} to={"/login"} replace />;
};

export default PrivateRoute;
