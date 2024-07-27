import React, { useEffect, useRef, useState } from "react";
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

export default function ProdCard({
  key,
  product,
  addToWishlist,
  removeFromWishlist,
}) {
  let isclicked = false;
  const products = JSON.parse(localStorage.getItem("wishlist"));
  if (products != null) {
    const productItem = products.filter((pro) => pro.id == product.id);
    if (productItem.length > 0) {
      isclicked = productItem[0].iswishListclicked;
    }
  }

  // const isClicked = productItem[0].isWishListClicked != undefined ? true : false;
  const [isWishListClicked, setWishListClicked] = useState(isclicked);
  const { _id, productName, productDescription, productPrice, images } =
    product;

  const isFirstRender = useRef(true);
  const isSecondRender = useRef(true);

  const wishListHandler = () => {
    setWishListClicked(!isWishListClicked);
  };

  useEffect(() => {
    // Skip the logic on the initial render

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isSecondRender.current) {
      isSecondRender.current = false;
      return;
    }

    if (isWishListClicked) {
      addToWishlist(product, isWishListClicked);
      console.log("product added to wishlist");
    } else {
      removeFromWishlist(_id);
      console.log("product removed from wishlist");
    }
  }, [isWishListClicked]);

  const wishListStyle = isWishListClicked
    ? "absolute top-[1rem] right-[1rem] z-10 bg-[#495057] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
    : "absolute top-[1rem] right-[1rem] z-10 bg-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 cursor-pointer";

  return (
    <Link to={`/Product/${_id}`}>
      <div className="Card  w-[18rem] z-10">
        <a className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
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
              src={"http://localhost:8000/uploads/" + images[0]}
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5 ">
            <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaIndianRupeeSign /> {productPrice}
            </span>
            <h3 className="text-lg font-bold hover:text-[#339af0] text-gray-800 dark:text-white cursor-pointer line-clamp-1">
              {productName}
            </h3>
            <p className="mt-1 dark:text-gray-400 text-gray-500 text-base  line-clamp-1">
              {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content. */}
              {productDescription}
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
    </Link>
  );
}
