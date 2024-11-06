import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";
import Buttons from "@/app/ui/buttons/page";

interface DropdownButtonProps {
  input: any;
  onClick: (item: any) => void;
  placeholder?: string;
}

const DropdownButton = ({
  input,
  onClick,
  placeholder,
}: DropdownButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [dropdownShow, setDropdownShow] = useState(placeholder || selectedItem);
  const handleSelection = (item: any) => {
    setSelectedItem(item);
    setDropdownOpen(false);
    setDropdownShow(item.name);
    onClick(item); // Ensure parent component updates immediately
  };
  return (
    <ClickOutside
      onClick={() => setDropdownOpen(false)}
      className="border-1 relative  border-cyan-950"
    >
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        // className="border-1 flex items-center gap-4  border-cyan-950"
        className="inline-flex items-center justify-center rounded-md border border-meta-3 px-10 py-4 text-center font-medium text-meta-3 hover:bg-opacity-90 xsm:h-12 xsm:w-full xsm:p-2 md:min-w-fit  lg:px-8 xl:px-10"
        href="#"
      >
        {/* <span className="border-1 hidden border-cyan-950 text-right lg:block"> */}
        <span className="block pr-3 text-sm font-medium text-black dark:text-white xsm:block">
          {dropdownShow}
        </span>
        {/* </span> */}

        {/* {dropdownShow} */}
        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div className="absolute right-0 z-99999 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            {input.map((item: any, index: any) => (
              <li key={index}>
                <Link
                  href={"#"}
                  className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                  onClick={() => {
                    handleSelection(item);
                  }}
                >
                  {item.name} {item.supplier && ` by ${item.supplier}`}
                </Link>
              </li>
            ))}
          </ul>
          {/* <button
            onClick={onClick} // Added to handle logout or other actions
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            Log Out
          </button> */}
        </div>
      )}
      {/* Dropdown End */}
    </ClickOutside>
  );
};

export default DropdownButton;
