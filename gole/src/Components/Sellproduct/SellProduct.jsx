import React, { useEffect, useState } from "react";

import { IoMdArrowBack } from "react-icons/io";
import { AiFillCloseSquare } from "react-icons/ai";
import ProductType from "./ProductType";
import ProductDes from "./ProductDes";
import ProductPrice from "./ProductPrice";
import ContactDetails from "./ContactDetails";
import ReviewDetails from "./ReviewDetails";
import ProductImages from "./ProductImages";

export default function SellProduct() {
  const [proDes,setproDes] = useState("");
  const [Email,setEmail] = useState("");
  const [selectedValue , setSelectedValue] = useState("");
  const [Name,setName] = useState("");
  const [isDisable ,setIsDisable] = useState(true);
  const [selectedValueContact , setselectedValueContact] = useState("");
  
  
  const handleSelectChangeContact = (val) =>{
    setselectedValueContact(val);
  }
  
  const setNameHandler = (val) => {
    setName(val);
  }

  const setproDesHandler = (val)=>{
    setproDes(val);
  }

  const setEmailHandler = (val)=>{
    setEmail(val);
  }

  const setSelectedValueHandler = (val) => {
    setSelectedValue(val);
  }

  useEffect(() => {
    const hasEmpty = proDes.trim() === '' || Email.trim() === '' || selectedValue.trim() === '' || selectedValueContact.trim() === '' || Name.trim() === '';
    setIsDisable(hasEmpty);
  },[proDes,Email,selectedValue,selectedValueContact,Name])
  

  
  return (
    <div>
      <div className="container w-[60%] mx-auto">
        <div className="absolute bg-white px-4 py-2 rounded border">
          <div className="flex items-center gap-2 font-bold cursor-pointer">
            <IoMdArrowBack />
            <p>BACK</p>
          </div>
        </div>
        <h1 className="text-center mt-5 font-bold text-[28px]">
          POST YOUR PRODUCT
        </h1>

      {/* Product Category */}
        <ProductType/>

        {/* Product Details */}
        <ProductDes setEmailHandler={setEmailHandler} Email={Email}  setproDesHandler={setproDesHandler} proDes={proDes} setSelectedValueHandler={setSelectedValueHandler} selectedValue={selectedValue} />

        {/* Product Price  */}
        <ProductPrice/>
        

        {/* Product images */}
        <ProductImages />

        {/* Contact Details */}
        <ContactDetails handleSelectChangeContact={handleSelectChangeContact} selectedValueContact={selectedValueContact}/>

        {/* Review Details */}
        <ReviewDetails setNameHandler={setNameHandler} Name={Name}/>
       

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
                  <button
                    type="button"
                    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    disabled={isDisable}
                  >
                    Post Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
