import { useState } from "react";
import { CiBank } from "react-icons/ci";

const Withdrawal = () => {
  const [totalBalance, setTotalBalance] = useState(5000);
  console.log(setTotalBalance);
  // Example balance
  const [amount, setAmount] = useState("");
  const [bankDetails, setBankDetails] = useState(null);
  console.log(setBankDetails);
  // Initially no bank details added

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleAddBank = () => {
    // Function to add bank details
    // setBankDetails({
    // //   bankName: "Bank of America",
    // //   accountName: "John Doe",
    // //   accountNumber: "123456789",
    // });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Total Balance */}
      <div className="mb-6 p-6 w-full max-w-md bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Total Balance</h2>
        <p className="text-2xl font-bold text-blue-600 mt-2">${totalBalance}</p>
      </div>

      {/* Withdrawal Form */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Withdraw Funds</h2>

        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Withdraw To */}
        <div>
          <h3 className="text-lg font-medium text-gray-700">Withdraw To</h3>

          {/* Add Bank Section */}
          {!bankDetails ? (
            <div
              className="flex items-center cursor-pointer mt-3 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
              onClick={handleAddBank}
            >
              <CiBank size={24} />
              <span className="ml-2">Add Bank</span>
            </div>
          ) : (
            <div className="border border-gray-300 rounded-md p-4 mt-3">
              <p className="font-semibold">Bank Name: </p>
              <p>Account Name: </p>
              <p>Account Number: </p>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Withdraw Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
