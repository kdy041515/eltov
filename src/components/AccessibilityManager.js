"use client";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import languageData from "@/../public/assets/data/language.json" assert { type: "json" };

export default function AccessibilityManager() {
  const highContrast = useStore((state) => state.highContrast);
  const lowPosture = useStore((state) => state.lowPosture);
  const language = useStore((state) => state.language);
  const fontSize = useStore((state) => state.fontSize);

  // Update classes on html element
  useEffect(() => {
    const html = document.documentElement;

    // high contrast
    html.classList.toggle("contrast", highContrast);

    // low posture
    html.classList.toggle("low", lowPosture);

    // language class (except default 'ko')
    html.classList.remove("en", "jp", "zh");
    if (language !== "ko") {
      html.classList.add(language);
    }

    // font size classes
    html.classList.remove("font_65", "font_69");
    if (fontSize === 65) {
      html.classList.add("font_65");
    } else if (fontSize === 69) {
      html.classList.add("font_69");
    }
  }, [highContrast, lowPosture, language, fontSize]);

  // Update text contents according to language
  useEffect(() => {
    const map = { ko: "KO", en: "EN", jp: "JP", zh: "CH" };
    const key = map[language];
    if (!key) return;

    document.querySelectorAll("[data-lang-code]").forEach((el) => {
      const code = el.getAttribute("data-lang-code");
      const entry = languageData.find((item) => item.code === code);
      if (entry && entry[key]) {
        el.textContent = entry[key];
      }
    });
  }, [language]);

  return null;
}
