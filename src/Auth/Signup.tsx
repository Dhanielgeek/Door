import React, { useState } from "react";
import InputField from "../components/InputField";
import siguplill from "../assets/Sign up-cuate.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  const url = `${import.meta.env.VITE_DEVE_URL}/signup`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      businessName,
      phoneNumber,
      password,
      agree, // Assuming agree is required in the payload
    };

    const toastloadingId = toast.loading("Please wait....");

    try {
      const response = await axios.post(url, data);
      toast.success(response.data.message);
      localStorage.setItem("id", response.data.data.userId);
      console.log(response.data);
      setTimeout(() => {
        navigate("/verify-otp");
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message || "Registration failed.");
      } else {
        toast.error("Failed to create account. Please try again.");
      }

      console.log(error);
    } finally {
      toast.dismiss(toastloadingId);
    }
  };

  return (
    <div className="w-full h-screen flex justify-around items-center">
      <div className="w-[40%] h-auto shadow-md rounded p-6 max-md:w-[90%]">
        <div className="w-full mb-6 flex-col flex justify-around items-start">
          <p className="font-semibold text-2xl text-blue-500">Create Account</p>
          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <span
              className="font-semibold text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <InputField
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={setFirstName}
          />

          {/* Last Name */}
          <InputField
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={setLastName}
          />

          {/* Work Email */}
          <InputField
            id="email"
            type="email"
            placeholder="Work Email"
            value={email}
            onChange={setEmail}
          />

          {/* Registered Business Name */}
          <InputField
            id="businessName"
            type="text"
            placeholder="Registered Business Name"
            value={businessName}
            onChange={setBusinessName}
          />

          {/* Phone Number */}
          <InputField
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />

          {/* Password */}
          <InputField
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />

          {/* Checkbox: I agree */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={handleCheckboxChange}
              className="form-checkbox"
            />
            <label htmlFor="agree" className="text-gray-500 text-sm">
              I agree on behalf of my company to the company policy
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Create Account
          </button>
        </form>
      </div>

      <div className="w-[55%] h-full bg-blue-400 flex justify-center px-4 flex-col items-start max-md:hidden">
        {/* Animated Image using Framer Motion */}
        <motion.div
          className="w-full h-[80%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={siguplill} alt="Signup Illustration" width={500} />
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
