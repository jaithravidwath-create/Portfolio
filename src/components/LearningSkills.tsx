import { useEffect, useState } from 'react'
import { learningSkills } from '../data/profile'
import { Icon } from './Icon'

const skillsPerRow = 3
const rows = Array.from({ length: Math.ceil(learningSkills.length / skillsPerRow) }, (_, index) => learningSkills.slice(index * skillsPerRow, index * skillsPerRow + skillsPerRow))

export function LearningSkills() {
  const [rowIndex, setRowIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setRowIndex((current) => (current + 1) % rows.length), 700)
    return () => window.clearInterval(timer)
  }, [])

  const currentRow = rows[rowIndex]
  return <div className="learning-skills section-reveal" aria-label="Skills Jaithra is currently learning or plans to learn soon">
    <div className="learning-skills__heading"><div><p className="skill-group__label">Currently learning / plan to learn soon</p><p className="learning-skills__intro">A short list of languages and application I’m exploring presently or plan to explore soon.</p></div><span className="learning-skills__counter">{String(rowIndex + 1).padStart(2, '0')} / {String(rows.length).padStart(2, '0')}</span></div>
    <div className="learning-strip" aria-live="polite">
      <div className="learning-strip__row" key={rowIndex}>{currentRow.map((skill) => <div className="learning-skill" key={skill.name}><span className={`learning-skill__icon learning-skill__icon--${skill.icon}`}><Icon name={skill.icon} /></span><span><strong>{skill.name}</strong><small>{skill.label}</small></span></div>)}</div>
    </div>
  </div>
}
