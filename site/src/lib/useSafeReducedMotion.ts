"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Whether the user prefers reduced motion, safe for SSR. The real value can
 * only be known on the client, so the server snapshot (and the client's
 * first hydration pass) both resolve to `false` — matching each other
 * exactly — then useSyncExternalStore syncs to the real value on the next
 * client render. Using external-store subscription (not useEffect +
 * setState) avoids an extra render pass and matches the platform-provided
 * pattern for this exact class of problem.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
