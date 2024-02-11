import { Link } from "react-router-dom";
import startPage from "../assets/startPage.png";

const StartPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="mx-5 md:flex md:h-svh md:justify-between md:items-center">
        <div className="md:w-1/2 md:h-full md:before:hidden md:pt-0 md:items-center flex justify-center relative bg-[#EEF8F7] -mx-5 pt-16 h-[430px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:border-t-[40px] before:border-l-[768px] before:border-t-[#EEF8F7] before:border-l-white before:w-0">
          <img
            src={startPage}
            alt="Start page img"
            className="xl:h-[600px] md:h-[500px] absolute z-10 h-[400px]"
          />
          <div className="absolute xl:h-[300px] xl:w-[300px] border rounded-[50%] border-white h-[200px] w-[200px]"></div>
          <div className="absolute xl:h-[450px] xl:w-[450px] md:top-auto top-4 border rounded-[50%] border-white h-[300px] w-[300px]"></div>
          <div className="absolute xl:h-[550px] xl:w-[550px] md:top-auto -top-4 border rounded-[50%] border-white h-[350px] w-[350px]"></div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center mt-10">
          <h2 className="md:text-4xl md:m-6 font-bold text-3xl w-[80%] leading-9 tracking-tight text-[#438883] text-center mb-4">
            Spend Smarter Save More
          </h2>

          <Link
            to={`/register`}
            className="md:text-2xl md:p-4 xl:w-5/6 inline-block w-5/6 py-1 bg-gradient-to-b from-[#69AEA9] to-[#3F8782] rounded-[40px] font-semibold text-sm leading-9 tracking-tight text-white text-center"
          >
            Get Started
          </Link>

          <p className="md:text-lg font-normal text-xs text-[#444444] text-center mt-4 mb-4">
            Already have account?{" "}
            <Link
              to={`/login`}
              className="md:text-lg font-medium text-xs text-[#438883]"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
