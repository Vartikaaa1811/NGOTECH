"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="px-8 py-10 bg-gray-950 text-white">
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-5 max-w-7xl mx-auto ">
          <div className=" flex flex-col bg-gray-950 text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              HOME
            </h2>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
            <span>Pricing</span>
            <span>Partners New</span>
          </div>
          <div className=" flex flex-col bg-gray-950 text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              RESOURCES
            </h2>
            <span>Documentation</span>
            <span>Tutorials</span>
            <span>Support New</span>
          </div>
          <div className=" flex flex-col bg-gray-950 text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              PRODUCTS
            </h2>
            <span>Our Products</span>
            <span>Great Deals New</span>
            <span>Analytics</span>
            <span>Mobile</span>
          </div>
          <div className=" flex flex-col bg-gray-950 text-white">
            <h2 className="font-bold text-lg mb-2 text-gray-600 hover:text-2xl hover:underline">
              SUPPORT
            </h2>
            <span>Help Center</span>
            <span>Privacy Policy</span>
            <span>Conditions</span>
          </div>
          <div className=" flex flex-col bg-gray-950 text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              CONTACT US
            </h2>
            <span>+91 9305904328</span>
            <span>Punjab</span>
            <span>vrtikaaa1811@gmail.com</span>
          </div>
        </div>

        <hr className="my-8 border-b border-gray-600 w-full max-w-7xl mx-auto" />

        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm">
          <p className="text-left">Copyright 2024. All Rights Reserved.</p>
          <Image
            src="/images/socialicons.jpg"
            className="mt-4 md:mt-0"
            alt="socialicons"
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className=" place-items-center text-white bg-gray-600">
        <p>Made by Vartika :) with NextJs.</p>
      </div>
    </>
  );
};

export default Footer;
