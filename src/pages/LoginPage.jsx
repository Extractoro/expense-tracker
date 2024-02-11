import { Link } from "react-router-dom";
import Form from "../components/Form";

const LoginPage = () => {
  return (
    <div className="bg-[#EEF8F7]">
      <div className="mx-5 h-svh flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl tracking-tight text-[#438883] text-center mb-6">
          Login
        </h2>
        <Form variant={"login"} />

        <p className="md:text-lg font-normal text-base text-[#444444] text-center mt-4 mb-4">
          {`Don't have an account yet? `}
          <Link
            to={`/register`}
            className="md:text-lg font-medium text-base text-[#438883]"
          >
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
