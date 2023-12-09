import React, { useEffect, useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";
import { PiBookLight } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { AiFillCloseSquare } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function SellProduct() {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState("");
  const [isFileSet, setIsFileSet] = useState(false);

  useEffect(() => {
    let imgLimt = 8;

    console.log(files.length);
    if (files.length > imgLimt) {
      console.log("Hello");
      setMessage("Only 8 images can be upload");
      setFile([]);
      return;
    }

    setIsFileSet(true);
  }, [files]);

  const handleFile = (e) => {
    setIsFileSet(false);
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImgType = ["image/jpeg", "image/png"];

      if (validImgType.includes(fileType)) {
        console.log(file[i]);
        setFile((prevFiles) => [...prevFiles, file[i]]);
      } else {
        setMessage("Only jpeg or png images accepted");
      }
    }
  };

  const removeImage = (filename) => {
    setFile(files.filter((file) => file.name != filename));
  };

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
        <div className="product-cat mt-[18px] shadow-sm rounded-2xl">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Product Type
              </h3>
            </div>

            <div className="category-list flex mt-5 mx-5 gap-5 ">
              <div class="flex flex-col cursor-pointer hover:bg-[#f1f3f5] bg-[#f8f9fa] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-[25rem] h-fit flex-auto">
                <div class="p-4 md:p-7">
                  <div className="icon bg-white w-fit p-2 text-[28px] rounded mb-[20px]">
                    <CiMobile3 />
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    Mobile Phone
                  </h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400 text-[16px]">
                    100 items
                  </p>
                </div>
              </div>

              <div class="flex flex-col cursor-pointer hover:bg-[#f1f3f5] bg-[#f8f9fa] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-[25rem] h-fit flex-auto">
                <div class="p-4 md:p-7">
                  <div className="icon bg-white w-fit p-2 text-[28px] rounded mb-[20px]">
                    <CiLaptop />
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    Laptop an PC
                  </h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400 text-[16px]">
                    64 items
                  </p>
                </div>
              </div>

              <div class="flex flex-col cursor-pointer hover:bg-[#f1f3f5] bg-[#f8f9fa] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-[25rem] h-fit flex-auto">
                <div class="p-4 md:p-7">
                  <div className="icon bg-white w-fit p-2 text-[28px] rounded mb-[20px]">
                    <PiBookLight />
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    Books
                  </h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400 text-[16px]">
                    100 items
                  </p>
                </div>
              </div>

              <div class="flex flex-col cursor-pointer hover:bg-[#f1f3f5] bg-[#f8f9fa] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-[25rem] h-fit flex-auto">
                <div class="p-4 md:p-7">
                  <div className="icon bg-white w-fit p-2 text-[28px] rounded mb-[20px]">
                    <IoAddOutline />
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    Add Category
                  </h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400 text-[16px]">
                    Others
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:p-5"></div>
          </div>
        </div>

        {/* Product Details */}
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
                  <label
                    for="hs-validation-name-error"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Product Name*
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      id="hs-validation-name-error"
                      name="hs-validation-name-error"
                      className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                      aria-describedby="hs-validation-name-error-helper"
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="text-sm text-red-600 mt-2"
                    id="hs-validation-name-error-helper"
                  >
                    Please enter a Product Name.
                  </p>
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
                      class="py-3 px-4 pe-16 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    >
                      <option selected> </option>
                      <option>New</option>
                      <option>Used</option>
                    </select>
                    <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                      <svg
                        class="flex-shrink-0 h-4 w-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                      </svg>
                    </div>
                  </div>
                  <p class="text-sm text-red-600 mt-2">
                    Please select a valid state.
                  </p>
                </div>
              </div>

              <div className="w-[100%]">
                <label
                  for="hs-validation-name-error"
                  class="block text-sm font-medium mb-2 dark:text-white"
                >
                  Product Description*
                </label>
                <div class="relative">
                  <textarea
                    id="hs-validation-name-error"
                    class="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    rows="3"
                    placeholder="Enter the product description..."
                    aria-describedby="hs-validation-name-error-helper"
                    required
                  ></textarea>
                  <div class="absolute top-0 end-0 flex items-center pointer-events-none p-3">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Price  */}

        <div className="product-description mt-[18px] shadow-sm rounded-2xl">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Product Price
              </h3>
            </div>
            <div className="p-4 md:p-5">
              <div>
                <label
                  for="hs-input-with-leading-and-trailing-icon"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Price*
                </label>
                <div className="relative w-[50%]">
                  <input
                    type="text"
                    id="hs-input-with-leading-and-trailing-icon"
                    name="hs-input-with-leading-and-trailing-icon"
                    className="py-3 px-4 ps-9 pe-16 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <span className="text-gray-500">
                      <MdCurrencyRupee />
                    </span>
                  </div>
                  <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                    <span className="text-gray-500">IND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product images */}
        <div className="product-images mt-[18px] shadow-sm rounded-2xl">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Product Images *UPLOAD UP TO 8 IMAGES
              </h3>
            </div>
            <div class="p-4 md:p-5">
              <div class="flex justify-center  items-center px-3">
                <div class="rounded-lg shadow-xl bg-gray-50 md:w-1/2 w-[360px]">
                  <div class="m-4">
                    <span className="flex justify-center items-center text-[12px] mb-4 text-red-500">
                      {message}
                    </span>
                    <div class="flex items-center justify-center w-full">
                      <label class="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div class="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Add photo
                          </p>
                        </div>
                        <input
                          type="file"
                          onChange={handleFile}
                          class="opacity-0"
                          multiple="multiple"
                          name="files[]"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mt-14 justify-start w-[70%] mx-auto  ">
                {isFileSet ? (
                  files.map((file, key) => (
                    <div key={key} className="overflow-hidden relative">
                      <IoMdClose
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        className=" absolute right-0 bg-gray-200 bg-opacity-80 w-6 h-7 cursor-pointer"
                      />
                      <img
                        className="h-32 w-32 rounded-md object-cover"
                        src={URL.createObjectURL(file)}
                      />
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
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
                    id="select-1"
                    class="py-3 px-4 pe-16 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option selected></option>
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                    <option>Delhi</option>
                  </select>
                  <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                  </div>
                </div>
                <p class="text-sm text-red-600 mt-2">
                  Please select a valid state.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Review Details */}
        <div className="contact-details mt-[18px] shadow-sm rounded-2xl mb-5 h-fit">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Review Your Details
              </h3>
            </div>
            <div className="p-4 md:p-5">
              <div className="flex gap-3">
                <div className="flex-auto">
                  <img
                    className="w-24 h-24 rounded-full absolute"
                    src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <div className="w-24 h-24 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                    <img
                      className="hidden group-hover:block w-12"
                      src="https://www.svgrepo.com/show/33565/upload.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex-auto">
                  <label
                    for="hs-validation-name-error"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Name*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-validation-name-error"
                      name="hs-validation-name-error"
                      className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                      aria-describedby="hs-validation-name-error-helper"
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="text-sm text-red-600 mt-2"
                    id="hs-validation-name-error-helper"
                  >
                    Please enter a valid email address.
                  </p>
                </div>

                <div className="flex-auto">
                  <label
                    for="hs-validation-name-error"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Your Mobile Number
                  </label>
                  <input
                    type="text"
                    class="opacity-70 pointer-events-none py-3 px-4 block w-full bg-gray-50 border-gray-500- rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="7092751462"
                    disabled
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
