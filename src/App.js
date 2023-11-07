import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { TranslationProvider } from './components/translate/TranslateContext';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <TranslationProvider>
        <Header />
        <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </TranslationProvider>
    </>
  );
}

export default App;
