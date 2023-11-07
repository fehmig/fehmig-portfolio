import React, { useState } from 'react'
import "./header.css"
import { AiOutlineGlobal } from 'react-icons/ai';
import { useTranslation } from '../translate/TranslateContext';

const Header = () => {

    /*=============== Change Background Header===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if(this.scrollY >=80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    /*=============== Translations ===============*/
    const { translate, setLanguage } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const changeLanguage = (language) => {
        setSelectedLanguage(language);
        setLanguage(language);
    };



    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">fehmig.</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid" >
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>{translate('home')}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>{translate('about')}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>{translate('skills')}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveNav('#qaulification')} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>{translate('qualification')}
                            </a>
                        </li>
                       
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>{translate('contact')}
                            </a>
                        </li>
                        <li
                             style={{ cursor: 'pointer' }}
                             className={`nav__item ${selectedLanguage === 'en' ? 'selected' : ''}`}
                            onClick={() => changeLanguage('en')}
                        >
                            <AiOutlineGlobal className='nav__item' /> EN
                        </li>
                        <li
                            style={{ cursor: 'pointer' }}
                            className={`nav__item ${selectedLanguage === 'tr' ? 'selected' : ''}`}
                            onClick={() => changeLanguage('tr') }
                        >
                            <AiOutlineGlobal className='nav__item' /> TR
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}> </i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
