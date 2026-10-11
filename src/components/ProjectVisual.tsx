type Props = { kind: 'rental' | 'blood' | 'traffic'; featured?: boolean }

export function ProjectVisual({ kind, featured = false }: Props) {
  if (kind === 'rental') {
    return <div className={`project-visual project-visual--rental ${featured ? 'project-visual--featured' : ''}`} aria-hidden="true">
      <div className="visual-browser"><span /><span /><span /></div>
      <div className="rental-layout"><div className="rental-sidebar" /><div className="rental-content"><i /><i /><i /><i /></div></div>
      <div className="visual-node visual-node--one" /><div className="visual-node visual-node--two" /><div className="visual-node visual-node--three" />
      <svg viewBox="0 0 520 240" preserveAspectRatio="none"><path d="M35 210 C115 90, 155 210, 240 112 S370 40, 485 68" /><path d="M240 112 240 210" /></svg>
    </div>
  }
  if (kind === 'blood') {
    return <div className="project-visual project-visual--blood" aria-hidden="true"><div className="blood-mark">+</div><div className="blood-lines"><i /><i /><i /></div><div className="blood-label">DONOR / RECORD</div></div>
  }
  return <div className="project-visual project-visual--traffic" aria-hidden="true"><div className="traffic-road traffic-road--a" /><div className="traffic-road traffic-road--b" /><div className="traffic-light"><i /><i /><i /></div><div className="traffic-dot traffic-dot--a" /><div className="traffic-dot traffic-dot--b" /><div className="traffic-dot traffic-dot--c" /></div>
}
