"use client";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      await fetch("/api/logout", { method: "POST" });

      router.push("/pages/login" && "/pages/signup");
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}
