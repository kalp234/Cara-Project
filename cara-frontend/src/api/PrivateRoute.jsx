import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10">Checking authentication...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location, showLoginToast: true }} replace />;
  }
  

  return children;
};

export default PrivateRoute;
