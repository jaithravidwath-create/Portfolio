import { sections } from '../data/profile'
import { Icon } from './Icon'

type Props = { activeSection: string }

export function FloatingDock({ activeSection }: Props) {
  return <nav className="floating-dock" aria-label="Section navigation">
    <a className="dock-mark" href="#home" aria-label="Back to home">
      <span>J</span><span>V</span><span>K</span>
    </a>
    <div className="dock-items">
      {sections.map((section) => <a key={section.id} className={`dock-item ${activeSection === section.id ? 'is-active' : ''}`} href={`#${section.id}`} aria-label={section.label} aria-current={activeSection === section.id ? 'location' : undefined}>
        <Icon name={section.icon as Parameters<typeof Icon>[0]['name']} />
        <span className="dock-tooltip">{section.label}</span>
      </a>)}
    </div>
    <span className="dock-scroll-note">SCROLL TO EXPLORE</span>
  </nav>
}
