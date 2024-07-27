import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function ProductImages({ files, setFile, setIsfileHandler }) {
  const [message, setMessage] = useState("");
  const [isFileSet, setIsFileSet] = useState(false);

  useEffect(() => {
    let imgLimt = 8;
    setIsFileSet(false);

    if (files.length > imgLimt) {
      setMessage("Only 8 images can be upload");
      setFile([]);
      return;
    }

    console.log(files);
    if (files.length > 0 && files.length <= imgLimt) {
      setIsfileHandler(true);
    } else {
      setIsfileHandler(false);
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
                      className="absolute right-0 bg-gray-200 bg-opacity-80 w-6 h-7 cursor-pointer"
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
    </div>
  );
}
