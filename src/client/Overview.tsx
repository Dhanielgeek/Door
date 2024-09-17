import {
  IoIosArrowForward,
  IoMdEye,
  IoMdEyeOff,
  IoMdArrowDropup,
} from "react-icons/io";
import { MdOutlineFileDownload, MdShare } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";

const Overview = () => {
  const navigate = useNavigate();

  // State to toggle visibility of fiat and crypto balances
  const [showFiatBalance, setShowFiatBalance] = useState(true);
  const [showCryptoBalance, setShowCryptoBalance] = useState(true);

  // Sample data for fiat and crypto balances
  const fiatBalance = "₦40,000.00";
  const cryptoBalance = "952.65 BTC";
  const usdEquivalent = "~32560.32 USD"; // USD equivalent of crypto
  const monthlyProfit = "+ $3,212.5";

  // Button data
  const buttons = [
    { text: "Receive", icon: <MdOutlineFileDownload />, path: "" },
    { text: "Convert", icon: <TbArrowsExchange />, path: "convert" },
    { text: "Add Money", icon: <GiPayMoney />, path: "" },
    { text: "Share", icon: <MdShare />, path: "" },
  ];

  // Fiat Balance Card
  const fiatCard = (
    <div className="w-[35%] h-[80%] bg-blue-500 rounded max-md:w-[90%] max-md:h-[10rem]">
      <div className="w-full h-[25%] flex justify-between items-center px-2">
        <div className="w-[40%] h-full font-medium text-white flex gap-3 items-center">
          <p>Fiat Balance</p>
          <button onClick={() => setShowFiatBalance(!showFiatBalance)}>
            {showFiatBalance ? <IoMdEyeOff size={18} /> : <IoMdEye size={18} />}
          </button>
        </div>
        <div
          className="w-[50%] h-full font-medium text-white flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/merchant/history")}
        >
          <p>Transaction History</p>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="w-[60%] h-[50%] flex justify-start items-center px-4">
        <p className="font-semibold text-3xl text-white">
          {showFiatBalance ? fiatBalance : "****"}
        </p>
      </div>
      <div className="flex items-center justify-end px-3 space-x-2">
        <p className="font-medium text-green-400">
          {showCryptoBalance ? monthlyProfit : ""}
        </p>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-green-400 border-r-[10px] border-r-transparent"></div>
      </div>
    </div>
  );

  // Crypto Balance Card
  const cryptoCard = (
    <div className="w-[35%] h-[80%] bg-blue-500 rounded relative max-md:w-full max-md:h-[10rem]">
      <div className="w-full h-[25%] flex justify-between items-center px-2">
        <div className="w-[50%] h-full font-medium text-white flex gap-3 items-center">
          <p>Crypto Balance</p>
          <button onClick={() => setShowCryptoBalance(!showCryptoBalance)}>
            {showCryptoBalance ? (
              <IoMdEyeOff size={24} />
            ) : (
              <IoMdEye size={24} />
            )}
          </button>
        </div>
        <div
          className="w-[50%] h-full font-medium text-white flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/merchant/history")}
        >
          <p>Transaction History</p>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="w-[60%] h-[50%] flex flex-col justify-center items-start px-3">
        <p className="font-semibold text-3xl text-white">
          {showCryptoBalance ? cryptoBalance : "****"}
        </p>
        <p className="font-medium text-sm text-white">
          {showCryptoBalance ? usdEquivalent : "****"}
        </p>
      </div>
      <div className="w-full h-[20%] flex justify-between px-3 items-center">
        <p className="text-white">Monthly Profit</p>
        <div className="w-[50%] h-full flex justify-center items-center">
          <p className="font-medium text-green-400">
            {showCryptoBalance ? monthlyProfit : ""}
          </p>
          <IoMdArrowDropup size={20} className="text-green-200" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-hide">
      {/* Large screen view */}
      <div className="hidden md:flex w-full h-[40%] justify-around items-center">
        {fiatCard}
        {cryptoCard}
      </div>
      {/* Small screen view */}
      <div className="flex md:hidden h-[40%] justify-center bg-pink-500 items-center">
        <Carousel>
          <div className="w-full">{fiatCard}</div>
          <div className="w-full">{cryptoCard}</div>
        </Carousel>
      </div>
      {/* Action Buttons */}
      <div className="w-full h-[20%] flex justify-around flex-wrap bg-red-400 items-center max-md:h-[23%]">
        {buttons.map((item, index) => (
          <div
            key={index}
            className=" w-[10%] h-[40%] rounded bg-blue-500 text-white flex flex-col justify-around items-center max-md:w-[40%]"
          >
            {item.icon}
            <p className=" font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
