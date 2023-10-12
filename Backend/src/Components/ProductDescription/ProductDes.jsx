import React from "react";
import Carousel from "../CarouselComp";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Avatar from "../Navbar/Avatar";
import src from "../profile.jpg";
import { IoIosArrowDropright } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import '../ProductDescription/ProductDes.css';
import gmap from './gmap.png';

import { Button, Card } from "flowbite-react";

export default function ProductDes() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="flex gap-4 mb-10">
        <div class="flex-initial w-[70%] DescCard">
          <Card className="w-full h-3/4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Description</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Here are the biggest
                enterprise technology acquisitions of 2021 so far, in reverse
                chronological order. Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
          </Card>
        </div>
        <div class="flex flex-col w-[30%] sideCard gap-y-3">
          <Card className="w-full">
            <h5 className="text-2xl font-bold tracking-tight flex  items-center justify-between gap-1 text-gray-900 dark:text-white">
              <div className="flex items-center">
                <FaIndianRupeeSign /> <p>600</p>
              </div>
              <div className="flex items-center gap-4">
                <AiOutlineShareAlt />
                <AiOutlineHeart />
              </div>
            </h5>
            <p className="text-gray-500 font-medium">Table Fan</p>

            <p className="text-gray-500 font-medium text-[10px]">
              
              <span className="font-bold">Posted on:</span> Jun 09
            </p>
          </Card>

          <Card className="w-full">
            <h5 className="text-2xl font-bold tracking-tight flex  items-center justify-between gap-1 text-gray-900 dark:text-white">
              <div className="flex items-center gap-2">
                <Avatar alt="User settings" img={src} /> <p className="text-[20px]">Boopathi Hari</p>
              </div>
              <div className="flex items-center gap-4 cursor-pointer">
                <IoIosArrowDropright />
              </div>
            </h5>
            <Button color="light">Chat with Seller</Button>

            <p className="text-gray-500 font-medium text-[14px]">
             
              <span className="font-medium flex gap-2 items-center justify-center"><BsTelephone/> +917092751462</span>
            </p>
          </Card>


          <Card className="w-full">
            <h5 className="text-2xl font-bold tracking-tight flex  items-center justify-between gap-1 text-gray-900 dark:text-white">
              <div className="flex items-center gap-2">
                <p className="text-[20px]">Posted in</p>
              </div>

            </h5>
            <p className="text-gray-500 font-medium text-[12px]">Government college of Technology, Coimbatore</p>

            <img src={gmap} alt="" />
           
          </Card>
        </div>
      </div>
    </div>
  );
}
