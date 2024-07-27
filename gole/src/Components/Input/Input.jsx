import React from "react";

export default function Input({
  tag,
  label,
  type,
  ErrorMsg,
  value,
  onchange,
  isError,
  onBlur,
  showIcon,
  isSuccess,
}) {
  return (
    <>
      <label
        for="hs-validation-name-error"
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        {label}
      </label>

      <div className="relative">
        {tag == "input" ? (
          <>
            <input
              type={type}
              value={value}
              id="hs-validation-name-error"
              name="hs-validation-name-error"
              className={`py-3 px-4 block w-full ${
                isError
                  ? ""
                  : "border-red-500 focus:border-red-500 focus:ring-red-500"
              } ${
                isSuccess
                  ? "border-teal-500 focus:border-teal-500 focus:ring-teal-500"
                  : ""
              } rounded-lg text-sm   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`}
              required
              aria-describedby="hs-validation-name-error-helper"
              onChange={onchange}
              onBlur={onBlur}
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
              {showIcon ? (
                <svg
                  class="flex-shrink-0 h-4 w-4 text-teal-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                ""
              )}
            </div>

            {isError ? (
              ""
            ) : (
              <p
                className="text-[12px] text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                {ErrorMsg}
              </p>
            )}
          </>
        ) : (
          <>
            <textarea
              value={value}
              id="hs-validation-name-error"
              class={`py-3 px-4 w-full block w-fullrounded-lg text-sm ${
                isError
                  ? ""
                  : "border-red-500 focus:border-red-500 focus:ring-red-500"
              } ${
                isSuccess
                  ? "border-teal-500 focus:border-teal-500 focus:ring-teal-500"
                  : ""
              } disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
              rows="3"
              placeholder="Enter the product description..."
              aria-describedby="hs-validation-name-error-helper"
              onChange={onchange}
              onBlur={onBlur}
              required
            ></textarea>
            <div class="absolute top-0 end-0 flex items-center pointer-events-none p-3">
              {showIcon ? (
                <svg
                  class="flex-shrink-0 h-4 w-4 text-teal-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                ""
              )}
            </div>

            {isError ? (
              ""
            ) : (
              <p
                className="text-[12px] text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                {ErrorMsg}
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}
