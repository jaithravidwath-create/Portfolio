import { navigationSections } from '../data/profile'
import { Icon } from './Icon'

type Props = { activeSection: string; theme: 'light' | 'dark'; onToggleTheme: () => void }

export function FloatingDock({ activeSection, theme, onToggleTheme }: Props) {
  return <nav className="floating-dock" aria-label="Section navigation">
    <button className="theme-toggle" type="button" role="switch" aria-checked={theme === 'dark'} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={onToggleTheme}>
      <span className="theme-toggle__track"><span className="theme-toggle__thumb" /></span>
    </button>
    <div className="dock-items">
      {navigationSections.map((section) => <a key={section.id} className={`dock-item ${activeSection === section.id ? 'is-active' : ''}`} href={`#${section.id}`} aria-label={section.label} title={section.label} aria-current={activeSection === section.id ? 'location' : undefined}>
        <Icon name={section.icon as Parameters<typeof Icon>[0]['name']} />
        <span className="dock-tooltip" role="tooltip">{section.label}</span>
      </a>)}
    </div>
    <span className="dock-scroll-note">SCROLL TO EXPLORE</span>
  </nav>
}
