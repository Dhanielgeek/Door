import { GiMoneyStack } from "react-icons/gi";
import { MdAttachMoney, MdOutlineShare } from "react-icons/md";
import { PiCurrencyNgnBold } from "react-icons/pi";
import Chart from "../components/Chart";
import History from "./History";
import { useDispatch, useSelector } from "react-redux";
import { LuSend } from "react-icons/lu";
import { TbArrowsExchange } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { setUserPro } from "../Global/Slice";
import { useEffect } from "react";
import axios from "axios";

const Overview = () => {
  const userInfo = useSelector((state: any) => state.merchant.profile);
  const token = useSelector((state: any) => state.merchant.token);

  const baseUrl = `${import.meta.env.VITE_DEVE_URL}`;
  const getOneUrl = `${baseUrl}/getone/${userInfo._id}`;

  const GetOne = async () => {
    try {
      const response = await axios.get(getOneUrl);
      dispatch(setUserPro(response.data.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Example previous values for dynamic calculation, ideally fetched from API
  const previousBalances = {
    totalBalance: 8000,
    fiatBalance: 5000,
    coinBalance: 1500,
  };

  const calculatePercentageChange = (
    currentValue: number,
    previousValue: number
  ) => {
    if (previousValue === 0) return "0%";
    const change = ((currentValue - previousValue) / previousValue) * 100;
    return change.toFixed(2) + "%";
  };

  const Content = [
    {
      text: "Total Revenue",
      icon: <GiMoneyStack className="text-orange-500" size={20} />,
      bg: "bg-orange-200",
      value: userInfo.totalBalance,
      change: calculatePercentageChange(
        userInfo.totalBalance,
        previousBalances.totalBalance
      ),
    },
    {
      text: "Fiat Balance",
      icon: <PiCurrencyNgnBold className="text-green-500" size={20} />,
      bg: "bg-green-200",
      value: userInfo.fiatBalance,
      change: calculatePercentageChange(
        userInfo.fiatBalance,
        previousBalances.fiatBalance
      ),
    },
    {
      text: "Crypto Balance",
      icon: <MdAttachMoney className="text-purple-500" size={20} />,
      bg: "bg-purple-200",
      value: userInfo.coinBalance,
      change: calculatePercentageChange(
        userInfo.coinBalance,
        previousBalances.coinBalance
      ),
    },
  ];

  const Actions = [
    {
      text: "Send",
      icon: <LuSend className="" size={20} />,
      path: "/merchant/transbank",
    },
    {
      text: "Withdraw",
      icon: <TbArrowsExchange size={20} />,
      bg: "bg-purple-200",
      path: "/merchant/withdraw",
    },
    {
      text: "Share",
      icon: <MdOutlineShare size={20} />,
      bg: "bg-pink-200",
      path: "/qr",
    },
  ];

  const HandlePath = (path: string) => {
    navigate(path);
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const url = `${import.meta.env.VITE_DEVE_URL}/userprofile`;

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
  }, []);

  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-hide">
      <div className="w-full h-[30%] flex justify-around items-center flex-wrap max-md:h-[28rem]">
        {Content.map((item, index) => (
          <div
            key={index}
            className={`w-[30%] h-[90%] ${item.bg} rounded max-md:w-[90%] max-md:h-[30%]`}
          >
            <div className="w-full h-[35%] flex justify-start items-center px-5">
              <div className="w-[18%] h-[80%] bg-white rounded flex justify-center items-center">
                {item.icon}
              </div>
            </div>
            <div className="w-full h-[20%] flex justify-start items-center px-5">
              <p className="font-semibold">{item.text}</p>
            </div>
            <div className="w-full h-[40%] flex justify-between items-center px-5">
              <p className="font-semibold text-2xl">{item.value}</p>
              <p
                className={`font-bold text-sm ${
                  item.change.startsWith("-")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {item.change} this month
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[20%] justify-around items-center hidden max-sm:flex">
        {Actions.map((item) => (
          <div
            className="w-[23%] h-[50%] bg-blue-500 rounded flex flex-col justify-center gap-2 items-center"
            onClick={() => HandlePath(item.path)}
          >
            <div className="w-full h-[20%] flex justify-center items-center font-bold text-white">
              {item.text}
            </div>
            <div className="w-full text-white h-[40%] flex justify-center items-center">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[80%]">
        <div className="w-full h-[15%] flex justify-start items-center px-7">
          <p className="font-bold text-l">Revenue Analytics</p>
        </div>
        <div className="w-full h-[85%] max-md:w-[95%] max-md:h-[29rem]">
          <Chart />
        </div>
      </div>
      <div className="w-full h-[60%] flex justify-center items-center max-md:hidden">
        <History />
      </div>
    </div>
  );
};

export default Overview;
