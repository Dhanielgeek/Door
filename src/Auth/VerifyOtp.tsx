import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { motion } from "framer-motion";
import verify from "../assets/verify.svg";

const VerifyOtp = () => {
  const [email, setEmail] = useState<string>(""); // State to hold the email
  const [otp, setOtp] = useState<string[]>(new Array(6).fill("")); // State for OTP as an array of strings
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Refs for each OTP input

  const navigate = useNavigate();

  const url = `${import.meta.env.VITE_DEVE_URL}/otp`;

  // Function to handle OTP input changes
  const handleOtpChange = (target: HTMLInputElement, index: number) => {
    const value = target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically move to the next input field if a digit is entered
      if (index < 5 && value !== "") {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace functionality
  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join(""); // Combine OTP array into a string

    try {
      const response = await axios.post(url, { email, otp: otpCode });
      console.log(response.data);
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div className="w-full h-screen flex  items-center justify-center gap-6 p-4">
      <div className="w-[40%] h-auto shadow-md rounded p-6 max-md:w-[98%]">
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={HandleSubmit}
        >
          {/* Email input field */}
          <InputField
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={setEmail}
            required
          />

          {/* OTP input fields */}
          <div className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center border bg-transparent border-gray-300 text-2xl rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-[90%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Verify OTP
          </button>
          <div className="text-gray-600 text-sm">
            <p>
              Did not receive the OTP?{" "}
              <span
                className="text-[#79D4D0] cursor-pointer"
                onClick={() => navigate("/resend-otp")}
              >
                Resend OTP
              </span>
            </p>
          </div>
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
          <img src={verify} alt="Signup Illustration" width={500} />
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyOtp;
