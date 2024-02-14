import React, { useState } from "react";
import Input from "./Input";

export default function ReviewDetails({setNameHandler,Name}) {
  const [isErrorName,setIsErrorName] = useState(true);
  const [showIconName,setShowIconName] = useState(false);
  const [isSuccessName,setIsSuccessName] = useState(false);

  const Namehandler = (e) =>{
    const val = e.target.value;
    setNameHandler(val);

      if(val.trim() !== ''){
        setIsErrorName(true);
        setIsSuccessName(true);
      }

      if(val.length > 2){
        setShowIconName(true);
      }else{
        setShowIconName(false);
      }
    }

    const blurHandler = () => {
      if (Name.trim() !== '' && Name.length > 2) {
        setIsErrorName(true);
        setIsSuccessName(true);
      }else{
        setIsErrorName(false);
        setIsSuccessName(false);
      }
    }

   

  return (
    <div>
      <div className="contact-details mt-[18px] shadow-sm rounded-2xl mb-5 h-fit">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Review Your Details
            </h3>
          </div>
          <div className="p-4 md:p-5">
            <div className="flex gap-3">
              <div className="w-[12%]">
                <img
                  className="w-20 h-20 rounded-full absolute"
                  src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <div className="w-20 h-20 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                  <img
                    className="hidden group-hover:block w-12"
                    src="https://www.svgrepo.com/show/33565/upload.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex-auto">
              <Input tag="input" label="Name*" type="text" ErrorMsg="Must contain between 3 and 30 characters"  value={Name} onchange={Namehandler} onBlur={blurHandler} isError={isErrorName} showIcon={showIconName} isSuccess={isSuccessName} />
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
    </div>
  );
}
