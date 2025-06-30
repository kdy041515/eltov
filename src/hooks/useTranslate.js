"use client";
import { useStore } from "@/store/useStore";
import languageData from "@/../public/assets/data/language.json" assert { type: "json" };

const LANG_MAP = { ko: "KO", en: "EN", jp: "JP", zh: "CH" };

export default function useTranslate() {
  const language = useStore((state) => state.language);
  return (code) => {
    const item = languageData.find((entry) => entry.code === code);
    if (!item) return code;
    const key = LANG_MAP[language] || "KO";
    return item[key] || code;
  };
}
