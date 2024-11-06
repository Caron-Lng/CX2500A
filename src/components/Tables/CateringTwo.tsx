"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define a new type for food items
type FoodItem = {
  name: string;
  quantity: number;
};

const foodItemsData: FoodItem[] = [
  {
    name: "French Toast",
    quantity: 20,
  },
  {
    name: "Street Food Combo",
    quantity: 20,
  },
  {
    name: "Sweet Red Bean Soup",
    quantity: 13,
  },
  {
    name: "Fish Siu Mai",
    quantity: 9,
  },
  {
    name: "Curry Fish Ball",
    quantity: 30,
  },
  {
    name: "Classic Sweet Red Bean Soup",
    quantity: 3,
  },
  {
    name: "Soup Bursting Pan-fried Pork Bun",
    quantity: 7,
  },
];

const CateringTwo = () => {
  // 1. State to track food items data
  const [foodItems, setFoodItems] = useState(foodItemsData);

  // 2. Function to handle quantity changes
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = [...foodItems]; // Copy of the current food items
    updatedItems[index].quantity = newQuantity; // Update quantity
    setFoodItems(updatedItems); // Update the state with the new array
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-6 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Food Quantity
      </h4>

      {/* Table layout */}
      <div className="flex flex-col">
        <div className="grid grid-cols-2 bg-gray-2 dark:bg-meta-4 sm:grid-cols-2">
          <div className="p-2.5 text-left xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Item
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantity
            </h5>
          </div>
        </div>

        {foodItems.map((food, index) => (
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 ${
              index === foodItems.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={index}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className=" text-black dark:text-white sm:block">
                {food.name}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5 ">
              <input
                type="number"
                value={food.quantity}
                onChange={(e) =>
                  handleQuantityChange(index, parseInt(e.target.value) || 0)
                }
                className="w-16 rounded border border-gray-300 text-center text-black dark:bg-gray-500 dark:text-white"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Confirm button at the bottom right */}
      <div className="mt-4 flex justify-end">
        <Link
          href="#"
          className="inline-flex items-center justify-center bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
};

export default CateringTwo;
