import React from "react";

export default function ProductPrice() {
  return (
    <div>
      <div className="product-details mt-[18px] shadow-sm rounded-2xl">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Product Details
            </h3>
          </div>
          <div className="p-4 md:p-5 flex gap-4 flex-col">
            <div className="flex gap-3">
              <div className="w-[50%] flex-1">
                <label
                  for="hs-validation-name-error"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Product Name*
                </label>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-validation-name-error"
                    name="hs-validation-name-error"
                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    aria-describedby="hs-validation-name-error-helper"
                  />
                  <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                    <svg
                      className="flex-shrink-0 h-4 w-4 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-sm text-red-600 mt-2"
                  id="hs-validation-name-error-helper"
                >
                  Please enter a Product Name.
                </p>
              </div>

              <div className="w-[50%] flex-1">
                <label
                  for="select-1"
                  class="block text-sm font-medium mb-2 dark:text-white"
                >
                  Product Condition*
                </label>
                <div class="relative">
                  <select
                    id="select-1"
                    class="py-3 px-4 pe-16 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option selected> </option>
                    <option>New</option>
                    <option>Used</option>
                  </select>
                  <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                  </div>
                </div>
                <p class="text-sm text-red-600 mt-2">
                  Please select a valid state.
                </p>
              </div>
            </div>

            <div className="w-[100%]">
              <label
                for="hs-validation-name-error"
                class="block text-sm font-medium mb-2 dark:text-white"
              >
                Product Description*
              </label>
              <div class="relative">
                <textarea
                  id="hs-validation-name-error"
                  class="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  rows="3"
                  placeholder="Enter the product description..."
                  aria-describedby="hs-validation-name-error-helper"
                  required
                ></textarea>
                <div class="absolute top-0 end-0 flex items-center pointer-events-none p-3">
                  <svg
                    class="flex-shrink-0 h-4 w-4 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
