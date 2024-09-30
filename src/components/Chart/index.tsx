import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { setHistory } from "../../Global/Slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AreaChart: React.FC = () => {
  const [chartData, setChartData] = useState({
    labels: [] as string[], // Array of dates
    series: [] as number[], // Array of transaction values
  });

  const token = useSelector((state: any) => state.merchant.token);
  // const TransHistory = useSelector((state: any) => state.merchant.transactions);
  const dispatch = useDispatch();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const url = `${import.meta.env.VITE_DEVE_URL}/history`;

  // Fetch transaction history from API
  const getHistory = async () => {
    try {
      const res = await axios.get(url, { headers });
      const transactions = res.data.data;

      // Process the transaction data into arrays for labels (dates) and series (amounts)
      const labels = transactions.map((trans: any) => trans.createdAt);
      const series = transactions.map((trans: any) => trans.amount);

      setChartData({ labels, series });
      dispatch(setHistory(transactions)); // Update global state if needed
    } catch (error) {
      console.log("Error fetching history:", error);
    }
  };

  useEffect(() => {
    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Chart options
  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Transaction Movements",
      align: "left",
    },
    xaxis: {
      type: "datetime",
      categories: chartData.labels, // Use the API-provided dates
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  // Series data for the chart
  const series = [
    {
      name: "Transaction Amount", // Rename as per your needs
      data: chartData.series, // Use the API-provided transaction amounts
    },
  ];

  return (
    <div className="area-chart">
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
