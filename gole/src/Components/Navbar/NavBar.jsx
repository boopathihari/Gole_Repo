import React, { useEffect, useState } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import src from "../profile.jpg";
import Avatar from "./Avatar";
import "./CustomCss.css";
import SearchInput from "../SearchInput/SearchInput";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { Button } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import Auth from "../Auth/Auth";

export default function NavBar({
  setSearchResults,
  searchResults,
  setLoading,
}) {
  const [user, setUser] = useState(localStorage.getItem("profile"));

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setUser(parsedProfile);
    }
  }, []);

  const handleSearch = (searchTerm) => {
    setLoading(true);
    if (searchTerm.trim() === "") {
      // Show all products if the search input is empty
      setSearchResults([]);
      setLoading(false);
    } else {
      // Fetch and update search results
      fetch("http://localhost:8000/products/search?name=" + searchTerm)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setSearchResults(data);
        })
        .catch((error) => {
          setLoading(false);
          console.log("Error=>" + error);
        });
    }
  };

  return (
    <Navbar className="custom-nav py-[16px]" fluid rounded>
      <Link to="/">
        <Navbar.Brand className="w-[42px] cursor-pointer">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img
              src={logo}
              style={{ width: "66px", borderRadius: "50%" }}
            ></img>
          </span>
        </Navbar.Brand>
      </Link>

      <div className="flex md:order-2 gap-6 items-center">
        <Link to="/wishlist">
          <span className="text-gray-800 font-bold cursor-pointer">
            Wishlist
          </span>
        </Link>
        <span className=" p-[10px] rounded-md font-bold text-gray-800 max-sm:hidden cursor-pointer underline">
          {" "}
          {user == null && <Auth />}
        </span>

        <span className="customChat flex items-center justify-center border border-solid border-gray-400 p-[10px] rounded-md font-bold text-gray-800 max-sm:hidden cursor-pointer">
          {" "}
          <HiOutlineChatBubbleOvalLeft className="w-[1.7rem] h-[1.7rem] cursor-pointer sm:block" />
          &nbsp; Chat{" "}
        </span>

        {user != null ? (
          <>
            <img
              src={user.picture}
              alt="user profile"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
          

        <Link to="/sellProduct">
          <Button
            gradientDuoTone="purpleToBlue"
            className="font-bold max-sm:hidden"
          >
            <AiOutlinePlus className="w-[1.5rem] h-[1.5rem]" /> &nbsp; SELL
          </Button>
        </Link>
        </>
        ) : null}
      </div>

      <Navbar.Collapse className="customBtn">
        <SearchInput onSearch={handleSearch} />

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
