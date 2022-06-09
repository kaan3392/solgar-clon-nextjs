import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://solgar-clone-nextjs.vercel.app/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
