import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react";

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
  <thead className="text-left">
    <tr>
      {["ID", "Date", "Description", "Amount", "Status"].map((heading, idx) => (
        <th
          key={idx}
          className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
        >
          {heading}
        </th>
      ))}
    </tr>
  </thead>
);

// Table Body component
const TableBody: React.FC<{ data: Transaction[] }> = ({ data }) => (
  <tbody className="divide-y  divide-gray-200">
    {data.map((transaction) => (
      <tr key={transaction.id}>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {transaction.id}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {transaction.date}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {transaction.description}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          ${transaction.amount.toFixed(2)}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-1">
          {transaction.status === "completed" ? (
            <CheckCircle className="text-green-500" size={18} />
          ) : (
            <XCircle className="text-red-500" size={18} />
          )}
          <span>
            {transaction.status.charAt(0).toUpperCase() +
              transaction.status.slice(1)}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
);

// Pagination component
const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
    <ol className="flex justify-end gap-1 text-xs font-medium">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`inline-flex items-center justify-center rounded border px-3 py-2 text-gray-900 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "border-gray-100 bg-white"
          }`}
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>
      </li>
      {Array.from({ length: totalPages }).map((_, index) => (
        <li key={index}>
          <button
            onClick={() => onPageChange(index + 1)}
            className={`block rounded px-3  leading-8 text-center ${
              index + 1 === currentPage
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 border-gray-100"
            }`}
          >
            {index + 1}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`inline-flex items-center justify-center rounded border px-3 py-2 text-gray-900 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "border-gray-100 bg-white"
          }`}
          aria-label="Next Page"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </li>
    </ol>
  </div>
);

const History: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2; // Adjust this as needed
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = transactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="rounded-lg border border-gray-200 scrollbar-thin overflow-y-scroll scrollbar-hide">
      <div className=" w-full h-[10vh] bg-gray-300 rounded flex justify-start items-center px-6">
        <p className="font-semibold text-lg">Transaction History</p>
      </div>
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <TableHeader />
          <TableBody data={paginatedData} />
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default History;
