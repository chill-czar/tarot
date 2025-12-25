"use client";

import { useEffect } from "react";
import {
  BgLess1,
  BgLess2,
  BgLess3,
  BgLess4,
  BgLess5,
  TarotMain,
} from "~/lib/images";

const NON_CRITICAL_ASSETS = [
  BgLess1.src,
  BgLess2.src,
  BgLess3.src,
  BgLess4.src,
  BgLess5.src,
  TarotMain.src,
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
