"use client";
import Image from "next/image";
import { Product, Component } from "@/types/product";
import { time } from "console";
import { use, useEffect, useState } from "react";
import { on } from "events";

const productData: Product[] = [
  {
    image: "/images/product/product-01.jpg",
    name: "Product A",
    category: "Food",
    amount: 80,
    sold: 22,
    weight: 45,
    component: {
      plastic: 30,
      paper: 10,
      glass: 15,
      metal: 20,
    },
    supplier: "Supplier A",
    supplyStatus: true,
    id: 1,
  },
  {
    image: "/images/product/product-02.jpg",
    name: "Product A",
    category: "Others",
    amount: 546,
    sold: 12,
    weight: 125,
    component: {
      plastic: 20,
      paper: 30,
      glass: 25,
      metal: 25,
    },
    supplier: "Supplier B",
    supplyStatus: false,
    id: 2,
  },
  {
    image: "/images/product/product-03.jpg",
    name: "Product A",
    category: "Paper",
    amount: 43,
    sold: 64,
    weight: 247,
    component: {
      plastic: 10,
      paper: 60,
      glass: 20,
      metal: 10,
    },
    supplier: "Supplier C",
    supplyStatus: true,
    id: 3,
  },
  {
    image: "/images/product/product-04.jpg",
    name: "Product B",
    category: "Tetra Pack",
    amount: 499,
    sold: 72,
    weight: 103,
    component: {
      plastic: 15,
      paper: 25,
      glass: 30,
      metal: 30,
    },
    supplier: "Supplier A",
    supplyStatus: true,
    id: 4,
  },
  {
    image: "/images/product/product-04.jpg",
    name: "Product B",
    category: "Tetra Pack",
    amount: 499,
    sold: 72,
    weight: 103,
    component: {
      plastic: 15,
      paper: 25,
      glass: 30,
      metal: 30,
    },
    supplier: "Supplier E",
    supplyStatus: false,
    id: 5,
  },
  {
    image: "/images/product/product-04.jpg",
    name: "Product C",
    category: "Paper",
    amount: 499,
    sold: 72,
    weight: 103,
    component: {
      plastic: 15,
      paper: 25,
      glass: 30,
      metal: 30,
    },
    supplier: "Supplier F",
    supplyStatus: true,
    id: 6,
  },
  {
    image: "/images/product/product-04.jpg",
    name: "Product C",
    category: "Food",
    amount: 499,
    sold: 72,
    weight: 103,
    component: {
      plastic: 15,
      paper: 25,
      glass: 30,
      metal: 35,
    },
    supplier: "Supplier A",
    supplyStatus: false,
    id: 7,
  },
];
interface Props {
  input: any;
  dashboard?: boolean;
  output?: any;
  onScoreUpdate?: (score: number) => void;
}

const AnalysisData = [
  {
    name: "A320",
    sectors: {
      // Business Perspective
      casmTotal: 0.084, // $/mile (base A320 CASM)
      hdcTotal: 3600, // HKD/Tonnes
      rasmTotal: 0.096, // $/mile (~14% higher than CASM)
      operatingCosts: 128000000, // HKD/month (operating costs)
      operatingRevenue: 146000000, // HKD/month (revenue)

      // Sustainability Perspective
      wasteTotal: 0.13, // kg/ASM
      carbonEmissions: 115, // g CO2/pax-km (standard A320)
      recyclingRate: 24, // %
      carbonFootprint: 1250, // kg CO2e per flight
      plasticReduction: 15, // %
      sustainableSourcing: 20, // %
      fuelEfficiency: 3.0, // L/100ASK
    },
  },
  {
    name: "A320neo",
    sectors: {
      casmTotal: 0.077, // ~8% lower than A320
      hdcTotal: 3550,
      rasmTotal: 0.089,
      operatingCosts: 122000000,
      operatingRevenue: 142000000,

      wasteTotal: 0.12,
      carbonEmissions: 101, // ~12% better than A320
      recyclingRate: 26,
      carbonFootprint: 1100,
      plasticReduction: 18,
      sustainableSourcing: 22,
      fuelEfficiency: 2.5, // ~15% better than A320
    },
  },
  {
    name: "A321",
    sectors: {
      casmTotal: 0.081, // slightly better than A320 due to more seats
      hdcTotal: 3800,
      rasmTotal: 0.094,
      operatingCosts: 135000000,
      operatingRevenue: 156000000,

      wasteTotal: 0.14,
      carbonEmissions: 118, // slightly higher due to larger size
      recyclingRate: 24,
      carbonFootprint: 1400,
      plasticReduction: 15,
      sustainableSourcing: 20,
      fuelEfficiency: 3.1,
    },
  },
  {
    name: "A321neo",
    sectors: {
      casmTotal: 0.074, // best CASM in family
      hdcTotal: 3750,
      rasmTotal: 0.087,
      operatingCosts: 130000000,
      operatingRevenue: 152000000,

      wasteTotal: 0.13,
      carbonEmissions: 104, // improved efficiency
      recyclingRate: 26,
      carbonFootprint: 1250,
      plasticReduction: 18,
      sustainableSourcing: 22,
      fuelEfficiency: 2.6,
    },
  },
  {
    name: "A321neo", // Additional A321neo data set
    sectors: {
      casmTotal: 0.073, // slightly better due to route optimization
      hdcTotal: 3700,
      rasmTotal: 0.086,
      operatingCosts: 129000000,
      operatingRevenue: 151000000,

      wasteTotal: 0.12, // improved waste management
      carbonEmissions: 103, // slightly better with operational improvements
      recyclingRate: 27, // improved recycling program
      carbonFootprint: 1200,
      plasticReduction: 19, // enhanced plastic reduction initiatives
      sustainableSourcing: 23, // better sourcing practices
      fuelEfficiency: 2.55, // optimized fuel efficiency
    },
  },
  {
    name: "A321neo", // Additional A321neo data set
    sectors: {
      casmTotal: 0.083, // slightly better due to route optimization
      hdcTotal: 3700,
      rasmTotal: 0.086,
      operatingCosts: 129000000,
      operatingRevenue: 121000000,

      wasteTotal: 0.12, // improved waste management
      carbonEmissions: 98, // slightly better with operational improvements
      recyclingRate: 27, // improved recycling program
      carbonFootprint: 1200,
      plasticReduction: 19, // enhanced plastic reduction initiatives
      sustainableSourcing: 23, // better sourcing practices
      fuelEfficiency: 2.55, // optimized fuel efficiency
    },
  },
];

