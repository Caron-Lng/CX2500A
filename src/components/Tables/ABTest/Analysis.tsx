"use client";
import Image from "next/image";
import { Product, Component } from "@/types/product";
import { time } from "console";
import { use, useEffect, useState } from "react";

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
}

const AnalysisData = [
  {
    CSRM: 0.0001,
    HDC: 0.0001,
    RASM: 0.0001,
  },
  {
    CSRM: 0.0011,
    HDC: 0.0011,
    RASM: 0.0011,
  },
];

const Analysis = ({ input, dashboard }: Props) => {
  const [data, setData] = useState(AnalysisData[input]);

  useEffect(() => {
    setData(AnalysisData[input]);
    console.log("Analysis updated:", input);
  }, [input]);

  const renderSection = (title: string, unit: string, value: number) => (
    <div className="mb-8 border-b-2 border-stroke pb-8 dark:border-strokedark">
      <div className="flex w-full justify-between">
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
    <div className=" flex w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* Header */}
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Analysis
        </h3>
      </div>

      {/* Business Perspective */}
      <div className="border-t border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Business Perspective
        </h4>

        {renderSection("Cost per Available Seat Mile", "$/mile", data.CSRM)}
        {renderSection("Handling & Disposal Cost", "HKD/Tonnes", data.weight)}
        {renderSection(
          "Revenue per Available seat mile",
          "$/mile",
          data.weight,
        )}
        {renderSection("Total Operating Costs", "HKD", data.weight)}
        {renderSection("Total Operating Revenue", "HKD", data.weight)}
      </div>

      {/* Sustainability Perspective */}
      <div className="border-t-2 border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Sustainability Perspective
        </h4>

        {renderSection("Waste per seat mile", "kg/ASM", data.weight)}
        {renderSection("Carbon Emissions", "g CO2/pax-km", data.weight)}
        {renderSection("Recycling Rate of In-Cabin Materials", "", data.weight)}
        {renderSection("Single-Use Plastics Reduction Rate", "%", data.weight)}
        {renderSection(
          "Sustainable Sourcing of Cabin Supplies",
          "%",
          data.weight,
        )}
        {renderSection("Fuel Efficiency", "L/ASK", data.weight)}

        {/* Last section without bottom border */}
        <div className="mb-8">
          {renderSection("Carbon Footprint Component", "kg CO2e", data.weight)}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
