import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import authOperators from "../redux/auth/authOperations";

const Form = ({ variant }) => {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim === "" || email.trim() === "" || password.trim() === "") {
      toast.error("Please enter all inputs.");
      return;
    }

    if (variant === "login") {
      dispatch(authOperators.login({ email, password }));
      toast.success("Login successfully!");
    } else {
      dispatch(authOperators.register({ name, email, password }));
      toast.success("Registration successfully!");
    }

    window.localStorage.setItem(
      "userData",
      JSON.stringify({
        cards: [],
        incomes: [],
        expenses: [],
      })
    );
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      className="bg-transparent flex flex-col items-center w-full"
      onSubmit={handleSubmit}
    >
      {variant === "register" && (
        <label htmlFor="name" className="block mb-3 w-[95%]">
          <input
            className="w-full py-3 px-3 rounded-lg text-[#438883] font-bold border-2 focus:outline-none focus:border-2 focus:border-[#438883] hover:outline-none "
            type="text"
            autoComplete="off"
            name="name"
            onChange={handleChange}
            value={name.trim()}
            placeholder="Name & Surname"
          />
        </label>
      )}
      <label htmlFor="email" className="block mb-3 w-[95%]">
        <input
          className="w-full py-3 px-3 rounded-lg text-[#438883] font-bold border-2 focus:outline-none focus:border-2 focus:border-[#438883] hover:outline-none "
          type="email"
          autoComplete="off"
          name="email"
          onChange={handleChange}
          value={email.trim()}
          placeholder="Email"
        />
      </label>
      <label htmlFor="password" className="flex items-center relative w-[95%]">
        <input
          className="w-full py-3 px-3 rounded-lg text-[#438883] font-bold border-2 focus:outline-none focus:border-2 focus:border-[#438883] hover:outline-none "
          type={isHidden ? "text" : "password"}
          autoComplete="off"
          name="password"
          onChange={handleChange}
          value={password.trim()}
          placeholder="Password"
        />
        <button
          className="absolute right-4 "
          onClick={() => setIsHidden(!isHidden)}
          type="button"
        >
          {isHidden ? <FaEyeSlash fill="#438883" /> : <FaEye fill="#438883" />}
        </button>
      </label>

      <button
        className="mt-5 w-4/5 bg-gradient-to-b from-[#69AEA9] to-[#3F8782] rounded-[40px] md:py-3 py-1 font-semibold md:text-lg text-base leading-9 tracking-tight text-white text-center transition-all duration-300 relative top-0 hover:top-[3px]"
        type="submit"
      >
        {variant === "register" ? "Registration" : "Login"}
      </button>
    </form>
  );
};

export default Form;
