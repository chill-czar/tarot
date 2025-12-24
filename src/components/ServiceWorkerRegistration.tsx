"use client";

import { useEffect } from "react";

const NON_CRITICAL_ASSETS = [
  "/bg-less-1.png",
  "/bg-less-2.png",
  "/bg-less-3.png",
  "/bg-less-4.png",
  "/bg-less-5.png",
  "/tarot.png",
];

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("[SW] Registered with scope:", registration.scope);

            // Handle prefetching of non-critical assets during idle time
            if ("requestIdleCallback" in window) {
              window.requestIdleCallback(() => {
                prefetchNonCriticalAssets(registration);
              });
            } else {
              setTimeout(() => {
                prefetchNonCriticalAssets(registration);
              }, 3000);
            }
          })
          .catch((error) => {
            console.error("[SW] Registration failed:", error);
          });
      });
    }
  }, []);

  const prefetchNonCriticalAssets = (
    registration: ServiceWorkerRegistration,
  ) => {
    // Only prefetch if the user is NOT on a slow connection or saving data
    interface NetworkInformation extends EventTarget {
      readonly saveData: boolean;
      readonly effectiveType: string;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    const connection = (navigator as any).connection as
      | NetworkInformation
      | undefined;

    if (connection) {
      if (connection.saveData || /(2g|3g)/.test(connection.effectiveType)) {
        console.log(
          "[SW] Skipping prefetch due to slow connection or saveData",
        );
        return;
      }
    }

    if (registration.active) {
      registration.active.postMessage({
        type: "PREFETCH_IMAGES",
        urls: NON_CRITICAL_ASSETS,
      });
    }
  };

  return null; // This component doesn't render anything
}
