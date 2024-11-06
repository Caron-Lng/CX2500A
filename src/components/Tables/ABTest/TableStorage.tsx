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
}

const ProductDetails = ({ input }: Props) => {
  const [products, setProducts] = useState<Product>(input);
  useEffect(() => {
    setProducts(input);
    console.log("ProductDetails updated:", input);
  }, [input]);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          <span className="text-blue-500 dark:text-blue-300">
            {products.name}
          </span>{" "}
          by{" "}
          <span className="text-green-500 dark:text-green-300">
            {products.supplier}
          </span>
        </h3>
      </div>

      {
        <div
          className="grid-cols grid border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-1 md:px-6 2xl:px-7.5"
          // key={key}
        >
          <div className=" flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="w-full rounded-md">
                <Image
                  src={products.image}
                  width={200}
                  height={200}
                  alt="Product"
                />
              </div>
              <h1 className=" text-xl text-black dark:text-white">
                {products.name}
              </h1>
            </div>
          </div>
          <div className="col-span-2 flex  items-center justify-between">
            <div className="col-span-2 flex items-center">
              <h1 className="font-bold">Product Type</h1>
            </div>
            <p className="text-sm text-black dark:text-white">
              {products.category}
            </p>
          </div>
          <div className="col-span-2 flex  items-center justify-between">
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Supplier</p>
            </div>
            <p className=" flex font-extrabold text-black dark:text-white">
              {products.supplier}
            </p>
          </div>
        </div>
      }
      <div className="grid-cols grid border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-1 md:px-6 2xl:px-7.5">
        <div className="col-span-2 hidden items-center justify-between sm:flex">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Component</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex  flex-col justify-between">
            {Object.entries(products.component).map(([key, value]) => (
              <div
                className=" flex flex-row justify-between text-lg text-black dark:text-white"
                key={key}
              >
                <p>{`${key.charAt(0).toUpperCase() + key.slice(1)}`}</p>
                <p>{`${value}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid-cols grid border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-1 md:px-6 2xl:px-7.5">
        <div className="col-span-2  flex items-center justify-between">
          <div className="col-span-2 flex items-center">
            <p className="font-bold">Weight</p>
          </div>

          <p className="text-lg text-black dark:text-white">
            {products.weight}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
