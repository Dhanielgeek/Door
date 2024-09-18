import { useState } from "react";
// Import icons from react-icons and lucide-react
import { FiBell } from "react-icons/fi"; // Notification bell icon from react-icons (Feather Icons)
import { ChevronDown } from "lucide-react"; // Dropdown arrow from lucide-react

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[12vh] bg-[#fdfdf7] shadow-md flex items-center justify-end px-6">
      {/* Notification Bell */}
      <button className="relative mr-6">
        <span className="sr-only">View notifications</span>
        {/* Use react-icons for the bell */}
        <FiBell className="h-6 w-6 text-gray-800" />
        {/* Notification Badge */}
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          3
        </span>
      </button>

      {/* Profile Image with Dropdown */}
      <div className="relative">
        <button className="flex items-center space-x-2" onClick={toggleMenu}>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          {/* Use lucide-react for the dropdown arrow */}
          <ChevronDown className="h-4 w-4 text-gray-800" />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
