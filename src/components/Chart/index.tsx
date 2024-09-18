import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const AreaChart: React.FC = () => {
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
      text: "Tranasction Movements",
      align: "left",
    },

    labels: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  const series = [
    {
      name: "STOCK ABC",
      data: [31, 40, 28, 51, 42, 109, 100],
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
