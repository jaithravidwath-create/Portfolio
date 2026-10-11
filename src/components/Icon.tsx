import type { ReactNode, SVGProps } from 'react'

type IconName = 'home' | 'user' | 'file' | 'code' | 'layers' | 'spark' | 'briefcase' | 'mail' | 'github' | 'linkedin' | 'leetcode' | 'arrowUpRight' | 'download' | 'send' | 'close' | 'message' | 'check' | 'external' | 'link' | 'clubs' | 'scholarship' | 'nptel' | 'isoc' | 'iste' | 'git' | 'cpp' | 'js' | 'react' | 'html' | 'css' | 'sql' | 'java' | 'typescript'

type Props = SVGProps<SVGSVGElement> & { name: IconName }

export function Icon({ name, ...props }: Props) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const text = (content: string, x = 8, y = 10, size = 6) => <text x={x} y={y} textAnchor="middle" fontSize={size} fontFamily="ui-monospace, monospace" fontWeight="700" fill="currentColor" stroke="none">{content}</text>
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 10 5-5 5 5" /><path d="M4.5 9.5V14h7V9.5" /><path d="M7.5 14v-3h1v3" /></>,
    user: <><circle cx="8" cy="5.5" r="2.3" /><path d="M3.5 14c.5-2.3 2-3.5 4.5-3.5s4 1.2 4.5 3.5" /></>,
    file: <><path d="M4.5 2.5h5l2 2V14h-7z" /><path d="M9.5 2.5v2h2" /><path d="M6.5 8h3M6.5 10.5h3" /></>,
    code: <><path d="m6 5-3 3 3 3M10 5l3 3-3 3M8.5 3.5l-1 9" /></>,
    layers: <><path d="m8 2.5 5 2.7-5 2.8-5-2.8z" /><path d="m3 8.2 5 2.8 5-2.8M3 11.2l5 2.8 5-2.8" /></>,
    spark: <><path d="m8 2 1 4 4 1-4 1-1 4-1-4-4-1 4-1z" /><path d="M12.5 10.5v3M11 12h3" /></>,
    briefcase: <><rect x="2.5" y="5" width="11" height="8" rx="1" /><path d="M5.5 5V3.5h5V5M2.5 8.5h11" /><path d="M7 8.5v1h2v-1" /></>,
    mail: <><rect x="2.5" y="3.5" width="11" height="9" rx="1" /><path d="m3 4.5 5 4 5-4" /></>,
    github: <><path d="M8 2.7a5.3 5.3 0 0 0-1.7 10.3c.3.1.4-.1.4-.3v-1.1c-1.5.3-1.8-.7-1.8-.7-.2-.7-.6-.9-.6-.9-.5-.3 0-.3 0-.3.6 0 .9.6.9.6.5.9 1.3.7 1.6.5.1-.4.2-.7.4-.8-1.2-.1-2.5-.6-2.5-2.7 0-.6.2-1.1.6-1.5-.1-.1-.3-.7.1-1.5 0 0 .5-.2 1.6.6a5.5 5.5 0 0 1 2.9 0c1.1-.8 1.6-.6 1.6-.6.4.8.2 1.4.1 1.5.4.4.6.9.6 1.5 0 2.1-1.3 2.6-2.5 2.7.2.2.4.5.4 1v1.5c0 .2.1.4.4.3A5.3 5.3 0 0 0 8 2.7Z" /></>,
    linkedin: <><path d="M3 5.5V13M3 3.5v.1M6.5 13V8.5a2 2 0 0 1 4 0V13M6.5 10.2h4M12.5 13V8.8" /></>,
    leetcode: <><path d="m6 2.5-3.5 5.5L6 13.5M8 2.5 11.5 8 8 13.5M10.5 8H14" /></>,
    arrowUpRight: <><path d="M5 11 11.5 4.5M7 4.5h4.5V9" /></>,
    download: <><path d="M8 2.5v7M5.5 7.5 8 10l2.5-2.5M3 12.5h10" /></>,
    send: <><path d="m2.5 3 11 5-11 5 2-5z" /><path d="M4.5 8h4" /></>,
    close: <><path d="m4 4 8 8M12 4l-8 8" /></>,
    message: <><path d="M3 4.5h10v7H7l-3 2v-2H3z" /><path d="M5.5 7.5h5M5.5 9.5h3" /></>,
    check: <path d="m4 8 2.5 2.5L12 5" />,
    link: <><circle cx="5.5" cy="8" r="2.5" /><circle cx="10.5" cy="8" r="2.5" /><path d="M7.5 8h1" /></>,
    clubs: <><path d="M5 11.5h6M8 8v3.5M5.5 13.5h5" /><circle cx="5" cy="6" r="2" /><circle cx="8" cy="4.5" r="2" /><circle cx="11" cy="6" r="2" /></>,
    scholarship: <><path d="m2.5 6 5.5-3 5.5 3-5.5 3z" /><path d="M4.5 7.2v3.2c1.9 1.5 5.1 1.5 7 0V7.2M13.5 6v4" /></>,
    nptel: text('N', 8, 10.4, 8),
    isoc: <><circle cx="8" cy="8" r="5.5" /><path d="M3.5 8h9M8 2.5c1.5 1.6 2.2 3.4 2.2 5.5S9.5 11.9 8 13.5C6.5 11.9 5.8 10.1 5.8 8S6.5 4.1 8 2.5Z" /></>,
    iste: text('I', 8, 10.5, 9),
    external: <><path d="M8 3h5v5M13 3 7.5 8.5" /><path d="M11 7v4.5H3.5v-7H8" /></>,
    git: <><path d="m5 4 3 2 3-2M5 12l3-2 3 2M8 6v4" /><circle cx="5" cy="4" r="1.3" /><circle cx="11" cy="4" r="1.3" /><circle cx="5" cy="12" r="1.3" /><circle cx="11" cy="12" r="1.3" /></>,
    cpp: text('C++', 8, 10.5, 5.5),
    js: <><rect x="2.3" y="2.3" width="11.4" height="11.4" rx="1.2" fill="currentColor" stroke="none" /><text x="8" y="10.8" textAnchor="middle" fontSize="6.2" fontFamily="ui-monospace, monospace" fontWeight="700" fill="var(--cream)" stroke="none">JS</text></>,
    react: <><ellipse cx="8" cy="8" rx="6" ry="2.4" /><ellipse cx="8" cy="8" rx="6" ry="2.4" transform="rotate(60 8 8)" /><ellipse cx="8" cy="8" rx="6" ry="2.4" transform="rotate(120 8 8)" /><circle cx="8" cy="8" r="1.2" fill="currentColor" /></>,
    html: <><path d="m4 3 1 9 3 1 3-1 1-9z" /><path d="M5.5 5.5h5M6 8h4M6.3 10h3.4" /></>,
    css: <><path d="m4 3 1 9 3 1 3-1 1-9z" /><path d="M5.7 5.5h4.7M6.2 8h3.7M6.5 10h2.9" /></>,
    sql: <><path d="M3 4c0-1 2.2-1.8 5-1.8s5 .8 5 1.8-2.2 1.8-5 1.8S3 5 3 4Z" /><path d="M3 4v4c0 1 2.2 1.8 5 1.8M13 4v4M3 8v4c0 1 2.2 1.8 5 1.8s5-.8 5-1.8V8" /></>,
    java: <><path d="M5 11.5h6.5M5.5 8.5c3 1.8 3.2-1.4 1.5-2.5 2.9 1.3 3.2 3.5 1.2 4.5M7 3.5c2.3 1.6.5 2.2 1.5 3.4" /></>,
    typescript: <><rect x="2.3" y="2.3" width="11.4" height="11.4" rx="1.2" fill="currentColor" stroke="none" /><text x="8" y="10.8" textAnchor="middle" fontSize="5.6" fontFamily="ui-monospace, monospace" fontWeight="700" fill="var(--cream)" stroke="none">TS</text></>,
  }
  return <svg aria-hidden="true" viewBox="0 0 16 16" {...common} {...props}>{paths[name]}</svg>
}
