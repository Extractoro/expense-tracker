import { Link } from "react-router-dom";
import startPage from "../assets/startPage.png";

const StartPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="mx-5">
        <div className="flex justify-center relative bg-[#EEF8F7] -mx-5 pt-16 h-[430px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:border-t-[40px] before:border-l-[320px] before:border-t-[#EEF8F7] before:border-l-white before:w-0">
          <img
            src={startPage}
            alt="Start page img"
            className="absolute z-10 h-[400px]"
          />
          <div className="absolute border rounded-[50%] border-white h-[200px] w-[200px]"></div>
          <div className="absolute top-4 border rounded-[50%] border-white h-[300px] w-[300px]"></div>
          <div className="absolute -top-4 border rounded-[50%] border-white h-[400px] w-[400px]"></div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h2 className="font-bold text-3xl w-[80%] leading-9 tracking-tight text-[#438883] text-center mb-4">
            Spend Smarter Save More
          </h2>

          <Link
            to={`/register`}
            className="inline-block w-full py-1 bg-gradient-to-b from-[#69AEA9] to-[#3F8782] rounded-[40px] font-semibold text-sm leading-9 tracking-tight text-white text-center"
          >
            Get Started
          </Link>

          <p className="font-normal text-xs text-[#444444] text-center mt-4 mb-4">
            Already have account?{" "}
            <Link to={`/login`} className="font-medium text-xs text-[#438883]">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
