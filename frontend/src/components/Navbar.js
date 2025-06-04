"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-100 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-start px-6 ">
      <div className="flex items-center">
        <img src="" alt="logo image soon" className="h-20 w-auto"/>
        </div>


      <div className="flex flex-col items-end space-y-2">
        <button className="  px-4 py-3 rounded-2xl bg-blue-700 text-sm md:text-base  hover:bg-amber-300 hover:text-black">
          SUPPORT THE CAUSE
        </button>
    
        <div className="flex flex-wrap justify-end items-center gap-6 ">
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">ABOUT US</span>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">OUR WORK</span>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">CAMPAIGNS</span>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">GET INVOLVED</span>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">PRODUCTS</span>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">CONTACT US</span>

        <button className=" px-2 py-1 text-sm md:text-base rounded-xl bg-blue-400 text-white hover:bg-amber-300 hover:text-black"> Login/SignUp</button>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-start px-6 py-4 bg-gray-100">
//       {/* Left: Logo (spans 2 lines) */}
//       <div className="flex items-center">
//         <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
//       </div>

//       {/* Right: 2-line section */}
//       <div className="flex flex-col items-end space-y-2">
//         {/* Top: Support Button */}
//         <button className="px-4 py-2 rounded-2xl bg-blue-700 text-white text-sm md:text-base hover:bg-amber-300 hover:text-black">
//           SUPPORT THE CAUSE
//         </button>

//         {/* Bottom: Navigation Links */}
//         <div className="flex flex-wrap justify-end items-center gap-4">
//           <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
//             ABOUT US
//           </span>
//           <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
//             OUR WORK
//           </span>
//           <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
//             CAMPAIGNS
//           </span>
//           <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
//             GET INVOLVED
//           </span>
//           <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
//             PRODUCTS
//           </span>
//           <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
//             CONTACT US
//           </span>

//           <button className="px-4 py-1 text-sm md:text-base rounded-xl bg-blue-500 text-white hover:bg-amber-300 hover:text-black">
//             Login / SignUp
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
