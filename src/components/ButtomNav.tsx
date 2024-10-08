import { useState } from "react";
import { FaHome, FaHistory, FaUser, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ButtomSidebar from "./ButtomSidebar";

const BottomNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      icon: <FaHome className="text-white" />,
      path: "overview",
    },
    {
      label: "History",
      icon: <FaHistory className="text-white" />,
      path: "history",
    },
    {
      label: "Profile",
      icon: <FaUser className="text-white" />,
      path: "profile",
    },
    {
      label: "Other",
      icon: <FaPlus className="text-white" />,
      path: "other",
      onClick: () => setIsSidebarOpen(true),
    },
  ];

  const navigate = useNavigate();

  const HandlePath = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full h-[9vh] bg-blue-400 flex justify-between items-center px-4">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() =>
            item.onClick ? item.onClick() : HandlePath(item.path)
          }
        >
          {item.icon}
          <p className="text-white text-sm">{item.label}</p>
        </div>
      ))}
      {isSidebarOpen && (
        <ButtomSidebar onClose={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
};

export default BottomNav;
