import { useNavigate } from "react-router-dom";
import logo from "../assets/Finance app.gif";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[25%] h-[88%] shadow-md flex justify-center gap-6 items-center flex-col max-md:w-[90%]">
        <div className="w-[90%] h-[40%] flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <div className="w-[90%] h-[40%] flex justify-around items-center flex-col">
          <p className=" text-2xl font-semibold">Welcome to The Door</p>
          <p>The Ultimate Gateway for Business</p>
          <button
            className=" px-16 py-2 bg-blue-500 rounded font-semibold text-white"
            onClick={() => navigate("signup")}
          >
            Create An Account
          </button>
          <button
            className="px-12  font-medium rounded py-2 border border-blue-500 "
            onClick={() => navigate("login")}
          >
            Login To Your Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
