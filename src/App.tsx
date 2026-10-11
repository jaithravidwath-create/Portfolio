import { useEffect, useState } from 'react'
import { Chatbot } from './components/Chatbot'
import { FloatingDock } from './components/FloatingDock'
import { Icon } from './components/Icon'
import { ProjectVisual } from './components/ProjectVisual'
import { SectionHeading } from './components/SectionHeading'
import { databases, interestLabels, programmingLanguages, profile, profiles, projects, sections, tools } from './data/profile'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['home']))
  const [resumeAvailable, setResumeAvailable] = useState(false)

  useEffect(() => {
    const nodes = sections.map((section) => document.getElementById(section.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { setActiveSection(entry.target.id); setVisibleSections((current) => new Set(current).add(entry.target.id)) } })
    }, { rootMargin: '-22% 0px -56% 0px', threshold: 0.01 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    fetch(profile.resumePath, { method: 'HEAD' }).then((response) => setResumeAvailable(response.ok && (response.headers.get('content-type') || '').toLowerCase().includes('application/pdf'))).catch(() => setResumeAvailable(false))
  }, [])

  const reveal = (id: string) => visibleSections.has(id) ? 'is-visible' : ''

  return <div className="site-shell">
    <FloatingDock activeSection={activeSection} />
    <main>
      <section id="home" className={`section hero-section ${reveal('home')}`}>
        <div className="page-width hero-grid">
          <div className="hero-copy">
            <p className="topline"><span className="topline__mark">JVK</span><span>Portfolio / 2025—26</span><span className="topline__line" /></p>
            <p className="eyebrow hero-eyebrow">CSE-IoT student · Full-stack developer</p>
            <h1>{profile.name}</h1>
            <p className="hero-headline">{profile.headline}</p>
            <p className="hero-intro">{profile.intro}</p>
            <p className="identity-line"><span>{profile.status}</span><i /> <span>B.Tech CSE-IoT</span><i /> <span>{profile.college}</span></p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">Explore my work <Icon name="arrowUpRight" /></a>
              <a className="button button--text" href="#contact">Get in touch <Icon name="arrowUpRight" /></a>
              <a className="resume-link" href={resumeAvailable ? profile.resumePath : '#resume'} {...(resumeAvailable ? { target: '_blank', rel: 'noreferrer' } : {})}>View resume <Icon name="file" /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract connected systems diagram" role="img">
            <div className="hero-visual__label">A small map of<br /><strong>curiosity → making</strong></div>
            <svg className="network-diagram" viewBox="0 0 520 520" aria-hidden="true">
              <circle className="diagram-orbit diagram-orbit--outer" cx="260" cy="260" r="194" />
              <circle className="diagram-orbit" cx="260" cy="260" r="118" />
              <path className="diagram-path" d="M90 318 168 138 368 164 430 340 260 414 90 318ZM168 138 260 260 368 164M260 260 430 340M260 260 90 318" />
              <path className="diagram-path diagram-path--soft" d="M168 138 430 340M368 164 90 318" />
              <circle className="diagram-node diagram-node--large" cx="260" cy="260" r="17" />
              <circle className="diagram-node" cx="90" cy="318" r="8" /><circle className="diagram-node" cx="168" cy="138" r="8" /><circle className="diagram-node" cx="368" cy="164" r="8" /><circle className="diagram-node" cx="430" cy="340" r="8" /><circle className="diagram-node" cx="260" cy="414" r="8" />
              <circle className="diagram-dot" cx="260" cy="260" r="4" />
            </svg>
            <div className="hero-visual__legend"><span><i className="legend-dot legend-dot--navy" />systems</span><span><i className="legend-dot legend-dot--brown" />ideas</span><span><i className="legend-dot legend-dot--beige" />learning</span></div>
          </div>
        </div>
        <div className="hero-footer page-width"><span>Scroll to explore</span><span className="hero-footer__line" /><span>01 / 08</span></div>
      </section>

      <section id="about" className={`section section--about ${reveal('about')}`}>
        <div className="page-width">
          <SectionHeading index="02" eyebrow="A little context" title="Learning by building." intro="A grounded introduction to the person behind the projects." />
          <div className="about-grid section-reveal">
            <div className="about-lead"><p>I’m a <strong>sophomore</strong> pursuing {profile.education} at {profile.college}. I enjoy the space where programming, connected systems, and practical software meet.</p><p>I work with <strong>C, Python, Java, JavaScript, and SQL</strong>, and have explored building with MongoDB, MongoDB Atlas, Postman, and Visual Studio Code.</p></div>
            <div className="about-side"><div className="about-note"><span className="about-note__number">01</span><p>Based in</p><strong>{profile.location}</strong></div><div className="about-note"><span className="about-note__number">02</span><p>Currently exploring</p><strong>IoT · ML · full-stack</strong></div></div>
          </div>
          <div className="about-bottom section-reveal"><p>So far, that curiosity has taken shape through an <strong>Equipment Rental Application</strong>, a <strong>Blood Donor Management System</strong>, and a <strong>Smart Traffic Management System</strong>. I’m interested in learning openly, solving problems carefully, and making useful things.</p><span className="hand-note">/ no inflated claims, just honest work</span></div>
        </div>
      </section>

      <section id="resume" className={`section section--resume ${reveal('resume')}`}>
        <div className="page-width resume-grid">
          <SectionHeading index="03" eyebrow="The document" title="A resume, when ready." intro="The portfolio is wired for a PDF at /resume.pdf. Add the real document when you’re ready to share it." />
          <div className="resume-panel section-reveal">
            <div className="resume-paper"><div className="paper-top"><span>JVK / CV</span><span>01</span></div><div className="paper-rule" /><div className="paper-scribble paper-scribble--wide" /><div className="paper-scribble paper-scribble--short" /><div className="paper-columns"><div><i /><i /><i /></div><div><i /><i /><i /><i /></div></div><div className="paper-stamp">{resumeAvailable ? 'PDF / READY' : 'PDF / TO ADD'}</div></div>
            <div className="resume-copy"><span className="availability"><i className={resumeAvailable ? 'is-ready' : ''} />{resumeAvailable ? 'Resume available' : 'Resume not added yet'}</span><p>{resumeAvailable ? 'Open the supplied resume in a new tab or save a copy for later.' : 'When you add the actual PDF to the public folder, these actions will become active automatically.'}</p><div className="resume-actions"><a className={`button button--primary ${!resumeAvailable ? 'is-disabled' : ''}`} href={resumeAvailable ? profile.resumePath : '#resume'} {...(resumeAvailable ? { target: '_blank', rel: 'noreferrer' } : {})} aria-disabled={!resumeAvailable}>View resume <Icon name="arrowUpRight" /></a><a className={`button button--outline ${!resumeAvailable ? 'is-disabled' : ''}`} href={resumeAvailable ? profile.resumePath : '#resume'} download={resumeAvailable ? true : undefined} aria-disabled={!resumeAvailable}>Download <Icon name="download" /></a></div><small>Expected file: <code>{profile.resumePath}</code></small></div>
          </div>
        </div>
      </section>

      <section id="skills" className={`section section--skills ${reveal('skills')}`}>
        <div className="page-width">
          <SectionHeading index="04" eyebrow="Tools of thought" title="A practical toolkit." intro="The languages, tools, and directions I’m spending time with." />
          <div className="skills-layout section-reveal">
            <div className="skills-intro"><span className="skills-big-number">05</span><p>languages<br />in the mix</p><span className="skills-line" /></div>
            <div className="skill-group"><p className="skill-group__label">Programming languages</p><div className="skill-tags">{programmingLanguages.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
            <div className="skill-group"><p className="skill-group__label">Databases</p><div className="skill-tags">{databases.map((skill) => <span key={skill}>{skill}</span>)}</div><p className="skill-group__label skill-group__label--tools">Development tools</p><div className="skill-tags">{tools.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
          </div>
          <div className="skills-footer section-reveal"><span>What I’m curious about next</span><div className="skills-footer__items"><strong>Full-stack Development</strong><strong>Internet of Things</strong><strong>Machine Learning</strong></div></div>
        </div>
      </section>

      <section id="projects" className={`section section--projects ${reveal('projects')}`}>
        <div className="page-width">
          <SectionHeading index="05" eyebrow="Selected work" title="Small systems, real practice." intro="Three projects that reflect the kinds of problems I like to explore." />
          <div className="featured-project section-reveal"><div className="featured-project__meta"><span className="project-number">{projects[0].number}</span><span className="project-type">Featured project / full-stack</span></div><div className="featured-project__body"><div><h3>{projects[0].title}</h3><p>{projects[0].description}</p><div className="project-tech-list">{projects[0].technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><p className="project-honesty"><span>↳</span> A practical application development project, presented without invented features.</p></div><ProjectVisual kind={projects[0].kind} featured /></div></div>
          <div className="project-grid section-reveal">{projects.slice(1).map((project) => <article className="project-card" key={project.title}><div className="project-card__top"><span className="project-number">{project.number}</span><span>Project study</span></div><ProjectVisual kind={project.kind} /><h3>{project.title}</h3><p>{project.description}</p><div className="project-card__footer"><span>{project.technologies.join(' · ')}</span><span className="coming-soon">Repository coming soon</span></div></article>)}</div>
        </div>
      </section>

      <section id="interests" className={`section section--interests ${reveal('interests')}`}>
        <div className="page-width">
          <SectionHeading index="06" eyebrow="Beyond the brief" title="A few things I’m learning by building." intro="Interest is a direction, not a claim of mastery." />
          <div className="interest-grid section-reveal">{interestLabels.map((interest) => <article className={`interest-card interest-card--${interest.kind}`} key={interest.title}><div className="interest-card__top"><span>{interest.eyebrow}</span><span className="interest-card__arrow">↗</span></div><div className="interest-graphic" aria-hidden="true">{interest.kind === 'nodes' && <><i /><i /><i /><i /><svg viewBox="0 0 180 90"><path d="M12 68 60 22l48 38 56-46M60 22l48 38M108 60l56 14" /></svg></>}{interest.kind === 'data' && <><span /><span /><span /><span /><span /><svg viewBox="0 0 180 90"><path d="M7 72c24-28 34 17 53-15s32 6 50-18 35 4 63-31" /></svg></>}{interest.kind === 'stack' && <><div /><div /><div /></>}{interest.kind === 'code' && <><code>&lt;/&gt;</code><span>solve → test → learn</span></>}</div><h3>{interest.title}</h3><p>{interest.description}</p></article>)}</div>
        </div>
      </section>

      <section id="experience" className={`section section--experience ${reveal('experience')}`}>
        <div className="page-width experience-grid"><SectionHeading index="07" eyebrow="Program experience" title="A fellowship in forward motion." intro="One professional milestone, described accurately." /><div className="experience-card section-reveal"><div className="experience-card__year">2025<br /><span>cohort</span></div><div className="experience-card__line"><i /></div><div className="experience-card__copy"><span className="experience-label">Fellowship / program</span><h3>McKinsey Forward Program Fellow '25</h3><p>McKinsey Forward Program</p><a className="inline-link" href="https://www.linkedin.com/in/jaithra-vidwath-kavuri-805197371/" target="_blank" rel="noreferrer">View on LinkedIn <Icon name="arrowUpRight" /></a></div></div></div>
      </section>

      <section id="contact" className={`section section--contact ${reveal('contact')}`}>
        <div className="page-width contact-grid"><div className="contact-letter section-reveal"><p className="eyebrow">08 / Let’s connect</p><h2>Let's build something meaningful<span>.</span></h2><p>{"I'm always interested in technology, creative ideas, and opportunities to collaborate on useful projects."}</p><a className="button button--primary" href={`mailto:${profile.contact.email}`}>Send me an email <Icon name="arrowUpRight" /></a></div><div className="contact-details section-reveal"><div className="contact-detail"><span>Primary contact</span><a href={`mailto:${profile.contact.email}`}>{profile.contact.email}<Icon name="arrowUpRight" /></a></div><div className="contact-detail"><span>Urgent contact</span><a href={`tel:${profile.contact.mobile}`}>{profile.contact.mobile}<Icon name="arrowUpRight" /></a></div><div className="contact-detail contact-detail--profiles"><span>Elsewhere</span><div>{profiles.filter((item) => item.icon !== 'leetcode').map((item) => <a key={item.name} href={item.href} target="_blank" rel="noreferrer"><Icon name={item.icon} />{item.name}<Icon name="external" /></a>)}</div></div></div></div>
      </section>

      <section className="section section--profiles"><div className="page-width"><div className="profiles-header"><p className="eyebrow">Open tabs</p><p>Three places to find the work and the person behind it.</p></div><div className="profiles-grid">{profiles.map((item) => <a className="profile-card" key={item.name} href={item.href} target="_blank" rel="noreferrer"><div className="profile-card__icon"><Icon name={item.icon} /></div><div><h3>{item.name}</h3><p>{item.description}</p><span>{item.handle} <Icon name="arrowUpRight" /></span></div></a>)}</div></div></section>
    </main>
    <footer className="site-footer"><div className="page-width"><span>JVK / {new Date().getFullYear()}</span><span>Built with curiosity in Hyderabad</span><a href="#home">Back to top ↑</a></div></footer>
    <Chatbot />
  </div>
}

export default App
