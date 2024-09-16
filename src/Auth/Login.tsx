import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import loginIll from "../assets/Sign in-pana.svg";
import InputField from "../components/InputField";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formValues);
  };

  const navigate = useNavigate();

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
            value={formValues.email}
            onChange={(value) => handleChange("email", value)}
          />

          {/* Password */}
          <InputField
            id="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(value) => handleChange("password", value)}
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
