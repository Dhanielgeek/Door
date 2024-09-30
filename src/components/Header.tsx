import { useState } from "react";
import { FiBell } from "react-icons/fi"; // Notification bell icon
import { ChevronDown } from "lucide-react"; // Dropdown arrow
import { useDispatch, useSelector } from "react-redux";
import { clearMerchant } from "../Global/Slice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const userInfo = useSelector((state: any) => state.merchant.merchant);

  console.log(userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogout = () => {
    dispatch(clearMerchant());
    navigate("/login");
  };

  return (
    <header className="w-full h-[12vh] bg-[#fdfdf7] shadow-md flex items-center justify-between px-6 max-md:px-4">
      {/* Welcome message */}
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold text-gray-800">
          Welcome {userInfo.firstName} 👋
        </p>
      </div>

      {/* Right side - Profile image and notifications */}
      <div className="flex items-center gap-6 relative">
        {/* Notification Bell */}
        <button className="relative">
          <span className="sr-only">View notifications</span>
          <FiBell className="h-6 w-6 text-gray-700" />
          {/* Notification badge */}
          <span className="absolute -top-3 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold text-white bg-red-600 rounded-full">
            3
          </span>
        </button>

        {/* Profile Image with Dropdown */}
        <button className="flex items-center space-x-2" onClick={toggleMenu}>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
          />
          <ChevronDown className="h-4 w-4 text-gray-700" />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 top-8  w-48 bg-white rounded-md shadow-lg z-10">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              Settings
            </a>

            <button
              onClick={HandleLogout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
