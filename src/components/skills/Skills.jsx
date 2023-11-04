import React from 'react'
import "./skills.css"
import LeftSkills from './LeftSkills'
import RightSkills from './RightSkills'
import { useTranslation } from '../translate/TranslateContext'


const Skills = () => {

    const {translate} = useTranslation()

  return (
    <section className="skills section" id='skills'>
    <h2 className="section__title" >{translate('skills')}</h2>
    <span className="section__subtitle">{translate('my-tech-level')}</span>

    <div className="skills__container container grid">
                <LeftSkills />
                <RightSkills />
        </div>
    </section>
)
}

export default Skills
