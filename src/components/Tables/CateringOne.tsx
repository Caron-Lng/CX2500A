import { BRAND } from "@/types/brand";
import Image from "next/image";

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

const CateringOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Estimated Food Quantity
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-2">
          <div className="p-2.5xl:p-5">
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

        {foodItemsData.map((food, key) => (
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 ${
              key === foodItemsData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className=" text-black dark:text-white sm:block">
                {food.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{food.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringOne;
