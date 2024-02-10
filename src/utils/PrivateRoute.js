import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace={true} />;
}
