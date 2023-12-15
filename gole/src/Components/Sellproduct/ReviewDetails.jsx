import React from "react";

export default function ReviewDetails() {
  return (
    <div>
      <div className="contact-details mt-[18px] shadow-sm rounded-2xl mb-5 h-fit">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Review Your Details
            </h3>
          </div>
          <div className="p-4 md:p-5">
            <div className="flex gap-3">
              <div className="flex-auto">
                <img
                  className="w-24 h-24 rounded-full absolute"
                  src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <div className="w-24 h-24 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                  <img
                    className="hidden group-hover:block w-12"
                    src="https://www.svgrepo.com/show/33565/upload.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex-auto">
                <label
                  for="hs-validation-name-error"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Name*
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
                  Please enter a valid email address.
                </p>
              </div>

              <div className="flex-auto">
                <label
                  for="hs-validation-name-error"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Your Mobile Number
                </label>
                <input
                  type="text"
                  class="opacity-70 pointer-events-none py-3 px-4 block w-full bg-gray-50 border-gray-500- rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="7092751462"
                  disabled
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
