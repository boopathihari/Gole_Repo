import React from "react";
import { MdCurrencyRupee } from "react-icons/md";


export default function ProductPrice() {
  return (
    <div>
      <div className="product-description mt-[18px] shadow-sm rounded-2xl">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Product Price
            </h3>
          </div>
          <div className="p-4 md:p-5">
            <div>
              <label
                for="hs-input-with-leading-and-trailing-icon"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Price*
              </label>
              <div className="relative w-[50%]">
                <input
                  type="text"
                  id="hs-input-with-leading-and-trailing-icon"
                  name="hs-input-with-leading-and-trailing-icon"
                  className="py-3 px-4 ps-9 pe-16 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <span className="text-gray-500">
                    <MdCurrencyRupee />
                  </span>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <span className="text-gray-500">IND</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
