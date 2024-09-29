import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import loginIll from "../assets/Sign in-pana.svg";
import InputField from "../components/InputField";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setMerchant, setToken } from "../Global/Slice";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const data = {
    email,
    password,
  };

  const url = `${import.meta.env.VITE_DEVE_URL}/login`;
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastloadingId = toast.loading("Please wait....");
    try {
      const res = await axios.post(url, data);
      toast.success(res.data.message);
      localStorage.setItem("id", res.data.data._id);
      dispatch(setMerchant(res.data.data));
      dispatch(setToken(res.data.data.token));
      setTimeout(() => {
        navigate("/merchant/overview");
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(
          error.response.data.message ||
            "Error occured while Loggin.. try again later"
        );
      } else {
        toast.error("Login Failed");
      }
    } finally {
      toast.dismiss(toastloadingId);
    }
  };

  return (
    <div className="w-full h-screen flex justify-around items-center">
      {/* Animated Image Section */}
      <div className="w-[55%] h-full bg-blue-400 flex justify-center px-4 flex-col items-start max-md:hidden">
        <motion.div
          className="w-full h-[80%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={loginIll} alt="Login Illustration" width={500} />
        </motion.div>
      </div>
      {/* Form Section */}
      <div className="w-[40%] h-auto shadow-md rounded p-6 max-md:w-[90%]">
        <div className="w-full mb-6 flex-col flex justify-around items-start">
          <p className="font-semibold text-2xl text-blue-500">Login</p>
          <p className="text-sm text-center text-gray-400">
            New Here?{"     "}
            <span
              className="font-semibold text-blue-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Work Email */}
          <InputField
            id="email"
            type="email"
            placeholder=" Business Email"
            value={email}
            onChange={setemail}
          />

          {/* Password */}
          <InputField
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={setpassword}
          />

          {/* Forgot Password */}
          <div className="flex justify-end">
            <span
              className="text-sm text-blue-500 cursor-pointer"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
