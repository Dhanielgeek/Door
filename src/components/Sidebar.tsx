import {
  MdDashboard,
  MdOutlineHistory,
  MdOutlineCardGiftcard,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import logo from "../assets/dorr.png";
import { useDispatch } from "react-redux";
import { clearMerchant } from "../Global/Slice";

const Sidebar = () => {
  const navigate = useNavigate();

  // Define the menu items for the sidebar
  const MenuItems = [
    {
      label: "Dashboard",
      icon: <MdDashboard />,
      path: "overview",
    },
    {
      label: "Transction History",
      icon: <MdOutlineHistory />,
      path: "history",
    },
    {
      label: "Rewards",
      icon: <MdOutlineCardGiftcard />,
      path: "history",
    },
    {
      label: "Portfolio",
      icon: <MdOutlineShoppingBag />,
      path: "portfolio",
    },
    {
      label: "Convert",
      icon: <TbArrowsExchange />,
      path: "convert",
    },
    {
      label: "Profile",
      icon: <FaUser />,
      path: "profile/merchantpro",
    },
    {
      label: "Logout",
      icon: <CgLogOut />,
      action: () => HandleLogout(),
    },
  ];

  // Handle menu item click
  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the provided path
  };

  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(clearMerchant());
    navigate("/login");
  };

  return (
    <div className="w-full h-full bg-gray-800 text-white flex flex-col">
      {/* Sidebar Header */}
      <div className="w-full h-[12%] bg-blue-500 flex justify-center items-center p-4">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2 rounded-full" />
        <p className="text-lg font-semibold">Door</p>
      </div>

      {/* Sidebar Menu */}
      <div className=" flex-1 justify-center flex  px-2 py-3">
        <ul className=" w-[100%] space-y-7">
          {MenuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() =>
                item.action ? item.action() : handleNavigation(item.path)
              }
            >
              <div className="flex items-center text-sm hover:bg-blue-600 px-3 py-2 rounded-md w-full transition-all duration-200">
                <span className="text-xl">{item.icon}</span>
                <span className="ml-2">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div className="w-full h-[10%] flex items-center justify-center bg-blue-500">
        <p className="text-sm">© 2024 The Door</p>
      </div>
    </div>
  );
};

export default Sidebar;
