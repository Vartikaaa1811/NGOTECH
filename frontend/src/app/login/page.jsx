"use client";
import { useState } from "react";
import authapi from "../../utils/authapi";
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authapi.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      const decoded = JSON.parse(atob(res.data.token.split(".")[1]));
      if(decoded.role === "admin") {
        router.push("/admin/dashboard");
      }else{
        router.push("/");
      }
      
      alert("Logged in successfully!");
      router.push("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
