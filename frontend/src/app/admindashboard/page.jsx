"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");

    const decoded = jwtDecode(token);
    if (decoded.role !== "admin") return router.push("/unauthorized");
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Render donation stats, users count, etc. */}
    </div>
  );
}
