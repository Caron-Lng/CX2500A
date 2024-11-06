import CateringBreadcrumb from "@/components/Breadcrumbs/CateringBreadcrumb";
import CateringOne from "@/components/Tables/CateringOne";
import CateringTwo from "@/components/Tables/CateringTwo";


import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <CateringBreadcrumb 
      pageName="Flight: UO650" 
      iataCode="HKG-HND" 
      additionalInfo="Departure: 14:00 PM | Arrival: 19:05 PM" 
      />


      {/* Use flex to arrange tables side by side */}
      <div className="flex gap-10">
        {/* Set a width for each table to ensure they fit side by side */}
        <div className="flex-1">
          <CateringOne/ >
        </div>
        <div className="flex-1">
          <CateringTwo /> 
        </div>
      </div>

      
    </DefaultLayout>
  );
};

export default TablesPage;
