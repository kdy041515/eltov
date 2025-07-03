"use client";
import { useState } from "react";
import styles from "./Keypad.module.scss";
import { useStore } from "../../../store/useStore";
import useTranslate from "@/hooks/useTranslate";

export default function Keypad() {
  const hydrated = useStore((state) => state.hydrated);
  const highContrast = useStore((state) => state.highContrast);
  const setHighContrast = useStore((state) => state.setHighContrast);
  const lowPosture = useStore((state) => state.lowPosture);
  const setLowPosture = useStore((state) => state.setLowPosture);
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);
  const voiceVolume = useStore((state) => state.voiceVolume);
  const setVoiceVolume = useStore((state) => state.setVoiceVolume);
  const voiceSpeed = useStore((state) => state.voiceSpeed);
  const setVoiceSpeed = useStore((state) => state.setVoiceSpeed);
  const fontSize = useStore((state) => state.fontSize);
  const setFontSize = useStore((state) => state.setFontSize);
  const translate = useTranslate();
  const [openKey, setOpenKey] = useState(null);

  if (!hydrated) {
    return null;
  }

  return (
    <div className={styles.keypad}>
      <div className={styles.container + ' container'}>
        <div className={styles.status_btns}>
          {/* 고대비 */}
          <div className={styles.item}>
            <button
              type="button"
              onClick={() => setHighContrast(!highContrast)}
            >
              <span data-lang-code="고대비">고대비</span>
              <strong>{translate(highContrast ? "켜짐" : "꺼짐")}</strong>
            </button>
          </div>

          {/* 낮은자세 */}
          <div className={styles.item}>
            <button type="button" onClick={() => setLowPosture(!lowPosture)}>
              <span data-lang-code="낮은자세">낮은자세</span>
              <strong>{translate(lowPosture ? "켜짐" : "꺼짐")}</strong>
            </button>
          </div>

          {/* 언어 선택 */}
          <div className={styles.item}>
            <button
              type="button"
              onClick={() => setOpenKey(openKey === "lang" ? null : "lang")}
            >
              <span>Lang</span>
              <strong>
                {language === "ko"
                  ? "한국어"
                  : language === "en"
                  ? "English"
                  : language === "jp"
                  ? "日本語"
                  : "中文"}
              </strong>
            </button>
            {openKey === "lang" && (
              <ul className={styles.select_option}>
                {[
                  ["ko", "한국어"],
                  ["en", "English"],
                  ["jp", "日本語"],
                  ["zh", "中文"],
                ].map(([code, label]) => (
                  <li key={code}>
                    <button
                      type="button"
                      className={language === code ? "active" : ""}
                      onClick={() => {
                        setLanguage(code);
                        setOpenKey(null);
                      }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 음성 크기 */}
          <div className={styles.item}>
            <button
              type="button"
              onClick={() => setOpenKey(openKey === "volume" ? null : "volume")}
            >
              <span data-lang-code="음성크기">음성크기</span>
              <strong>{voiceVolume}</strong>
            </button>
            {openKey === "volume" && (
              <ul className={styles.select_option}>
                {[0, 25, 50, 75, 100].map((v) => (
                  <li key={v}>
                    <button
                      type="button"
                      className={voiceVolume === v ? "active" : ""}
                      onClick={() => {
                        setVoiceVolume(v);
                        setOpenKey(null);
                      }}
                    >
                      {v}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 음성 속도 */}
          <div className={styles.item}>
            <button
              type="button"
              onClick={() => setOpenKey(openKey === "speed" ? null : "speed")}
            >
              <span data-lang-code="음성속도">음성속도</span>
              <strong>{`x${voiceSpeed}`}</strong>
            </button>
            {openKey === "speed" && (
              <ul className={styles.select_option}>
                {[1, 2, 4, 8].map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      className={voiceSpeed === s ? "active" : ""}
                      onClick={() => {
                        setVoiceSpeed(s);
                        setOpenKey(null);
                      }}
                    >
                      {`x${s}`}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 글씨 크기 */}
          <div className={styles.item}>
            <button
              type="button"
              onClick={() => setOpenKey(openKey === "font" ? null : "font")}
            >
              <span data-lang-code="글씨크기">글씨크기</span>
              <strong>
                {fontSize === 62.5
                  ? "x1"
                  : fontSize === 65
                  ? "x1.05"
                  : fontSize === 69
                  ? "x1.1"
                  : `x${fontSize}`}
              </strong>
            </button>
            {openKey === "font" && (
              <ul className={styles.select_option}>
                {[
                  [62.5, "1x"],
                  [65, "1.05x"],
                  [69, "1.1x"],
                ].map(([value, label]) => (
                  <li key={value}>
                    <button
                      type="button"
                      className={fontSize === value ? "active" : ""}
                      onClick={() => {
                        setFontSize(value);
                        setOpenKey(null);
                      }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={styles.arrow_btns}>
          <div className={styles.item}>
            <button type="button" className={styles.up} title="화살표 상">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M18 11l-6 -6" />
                <path d="M6 11l6 -6" />
              </svg>
              <span className="sound_only">화살표 상</span>
            </button>
          </div>
          <div className={styles.item}>
            <button type="button" className={styles.down} title="화살표 하">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M18 13l-6 6" />
                <path d="M6 13l6 6" />
              </svg>
              <span className="sound_only">화살표 하</span>
            </button>
          </div>
          <div className={styles.item}>
            <button type="button" className={styles.left} title="화살표 좌">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
              </svg>
              <span className="sound_only">화살표 좌</span>
            </button>
          </div>
          <div className={styles.item}>
            <button type="button" className={styles.right} title="화살표 우">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
              <span className="sound_only">화살표 우</span>
            </button>
          </div>
          <div className={styles.item}>
            <button type="button" className={styles.enter} title="확인">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              <span className="sound_only">확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
