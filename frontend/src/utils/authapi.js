import axios from "axios";

const authapi = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if deployed
});

export default authapi;
