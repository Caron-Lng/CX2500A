import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";

// import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

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
      <Breadcrumb pageName="Estimated Food Quantity" />

      {/* Use flex to arrange tables side by side */}
      <div className="flex gap-10">
        {/* Set a width for each table to ensure they fit side by side */}
        <div className="flex-1">
          <TableOne />
        </div>
        <div className="flex-1">
          <TableTwo /> {/* Render the second table */}
        </div>
      </div>

      
    </DefaultLayout>
  );
};

export default TablesPage;
