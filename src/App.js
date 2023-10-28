import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { TranslationProvider } from './components/translate/TranslateContext';

const App= () => {
  return (
    <>
    <TranslationProvider>
      <Header/>
      </TranslationProvider>
    </>
  );
}

export default App;
