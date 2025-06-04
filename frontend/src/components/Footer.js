"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="px-8 py-10 bg-gray-500 text-white">
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-5 max-w-7xl mx-auto ">
          <div className=" flex flex-col bg-gray-500 text-white">
            <h2 className="font-bold text-lg text-gray-900 mb-2 hover:text-2xl hover:underline">
              ABOUT US
            </h2>
            <span>About Us</span>
            <span>Impact</span>
            <span>Reach & Presence</span>
            <span>Milestones</span>
            <span>Privacy Policy</span>
          </div>
          <div className=" flex flex-col bg-gray-500 text-white">
            <h2 className="font-bold text-lg text-gray-900 mb-2 hover:text-2xl hover:underline">
              OUR WORK
            </h2>
            <span>Education</span>
            <span>Livelihood</span>
            <span>Health</span>
            <span>Women Empowerment</span>
            <span>Disaster Relief</span>
          </div>
          <div className=" flex flex-col bg-gray-500 text-white">
            <h2 className="font-bold text-lg text-gray-900 mb-2 hover:text-2xl hover:underline">
              CAMPAIGNS
            </h2>
            <span>Shiksha Na Ruke</span>
            <span>Health Cannot Wait</span>
            <span>Tayyari Kal Ki</span>
            <span>Swabhiman</span>
          </div>
          <div className=" flex flex-col bg-gray-500 text-white">
            <h2 className="font-bold text-lg mb-2 text-gray-900 hover:text-2xl hover:underline">
              GET INVOLVED
            </h2>
            <span>Individual Support</span>
            <span>Corporate Partnerships</span>
            <span>Volunteer Work</span>
            <span>School Partnerships</span>
            <span>Careers</span>
          </div>
          <div className=" flex flex-col bg-gray-500 text-white">
            <h2 className="font-bold text-lg text-gray-900 mb-2 hover:text-2xl hover:underline">
              OUR WORK
            </h2>
            <span>Handmade Clothing</span>
            <span>Handmade Jewellery</span>
            <span>Wooden Work</span>
          </div>
        </div>

        <hr className="my-8 border-b border-gray-600 w-full max-w-7xl mx-auto" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-4 py-6  max-w-6xl mx-auto text-l">
          <div className="flex flex-col max-w-3xl">
          <p className="text-left mb-2">161 B/8, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre New Delhi - 110047 Delhi, India.</p>
          <br/>
          <p className="text-left">Contact Us: Tel: +91-11-43123700 | E-mail: info@littlehopeindia.org.</p>
          </div>
          <Image
            src="/images/socialicons.jpg"
            className="mt-4 md:mt-0"
            alt="socialicons"
            width={160}
            height={160}
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
