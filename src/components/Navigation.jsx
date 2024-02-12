import { NavLink } from "react-router-dom";
import sprite from "../assets/sprite.svg";

const Navigation = ({ isActive }) => {
  return (
    <nav className="flex justify-around items-center">
      <NavLink
        to={`/home`}
        className="md:flex items-center font-semibold text-lg text-[#666666]"
      >
        <svg
          className={`${
            isActive === "header" ? "fill-[#408782]" : "fill-[#AAAAAA]"
          } w-7 h-7`}
        >
          <use href={sprite + `#home`}></use>
        </svg>
        <span className="hidden md:block md:ml-3">Home</span>
      </NavLink>
      <NavLink
        to={`/stats`}
        className="md:flex items-center font-semibold text-lg text-[#666666]"
      >
        <svg
          className={`${
            isActive === "stats"
              ? "fill-[#408782] stroke-[#408782]"
              : "fill-[#AAAAAA]"
          } w-7 h-7`}
        >
          <use href={sprite + `#stats`}></use>
        </svg>
        <span className="hidden md:block md:ml-3">Statistics</span>
      </NavLink>
      {isActive === "header" && (
        <button className="bg-[#408782] w-9 h-9 rounded-[50%] text-white">
          +
        </button>
      )}
      <NavLink
        to={`/wallet`}
        className="md:flex items-center font-semibold text-lg text-[#666666]"
      >
        <svg
          className={`${
            isActive === "wallet"
              ? "stroke-[#408782] fill-[#408782]"
              : "stroke-[#AAAAAA] fill-none"
          } w-7 h-7`}
        >
          <use href={sprite + `#wallet`}></use>
        </svg>
        <span className="hidden md:block md:ml-3">Wallet</span>
      </NavLink>
      <NavLink
        to={`/profile`}
        className="md:flex items-center font-semibold text-lg text-[#666666]"
      >
        <svg
          className={`${
            isActive === "profile" ? "fill-[#408782]" : "fill-[#AAAAAA]"
          } w-7 h-7`}
        >
          <use href={sprite + `#account`}></use>
        </svg>
        <span className="hidden md:block md:ml-3">Account</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
