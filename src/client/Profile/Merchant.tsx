import React, { useEffect, useState } from "react";
import { Edit, Camera, Upload, Eye, ChevronDown } from "lucide-react";
import Qrcode from "./Qrcode";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserPro } from "../../Global/Slice";

const Merchant = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // const [businessName, setbusinessName] = useState("");
  // const [phoneNumber, setphoneNumber] = useState("");
  // const [dob, setdob] = useState(new Date());
  // const [gender, setgender] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleTakePhoto = () => {
    // Logic for taking photo can go here
    // You can use Web APIs to open the camera, e.g., navigator.mediaDevices.getUserMedia
    alert("Camera functionality not implemented in this demo.");
  };

  const handleViewPhoto = () => {
    // You can open the image in a new tab or modal to view it
    if (profileImage) {
      window.open(profileImage, "_blank");
    }
  };

  const token = useSelector((state: any) => state.merchant.token);
  console.log(token);

  const user = useSelector((state: any) => state.merchant.merchant);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const url = `${import.meta.env.VITE_DEVE_URL}/userprofile`;

  const dispatch = useDispatch();

  const getOne = async () => {
    try {
      const res = await axios.get(url, { headers });
      console.log(res.data.data);
      dispatch(setUserPro(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const HandleUpdateProfile = async () => {};

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 max-md:h-[53rem] shadow-sm">
      {/* Profile Image Upload */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover"
            />
          ) : (
            <div className="h-24 w-24 rounded-full bg-gray-200"></div>
          )}

          {/* Dropdown Button */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 mt-2">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-2 py-1 text-sm bg-gray-200 rounded-md shadow-sm"
            >
              <ChevronDown className="h-4 w-4" />
            </button>

            {showDropdown && (
              <div className="absolute mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-1">
                  <li
                    className="flex items-center text-center px-2 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={handleTakePhoto}
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Take Photo
                  </li>
                  <li className="flex items-center  text-center px-2 py-1 text-gray-700 cursor-pointer hover:bg-gray-100">
                    <Upload className="mr-2 h-4 w-4" />
                    <label className="cursor-pointer">
                      Upload Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </li>
                  {profileImage && (
                    <li
                      className="flex items-center px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                      onClick={handleViewPhoto}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Photo
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        {/* Full Name with Edit Icon */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="flex items-center font-medium text-gray-900">
            Business Name
            <Edit className="ml-2 h-4 w-4 text-gray-500 cursor-pointer" />
          </dt>
          <dd className="text-gray-700 sm:col-span-2">
            {user.firstName} {user.lastName}
          </dd>
        </div>

        {/* Mobile Number with Edit Icon */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="flex items-center font-medium text-gray-900">
            Mobile Number
            <Edit className="ml-2 h-4 w-4 text-gray-500 cursor-pointer" />
          </dt>
          <dd className="text-gray-700 sm:col-span-2">+123 456 7890</dd>
        </div>

        {/* Date of Birth with Edit Icon */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="flex items-center font-medium text-gray-900">
            Date of Birth
            <Edit className="ml-2 h-4 w-4 text-gray-500 cursor-pointer" />
          </dt>
          <dd className="text-gray-700 sm:col-span-2">February 17, 1970</dd>
        </div>

        {/* Gender with Edit Icon */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="flex items-center font-medium text-gray-900">
            Gender
            <Edit className="ml-2 h-4 w-4 text-gray-500 cursor-pointer" />
          </dt>
          <dd className="text-gray-700 sm:col-span-2">Male</dd>
        </div>

        {/* Nickname with Edit Icon */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="flex items-center font-medium text-gray-900">
            Nickname
            <Edit className="ml-2 h-4 w-4 text-gray-500 cursor-pointer" />
          </dt>
          <dd className="text-gray-700 sm:col-span-2">Johnny</dd>
        </div>

        {/* Email with Edit Icon */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="flex items-center font-medium text-gray-900">
            Email
            <Edit className="ml-2 h-4 w-4 text-gray-500 cursor-pointer" />
          </dt>
          <dd className="text-gray-700 sm:col-span-2">{user.email}</dd>
        </div>

        {/* Address with Edit Icon */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="flex items-center font-medium text-gray-900">
            Wallet Address
            <Edit className="ml-2 h-4 w-4 text-gray-500 cursor-pointer" />
          </dt>
          <dd className="text-gray-700 sm:col-span-2">{user.bitcoinAddress}</dd>
        </div>

        {/* QR Code (No Edit Icon) */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">QR Code</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <Qrcode />
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Merchant;
