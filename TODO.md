# Portfolio delivery todo

## 1. Responsive portfolio shell and design system
- Build a complete working responsive personal portfolio website for Jaithra Vidwath Kavuri, not merely a plan, mockup, or code snippet.
- Use the specified calm premium visual system: cream `#F6F0E6`, warm beige `#E5D5C3`, soft brown `#A67C52`, deep brown `#5B4636`, navy `#24364B`, and muted text `#71685E`; use elegant editorial typography with a Playfair Display-style heading face and Inter-style interface/body face.
- Keep the implementation lightweight and maintainable for low-end PCs, budget Android phones, older devices, and slow internet: avoid unnecessary dependencies, heavy 3D/WebGL/particle effects, excessive blur/shadows, large assets, and continuous background work.
- Use semantic HTML, readable contrast, responsive layouts for desktop/tablet/mobile, visible keyboard focus, no horizontal overflow, and `prefers-reduced-motion` support.

## 2. Navigation dock and anchored sections
- Provide exactly these navigable sections: Home, About, Resume, Skills, Projects, Interests, Work Experience, and Contact.
- On desktop, provide a slim floating vertical dock on the left with a JVK monogram/personal mark, elegant icons, hover labels/tooltips, subtle active indicator, smooth scrolling, and no content obstruction.
- On mobile, adapt navigation into a compact bottom dock or equivalent that does not cover important content or interfere with scrolling.
- Use efficient active-section detection such as `IntersectionObserver` and ensure each navigation item reaches the correct section.

## 3. Home / hero
- Show the full name `Jaithra Vidwath Kavuri` prominently.
- Show the headline `Thoughtful code. Meaningful connections.`.
- Show the supplied CSE-IoT/full-stack introduction about connected systems, intelligent technology, and practical software solutions.
- Show `Sophomore · B.Tech CSE-IoT · VNR VJIET`.
- Provide working `Explore My Work`, `Get In Touch`, and `View Resume` actions.
- Include one tasteful, lightweight CSS/SVG visual inspired by connected-system nodes or technical diagrams, without a stock portrait, heavy 3D, or expensive animation.
- Use a refined but immediate entrance animation; core content must not wait for decorative sequences.

## 4. About and resume
- About must accurately state that Jaithra is a sophomore pursuing B.Tech CSE-IoT at VNR VJIET, works with C, Python, Java, JavaScript and SQL, has developed the three supplied projects, and is enthusiastic about IoT, Machine Learning and full-stack development.
- Do not invent grades, internships, awards, statistics, expertise, or unsupported claims.
- Resume must have a dedicated section with a short introduction, View Resume and Download Resume controls, and a document-inspired visual.
- Use configurable expected file path `/resume.pdf`; if it exists, visitors can view/download it; if missing, show a graceful placeholder explaining that the actual resume must be added and keep the site from crashing.
- Do not fabricate a resume PDF.

## 5. Skills
- Clearly distinguish programming languages: C, Python, Java, JavaScript, SQL.
- Clearly distinguish databases/technologies: MongoDB, MongoDB Atlas.
- Clearly distinguish development tools: Postman, Visual Studio Code.
- Include areas of interest: Full-stack Development, Internet of Things, Machine Learning.
- Do not use fake proficiency percentages or arbitrary skill bars; use truthful tags, separators, and typography.

## 6. Projects
- Use a visually impressive but lightweight projects section with Equipment Rental Application as the featured project and the remaining projects in a complementary layout.
- Present Equipment Rental Application as a full-stack development project using MongoDB, MongoDB Atlas, Postman and Visual Studio Code, without inventing payments, booking, authentication, admin, inventory automation, or other unverified features.
- Present Blood Donor Management System as a Python project focused on blood donor management, without unverified features or integrations.
- Present Smart Traffic Management System as a C project exploring traffic management, without claiming physical sensors, IoT hardware, cameras, Machine Learning, or microcontrollers.
- Each project needs a title, concise truthful description, technologies, appropriate visual preview, and only real supplied links; hide unavailable links or display `Repository coming soon.` and never display fake live demos.
- Centralize project descriptions, technologies, screenshots/visual configuration, and URLs so they can be updated easily.
- Avoid presenting all projects as identical cards; use CSS-generated visuals when screenshots are unavailable.

