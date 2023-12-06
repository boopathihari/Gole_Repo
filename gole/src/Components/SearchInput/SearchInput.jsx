import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';



export default function SearchInput({ onSearch }) {
    
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };


  return (
      <div className="relative">
      <input
        type="text"
        style={{marginBottom:'0px', width:'46rem'}}
        className="border rounded-lg mb-[0px] py-2 px-3 pr-10 placeholder-gray-500 text-gray-700  focus:outline-none focus:ring-[#228be6] focus:border-[#228be6]"
        placeholder="Search for textbooks, electronics, drafts, and more..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className="absolute hover:text-white hover:border-none inset-y-0 right-0 px-4 py-2 bg-none rounded-r-lg bg-[#1c7ed6] focus:outline-none focus:ring focus:border-blue-300 focus:border-none">
      <BsSearch className='text-white '/>
      </button>
    </div>
  )
}
