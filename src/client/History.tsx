import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

// Define a Transaction interface
interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "completed" | "failed";
}

const transactions: Transaction[] = [
  {
    id: "T001",
    date: "2023-09-10",
    description: "Payment to Vendor",
    amount: 100,
    status: "completed",
  },
  {
    id: "T002",
    date: "2023-09-12",
    description: "Refund from Store",
    amount: 50,
    status: "failed",
  },
  {
    id: "T003",
    date: "2023-09-15",
    description: "Transfer to Savings",
    amount: 200,
    status: "completed",
  },
  {
    id: "T004",
    date: "2023-09-20",
    description: "Purchase from Store",
    amount: 150,
    status: "failed",
  },
  // Add more transactions as needed
];

// Table Header component
const TableHeader: React.FC = () => (
  <thead>
    <tr>
      {["ID", "Date", "Description", "Amount", "Status"].map((heading, idx) => (
        <th key={idx} className="px-4 py-2 text-left font-medium text-gray-900">
          {heading}
        </th>
      ))}
    </tr>
  </thead>
);

// Table Body component
const TableBody: React.FC<{ data: Transaction[] }> = ({ data }) => (
  <tbody className="divide-y divide-gray-200">
    {data.map((transaction) => (
      <tr key={transaction.id}>
        <td className="px-4 py-2 font-medium text-gray-900">
          {transaction.id}
        </td>
        <td className="px-4 py-2 text-gray-700">{transaction.date}</td>
        <td className="px-4 py-2 text-gray-700">{transaction.description}</td>
        <td className="px-4 py-2 text-gray-700">
          ${transaction.amount.toFixed(2)}
        </td>
        <td className="px-4 py-2 text-gray-700">
          <div className="flex items-center gap-1">
            {transaction.status === "completed" ? (
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
          <TableBody data={transactions} />
        </table>
      </div>
    </div>
  );
};

export default History;
