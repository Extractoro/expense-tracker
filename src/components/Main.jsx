import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";
import sprite from "../assets/sprite.svg";

const Main = () => {
  const user = useSelector(authSelectors.getUserName);
  return (
    <div className="">
      <div className="flex justify-between mb-5">
        <div className="">
          <h5 className="font-medium text-sm text-white">Good afternoon,</h5>
          <h3 className="font-semibold text-xl text-white">{user}</h3>
        </div>
        <div className="bg-white bg-opacity-5 rounded p-3">
          <svg className="w-5 h-5">
            <use href={sprite + "#bell"}></use>
          </svg>
        </div>
      </div>
      <div className="bg-[#2F7E79] rounded-[20px] px-[25px] py-5">
        <div className="">
          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Main;
