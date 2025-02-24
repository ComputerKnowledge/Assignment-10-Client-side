import { useContext } from "react";
import { Auth } from "../authprovider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Auth);
  if (user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
