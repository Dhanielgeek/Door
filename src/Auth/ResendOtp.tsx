import axios from "axios";
import { useState } from "react";
import InputField from "../components/InputField"; // Assuming you have a reusable InputField component

const ResendOtp = () => {
  const [email, setEmail] = useState<string>(""); // State for email input
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [message, setMessage] = useState<string>(""); // Message to show success or error

  // Backend URL
  const url = `${import.meta.env.VITE_DEVE_URL}/resend`;

  // Function to handle resending OTP
  const handleResendOtp = async () => {
    setLoading(true);
    setMessage(""); // Clear previous messages

    try {
      // Send request to backend to resend OTP
      const response = await axios.post(url, { email });
      console.log(response.data);

      // If successful, display success message
      setMessage("OTP has been resent to your email.");
    } catch (error) {
      console.log(error);

      // Display error message in case of failure
      setMessage("Failed to resend OTP. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="resend-otp-container flex flex-col items-center justify-center gap-6 p-4 w-full h-screen">
      <div className="w-[30%] h-[40%] max-md:w-[90%] shadow-lg gap-4 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">Resend OTP</h1>
        {/* Input field for email */}
        <InputField
          id="resend-email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          required
        />

        {/* Button to trigger resend OTP */}
        <button
          onClick={handleResendOtp}
          disabled={loading || !email}
          className={`w-[40%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Resending..." : "Resend OTP"}
        </button>

        {/* Message display */}
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("Failed") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResendOtp;
