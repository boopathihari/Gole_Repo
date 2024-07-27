import React, { useState } from "react";
import Input from "../Input/Input";

export default function ProductDes({
  setIsProdNameHandler,
  setIsProdDesHandler,
  setProdNameHandler,
  ProdName,
  setproDesHandler,
  proDes,
  setselectedValueConditionHandler,
  selectedValue,
}) {
  // const [proDes,setproDes] = useState("");
  const [isError, setIsError] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorDes, setIsErrorDes] = useState(true);
  const [showIconDes, setShowIconDes] = useState(false);
  const [isSuccessDes, setIsSuccessDes] = useState(false);

  const ProdNamehandler = (e) => {
    const val = e.target.value;
    setProdNameHandler(val);

    if (val.trim() !== "") {
      setIsError(true);
      setIsSuccess(true);
    }

    if (val.length > 10) {
      setShowIcon(true);
      setIsProdNameHandler(true);
    } else {
      setShowIcon(false);
      setIsProdNameHandler(false);
    }
  };

  const blurHandler = () => {
    if (ProdName.trim() !== "" && ProdName.length > 10) {
      setIsError(true);
      setIsSuccess(true);
    } else {
      setIsError(false);
      setIsSuccess(false);
    }
  };

  const Deshandler = (e) => {
    const val = e.target.value;
    setproDesHandler(val);

    if (val.trim() !== "") {
      setIsErrorDes(true);
      setIsSuccessDes(true);
    }

    if (val.length > 10) {
      setShowIconDes(true);
      setIsProdDesHandler(true);
    } else {
      setShowIconDes(false);
      setIsProdDesHandler(false);
    }
  };

  const Desblurhandler = () => {
    if (proDes.trim() !== "" && proDes.length > 10) {
      setIsErrorDes(true);
      setIsSuccessDes(true);
    } else {
      setIsErrorDes(false);
      setIsSuccessDes(false);
    }
  };

  const handleSelectChange = (e) => {
    const val = e.target.value;
    setselectedValueConditionHandler(val);
  };

  return (
    <div>
      <div className="product-details mt-[18px] shadow-sm rounded-2xl">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Product Details
            </h3>
          </div>
          <div className="p-4 md:p-5 flex gap-4 flex-col">
            <div className="flex gap-3">
              <div className="w-[50%] flex-1">
                <Input
                  tag="input"
                  label="Product Name*"
                  type="text"
                  ErrorMsg="A minimum length of 10 characters is required. Please edit the field."
                  value={ProdName}
                  onchange={ProdNamehandler}
                  onBlur={blurHandler}
                  isError={isError}
                  showIcon={showIcon}
                  isSuccess={isSuccess}
                />
              </div>

              <div className="w-[50%] flex-1">
                <label
                  for="select-1"
                  class="block text-sm font-medium mb-2 dark:text-white"
                >
                  Product Condition*
                </label>
                <div class="relative">
                  <select
                    id="select-1"
                    value={selectedValue}
                    onChange={handleSelectChange}
                    class="py-3 px-4 pe-16 block w-full  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option value="" selected>
                      {" "}
                    </option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-[100%]">
              <Input
                tag="textarea"
                label="Product Description*"
                type="text"
                ErrorMsg="A minimum length of 10 characters is required. Please edit the field."
                value={proDes}
                onchange={Deshandler}
                onBlur={Desblurhandler}
                isError={isErrorDes}
                showIcon={showIconDes}
                isSuccess={isSuccessDes}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
