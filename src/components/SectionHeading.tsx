type Props = {
  index: string
  eyebrow: string
  title: string
  intro?: string
  align?: 'left' | 'right'
}

export function SectionHeading({ index, eyebrow, title, intro, align = 'left' }: Props) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading__index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro && <p className="section-heading__intro">{intro}</p>}
      </div>
    </div>
  )
}
