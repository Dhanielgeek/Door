import { useNavigate, Outlet } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goToMerchant = () => {
    navigate("merchantpro"); // Navigate to Merchant Profile page
  };

  const goAddInfo = () => {
    navigate("addinfo");
  };

  return (
    <div className="w-full h-full p-6">
      {/* Profile Header */}
      <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={goToMerchant}
        >
          Merchant Profile
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={goAddInfo}
        >
          Add Bank Info
        </button>
      </div>

      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
  );
};

export default Profile;
