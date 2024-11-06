"use client";
import CateringBreadcrumb from "@/components/Breadcrumbs/CateringBreadcrumb";
import CateringOne from "@/components/Tables/CateringOne";
import CateringTwo from "@/components/Tables/CateringTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const TablesPage = () => {
  const [flightOne, setFlightOne] = useState(true);
  const [flightTwo, setFlightTwo] = useState(false);
  const [flightThree, setFlightThree] = useState(false);
  const [flightFour, setFlightFour] = useState(false);
  const [flightFive, setFlightFive] = useState(false);
  return (
    <DefaultLayout>
      <CateringBreadcrumb
        pageName="Catering"
        // iataCode="HKG-HND"
        additionalInfo="Associated with Account ID: 123456"
      />

      {/* Use flex to arrange tables side by side */}
      <div
        className="border-1 m-12 flex flex-col  rounded-sm border border-stroke bg-white p-12 px-5 pb-6 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xsm:m-1 sm:px-7.5 xl:pb-1"
        onClick={() => setFlightOne(!flightOne)}
      >
        <h1 className="mb-10 text-2xl font-semibold text-gray-800 dark:text-white">
          UO650
        </h1>
        {flightOne && (
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Set a width for each table to ensure they fit side by side */}
            <div className="flex-1">
              <CateringOne />
            </div>
            <div className="flex-1 pb-5">
              <CateringTwo />
            </div>
          </div>
        )}
      </div>
      <div
        className="border-1 m-12 flex flex-col rounded-sm  border border-stroke bg-white p-12 px-5 pb-6 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xsm:m-1 sm:px-7.5 xl:pb-1 "
        onClick={() => setFlightTwo(!flightTwo)}
      >
        <h1 className="mb-10 text-2xl font-semibold text-gray-800 dark:text-white">
          UO660
        </h1>
        {flightTwo && (
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Set a width for each table to ensure they fit side by side */}
            <div className="flex-1">
              <CateringOne />
            </div>
            <div className="flex-1 pb-5">
              <CateringTwo />
            </div>
          </div>
        )}
      </div>
      <div
        className="border-1 m-12 flex flex-col rounded-sm  border border-stroke bg-white p-12 px-5 pb-6 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xsm:m-1 xsm:px-1 sm:px-7.5 xl:pb-1"
        onClick={() => setFlightThree(!flightThree)}
      >
        <h1 className="mb-10 text-2xl font-semibold text-gray-800 dark:text-white">
          UO670
        </h1>
        {flightThree && (
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Set a width for each table to ensure they fit side by side */}
            <div className="flex-1">
              <CateringOne />
            </div>
            <div className="flex-1 pb-5">
              <CateringTwo />
            </div>
          </div>
        )}
      </div>
      <div
        className="border-1 m-12 flex flex-col rounded-sm  border border-stroke bg-white p-12 px-5 pb-6 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xsm:m-1 sm:px-7.5 xl:pb-1 "
        onClick={() => setFlightFour(!flightFour)}
      >
        <h1 className="mb-10 text-2xl font-semibold text-gray-800 dark:text-white">
          UO710
        </h1>
        {flightFour && (
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Set a width for each table to ensure they fit side by side */}
            <div className="flex-1">
              <CateringOne />
            </div>
            <div className="flex-1 pb-5">
              <CateringTwo />
            </div>
          </div>
        )}
      </div>
      <div
        className="border-1 m-12 flex flex-col rounded-sm  border border-stroke bg-white p-12 px-5 pb-6 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xsm:m-1 sm:px-7.5 xl:pb-1 "
        onClick={() => setFlightFive(!flightFive)}
      >
        <h1 className="mb-10 text-2xl font-semibold text-gray-800 dark:text-white">
          UO720
        </h1>
        {flightFive && (
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Set a width for each table to ensure they fit side by side */}
            <div className="flex-1">
              <CateringOne />
            </div>
            <div className="flex-1 pb-5">
              <CateringTwo />
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
