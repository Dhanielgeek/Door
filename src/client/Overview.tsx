import { GiMoneyStack } from "react-icons/gi";
import { MdAttachMoney, MdOutlineShare } from "react-icons/md";
import { PiCurrencyNgnBold } from "react-icons/pi";
import Chart from "../components/Chart";
import History from "./History";
import { useSelector } from "react-redux";
import { LuSend } from "react-icons/lu";
import { TbArrowsExchange } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const userInfo = useSelector((state: any) => state.merchant.merchant);

  const navigate = useNavigate();

  const Content = [
    {
      text: "Total Revenue",
      icon: <GiMoneyStack className="text-orange-500" size={20} />,
      bg: "bg-orange-200",
      value: userInfo.totalBalance,
      change: "+20%",
    },
    {
      text: "Fiat Balance",
      icon: <PiCurrencyNgnBold className="text-green-500" size={20} />,
      bg: "bg-green-200",
      value: userInfo.fiatBalance,
      change: "+40%",
    },
    {
      text: "Crypto Balance",
      icon: <MdAttachMoney className="text-purple-500" size={20} />,
      bg: "bg-purple-200",
      value: userInfo.coinBalance,
      change: "-15%",
    },
  ];

  const Actions = [
    {
      text: "Send",
      icon: <LuSend className="" size={20} />,
      // bg: "bg-blue-200",
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

  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-hide">
      <div className="w-full h-[30%] flex justify-around items-center flex-wrap max-md:h-[28rem]">
        {Content.map((item, index) => (
          <div
            key={index}
            className={`w-[30%] h-[90%] ${item.bg} rounded max-md:w-[90%] max-md:h-[30%]`} // Apply the dynamic background here
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
      <div className="w-full h-[20%] justify-around items-center  hidden max-sm:flex">
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
        <div className="w-full h-[15%]  flex justify-start items-center px-7">
          <p className=" font-bold text-l">Revenue Analytics</p>
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
