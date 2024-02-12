import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";

const PublicRoute = ({ restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/home" replace={true} /> : <Outlet />;
};

export default PublicRoute;
