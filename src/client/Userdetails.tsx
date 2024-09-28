import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserPro } from "../Global/Slice";

const Userdetails = () => {
  const { _id } = useParams<{ _id: string }>();

  const userInfo = useSelector((state: any) => state.merchant.profile);
  console.log(userInfo);

  const dispatch = useDispatch();

  const url = `${import.meta.env.VITE_DEVE_URL}/getone/${_id}`;

  const getOne = async () => {
    try {
      const response = await axios.get(url);
      dispatch(setUserPro(response.data.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOne();
  });

  return (
    <div className="flex flex-col items-center">
      {/* Display user info */}
      <h1 className="text-lg font-bold mb-4">User Details</h1>
      <p>
        <strong>First Name:</strong> {userInfo.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {userInfo.lastName}
      </p>
      <p>
        <strong>Wallet Address:</strong> {userInfo.walletAddress}
      </p>

      {/* Buttons for payment options */}
      <div className="mt-6 space-x-4">
        {/* Pay with Naira button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Pay with Naira
        </button>

        {/* Pay with Crypto button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Pay with Crypto
        </button>
      </div>

      {/* Show success message if payment is successful */}

      <p className="text-green-500 mt-4">Payment was successful!</p>
    </div>
  );
};

export default Userdetails;
