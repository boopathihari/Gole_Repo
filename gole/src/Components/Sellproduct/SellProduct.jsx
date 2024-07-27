import React, { useEffect, useState } from "react";

import { IoMdArrowBack } from "react-icons/io";
import { AiFillCloseSquare } from "react-icons/ai";
import ProductType from "./ProductType";
import ProductDes from "./ProductDes";
import ProductPrice from "./ProductPrice";
import ContactDetails from "./ContactDetails";
import ReviewDetails from "./ReviewDetails";
import ProductImages from "./ProductImages";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SellProduct() {
  const [proDes, setproDes] = useState("");
  const [ProdName, setProdName] = useState("");
  const [selectedValueCondition, setselectedValueCondition] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const [files, setFile] = useState([]);

  const sellerId = localStorage.getItem("userId");

  const [isDisable, setIsDisable] = useState(true);
  const [isProdName, setIsProdName] = useState(false);
  const [isProdDes, setIsProdDes] = useState(false);
  const [isfile, setIsFile] = useState(false);

  const setIsProdNameHandler = (val) => {
    setIsProdName(val);
  };

  const setIsfileHandler = (val) => {
    setIsFile(val);
  };

  const setIsProdDesHandler = (val) => {
    setIsProdDes(val);
  };

  const setproDesHandler = (val) => {
    setproDes(val);
  };

  const setProdNameHandler = (val) => {
    setProdName(val);
  };

  const setselectedValueConditionHandler = (val) => {
    setselectedValueCondition(val);
  };

  useEffect(() => {
    const hasEmpty =
      proDes.isProdDes == false ||
      isProdName == false ||
      selectedValueCondition.trim() === "" ||
      isfile == false ||
      priceValue.trim() == "";

    setIsDisable(hasEmpty);
  }, [isProdDes, isProdName, priceValue, isfile, selectedValueCondition]);

  const handleSubmit = async (event) => {
    try {
      const formData = new FormData();
      formData.append("productName", ProdName);
      formData.append("productCondition", selectedValueCondition);
      formData.append("productDescription", proDes);
      formData.append("productPrice", priceValue);
      formData.append("sellerId", sellerId);

      files.forEach((file) => {
        console.log(file);
        formData.append("file", file);
      });

      const response = await fetch("http://localhost:8000/api/sellProducts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        window.location.reload();
        console.log("Product uploaded successfully:", data);
      } else {
        console.error("Failed to upload product");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div>
      <div className="container w-[60%] mx-auto">
        <Link to="/">
          <div className="absolute bg-white px-4 py-2 rounded border">
            <div className="flex items-center gap-2 font-bold cursor-pointer">
              <IoMdArrowBack />
              <p>BACK</p>
            </div>
          </div>
        </Link>
        <h1 className="text-center mt-5 font-bold text-[28px]">
          POST YOUR PRODUCT
        </h1>

        {/* Product Category */}
        <ProductType />

        {/* Product Details */}
        <ProductDes
          setIsProdNameHandler={setIsProdNameHandler}
          setIsProdDesHandler={setIsProdDesHandler}
          setProdNameHandler={setProdNameHandler}
          ProdName={ProdName}
          setproDesHandler={setproDesHandler}
          proDes={proDes}
          setselectedValueConditionHandler={setselectedValueConditionHandler}
          selectedValue={selectedValueCondition}
        />

        {/* Product Price  */}
        <ProductPrice priceValue={priceValue} setPriceValue={setPriceValue} />

        {/* Product images */}
        <ProductImages
          files={files}
          setFile={setFile}
          setIsfileHandler={setIsfileHandler}
        />

        {/* Review Details */}
        <ReviewDetails />

        {/* Post Button */}
        <div className="contact-details mt-[18px] shadow-sm rounded-2xl mb-5 h-fit">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="p-4 md:p-5">
              <div className="flex gap-3 justify-end">
                <div className="btn-cancel">
                  <button
                    type="button"
                    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Cancel
                  </button>
                </div>

                <div className="btn-post">
                  <Link to="/">
                    <button
                      type="button"
                      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      disabled={isDisable}
                      onClick={handleSubmit}
                    >
                      Post Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
