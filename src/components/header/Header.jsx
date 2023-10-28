import React, { useState } from 'react'
import "./header.css"
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { useTranslation } from '../translate/TranslateContext';

const Header = () => {

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false)

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
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>{translate('home')}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>{translate('about')}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>{translate('skills')}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>{translate('services')}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> {translate('portfolio')}
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
