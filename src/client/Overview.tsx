import { GiMoneyStack } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { PiCurrencyNgnBold } from "react-icons/pi";
import Chart from "../components/Chart";
import History from "./History";

const Overview = () => {
  const Content = [
    {
      text: "Total Revenue",
      icon: <GiMoneyStack className="text-orange-500" size={20} />,
      bg: "bg-orange-200",
      value: "$6,786",
      change: "+20%",
    },
    {
      text: "Fiat Balance",
      icon: <PiCurrencyNgnBold className="text-green-500" size={20} />,
      bg: "bg-green-200",
      value: "$4,356",
      change: "+40%",
    },
    {
      text: "Crypto Balance",
      icon: <MdAttachMoney className="text-purple-500" size={20} />,
      bg: "bg-purple-200",
      value: "$4,356",
      change: "-15%",
    },
  ];

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
      <div className="w-full h-[80%]">
        <div className="w-full h-[15%]  flex justify-start items-center px-7">
          <p className=" font-bold text-l">Revenue Analytics</p>
        </div>
        <div className="w-full h-[85%] max-md:w-[95%]">
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
