"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages } from "./messages";

// 语言类型
export type Lang = keyof typeof messages;

// 通用文案类型：取 messages 里任意一种语言的结构（通常是 en）
export type Dict = typeof messages["en"];

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in messages) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const value = useMemo<I18nCtx>(() => {
    const t = messages[lang] as Dict;
    return { lang, setLang, t };
  }, [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n must be used within I18nProvider");
  return v;
}
