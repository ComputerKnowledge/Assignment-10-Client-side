import { useContext } from "react";
import { Auth } from "../authprovider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Auth);
  if (user) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
};

export default PrivateRoute;
