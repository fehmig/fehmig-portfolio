import React from 'react'
import { useTranslation } from '../translate/TranslateContext'

const Info = () => {
    const {translate} = useTranslation()
  return (
    <div className="about__info grid">
        <div className="about__box">
            {/* <i className="bx bx-award"></i> */}
            <h3 className="about_title">"{translate('özlü-söz')}"</h3>
                <span className="about_subtitle">
                Edward Young
                </span>
         
        </div>

        

        
    </div>
  )
}

export default Info
