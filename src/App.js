import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { TranslationProvider } from './components/translate/TranslateContext';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <>
    <TranslationProvider>
        <Header />
        <main className='main'>
        <Home />
        <About />
        <Skills />
        </main>
      </TranslationProvider>
    </>
  );
}

export default App;
