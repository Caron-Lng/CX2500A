"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import ProductDetails from "@/components/Tables/ABTest/TableStorage";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CardDataStats from "@/components/CardDataStats";
import DropdownMessage from "@/components/Header/DropdownMessage";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import DropdownButton from "@/components/Dropdowns/DropdownBotton";
import { Product } from "@/types/product";
import { use, useEffect, useState } from "react";

const FlightData = [
  {
    name: "B320",
    value: "B320",
  },
  {
    name: "B320N",
    value: "B320N",
  },
  {
    name: "B350",
    value: "B350",
  },
  {
    name: "B350N",
    value: "B350N",
  },
];

const RateData = [
  {
    name: "80%",
    value: "80%",
  },
  {
    name: "90%",
    value: "90%",
  },
  {
    name: "100%",
    value: "100%",
  },
];

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

const SeasonData = [
  {
    name: "Winter",
    value: "Winter",
  },
  {
    name: "Spring",
    value: "Spring",
  },
  {
    name: "Summer",
    value: "Summer",
  },
  {
    name: "Fall",
    value: "Fall",
  },
];

// export const metadata: Metadata = {
//   title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const TablesPage = () => {
  const [productA, setProductA] = useState<Product | null>(null);
  const [productB, setProductB] = useState<Product | null>(null);
  const handleProductAChange = (selectedItem: Product) => {
    console.log(selectedItem);
    console.log(productA);
    setProductA((prev) => {
      // Only update if the item is different
      if (prev?.id !== selectedItem.id) {
        return selectedItem;
      }
      return prev;
    });
  };

  const handleProductBChange = (selectedItem: Product) => {
    setProductB((prev) => {
      // Only update if the item is different
      if (prev?.id !== selectedItem.id) {
        return selectedItem;
      }
      return prev;
    });
  };
  useEffect(() => {
    // This effect will run whenever productA changes
    console.log("Product A changed:", productA);
  }, [productA]);

  useEffect(() => {
    // This effect will run whenever productB changes
    console.log("Product B changed:", productB);
  }, [productB]);
  return (
    <DefaultLayout>
      <Breadcrumb pageName="AB-testing" />
      <div className="flex flex-row gap-10">
        <DropdownButton
          input={productData}
          onClick={handleProductAChange}
          placeholder="Product A"
        />
        <DropdownButton
          input={productData}
          onClick={handleProductBChange}
          placeholder="Product B"
        />
        <DropdownButton
          input={SeasonData}
          onClick={() => {}}
          placeholder="Season"
        />
        <DropdownButton
          input={FlightData}
          onClick={() => {}}
          placeholder="Flight "
        />

        <DropdownButton
          input={RateData}
          onClick={() => {}}
          placeholder="Customer Rate"
        />
      </div>
      <div className="w-full p-4"></div>
      <div className="flex w-full flex-row gap-10">
        <div className="flex w-full flex-col gap-10">
          {productA && <ProductDetails input={productA} />}{" "}
          {/* {productA && <CSM input={productA} mockdata={mockdata} />} */}
          {/* Render only when productA is set */}
          <CardDataStats
            title="Total views"
            total="$3.456K"
            rate="0.43%"
            levelUp
          ></CardDataStats>
        </div>
        <div className="flex w-full flex-col gap-10">
          {productB && <ProductDetails input={productB} />}{" "}
          {/* Render only when productA is set */}
          <CardDataStats
            title="Total views"
            total="$3.456K"
            rate="0.43%"
            levelUp
          ></CardDataStats>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;