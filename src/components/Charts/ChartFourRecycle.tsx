"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const MonthlyCategory = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MonthlyActualData = [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45];

const QuaterCategory = ["Q1", "Q2", "Q3", "Q4"];

const QuaterActualData = [25, 20, 30, 35];

const YearlyCategory = ["2019", "2020", "2021", "2022"];
const YearlyActualData = [10, 25, 38, 45];

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartFour: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
  const [series, setSeries] = useState([
    {
      name: "Actual",
      data: MonthlyActualData,
    },
  ]);
  const [useCategories, setCategories] = useState(MonthlyCategory);
  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#85e085"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#85e085",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },

      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "straight",
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#85e085"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: useCategories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: 100,
    },
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    switch (period) {
      case "Monthly":
        setSeries([{ name: "Actual", data: MonthlyActualData }]);
        setCategories(MonthlyCategory);
        break;
      case "Quarterly":
        setSeries([{ name: "Actual", data: QuaterActualData }]);
        setCategories(QuaterCategory);
        break;
      case "Yearly":
        setSeries([{ name: "Actual", data: YearlyActualData }]);
        setCategories(YearlyCategory);
        break;
      default:
        break;
    }
  };

  // const series = [
  //   {
  //     name: "Actual",
  //     data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
  //   },

  //   {
  //     name: "Predicted",
  //     data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
  //   },
  // ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-green-200">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-green-700"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-green-600">Recycle Rate</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
          {/* <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Predicted Catering</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div> */}
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              className={`rounded ${selectedPeriod === "Monthly" ? "bg-white" : ""} px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark`}
              onClick={() => handlePeriodChange("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`rounded ${selectedPeriod === "Quarterly" ? "bg-white" : ""} px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark`}
              onClick={() => handlePeriodChange("Quarterly")}
            >
              Quaterly
            </button>
            <button
              className={`rounded ${selectedPeriod === "Yearly" ? "bg-white" : ""} px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark`}
              onClick={() => handlePeriodChange("Yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
