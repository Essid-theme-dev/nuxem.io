export type AppLanguage = "EN" | "FR" | "DE";

export const APP_LANGUAGE_EVENT = "app-language-change";
export const APP_LANGUAGE_KEY = "app-language";

const htmlLangMap: Record<AppLanguage, string> = {
  EN: "en",
  FR: "fr",
  DE: "de",
};

export function readLanguage(): AppLanguage {
  if (typeof window === "undefined") return "EN";
  const stored = window.localStorage.getItem(APP_LANGUAGE_KEY);
  if (stored === "EN" || stored === "FR" || stored === "DE") return stored;
  return "EN";
}

export function applyLanguage(next: AppLanguage) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(APP_LANGUAGE_KEY, next);
  document.documentElement.lang = htmlLangMap[next];
  window.dispatchEvent(new CustomEvent(APP_LANGUAGE_EVENT, { detail: next }));
}