const weightings = {
  casmTotal: 0.1, // 10%
  hdcTotal: 0.05, // 5%
  rasmTotal: 0.15, // 15%
  operatingCosts: 0.2, // 20%
  operatingRevenue: 0.15, // 15%
  wasteTotal: 0.05, // 5%
  carbonEmissions: 0.1, // 10%
  recyclingRate: 0.1, // 10%
  plasticReduction: 0.05, // 5%
  sustainableSourcing: 0.05, // 5%
  fuelEfficiency: 0.1, // 10%
};

// Helper function to calculate the score based on weighted metrics
const calculateScore = (sectors: any) => {
  return Number(
    (
      (sectors.casmTotal * weightings.casmTotal +
        sectors.hdcTotal * weightings.hdcTotal +
        sectors.rasmTotal * weightings.rasmTotal +
        (sectors.operatingCosts / 1000) * weightings.operatingCosts + // Scale down by 1000
        (sectors.operatingRevenue / 1000) * weightings.operatingRevenue + // Scale down by 1000
        sectors.wasteTotal * weightings.wasteTotal +
        sectors.carbonEmissions * weightings.carbonEmissions +
        sectors.recyclingRate * weightings.recyclingRate +
        sectors.plasticReduction * weightings.plasticReduction +
        sectors.sustainableSourcing * weightings.sustainableSourcing +
        sectors.fuelEfficiency * weightings.fuelEfficiency) /
      100
    ).toFixed(2),
  );
};

const Analysis = ({
  input,
  dashboard = false,
  output,
  onScoreUpdate,
}: Props) => {
  const [data, setData] = useState(AnalysisData[input]);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    setData(AnalysisData[input]);
    const calculatedScore = calculateScore(AnalysisData[input].sectors);
    setScore(calculatedScore);
    if (onScoreUpdate) {
      onScoreUpdate(calculatedScore);
    }
  }, [input, onScoreUpdate]);

  const renderSection = (title: string, unit: string, value: number) => (
    <div className="mb-8 border-b-2 border-stroke pb-8 dark:border-strokedark">
      <div className="flex w-full justify-between xsm:flex-col xsm:gap-3 md:flex-row">
        <p className="text-lg font-medium text-black dark:text-white">
          {title}
        </p>
        <p className="text-lg font-medium text-black dark:text-white">
          {title.includes("Recycling") ? `${value}%` : value} {unit}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={` w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dashboard ? " col-span-7 h-125 grid-cols-7 overflow-scroll overflow-x-hidden xsm:col-span-12 sm:col-span-12 md:col-span-7" : ""}`}
    >
      {/* Header */}
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {dashboard ? "Current Status" : "Analysis"}
          {dashboard ? " : " + score : ""}
        </h3>
      </div>

      {/* Business Perspective */}
      <div className="border-t border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Business Perspective
        </h4>

        {renderSection(
          "Cost per Available Seat Mile",
          "$/mile",
          data.sectors.casmTotal,
        )}
        {renderSection(
          "Handling & Disposal Cost",
          "HKD/Tonnes",
          data.sectors.hdcTotal,
        )}
        {renderSection(
          "Revenue per Available seat mile",
          "$/mile",
          data.sectors.rasmTotal,
        )}
        {renderSection(
          "Total Operating Costs",
          "k HKD",
          data.sectors.operatingCosts / 1000,
        )}
        {renderSection(
          "Total Operating Revenue",
          "k HKD",
          data.sectors.operatingRevenue / 1000,
        )}
      </div>

      {/* Sustainability Perspective */}
      <div className="border-t-2 border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Sustainability Perspective
        </h4>

        {renderSection(
          "Waste per seat mile",
          "kg/ASM",
          data.sectors.wasteTotal,
        )}
        {renderSection(
          "Carbon Emissions",
          "g CO2/pax-km",
          data.sectors.carbonEmissions,
        )}
        {renderSection(
          "Recycling Rate of In-Cabin Materials",
          "",
          data.sectors.recyclingRate,
        )}
        {renderSection(
          "Single-Use Plastics Reduction Rate",
          "%",
          data.sectors.plasticReduction,
        )}
        {renderSection(
          "Sustainable Sourcing of Cabin Supplies",
          "%",
          data.sectors.sustainableSourcing,
        )}
        {renderSection("Fuel Efficiency", "L/ASK", data.sectors.fuelEfficiency)}

        {/* Last section without bottom border */}
        <div className="mb-8">
          {renderSection(
            "Carbon Footprint Component",
            "kg CO2e",
            data.sectors.carbonFootprint,
          )}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
