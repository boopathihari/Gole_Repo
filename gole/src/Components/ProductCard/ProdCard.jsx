import React, { useState } from "react";
// import { Card } from "flowbite-react";
import ProdImg from "./fan.jpg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./ProdCard.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";

export default function ProdCard({ productId, ProName, proAmount, imgsrc }) {
  const [isWishListClicked, setWishListClicked] = useState(false);

  const wishListHandler = () => {
    setWishListClicked(!isWishListClicked);
  };

  const wishListStyle = isWishListClicked
    ? "absolute top-[1rem] right-[1rem] z-50 bg-[#495057] w-10 h-10 flex items-center justify-center rounded-full "
    : "absolute top-[1rem] right-[1rem] z-50 bg-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-200";

  return (
    // <Card imgAlt="" imgSrc={imgsrc}   className="Customcard items-center w-[23%] p-2 max-sm:flex-col max-lg:w-[32%] max-sm:w-[100%]">
    //   <a href="#">
    //   <div className="mb-2 flex items-center">
    //     <span className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
    //       <FaIndianRupeeSign /> {proAmount}
    //     </span>
    //   </div>

    //     <h5 className="text-xl mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
    //       <p>{ProName}</p>
    //     </h5>
    //   </a>

    //   <div className="flex items-center justify-between gap-[12px]  flex-col">
    //     <a
    //       className="rounded-lg flex items-center justify-center bg-white border border-solid text-[12px] border-black  px-2 py-2.5 text-center text-sm font-medium text-[#343a40] focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 gap-1 w-[100%]"
    //       href="#"
    //     >
    //       <AiOutlineHeart  className="h-[20px] w-[20px]"/>
    //       <p className="text-[14px]">Add to Wishlist</p>
    //     </a>

    //     <a
    //       className="rounded-lg text-[12px] bg-[#1c7ed6] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1864ab] focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 w-[100%] "
    //     >
    //     <Link to='/ProductDetails'>
    //       <p className="text-[14px]">Know More</p>
    //       </Link>
    //     </a>
    //   </div>
    // </Card>

    <div className="Card flex-auto w-[18rem]">
      <a
        className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <div className={wishListStyle} onClick={wishListHandler}>
            {" "}
            {isWishListClicked ? (
              <IoIosHeart className="text-red-500 text-xl" />
            ) : (
              <IoIosHeartEmpty className="text-gray-500 text-xl" />
            )}
          </div>
          <img
            className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={imgsrc}
            alt="Image Description"
          />
        </div>
        <div className="p-4 md:p-5 ">
          <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <FaIndianRupeeSign /> {proAmount}
          </span>
          <h3 className="text-lg font-bold hover:text-[#339af0] text-gray-800 dark:text-white">
            {ProName}
          </h3>
          <p className="mt-1 dark:text-gray-400 text-gray-500 text-base  line-clamp-1">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content.
          </p>
        </div>
        <div className="post-info flex justify-between mb-4 pr-2 pl-2 text-gray-500">
          <div className="location flex gap-1 items-center text-sm">
            <CiLocationOn className="text-xl" /> GCT,Coimbatore
          </div>
          <div className="date flex gap-1 items-center text-sm">
            <CiCalendar className="text-xl" /> 3 days ago
          </div>
        </div>
      </a>
    </div>
  );
}

// style={{position: absolute;
//   top: 1rem;
//   right: 1rem;
//   z-index: 111111;
//   font-size: 1.5rem;
//   background: white;
//   border-radius: 50%;}}
