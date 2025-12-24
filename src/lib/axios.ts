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
  (error: { response?: { data?: unknown }; message: string }) => {
    // Basic error logging
    console.error("API Error:", error.response?.data ?? error.message);
    return Promise.reject(new Error(error.message));
  },
);
