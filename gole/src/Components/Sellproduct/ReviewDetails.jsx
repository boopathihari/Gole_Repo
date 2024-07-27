import React, { useEffect, useState } from "react";
import Input from "../Input/Input";

export default function ReviewDetails({ setNameHandler }) {
  const [user, setUser] = useState(localStorage.getItem("profile"));
  const [isErrorName, setIsErrorName] = useState(true);
  const [showIconName, setShowIconName] = useState(false);
  const [isSuccessName, setIsSuccessName] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setUser(parsedProfile);
    }
  }, []);

  return (
    <div>
      <div className="contact-details mt-[18px] shadow-sm rounded-2xl mb-5 h-fit">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Review Your Details
            </h3>
          </div>
          <div className="p-4 md:p-5 flex gap-10 items-center">
            <img
              src={user.picture}
              alt="user profile"
              className="w-18 h-18 rounded-full cursor-pointer"
            />

            <div className="w-[50%]">
              <input
                type="text"
                class="opacity-70 pointer-events-none py-3 px-4 block w-full bg-gray-50 border-gray-500- rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder={user.name}
                disabled
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
