import React, { useState } from 'react'
import "./qualification.css"
import { useTranslation } from '../translate/TranslateContext'

const Qualification = () => {

        const [toggleState, setToggleState] = useState(1)

        const toggleTab = (index) => {
            setToggleState(index)
        }

        const {translate} = useTranslation()


  return (
        <section className="qualification section"  id='qualification'>
            <h2 className="section__title">{translate('qualification')}</h2>
            <span className="section__subtitle">{translate('my-personal-journey')}</span>


            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{translate('education')}
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                     onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{translate('experience')}
                    </div>


                </div>
            

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :"qualification__content" }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">{translate('university')}</h3>
                            <span className="qualification__subtitle">{translate('department')}</span> 
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">{translate('university')}</h3>
                            <span className="qualification__subtitle"> {translate('ydyo')}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2019 
                            </div>
                        </div>

                     
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Ankara Lisesi</h3>
                            <span className="qualification__subtitle">{translate('lise')}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :"qualification__content" }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">{translate('exp1')} </h3>
                            <span className="qualification__subtitle"> {translate('home-subtitle')}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 02/2023 - 10/2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">{translate('exp2')}</h3>
                            <span className="qualification__subtitle">{translate('software-dev')}</span> 
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 03/2023 - 09/2023
                            </div>
                        </div>

                     
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">{translate('exp3')}</h3>
                            <span className="qualification__subtitle">{translate('intern')}</span> 
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 08/2022 - 09/2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
            </div>

        </section>
  )
}

export default Qualification
