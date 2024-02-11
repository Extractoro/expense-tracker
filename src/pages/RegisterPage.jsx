import { Link } from "react-router-dom";
import Form from "../components/Form";

const RegisterPage = () => {
  return (
    <div className="bg-[#EEF8F7]">
      <div className="mx-5 h-svh flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl tracking-tight text-[#438883] text-center mb-6">
          Registration
        </h2>
        <Form variant={"register"} />

        <p className="md:text-lg font-normal text-base text-[#444444] text-center mt-4 mb-4">
          Have an account?{" "}
          <Link
            to={`/login`}
            className="md:text-lg font-medium text-base text-[#438883]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
