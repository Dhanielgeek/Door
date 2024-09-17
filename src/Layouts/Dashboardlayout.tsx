import Sidebar from "../components/Sidebar";
import ButtomNav from "../components/ButtomNav";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar: Hidden on small screens, visible on large screens */}
      <div className="hidden lg:block w-[20%] h-full shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="flex-1  overflow-auto">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation: Visible on small screens, hidden on large screens */}
      <div className="lg:hidden fixed bottom-0 w-full">
        <ButtomNav />
      </div>
    </div>
  );
};

export default DashboardLayout;
