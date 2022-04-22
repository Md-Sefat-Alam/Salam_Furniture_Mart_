import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, user, isLoadingTemp }) => {
  const location = useLocation();
  if (!isLoadingTemp && !user?.email) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
