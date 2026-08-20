"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { en } from "@/lib/content/en";
import { ms } from "@/lib/content/ms";
import type { SiteContent } from "@/lib/content/types";

export type Language = "en" | "ms";

const STORAGE_KEY = "isadora-language";
// Fired after this tab writes to localStorage, so useSyncExternalStore
// picks up the change immediately (the native "storage" event only fires
// in *other* tabs, never the one that made the write).
const CHANGE_EVENT = "isadora-language-change";

const bundles: Record<Language, SiteContent> = { en, ms };

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "ms";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  return isLanguage(saved) ? saved : "en";
}

// Server (and the client's first hydration pass) always resolve to "en" —
// the real preference can only be read after mount. Same pattern as
// useSafeReducedMotion, same reason: matching markup avoids a hydration
// mismatch.
function getServerSnapshot(): Language {
  return "en";
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const value = useMemo(
    () => ({ language, setLanguage, content: bundles[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Shorthand for the common case of just needing the current language's content. */
export function useContent() {
  return useLanguage().content;
}
