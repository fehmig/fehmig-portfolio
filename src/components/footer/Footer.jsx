import React from 'react'
import "./footer.css"

function Footer() {
  return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Fehmi Günay</h1>

                <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#skills" className="footer__link">Skills</a>
                        </li>
                </ul>

                <div className="footer__social">
                            <a href="https://github.com/fehmig" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className='bx bxl-github  bx-tada'></i>
                            </a>
                        
                            <a href="https://www.linkedin.com/in/fehmigunay/" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className='bx bxl-linkedin  bx-tada'></i>
                            </a>

                            <a href="https://www.instagram.com/fehmiig" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className='bx bxl-instagram  bx-tada'></i>
                        </a>

                            <a href="https://open.spotify.com/user/21ryjbxvr24nrnrjj3cgu6dba?si=6ffbace643584b04" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-spotify bx-tada'></i>
                            </a>
                </div>

                <span className='footer__copy'>fehmig ©  All rights reserved</span>
            </div>
        </footer>
  )
}

export default Footer
