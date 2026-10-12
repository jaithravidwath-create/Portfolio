export type ProfileIcon = 'github' | 'linkedin' | 'leetcode'
export type AchievementIcon = 'scholarship' | 'nptel' | 'check'
export type ClubIcon = 'isoc' | 'iste'
export type LearningSkillIcon = 'git' | 'cpp' | 'js' | 'react' | 'html' | 'css' | 'sql' | 'java' | 'typescript'

export const profile = {
  name: 'Jaithra Vidwath Kavuri',
  initials: 'JVK',
  education: 'B.Tech in Computer Science and Engineering - Internet of Things (CSE-IoT)',
  college: 'VNR VJIET',
  collegeFull: 'Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology',
  status: 'Sophomore',
  location: 'Hyderabad, India',
  headline: 'Learning, building and upskilling.',
  intro: "I'm a CSE-IoT sophomore at VNRVJIET and a beginner full-stack application developer exploring intelligent technology and smart software solutions.",
  resumePath: '/resume.pdf',
  resumeDescription: 'Professional resume containing all information',
  contact: {
    email: 'jaithra.vidwath@gmail.com',
    mobile: '9390002551',
  },
}

/** Full page order. Interests remains in the page flow before achievements and work experience. */
export const sections = [
  { id: 'home', label: 'Home', shortLabel: 'Home', icon: 'home' },
  { id: 'about', label: 'About', shortLabel: 'About', icon: 'user' },
  { id: 'skills', label: 'Skillset', shortLabel: 'Skillset', icon: 'code' },
  { id: 'interests', label: 'Interests', shortLabel: 'Interests', icon: 'spark' },
  { id: 'projects', label: 'Projects', shortLabel: 'Projects', icon: 'layers' },
  { id: 'achievements', label: 'Achievements and Certifications', shortLabel: 'Achievements', icon: 'check' },
  { id: 'experience', label: 'Work Experience', shortLabel: 'Work', icon: 'briefcase' },
  { id: 'clubs', label: 'Clubs', shortLabel: 'Clubs', icon: 'clubs' },
  { id: 'resume', label: 'Resume', shortLabel: 'Resume', icon: 'file' },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: 'mail' },
  { id: 'links', label: 'Links', shortLabel: 'Links', icon: 'link' },
] as const

/** The dock intentionally omits Interests while the section remains discoverable in the page flow. */
export const navigationSections = [
  sections[0],
  sections[1],
  sections[2],
  sections[3],
  sections[4],
  sections[5],
  sections[6],
  sections[7],
  sections[8],
  sections[9],
  sections[10],
] as const

export const programmingLanguages = ['C', 'Python', 'Java', 'JavaScript', 'SQL', 'MATLAB']
export const databases = ['MongoDB', 'MongoDB Atlas']
export const tools = ['Postman', 'Visual Studio Code']

export const learningSkills: Array<{ name: string; label: string; icon: LearningSkillIcon }> = [
  { name: 'Git', label: 'version control', icon: 'git' },
  { name: 'C++', label: 'systems & problem-solving', icon: 'cpp' },
  { name: 'JavaScript', label: 'web development', icon: 'js' },
  { name: 'React', label: 'interfaces', icon: 'react' },
  { name: 'HTML', label: 'structure', icon: 'html' },
  { name: 'CSS', label: 'visual systems', icon: 'css' },
  { name: 'SQL', label: 'data foundations', icon: 'sql' },
  { name: 'Java', label: 'application development', icon: 'java' },
  { name: 'TypeScript', label: 'typed JavaScript', icon: 'typescript' },
]

export const interestLabels = [
  { title: 'Internet of Things', eyebrow: '01 / connected curiosity', description: 'Exploring how connected systems and automation can make technology feel more useful in everyday life.', kind: 'nodes' },
  { title: 'Machine Learning', eyebrow: '02 / patterns & possibility', description: "I'm interested in the ways data and intelligent systems can support practical problem-solving.", kind: 'data' },
  { title: 'Full-stack Development', eyebrow: '03 / from idea to interface', description: 'Learning by building across the product surface, from an interface to the systems behind it.', kind: 'stack' },
  { title: 'Programming & Problem-Solving', eyebrow: '04 / clarity through code', description: 'I enjoy the process of breaking a problem down, testing an idea, and making it work.', kind: 'code' },
  { title: 'Data Structures and Algorithms', eyebrow: '05 / thinking in patterns', description: 'I believe in building a stronger foundation for reasoning about problems, and efficient solutions for them.', kind: 'dsa' },
  { title: 'Object-Oriented Programming', eyebrow: '06 / modeling ideas', description: 'Interested in organizing application logic around clear objects, responsibilities, and relationships.', kind: 'oop' },
  { title: 'Database Management Systems', eyebrow: '07 / information with structure', description: 'Exploring how data can be modeled, stored, and accessed reliably and manipulated inside applications.', kind: 'dbms' },
] as const

