import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
  iataCode?: string;
  additionalInfo?: string;
}

const Breadcrumb = ({ pageName, iataCode, additionalInfo }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          {pageName}
          {iataCode && (
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              ({iataCode})
            </span>
          )}
        </h2>
        {additionalInfo && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {additionalInfo}
          </div>
        )}
      </div>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
