import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Basic error logging
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);