export const achievements: Array<{ title: string; type: string; description: string; icon: AchievementIcon }> = [
  { title: 'Reliance Foundation Scholar', type: 'Scholarship', description: 'Recognized as a Reliance Foundation Scholar.', icon: 'scholarship' },
  { title: 'CSS Scholarship', type: 'Scholarship applicant', description: 'Applicant of MHRD CSS Scholarship for College and University Students 2025.', icon: 'scholarship' },
  { title: 'Introduction to Programming in C', type: 'NPTEL course', description: 'A programming foundation course by NPTEL.', icon: 'nptel' },
] as const

export const learningNote = 'And other multiple NPTEL and Coursera certifications being done presently.'
export const workProjects = [
  { title: 'Smart Hostel Room Allotment System', technology: 'DBMS (SQL)', description: 'A database-focused system concept for organizing hostel room allotment and related student records.' },
  { title: 'Sales Forecasting with Curve Fitting', technology: 'MATLAB', description: 'A MATLAB study exploring curve fitting as a way to examine sales patterns and forecast trends.' },
  { title: 'AI-Driven Network Aware Smart Street Lighting', technology: 'Predictive Quality of Service (pQoS) in Computer Networks', description: 'A forward-looking smart-lighting concept using network-aware intelligence and predictive QoS.' },
  { title: 'Smart Automated File Organiser & Search Engine', technology: 'Java', description: 'I am currently working on a Java-based tool to organise files automatically and make them easier to search and find.' },
] as const

export const clubs = [
  { name: 'ISOC', fullName: 'Internet Society', description: 'Member of ISOC, engaging with ideas around an open, connected, and resilient Internet.', icon: 'isoc' as const },
  { name: 'ISTE', fullName: 'Indian Society for Technical Education', description: 'Member of ISTE, connecting with technical education, learning, and professional development.', icon: 'iste' as const },
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
    description: 'I built a full-stack equipment rental application with separate user and admin workflows. Users can register, log in, browse equipment, request rentals, track their rental history, and cancel pending requests, while admins can manage equipment, review requests, approve or reject them, and mark items as returned.',
    technologies: ['Full-stack application development', 'MongoDB', 'MongoDB Atlas', 'Postman', 'Visual Studio Code'],
    kind: 'rental',
    featured: true,
    repository: 'https://github.com/jaithravidwath-create/equipment-rental-fullstack',
  },
  {
    number: '02',
    title: 'Blood Donor Management System',
    description: 'I built a menu-driven Python application for managing donors, donations, blood inventory, and hospital requests. It uses SQLite for storage and includes donor eligibility checks, expiry tracking, blood-group compatibility, low-stock alerts, and CSV reports.',
    technologies: ['Python'],
    kind: 'blood',
    repository: 'https://github.com/jaithravidwath-create/BloodDonorManagementSystem',
  },
  {
    number: '03',
    title: 'Smart Traffic Management System',
    description: 'I built a dependency-free C11 simulation of a four-way intersection that compares fixed-time and adaptive traffic signals. It also gives emergency vehicles priority and reports queue, throughput, and waiting-time statistics.',
    technologies: ['C'],
    kind: 'traffic',
    repository: 'https://github.com/jaithravidwath-create/smart-traffic-management-system',
  },
]

export const profiles: Array<{ name: string; handle: string; href: string; description: string; icon: ProfileIcon }> = [
  { name: 'GitHub', handle: 'jaithravidwath-create', href: 'https://github.com/jaithravidwath-create', description: 'Explore my repositories and development work.', icon: 'github' },
  { name: 'LinkedIn', handle: 'jaithra-vidwath-kavuri', href: 'https://www.linkedin.com/in/jaithra-vidwath-kavuri-805197371/', description: 'Connect with me and explore my professional journey.', icon: 'linkedin' },
  { name: 'LeetCode', handle: 'vidwath007', href: 'https://leetcode.com/u/vidwath007/', description: 'Explore my coding practice and problem-solving journey.', icon: 'leetcode' },
]

export const chatbotWelcome = "Hey, I'm JBot AI. Curious about Jaithra's projects, technical interests, skills, or experience? Ask me anything."
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
  currentlyLearning: learningSkills.map(({ name, label }) => ({ name, label })),
  interests: interestLabels.map((item) => item.title),
  achievements,
  learningNote,
  clubs,
  workProjects,
  projects: projects.map(({ title, description, technologies, repository }) => ({ title, description, technologies, repository })),
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
