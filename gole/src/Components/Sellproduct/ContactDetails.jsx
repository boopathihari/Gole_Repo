import React from 'react'

export default function ContactDetails() {
  return (
    <div>
      <div className="contact-details mt-[18px] shadow-sm rounded-2xl">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Contact Details
              </h3>
            </div>
            <div class="p-4 md:p-5">
              <div className="w-[50%]">
                <label
                  for="select-1"
                  class="block text-sm font-medium mb-2 dark:text-white"
                >
                  State*
                </label>
                <div class="relative">
                  <select
                    id="select-1"
                    class="py-3 px-4 pe-16 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option selected></option>
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                    <option>Delhi</option>
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
          </div>
        </div>
    </div>
  )
}
