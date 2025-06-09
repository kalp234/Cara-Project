import React, { useContext, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const hasShownToast = useRef(false); 

  if (!user) {
    if (!hasShownToast.current) {
      toast.error("Please login to access the cart");
      hasShownToast.current = true;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;