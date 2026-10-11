export type ProfileIcon = 'github' | 'linkedin' | 'leetcode'

export const profile = {
  name: 'Jaithra Vidwath Kavuri',
  initials: 'JVK',
  education: 'B.Tech in Computer Science and Engineering — Internet of Things (CSE-IoT)',
  college: 'VNR VJIET',
  collegeFull: 'Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology',
  status: 'Sophomore',
  location: 'Hyderabad, India',
  headline: 'Thoughtful code. Meaningful connections.',
  intro: "I'm a CSE-IoT student and full-stack developer exploring the possibilities of connected systems, intelligent technology, and practical software solutions.",
  resumePath: '/resume.pdf',
  contact: {
    email: 'jaithra.vidwath@gmail.com',
    mobile: '9390002551',
  },
}

export const sections = [
  { id: 'home', label: 'Home', shortLabel: 'Home', icon: 'home' },
  { id: 'about', label: 'About', shortLabel: 'About', icon: 'user' },
  { id: 'resume', label: 'Resume', shortLabel: 'Resume', icon: 'file' },
  { id: 'skills', label: 'Skills', shortLabel: 'Skills', icon: 'code' },
  { id: 'projects', label: 'Projects', shortLabel: 'Projects', icon: 'layers' },
  { id: 'interests', label: 'Interests', shortLabel: 'Interests', icon: 'spark' },
  { id: 'experience', label: 'Work Experience', shortLabel: 'Work', icon: 'briefcase' },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: 'mail' },
] as const

export const programmingLanguages = ['C', 'Python', 'Java', 'JavaScript', 'SQL']
export const databases = ['MongoDB', 'MongoDB Atlas']
export const tools = ['Postman', 'Visual Studio Code']
export const interestLabels = [
  { title: 'Internet of Things', eyebrow: '01 / connected curiosity', description: 'Exploring how connected systems can make technology feel more useful and present in everyday life.', kind: 'nodes' },
  { title: 'Machine Learning', eyebrow: '02 / patterns & possibility', description: 'Interested in the ways data and intelligent systems can support practical problem-solving.', kind: 'data' },
  { title: 'Full-stack Development', eyebrow: '03 / from idea to interface', description: 'Learning by building across the product surface, from an interface to the systems behind it.', kind: 'stack' },
  { title: 'Programming & Problem-Solving', eyebrow: '04 / clarity through code', description: 'Enjoying the process of breaking a problem down, testing an idea, and making it work.', kind: 'code' },
] as const

export type Project = {
  number: string
  title: string
  description: string
  technologies: string[]
  kind: 'rental' | 'blood' | 'traffic'
  featured?: boolean
  repository?: string
  liveDemo?: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Equipment Rental Application',
    description: 'A full-stack equipment rental application developed through practical application development work.',
    technologies: ['Full-stack development', 'MongoDB', 'MongoDB Atlas', 'Postman', 'Visual Studio Code'],
    kind: 'rental',
    featured: true,
  },
  {
    number: '02',
    title: 'Blood Donor Management System',
    description: 'A Python project focused on organizing the idea of blood donor management.',
    technologies: ['Python'],
    kind: 'blood',
  },
  {
    number: '03',
    title: 'Smart Traffic Management System',
    description: 'A C programming project exploring the logic of traffic management.',
    technologies: ['C'],
    kind: 'traffic',
  },
]

export const profiles: Array<{ name: string; handle: string; href: string; description: string; icon: ProfileIcon }> = [
  { name: 'GitHub', handle: 'jaithravidwath-create', href: 'https://github.com/jaithravidwath-create', description: 'Explore my repositories and development work.', icon: 'github' },
  { name: 'LinkedIn', handle: 'jaithra-vidwath-kavuri', href: 'https://www.linkedin.com/in/jaithra-vidwath-kavuri-805197371/', description: 'Connect with me and explore my professional journey.', icon: 'linkedin' },
  { name: 'LeetCode', handle: 'vidwath007', href: 'https://leetcode.com/u/vidwath007/', description: 'Explore my coding practice and problem-solving journey.', icon: 'leetcode' },
]

export const chatbotWelcome = "Hey, I'm Ask JVK. Curious about Jaithra's projects, technical interests, skills, or experience? Ask me anything."
export const suggestedQuestions = [
  'Tell me about Jaithra.',
  'What projects has he developed?',
  'Which programming languages does he know?',
  'Tell me about his equipment rental application.',
  'What are his interests?',
  'Tell me about his McKinsey Forward fellowship.',
  'Where can I find his GitHub?',
  'Where can I find his LeetCode profile?',
  'How can I contact him?',
  'Where can I find his resume?',
]

export const verifiedKnowledge = {
  personal: {
    name: profile.name,
    education: profile.education,
    college: profile.college,
    academicStatus: profile.status,
    location: profile.location,
  },
  programmingLanguages,
  toolsAndTechnologies: [...databases, ...tools],
  interests: interestLabels.map((item) => item.title),
  projects: projects.map(({ title, description, technologies }) => ({ title, description, technologies })),
  experience: {
    title: "McKinsey Forward Program Fellow '25",
    program: 'McKinsey Forward Program',
    year: '2025 cohort',
    linkedin: profiles.find((item) => item.icon === 'linkedin')?.href,
  },
  profiles: Object.fromEntries(profiles.map((item) => [item.name, item.href])),
  contact: profile.contact,
  resume: profile.resumePath,
}
