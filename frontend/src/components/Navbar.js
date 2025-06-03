"use client";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <button className="  px-4 py-3 rounded-2xl bg-blue-700 text-xl hover:bg-amber-300 hover:text-black">
          SUPPORT A CAUSE
        </button>
      </div>
      
      <div className="flex flex-row gap-6 px-2 py-2 ">
        <div>
        <img src="" alt="" className=""/>
        </div>
        <div>
            <span>ABOUT US</span>
            <span>OUR WORK</span>
            <span>CAMPAIGNS</span>
            <span>GET INVOLVED</span>
            <span>PRODUCTS</span>
            <span>CONTACT US</span>
        <button className=" px-2 py-1 text-xl rounded-xl bg-blue-400 text-white hover:bg-amber-300 hover:text-black"> Login/SignUp</button>
        </div>
      </div>

 
    </div>
  );
};

export default Navbar;
