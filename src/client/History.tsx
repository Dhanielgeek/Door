import React, { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setHistory } from "../Global/Slice";

// Define a Transaction interface
interface Transaction {
  _id: string;
  createdAt: string;
  narration: string;
  amount: number;
  status: "success" | "failed";
}

// Table Header component
const TableHeader: React.FC = () => (
  <thead>
    <tr>
      {["ID", "Date", "Description", "Amount", "Status"].map((heading, idx) => (
        <th
          key={idx}
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {heading}
        </th>
      ))}
    </tr>
  </thead>
);

// Table Body component
const TableBody: React.FC<{ data: Transaction[] }> = ({ data }) => (
  <tbody className="divide-y divide-gray-200 min-w-full">
    {data.map((transaction) => (
      <tr key={transaction._id}>
        <td className="px-4 py-2 font-medium text-gray-900">
          {transaction._id?.slice(-13).toUpperCase()}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {" "}
          {new Date(transaction.createdAt).toLocaleDateString()}
        </td>
        <td className="px-4 py-2 text-gray-700">Payment for Service</td>
        <td className="px-4 py-2 text-gray-700">₦{transaction.amount}</td>
        <td className="px-4 py-2 text-gray-700">
          <div className="flex items-center gap-1">
            {transaction.status === "success" ? (
              <CheckCircle className="text-green-500" size={18} />
            ) : (
              <XCircle className="text-red-500" size={18} />
            )}
            <span>
              {transaction.status.charAt(0).toUpperCase() +
                transaction.status.slice(1)}
            </span>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
);

const History: React.FC = () => {
  const token = useSelector((state: any) => state.merchant.token);

  const TransHistory = useSelector((state: any) => state.merchant.transactions);
  console.log(TransHistory);

  const dispatch = useDispatch();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const url = `${import.meta.env.VITE_DEVE_URL}/history`;

  const getHistory = async () => {
    try {
      const res = await axios.get(url, { headers });
      console.log(res.data);
      dispatch(setHistory(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <div className="w-full bg-gray-100 px-6 py-4">
        <h2 className="font-semibold text-lg">Transaction History</h2>
      </div>
      <div className="overflow-x-auto">
        {" "}
        {/* Add overflow-x-auto here */}
        <table className="w-full min-w-full  table divide-y divide-gray-200 bg-white text-sm">
          <TableHeader />
          <TableBody data={TransHistory} />
        </table>
      </div>
    </div>
  );
};

export default History;
