"use client"
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 mt-10 w-full flex md:flex-row justify-around items-start p-1 sm:flex-col">
        {/* <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Fixed deposits
            </li>
          </ul>
        </div> */}
        {/* <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div> */}
        {/* <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div> */}
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-4 bg-gray-50">
              <Image src="/logo1.png" width={96} height={5} alt="logo" />
          <div className=" ">
            <ul>
              <div className="flex gap-6 pb-5 scne">
                <InstagramIcon className="text-2xl cursor-pointer hover:text-yellow-600" />
                <TwitterIcon className="text-2xl cursor-pointer hover:text-blue-600" />
                <LinkedInIcon className="text-2xl cursor-pointer hover:text-blue-600" />
                <YouTubeIcon className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2023 All rights reserved 
        </h1>
      </div>
    </>
  );
}

export default Footer;
