import React from "react";
import { Dropdown, Navbar } from "flowbite-react";
import src from "../profile.jpg";
import Avatar from "./Avatar";
import "./CustomCss.css";
import SearchInput from "../SearchInput/SearchInput";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { Button } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className="custom-nav py-5" fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          GOLE
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-6 items-center">
        <span className=" p-[10px] rounded-md font-bold text-gray-800 max-sm:hidden cursor-pointer underline">
          {" "}
          Login{" "}
        </span>
        <span className="customChat flex items-center justify-center border border-solid border-gray-400 p-[10px] rounded-md font-bold text-gray-800 max-sm:hidden cursor-pointer">
          {" "}
          <HiOutlineChatBubbleOvalLeft className="w-[1.7rem] h-[1.7rem] cursor-pointer sm:block" />
          &nbsp; Chat{" "}
        </span>

        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={src} />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
        </Dropdown>
        <Navbar.Toggle />
        
        <Link to='/sellProduct'>
        <Button
          gradientDuoTone="purpleToBlue"
          className="font-bold max-sm:hidden"
        >
          <AiOutlinePlus className="w-[1.5rem] h-[1.5rem]" /> &nbsp; SELL
        </Button>
        </Link>
         
      </div>

      <Navbar.Collapse className="customBtn">
        <SearchInput />
        <span className="customChat flex items-center justify-center border border-solid border-gray-400 p-[8px] rounded-md sm:hidden font-bold text-gray-800">
          {" "}
          <HiOutlineChatBubbleOvalLeft className="w-[1.7rem] h-[1.7rem] cursor-pointer sm:hidden" />
          &nbsp; Chat{" "}
        </span>

        <Button
          gradientDuoTone="purpleToBlue"
          className="font-bold max-sm:w-auto sm:hidden"
        >
          <AiOutlinePlus className="w-[1.5rem] h-[1.5rem]" /> &nbsp; SELL
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
