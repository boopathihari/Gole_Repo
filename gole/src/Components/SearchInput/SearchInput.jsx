import React from 'react'
import { BsSearch } from 'react-icons/bs';



export default function SearchInput() {
    

  return (
      <div className="relative">
      <input
        type="text"
        className="border rounded-lg py-2 px-3 pr-10 placeholder-gray-500 text-gray-700 w-[400px] max-sm:w-[100%] focus:outline-none focus:ring-[#228be6] focus:border-[#228be6]"
        placeholder="Search..."
      />
      <button className="absolute hover:text-white hover:border-none inset-y-0 right-0 px-4 py-2 bg-none rounded-r-lg bg-[#1c7ed6] focus:outline-none focus:ring focus:border-blue-300 focus:border-none">
      <BsSearch className='text-white '/>
      </button>
    </div>
  )
}
