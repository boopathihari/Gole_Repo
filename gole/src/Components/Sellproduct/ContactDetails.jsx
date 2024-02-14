import React from 'react'

export default function ContactDetails({handleSelectChangeContact, selectedValueContact}) {
  const selectChangeHandler = (e) =>{
    const val = e.target.value;
    handleSelectChangeContact(val);
  }

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
                    value={selectedValueContact}
                    onChange={selectChangeHandler}
                    id="select-1"
                    class="py-3 px-4 pe-16 block w-full  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option value="" selected></option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
