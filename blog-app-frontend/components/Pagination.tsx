import React from "react";
import qs from "qs";
import { TDirection } from "../types";
import { useRouter } from "next/router";

interface IPropTypes {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropTypes) => {
  const router = useRouter();

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }
    const queryString = qs.stringify({
      search: router?.query?.search || "",
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };

  return (
    <div className="flex items-center justify-center mt-12 space-x-4">
      <button
        onClick={() => handlePaginate(-1)}
        className={`bg-primary py-2 px-4 text-white w-24 rounded ${
          isPrevDisabled() && "disabled"
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`bg-primary py-2 px-4 text-white w-24 rounded ${
          isNextDisabled() && "disabled"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
