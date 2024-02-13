import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Container from "./Container";

const Header = ({ isActive }) => {
  return (
    <>
      <header className="bg-white py-4 shadow-md">
        <Container>
          <Navigation isActive={isActive} />
        </Container>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
