import React, { useState } from "react";
import { CiLaptop } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { PiDeviceMobileSpeakerLight } from "react-icons/pi";
import { PiDeviceMobileSpeakerFill } from "react-icons/pi";
import { BsLaptopFill } from "react-icons/bs";
import { RiBook3Line } from "react-icons/ri";
import { RiBook3Fill } from "react-icons/ri";
import { PiBookLight } from "react-icons/pi";
import { PiBookFill } from "react-icons/pi";
import { MdOutlineAdd } from "react-icons/md";

const CategoryType = ({Title , Items ,iconLight,iconFill,onClick , isActive}) => {
    return(
        <div
        class={`flex flex-col cursor-pointer hover:bg-[#f1f3f5] bg-[#f8f9fa]  shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-[25rem] h-fit flex-auto ${
          isActive ? "border-[2px] border-blue-500 " : "border"
        }`}
        onClick={onClick}
      >
        <div class="p-4 md:p-7">
          {isActive ? (
            <div className="icon bg-white text-blue-500 w-fit p-2 text-[28px] rounded mb-[20px]">
                {iconFill}
              
            </div>
          ) : (
            <div className="icon bg-white w-fit p-2 text-[28px] rounded mb-[20px]">
                {iconLight}
            </div>
          )}

          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            {Title}
          </h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400 text-[16px]">
            {Items}
          </p> 
        </div>
      </div>
    );
}


export default function ProductType() {
  const [MobileState, setMobileState] = useState(false);
  const [LapState, setLapState] = useState(false);
  const [BookState , setBookState] = useState(false);
  const [OtherState , setOtherState] = useState(false);


  const selectTypeHandler = () => {
    setLapState(false);
    setBookState(false);
    setOtherState(false);
    setMobileState(!MobileState);
  };

  const selectLapHandler = () =>{
    setMobileState(false);
    setBookState(false);
    setOtherState(false);
    setLapState(!LapState);
  } 

  const selectBookHandler = () => {
    setMobileState(false);
    setLapState(false);
    setOtherState(false);
    setBookState(!BookState);
  }

  const selectOtherHandler = () => {
    setMobileState(false);
    setLapState(false);
    setBookState(false);
    setOtherState(!OtherState);
  }

  return (
    <div>
      <div className="product-cat mt-[18px] shadow-sm rounded-2xl">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Product Type
            </h3>
          </div>

          <div className="category-list flex mt-5 mx-5 gap-5 ">
            <CategoryType Title="Mobile Phone" Items="100 items" iconFill={<PiDeviceMobileSpeakerFill />} iconLight={<PiDeviceMobileSpeakerLight />} onClick={selectTypeHandler} isActive={MobileState}/>

            <CategoryType Title="Laptop or PC" Items="64 items" iconFill={<BsLaptopFill />} iconLight={<CiLaptop />} onClick={selectLapHandler} isActive={LapState}/>

            <CategoryType Title="Books" Items="100 items" iconFill={<PiBookFill />} iconLight={<PiBookLight />} onClick={selectBookHandler} isActive={BookState}/>

            <CategoryType Title="Add Category" Items="Others" iconFill={<MdOutlineAdd />} iconLight={<IoAddOutline />} onClick={selectOtherHandler} isActive={OtherState}/>

          </div>
          <div class="p-4 md:p-5"></div>
        </div>
      </div>
    </div>
  );
}
