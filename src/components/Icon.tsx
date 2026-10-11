import type { SVGProps } from 'react'

type IconName = 'home' | 'user' | 'file' | 'code' | 'layers' | 'spark' | 'briefcase' | 'mail' | 'github' | 'linkedin' | 'leetcode' | 'arrowUpRight' | 'download' | 'send' | 'close' | 'message' | 'check' | 'external'

type Props = SVGProps<SVGSVGElement> & { name: IconName }

export function Icon({ name, ...props }: Props) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<IconName, React.ReactNode> = {
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
    external: <><path d="M8 3h5v5M13 3 7.5 8.5" /><path d="M11 7v4.5H3.5v-7H8" /></>,
  }
  return <svg aria-hidden="true" viewBox="0 0 16 16" {...common} {...props}>{paths[name]}</svg>
}
