import React from 'react'
import "./skills.css"
import { useTranslation } from '../translate/TranslateContext'

const RightSkills = () => {

    const {translate} = useTranslation()

  return (
    <div className="skills__content">
    <h3 className="skills__title">{translate('right-tech-title')}</h3>

    <div className="skills__box">
        <div className="skills__group">

        <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">HTML, CSS, Bootstrap</h3>
                    <span className="skills__level">{translate('intermediate')}</span>
                </div>
            </div>
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__level">{translate('intermediate')}+</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Typescript</h3>
                    <span className="skills__level">{translate('basic')}</span>
                </div>
            </div>

          

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">{translate('intermediate')}</span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">C, C#</h3>
                    <span className="skills__level">{translate('intermediate')}</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">JAVA</h3>
                    <span className="skills__level">{translate('basic')}</span>
                </div>
            </div>
            
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">GO</h3>
                    <span className="skills__level">{translate('basic')}</span>
                </div>
            </div>

        </div>




    </div>
 </div>
  )
}

export default RightSkills
