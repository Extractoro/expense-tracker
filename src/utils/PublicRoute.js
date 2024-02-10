import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";

export default function PublicRoute({ restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/home" replace={true} /> : <Outlet />;
}
