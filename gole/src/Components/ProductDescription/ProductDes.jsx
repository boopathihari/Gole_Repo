import React, { useState, useRef, useEffect } from "react";
import Carousel from "../CarouselComp";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Avatar from "../Navbar/Avatar";
import src from "../profile.jpg";
import { IoIosArrowDropright } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import "../ProductDescription/ProductDes.css";
import gmap from "./gmap.png";
import { useParams } from "react-router-dom";

import { Button, Card } from "flowbite-react";
import axios from "axios";

export default function ProductDes() {
  const { productID } = useParams();
  const [product, setProduct] = useState();

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getUserDetail/${productID}`
        );
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/${productID}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchData();
  }, [productID]);

  // const handleInterestClick = async (email) => {
  //   setIsInterested(true);

  //   try {
  //     // Send API request to backend to notify seller
  //     const response = await axios.post("/api/notifySeller", {
  //       productId: productID, // Replace with product ID property name
  //       buyerEmail: email, // Replace with buyer's email
  //     });

  //     console.log("Interest notification sent:", response.data); // Handle success
  //   } catch (error) {
  //     console.error("Error sending interest notification:", error);
  //     // Handle error (e.g., display an error message to the user)
  //     setIsInterested(false); // Reset interest state
  //   }
  // };

  return (
    <div>
      {user && (
        <>
          <div>
            <Carousel product={product} />
          </div>
          <div className="flex gap-4 mb-10">
            <div class="flex-initial w-[70%] DescCard">
              <Card className="w-full h-3/4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Description</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>
                    Casio is a well-known manufacturer of a wide range of
                    calculators, including calculators designed for various
                    purposes, such as basic arithmetic, scientific calculations,
                    financial calculations, and more. It's important to note
                    that there is a wide variety of Casio calculators with
                    different features and capabilities, so I'll provide a
                    general description of a Casio calculator suitable for basic
                    arithmetic calculations that can be operated with two hands.
                    Casio Basic Calculator for 2-Hand Use: Design: Casio basic
                    calculators are typically compact and lightweight, designed
                    for easy portability and handheld use. They usually have a
                    durable plastic casing. Display: These calculators often
                    feature a liquid crystal display (LCD) that can show both
                    numbers and basic mathematical symbols. The display is
                    typically large and clear for easy readability. Keypad: The
                    keypad of a Casio basic calculator is designed for ease of
                    use. It includes numeric keys (0-9), basic arithmetic
                    operators (addition, subtraction, multiplication, division),
                    and other function keys. Some models may also have
                    additional keys for memory storage, percentage calculations,
                    and square root. Dual-Powered: Many Casio calculators are
                    dual-powered, meaning they can be operated using both solar
                    cells and a built-in battery. This ensures that the
                    calculator remains functional even in low light conditions.
                    Functionality: Casio basic calculators are designed for
                    everyday arithmetic calculations, making them ideal for
                    students, professionals, and anyone who needs to perform
                    basic math operations. They can handle addition,
                    subtraction, multiplication, and division, and they often
                    have basic memory functions. Two-Hand Use: Casio calculators
                    are generally designed for one-handed operation. However,
                    due to their compact size and lightweight design, they can
                    easily be operated with two hands when necessary.
                    Reliability: Casio calculators are known for their
                    reliability and durability, making them a popular choice for
                    everyday use.
                  </p>
                </p>
              </Card>
            </div>
            <div class="flex flex-col w-[30%] sideCard gap-y-3">
              <Card className="w-full">
                <h5 className="text-2xl font-bold tracking-tight flex  items-center justify-between gap-1 text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <FaIndianRupeeSign /> <p>{product.productPrice}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <AiOutlineShareAlt />
                    <AiOutlineHeart />
                  </div>
                </h5>
                <p className="text-gray-500 font-medium">
                  {product.productName}
                </p>

                <p className="text-gray-500 font-medium text-[10px]">
                  <span className="font-bold">Posted on:</span> Jun 09
                </p>
              </Card>

              <Card className="w-full">
                <h5 className="text-2xl font-bold tracking-tight flex  items-center justify-between gap-1 text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    {/* <Avatar alt="User settings" img={user.picture} />{" "} */}
                    <p className="text-[20px]">{user.name}</p>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer">
                    <IoIosArrowDropright />
                  </div>
                </h5>

                <Button color="light">Connect with Seller</Button>

                <p className="text-gray-500 font-medium text-[14px]">
                  <span className="font-medium flex gap-2 items-center justify-center">
                    <BsTelephone /> +917092751462
                  </span>
                </p>
              </Card>

              <Card className="w-full">
                <h5 className="text-2xl font-bold tracking-tight flex  items-center justify-between gap-1 text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <p className="text-[20px]">Posted in</p>
                  </div>
                </h5>
                <p className="text-gray-500 font-medium text-[12px]">
                  Government college of Technology, Coimbatore
                </p>

                <img src={gmap} alt="" />
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
