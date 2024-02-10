import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>Header</header>;
      <Outlet />
    </>
  );
};

export default Header;
