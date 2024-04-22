import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center my-32">
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoutes;