## 7. Interests, experience, and profiles
- Create a dedicated Interests section highlighting Internet of Things, Machine Learning, Full-stack Development, and Programming and Problem-Solving.
- Use tasteful lightweight visuals: connected nodes for IoT, data patterns for ML, interface-inspired graphics for full-stack, and restrained code details for programming; visuals must not imply unverified mastery or completed projects.
- Create a professional Work Experience section presenting `McKinsey Forward Program Fellow '25`, McKinsey Forward Program, 2025 cohort, as a fellowship/program experience—not employment, internship, award, responsibility, or business outcome—and link to the supplied LinkedIn profile.
- Include the actual profiles with working new-tab links and recognizable icons: GitHub `https://github.com/jaithravidwath-create`, LinkedIn `https://www.linkedin.com/in/jaithra-vidwath-kavuri-805197371/`, and LeetCode `https://leetcode.com/u/vidwath007/`.
- Use only the supplied truthful descriptions; do not invent repository counts, contributions, followers, solved counts, ratings, or statistics.

## 8. Contact
- Create an elegant Contact section headed `Let's build something meaningful.` with the supplied supporting copy.
- Include a clickable `mailto:jaithra.vidwath@gmail.com`, clickable `tel:9390002551`, LinkedIn button, and GitHub button.
- Use email as primary and phone as secondary urgent-contact option; show the mobile number only in Contact and do not repeat it elsewhere.
- Do not implement a fake contact form; any form must actually work and document its configuration (therefore omit it here).

## 9. Ask JVK chatbot
- Build a functional floating chatbot named `Ask JVK` that opens a responsive conversation panel.
- Use the exact welcome message: `Hey, I'm Ask JVK. Curious about Jaithra's projects, technical interests, skills, or experience? Ask me anything.`.
- Provide the supplied suggested questions, accessible message input, Send button, Enter-to-send, conversation history during the current session, clear user/assistant distinction, loading indicator, error messages, and lightweight open/close transitions.
- Answer only from the supplied verified profile knowledge: name, CSE-IoT education at VNR VJIET, sophomore status, Hyderabad, languages, tools, interests, three projects, McKinsey Forward Program Fellow '25, supplied profile URLs, email, mobile when explicitly requested, and expected `/resume.pdf`.
- Do not invent project features, academic results, coding statistics, awards, qualifications, McKinsey employment, or mastery; distinguish interests from verified project experience; admit unavailable information; give correct links; avoid disclosing phone in greetings/unrelated answers.
- Use an actual server-side LLM API path when configured: frontend chatbot, backend endpoint, server-only API key, centralized knowledge base, restrictive system instructions, request validation, reasonable message limits, basic excessive-request protection, error handling, and `.env.example`.
- Never expose API keys in frontend code and never block portfolio rendering on the AI service.
- If the API key is missing, the site must start successfully and the chatbot must clearly say AI functionality needs configuration. A rule-based fallback must be labeled honestly if used.

## 10. Performance, accessibility, and delivery readiness
- Implement short purposeful CSS transitions/section reveals, smooth navigation, button/project/chatbot transitions, lightweight loading indicators, and reduced-motion behavior.
- Render the core portfolio without waiting for chatbot API calls, handle network failures gracefully, avoid repeated API calls/polling, and keep the closed chatbot lightweight.
- Provide accessible labels, focus states, sufficient contrast, responsive text/buttons, and no obstructing fixed elements.
- Include `public/manus-routes.json` with the actual route set and keep it synchronized.
- Include complete source code, README.md, .gitignore, .env.example, installation commands, frontend/backend run commands, chatbot configuration, resume setup, profile/project update instructions, deployment instructions, and GitHub push commands.
- Never commit real API keys/secrets and do not claim a repository was published unless it was actually pushed.

## 11. Verification evidence
- Install dependencies and run the app.
- Run a production build and fix compilation/runtime errors.
- Verify the navigation dock, section links, profile links, email/telephone links, missing-resume behavior, chatbot open/close, no-key behavior, error handling, mobile layout, horizontal overflow, and route manifest.
- Inspect bundle size and fix significant performance bottlenecks where tooling permits.
- Report measured results honestly; do not claim physical low-end-device, Lighthouse, throttled-network, or configured-key chatbot testing unless actually performed.
