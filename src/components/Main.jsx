import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";
import sprite from "../assets/sprite.svg";

const Main = () => {
  const user = useSelector(authSelectors.getUserName);
  console.log(user);
  return (
    <div className="">
      <div className="flex">
        <div className="">
          <h5 className="">Good afternoon,</h5>
          <h3 className="">{user}</h3>
        </div>
        <div className="bg-white bg-opacity-5 rounded p-3">
          <svg className="w-5 h-5">
            <use href={sprite + "#bell"}></use>
          </svg>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Main;
