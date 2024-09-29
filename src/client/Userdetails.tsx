import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserPro } from "../Global/Slice";
import { MdContentCopy } from "react-icons/md"; // Icon for the copy button
import toast from "react-hot-toast";

const Userdetails = () => {
  const { _id } = useParams<{ _id: string }>();
  const dispatch = useDispatch();

  // State to hold amount and email
  const [amount, setAmount] = useState<number>(); // Initial value 0
  const [email, setEmail] = useState<string>(""); // Initial value empty

  const userInfo = useSelector((state: any) => state.merchant.profile);
  console.log(userInfo);

  const baseUrl = `${import.meta.env.VITE_DEVE_URL}`;
  const getOneUrl = `${baseUrl}/getone/${_id}`;
  const confirmUrl = `${baseUrl}/confirmPayment`;

  // Function to initialize Korapay
  const payKorapay = (
    AmountToPay: number,
    customerEmail: string,
    Name: string
  ) => {
    const Keys = `key${Math.random()}`; // Unique key for each payment
    console.log("Korapay with:", AmountToPay, customerEmail, Name, Keys);

    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: Keys,
      amount: AmountToPay,
      currency: "NGN",
      customer: {
        name: Name,
        email: customerEmail,
      },
      onClose: function (data: any) {
        console.log(data);
      },
      onSuccess: async function (data: any) {
        console.log("Payment success:", data);
        if (data.status === "success") {
          toast.success("Successful transaction");

          // Now confirm the payment
          await confirmPayment(AmountToPay, customerEmail);
        }
      },
      onFailed: function (data: any) {
        console.log(data);
        toast.error("Payment failed. Please try again.");
      },
    });
  };

  // Confirm Payment
  const confirmPayment = async (AmountToPay: number, customerEmail: string) => {
    const data = {
      amount: AmountToPay,
      reference: "ref123456",
      status: "success",
      email: customerEmail,
    };

    try {
      const res = await axios.post(confirmUrl, data);
      console.log("Payment confirmation successful:", res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to confirm payment.");
    }
  };

  // Fetch the user details
  const getOne = async () => {
    try {
      const response = await axios.get(getOneUrl);
      dispatch(setUserPro(response.data.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Copy wallet address to clipboard
  const handleCopy = () => {
    if (userInfo?.bitcoinAddress) {
      navigator.clipboard.writeText(userInfo.bitcoinAddress);
      toast.success("Wallet address copied to clipboard!");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[40%] h-[90%] bg-[#fdfdf7] shadow-lg rounded max-md:w-[90%] flex-col flex justify-around items-center">
        <div className="flex flex-col justify-around items-center w-full h-full">
          <div className="w-[90%] h-[10%] flex justify-center items-center">
            <h1 className="text-lg font-bold">Merchant details</h1>
          </div>

          {/* Display user info */}
          <div className="w-[90%] h-[40%] bg-white p-4 flex justify-around items-center flex-col rounded shadow">
            <div className="w-full h-[20%]  flex justify-start items-center">
              <p>
                <strong>Business Name:</strong> {userInfo.businessName || "N/A"}
              </p>
            </div>
            <div className="w-full h-[20%]  flex justify-start items-center">
              <p>
                <strong>First Name:</strong> {userInfo.firstName || "N/A"}
              </p>
            </div>
            <div className="w-full h-[20%]  flex justify-start items-center">
              <p>
                <strong>Last Name:</strong> {userInfo.lastName || "N/A"}
              </p>
            </div>
            <div className="w-full h-[20%]  flex justify-start items-center">
              <p className="flex items-center space-x-2">
                <strong>W/Address:</strong>{" "}
                <span className=" max-md:text-sm">
                  {userInfo.wallet || "N/A"}
                </span>
                {userInfo.wallet && (
                  <button
                    className="ml-2 text-blue-500"
                    onClick={handleCopy}
                    title="Copy wallet address"
                  >
                    <MdContentCopy size={20} />
                  </button>
                )}
              </p>
            </div>
          </div>

          {/* Input for amount */}
          <div className="w-[90%] mt-2">
            <label className="block mb-2 font-bold">Amount to Pay:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Enter Amount"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Input for email */}
          <div className="w-[90%] mt-4">
            <label className="block mb-2 font-bold">Customer Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Buttons for payment options */}
          <div className="mt-3 space-x-4">
            {/* Pay with Naira button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() =>
                payKorapay(amount, email, userInfo.firstName || "Customer")
              } // Trigger Korapay first
            >
              Pay with Naira
            </button>

            {/* Pay with Crypto button */}
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Pay with Crypto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
