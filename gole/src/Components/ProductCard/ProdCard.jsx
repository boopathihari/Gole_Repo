import React from "react";
import { Card } from "flowbite-react";
import ProdImg from "./fan.jpg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";



export default function ProdCard({productId,ProName,proAmount,imgsrc}) {
  
  return (
    <Card imgAlt="" imgSrc={imgsrc}   className="Customcard items-center w-[23%] p-2 max-sm:flex-col max-lg:w-[32%] max-sm:w-[100%]">
      <a href="#">
      <div className="mb-2 flex items-center">
        <span className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          <FaIndianRupeeSign /> {proAmount}
        </span>
      </div>

        <h5 className="text-xl mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>{ProName}</p>
        </h5>
      </a>
      
      <div className="flex items-center justify-between gap-[12px]  flex-col">
        <a
          className="rounded-lg flex items-center justify-center bg-white border border-solid text-[12px] border-black  px-2 py-2.5 text-center text-sm font-medium text-[#343a40] focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 gap-1 w-[100%]"
          href="#"
        >
          <AiOutlineHeart  className="h-[20px] w-[20px]"/>
          <p className="text-[14px]">Add to Wishlist</p>
        </a>

        <a
          className="rounded-lg text-[12px] bg-[#1c7ed6] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1864ab] focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 w-[100%] "
          href="#"
        >
          <Link to={`/Product/${productId}`}>
          <p className="text-[14px]">Know More</p>
          </Link>
        </a>
      </div>
    </Card>
  );
}
