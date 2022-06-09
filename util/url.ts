export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/"
    : "https://solgar-clone-nextjs.vercel.app/api/"; 