import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Header = ({ isActive }) => {
  return (
    <>
      <header className="bg-white py-4 shadow-md">
        <Navigation isActive={isActive} />
      </header>

      <Outlet />
    </>
  );
};

export default Header;
