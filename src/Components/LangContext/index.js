import React from 'react';
import { createContext, useContext, useState } from 'react';

export const LANG_EN = 'en';
export const LANG_UA = 'ua';

export const LangContext = createContext(LANG_EN);

export function useLang() {
  return useContext(LangContext);
}

export function LanguageContext({ children }) {
  const [lang, setLang] = useState(LANG_EN);

  function changeToUa() {
    setLang(LANG_UA);
  }
  function changeToEn() {
    setLang(LANG_EN);
  }

  return (
    <LangContext.Provider value={{ lang, changeToUa, changeToEn }}>
      {children}
    </LangContext.Provider>
  );
}
