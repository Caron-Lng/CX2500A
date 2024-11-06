import { BRAND } from "@/types/brand";
import Image from "next/image";

// Define a new type for food items
type procurementItems = {
  name: string;
  quantity: number;
};

const procurementItemsData: procurementItems[] = [
  {
    name: "Sanitizing Wipes",
    quantity: 200,
  },
  {
    name: "Inflight Magazine",
    quantity: 300,
  },
  {
    name: "Blankets",
    quantity: 50,
  },
  {
    name: "Earplugs",
    quantity: 70,
  },
  {
    name: "Single Luggage Strap",
    quantity: 3,
  },
  {
    name: "Aircraft Model",
    quantity: 3,
  },
  {
    name: "Luggage Tag",
    quantity: 7,
  },
];

const ProcurementOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Estimated Procurement Item Quantity
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-2">
          <div className="p-2.5 xl:p-5">
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

        {procurementItemsData.map((item, key) => (
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 ${
              key === procurementItemsData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className=" text-black dark:text-white sm:block">
                {item.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcurementOne;
