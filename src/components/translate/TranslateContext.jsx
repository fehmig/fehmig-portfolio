import React, {useState, createContext, useContext }from 'react';
import en from './en.json';
import tr from './tr.json';

const translations = {
  en,
  tr
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const setLanguage = (language) => {
    setLang(language);
  };

  const translate = (key) => {
    return translations[lang][key] || key;
  };

  const value = {
    lang,
    setLanguage,
    translate
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};
