import {
  IoIosArrowForward,
  IoMdEye,
  IoMdEyeOff,
  IoMdArrowDropup,
} from "react-icons/io";
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
  const monthlyProfit = "+ $3,212.5"; // Monthly profit in USD

  const fiatCard = (
    <div className="w-[35%] h-[80%] bg-blue-500 rounded max-md:w-[80%] max-md:h-[10rem]">
      <div className="w-full h-[25%] flex justify-between items-center px-2">
        <div className="w-[40%] h-full font-medium text-white cursor-pointer flex justify-start gap-3 items-center">
          <p className="font-medium text-white">Fiat Balance</p>
          <button
            className="text-white"
            onClick={() => setShowFiatBalance(!showFiatBalance)}
          >
            {showFiatBalance ? <IoMdEyeOff size={18} /> : <IoMdEye size={18} />}
          </button>
        </div>
        <div
          className="w-[50%] h-full font-medium text-white cursor-pointer flex justify-center items-center"
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

  const cryptoCard = (
    <div className="w-[35%] h-[80%] bg-blue-500 rounded relative max-md:w-full">
      <div className="w-full h-[25%] flex justify-between items-center px-2">
        <div className="w-[50%] h-full font-medium text-white cursor-pointer flex justify-start gap-3 items-center">
          <p className="font-medium text-white">Crypto Balance</p>
          <button
            className="text-white"
            onClick={() => setShowCryptoBalance(!showCryptoBalance)}
          >
            {showCryptoBalance ? (
              <IoMdEyeOff size={24} />
            ) : (
              <IoMdEye size={24} />
            )}
          </button>
        </div>
        <div
          className="w-[50%] h-full font-medium text-white cursor-pointer flex justify-center items-center"
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
      <div className="w-[100%] h-[20%] flex justify-between px-3 items-center">
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
    <div className="w-[100%] h-[100%] scrollbar-thin overflow-y-scroll scrollbar-hide">
      <div className="hidden md:flex w-full h-[40%] justify-around items-center">
        {/* Fiat and Crypto balance cards for large screens */}
        {fiatCard}
        {cryptoCard}
      </div>
      <div className="flex md:hidden  h-[40%] justify-center items-center">
        {/* Show Fiat and Crypto balance cards inside Carousel on small screens */}
        <Carousel>
          <div className="w-[80%]">{fiatCard}</div>
          <div className="w-full">{cryptoCard}</div>
        </Carousel>
      </div>
    </div>
  );
};

export default Overview;
