import { useEffect } from "react";
import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/solid";

interface PaginationProps {
  page: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ page, setPage, total }: PaginationProps) => {
  const show1ToLeft = () => page > 2 && total > 2;
  const show2ToLeft = () => total > 3 && page > 3;
  const showLeftDots = () => page - 2 > 2;
  const show1ToRight = () => page < total - 1 && total > 2;
  const show2ToRight = () => page < total - 2 && total > 3;
  const showRightDots = () => page + 2 < total - 1;

  useEffect(() => {
    console.log("page is:", page);
  }, [page]);
  return (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px ml-10 h-10"
      aria-label="Pagination"
    >
      <span
        className={`relative inline-flex items-center rounded-l-md py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
          page > 1 ? "bg-white" : "bg-gray-200"
        }`}
      >
        <span className="sr-only">Previous</span>
        <button
          onClick={() => setPage(page - 1)}
          className="p-2 focus:outline-none active:bg-gray-300"
          disabled={page === 1}
        >
          <ArrowSmLeftIcon
            className={`w-6 h-6 ${page > 1 ? "text-black" : "text-gray-400"}`}
          />
        </button>
      </span>
      {page > 1 && (
        <button
          onClick={() => setPage(1)}
          className="relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          1
        </button>
      )}
      {(show2ToLeft() && showLeftDots() && (
        <span className="relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
      )) ||
        (show2ToLeft() && (
          <button
            onClick={() => setPage(page - 2)}
            className="relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            {page - 2}
          </button>
        ))}
      {show1ToLeft() && (
        <button
          onClick={() => setPage(page - 1)}
          className="relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {page - 1}
        </button>
      )}
      <span className="relative  items-center px-4 py-2 border border-gray-300 bg-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
        {page}
      </span>
      {show1ToRight() && (
        <button
          onClick={() => setPage(page + 1)}
          className="relative  items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {page + 1}
        </button>
      )}
      {(show2ToRight() && showRightDots() && (
        <span className="relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
      )) ||
        (show2ToRight() && (
          <button
            onClick={() => setPage(page + 2)}
            className="relative  items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            {page + 2}
          </button>
        ))}
      {page + 1 <= total && (
        <button
          onClick={() => setPage(total)}
          className="relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {total}
        </button>
      )}
      <span className="relative inline-flex items-center py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
        <span className="sr-only">Next</span>
        <button
          onClick={() => setPage(page + 1)}
          className="p-2 focus:outline-none active:bg-gray-300"
          disabled={page === total}
        >
          <ArrowSmRightIcon
            className={`w-6 h-6 ${page < total ? "text-black" : "text-gray-400"}`}
          />
        </button>
      </span>
    </nav>
  );
};

export default Pagination;
