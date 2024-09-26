import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearMerchant } from "../../Global/Slice";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/dorr.png"; // Your logo path

const ButtomSidebar = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(clearMerchant());
    navigate("/login");
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose(); // Close sidebar on navigation
  };

  return (
    <div className="fixed top-[8rem] right-0 h-[30rem] w-[20rem] rounded-md bg-gray-800 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
      <div className="px-4 py-6 flex flex-col justify-around items-start">
        {/* Logo Section */}
        <div className="w-full flex justify-between items-center mb-4">
          <button
            className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
            onClick={onClose}
          >
            <MdOutlineClose size={24} />
          </button>
        </div>

        <div className="w-full flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-md"
          />
          <p className="text-lg font-semibold text-white mt-4">The Door</p>
        </div>

        {/* Navigation Menu */}
        <ul className="w-full space-y-2">
          <li>
            <a
              href="#"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              General
            </a>
          </li>

          {/* New Menu Items */}
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => handleNavigation("/billing")}
            >
              Billing
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => handleNavigation("/invoices")}
            >
              Invoices
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => handleNavigation("/merchant/transbank")}
            >
              Transfer to Bank
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => handleNavigation("/merchant/door2door")}
            >
              Door2Door
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => handleNavigation("/merchant/withdraw")}
            >
              Withdrawal
            </a>
          </li>

          {/* Logout */}
          <li>
            <button
              onClick={handleLogOut}
              className="block w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ButtomSidebar;
