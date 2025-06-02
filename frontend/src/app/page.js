"use client";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import Footer from "./components/Footer";

export default function LogoutButton() {
  return (
    <>
      <div>
        <h1>hehehehehehhe</h1>
        <h1>hehehehehehhe</h1>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
        
        <h1>hehehehehehhe</h1>
        <Footer />
      </div>
    </>
  );
}
