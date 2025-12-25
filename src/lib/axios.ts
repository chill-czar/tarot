import axios, { type InternalAxiosRequestConfig } from "axios";

// Define custom config type to satisfy ESLint
interface CustomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  _cacheHit?: unknown;
}

// Lightweight in-memory cache
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL = 2 * 60 * 1000; // 2 minutes

export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor for caching
api.interceptors.request.use((config) => {
  const customConfig = config as CustomInternalAxiosRequestConfig;
  if (customConfig.method === "get" && customConfig.url) {
    const cached = cache.get(customConfig.url);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      customConfig._cacheHit = cached.data;
    }
  }
  return customConfig;
});

api.interceptors.response.use(
  (response) => {
    // Store in cache if it's a GET request
    if (response.config.method === "get" && response.config.url) {
      cache.set(response.config.url, {
        data: response.data,
        timestamp: Date.now(),
      });
    }
    return response;
  },
  (error: {
    response?: { data?: unknown };
    message: string;
    config?: CustomInternalAxiosRequestConfig;
  }) => {
    // If we have a cache hit but the network failed (or we want to avoid the network entirely)
    // we can return the cached data. In our request interceptor we marked it.
    if (error.config?._cacheHit) {
      return Promise.resolve({
        data: error.config._cacheHit,
        status: 200,
        statusText: "OK",
        headers: {},
        config: error.config,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any); // Cast only here as a final out to satisfy Axios response expectations
    }

    console.error("API Error:", error.response?.data ?? error.message);
    return Promise.reject(new Error(error.message));
  },
);
