import { FaHandshakeAngle } from "react-icons/fa6";

const Door2door = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="w-full h-[20%]  flex justify-around items-center">
          <FaHandshakeAngle size={40} />
          <h2 className=" text-2xl font-bold text-center text-gray-800">
            Door 2 Door Transfer
          </h2>
        </div>

        <form className="space-y-4">
          {/* Receipt Upload */}

          {/* Account Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Account Name
            </label>
            <input
              type="text"
              placeholder="Enter account name"
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <input
              type="text"
              placeholder="Enter account number"
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Transfer Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Door2door;
