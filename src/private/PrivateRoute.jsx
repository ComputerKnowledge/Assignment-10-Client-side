import { useContext } from "react";
import { Auth } from "../authprovider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

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

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
