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
import { Helmet } from 'react-helmet';

const Main = () => {
  return (
  <>
   <Helmet>
        <meta charSet="utf-8" />
        <title>Fehmi Günay</title>
        <meta name="description" content="Bilgisayar Mühendisi Fehmi Günay'ın kişisel websitesi." />
        <meta name="keywords" content="web geliştirici, react, portfolio, Fehmi Günay, fehmi günay, fehmi, günay, bilgisayar mühendisi" />
        <meta name="author" content="Fehmi Günay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link  rel='canonical' href='/'/>

      </Helmet>
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
  )
}

export default Main