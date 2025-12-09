// src/Data/coursesData.js
import Image1 from "../assets/wp8903890.jpg";
import Image2 from "../assets/ui.jpg";
import Image3 from "../assets/mc.webp";
import Image4 from "../assets/cb.jpg";
import Image5 from "../assets/cld.webp";
import Image6 from "../assets/dtsc.jpg";
import Image7 from "../assets/Digital-marketing.jpg";
import Image8 from "../assets/fluter.png";
import Image9 from "../assets/devops.png";
import Image10 from "../assets/python.png";
import Image11 from "../assets/ethical-hacking.jpg";
import Image12 from "../assets/game.webp";
import Image13 from "../assets/Project management.jpg";
import Image14 from "../assets/Artificial-intelligence.jpg";
import Image15 from "../assets/Data-Analytics-.webp";
import Image16 from "../assets/GI.png";
import Image17 from "../assets/Softwar Developmemnt.jpg";
import Image18 from "../assets/robotics-automation.jpg";
import Image19 from "../assets/BlockChain.jpg";
import Image20 from "../assets/Business-Intelligence.png";
import Image21 from "../assets/automation-testing.png";

const courses = [
  // ------------- IMAGE WALI CATEGORIES (EXISTING COURSES RENAMED) -------------

  {
    id: 1,
    title: "MERN stack development",
    desc: "MERN stack – HTML, CSS, JavaScript, React, Node.js, MongoDB",
    image: Image1,
    category: "Development",
    level: "Beginner",
    mode: "Online",
    duration: "6 Months",
    shortDescription:
      "End-to-end web development with frontend, backend, database and deployment.",
    details: `
This Full Stack Web Development course takes you from zero to job-ready.
You will build responsive UIs with HTML, CSS and React, write REST APIs with
Node.js and Express, and use MongoDB for database.

The focus is on real projects – auth, dashboards, admin panels, and integration
with third-party APIs – so that you can show solid work in your portfolio.
    `,
    keyTopics: [
      "HTML5, CSS3, Flexbox, Grid",
      "Modern JavaScript (ES6+)",
      "React, Hooks, React Router",
      "Node.js, Express.js",
      "MongoDB & Mongoose",
      "REST APIs, JWT authentication",
      "Deployment on cloud platforms",
    ],
    futureScope: `
Full stack developers are in demand in almost every company.

You can target:
• Frontend Developer
• Backend Developer
• Full Stack Developer
• Web Developer (Product / Startup / Agency)
    `,
    averageSalary: "₹4 – 12 LPA (fresher to 2 yrs, depends on company & city)",
  },

  {
    id: 2,
    title: "User experience design",
    desc: "UI/UX, Figma, wireframes, prototypes, design systems",
    image: Image2,
    category: "Design",
    level: "Intermediate",
    mode: "Offline",
    duration: "3–4 Months",
    shortDescription:
      "Design modern, user-friendly web and mobile interfaces using Figma and UX processes.",
    details: `
This UI/UX Design course covers the complete design process: user research,
wireframing, prototyping, high-fidelity designs and design systems.

You will work in Figma, design real screens, build clickable prototypes,
and learn how to handoff designs to developers properly.
    `,
    keyTopics: [
      "Design principles & visual hierarchy",
      "User research & personas",
      "Wireframes & low-fidelity prototypes",
      "Figma for UI design",
      "Design systems & components",
      "Usability testing & iterations",
      "Portfolio building",
    ],
    futureScope: `
After this course you can move into roles like:
• UI Designer
• UX Designer
• Product Designer
• Interaction Designer
    `,
    averageSalary: "₹4 – 10 LPA (depends heavily on portfolio & city)",
  },

  {
    id: 3,
    title: "Machine learning",
    desc: "Python, ML models, data preprocessing",
    image: Image3,
    category: "Machine learning",
    level: "Advanced",
    mode: "Online",
    duration: "4–5 Months",
    shortDescription:
      "Learn core machine learning concepts, algorithms and workflows using Python.",
    details: `
This course focuses on the foundation of Machine Learning.
You will learn how to clean data, build models, evaluate performance,
and improve accuracy using standard libraries.
    `,
    keyTopics: [
      "Python for data science",
      "Data cleaning & preprocessing",
      "Supervised & unsupervised learning",
      "Regression & classification models",
      "Model evaluation & metrics",
      "Intro to deep learning concepts",
    ],
    futureScope: `
You can aim for:
• ML Engineer (entry level)
• Data Analyst / Junior Data Scientist
• AI Engineer (with extra skills)
    `,
    averageSalary: "₹6 – 18 LPA (strongly skill and company dependent)",
  },

  {
    id: 4,
    title: "Cybersecurity",
    desc: "Ethical hacking, network security, security tools",
    image: Image4,
    category: "Cybersecurity",
    level: "Beginner",
    mode: "Offline",
    duration: "3–4 Months",
    shortDescription:
      "Hands-on introduction to ethical hacking, vulnerabilities and defense techniques.",
    details: `
This course introduces you to core concepts of cyber security – how attacks
work, how systems are compromised, and how to protect them.
    `,
    keyTopics: [
      "Networking basics for security",
      "Types of attacks & vulnerabilities",
      "Ethical hacking methodology",
      "Common security tools & scanners",
      "Basic web app security concepts",
      "Best practices for securing systems",
    ],
    futureScope: `
You can go towards:
• Security Analyst
• SOC Analyst
• Penetration Tester (with advanced skills)
    `,
    averageSalary:
      "₹4 – 12 LPA (entry to mid-level, depends on skills & certs)",
  },

  {
    id: 5,
    title: "Cloud computing",
    desc: "AWS – EC2, S3, Lambda, IAM, VPC",
    image: Image5,
    category: "Cloud computing",
    level: "Intermediate",
    mode: "Online",
    duration: "3–4 Months",
    shortDescription:
      "Learn core AWS services and how to deploy scalable applications on the cloud.",
    details: `
This course teaches the essential AWS services used in real projects:
compute, storage, networking and security.
    `,
    keyTopics: [
      "EC2, S3, RDS basics",
      "IAM users, roles, policies",
      "VPC, subnets, security groups",
      "Load balancers & auto-scaling (intro level)",
      "Serverless basics with Lambda",
      "Cost & security best practices",
    ],
    futureScope: `
You can move towards:
• Cloud Support Engineer
• AWS Cloud Engineer (junior)
• DevOps Engineer (with extra tools)
    `,
    averageSalary: "₹5 – 15 LPA (company, role, experience dependent)",
  },

  {
    id: 6,
    title: "Data Science",
    desc: "Pandas, NumPy, visualization, ML workflow",
    image: Image6,
    category: "Data Science",
    level: "Advanced",
    mode: "Offline",
    duration: "5–6 Months",
    shortDescription:
      "End-to-end data science training: data handling, visualization and ML workflow.",
    details: `
This bootcamp covers the full flow: from data loading and cleaning
to visualization, feature engineering and building ML models.
    `,
    keyTopics: [
      "Python for data analysis",
      "Pandas & NumPy in depth",
      "Data visualization",
      "Exploratory data analysis (EDA)",
      "End-to-end ML workflow",
      "Basic model deployment concepts",
    ],
    futureScope: `
You can aim for:
• Data Analyst
• Business/Data Analyst
• Junior Data Scientist
    `,
    averageSalary: "₹5 – 14 LPA (varies by domain & company)",
  },

  {
    id: 7,
    title: "Digital marketing",
    desc: "SEO, social media marketing, Google ads, analytics",
    image: Image7,
    category: "Digital marketing",
    level: "Advanced",
    mode: "Offline",
    duration: "3–4 Months",
    shortDescription:
      "Practical digital marketing: SEO, ads, content, social media and analytics.",
    details: `
This Digital Marketing program gives you hands-on experience in growing
businesses online.
    `,
    keyTopics: [
      "Search Engine Optimization (SEO)",
      "Google Ads & PPC campaigns",
      "Social Media Marketing",
      "Content marketing basics",
      "Email marketing & automation",
      "Google Analytics & reporting",
    ],
    futureScope: `
You can work as:
• Digital Marketing Executive
• SEO Specialist
• Social Media Manager
    `,
    averageSalary: "₹3 – 10 LPA (plus freelance/commission potential)",
  },

  {
    id: 8,
    title: "Mobile app development",
    desc: "Flutter, Dart, Android & iOS apps",
    image: Image8,
    category: "Mobile app development",
    level: "Intermediate",
    mode: "Online",
    duration: "4–5 Months",
    shortDescription:
      "Build high-performance Android and iOS apps using Flutter & Dart.",
    details: `
This course teaches cross-platform mobile app development with Flutter.
You will build real applications including login flows, API integration,
Firebase auth and push notifications.
    `,
    keyTopics: [
      "Dart programming fundamentals",
      "Flutter UI widgets & layouts",
      "State management basics",
      "REST API integration",
      "Firebase Auth & database",
      "App testing & Play Store publishing",
    ],
    futureScope: `
Roles:
• Flutter Developer
• Mobile Application Engineer
• Startup App Developer
    `,
    averageSalary: "₹4 – 12 LPA",
  },

  {
    id: 9,
    title: "DevOps",
    desc: "Docker, CI/CD, Jenkins, Kubernetes basics",
    image: Image9,
    category: "DevOps",
    level: "Advanced",
    mode: "Online",
    duration: "4–6 Months",
    shortDescription:
      "Learn automation, CI/CD pipelines and cloud-ready DevOps workflows.",
    details: `
This DevOps course teaches automation and deployment practices used by modern IT teams.
    `,
    keyTopics: [
      "Linux & Git basics",
      "CI/CD with Jenkins & GitHub Actions",
      "Docker containers",
      "Kubernetes intro",
      "Cloud deployment pipelines",
      "Monitoring & logs",
    ],
    futureScope: `
You can work as:
• DevOps Engineer
• Cloud Operations Engineer
• Platform Engineer
    `,
    averageSalary: "₹6 – 18 LPA",
  },

  {
    id: 10,
    title: "Python development",
    desc: "Core Python, automation, scripting",
    image: Image10,
    category: "Python development",
    level: "Beginner",
    mode: "Online",
    duration: "2–3 Months",
    shortDescription:
      "Learn Python fundamentals for automation, scripting and backend prep.",
    details: `
This beginner-friendly course introduces Python programming from scratch.
You will practice scripting, loops, functions, file handling and automation tasks.
    `,
    keyTopics: [
      "Python syntax & fundamentals",
      "Loops & functions",
      "Data structures",
      "File handling",
      "Automation scripts",
      "API basics",
    ],
    futureScope: `
After this course you can move into:
• Junior Python Developer
• QA Automation Tester
• Data analyst trainee
    `,
    averageSalary: "₹3 – 8 LPA",
  },

  // these two are extra but useful
  {
    id: 11,
    title: "Ethical Hacking Pro",
    desc: "Advanced penetration testing & tools",
    image: Image11,
    category: "Cybersecurity",
    level: "Advanced",
    mode: "Offline",
    duration: "4–5 Months",
    shortDescription:
      "Advanced ethical hacking focusing on penetration testing techniques.",
    details: `
This advanced program builds real-world hacking skills:
vulnerability scanning, web attacks, payload testing and reporting.
    `,
    keyTopics: [
      "Advanced networking attacks",
      "Web exploitation techniques",
      "Kali Linux tools",
      "Metasploit framework",
      "Vulnerability scanning",
      "Bug bounty methods",
    ],
    futureScope: `
Roles:
• Penetration Tester
• Bug Bounty Hunter
• Cyber Security Consultant
    `,
    averageSalary: "₹6 – 18 LPA",
  },

  {
    id: 12,
    title: "Game Development",
    desc: "Unity engine, C#, 2D & 3D games",
    image: Image12,
    category: "Game Development",
    level: "Intermediate",
    mode: "Online",
    duration: "3–4 Months",
    shortDescription:
      "Create real 2D and 3D games using Unity and C#.",
    details: `
This course introduces game engine workflows and real game projects.
You will build playable games and implement player mechanics.
    `,
    keyTopics: [
      "Unity editor basics",
      "C# game scripting",
      "2D & 3D game mechanics",
      "Physics engines",
      "Level design",
      "Publishing strategy",
    ],
    futureScope: `
Roles:
• Game Developer
• Unity Developer
• Indie game creator
    `,
    averageSalary: "₹4 – 15 LPA",
  },

  // ----------------- MISSING IMAGE CATEGORIES (NEW COURSES) -------------------

  {
    id: 13,
    title: "Project Management",
    desc: "Agile, Scrum, planning, risk & stakeholder management",
    image: Image13,
    category: "Project Management",
    level: "Intermediate",
    mode: "Offline",
    duration: "3–4 Months",
    shortDescription:
      "Learn how to plan, execute and monitor IT and non-IT projects effectively.",
    details: `
Covers project lifecycle, scope, time, cost, risk and stakeholder communication
with strong focus on Agile and Scrum.
    `,
    keyTopics: [
      "Project lifecycle & documentation",
      "Agile & Scrum fundamentals",
      "WBS, Gantt charts, estimations",
      "Risk & stakeholder management",
      "Team communication",
      "Basic Jira/PM tools usage",
    ],
    futureScope: `
Good base for:
• Project Coordinator
• Junior Project Manager
• Scrum Master (with experience)
    `,
    averageSalary: "₹4 – 12 LPA",
  },

  {
    id: 14,
    title: "Artificial intelligence",
    desc: "AI concepts, search, knowledge, basic ML",
    image: Image14,
    category: "Artificial intelligence",
    level: "Intermediate",
    mode: "Online",
    duration: "3–4 Months",
    shortDescription:
      "Conceptual introduction to classical AI plus basic ML applications.",
    details: `
Focus on AI fundamentals – search, reasoning, planning, basic ML overview
and real-world AI use-cases.
    `,
    keyTopics: [
      "Agent & environment concepts",
      "Search algorithms (BFS, DFS, A*)",
      "Knowledge representation basics",
      "Intro to ML & neural nets",
      "AI applications & limitations",
    ],
    futureScope: `
Helps for:
• AI/ML higher study
• Data / AI product roles (with extra skills)
    `,
    averageSalary: "₹6 – 18 LPA (when combined with strong dev/ML skills)",
  },

  {
    id: 15,
    title: "Data analysis",
    desc: "Excel, SQL, basic BI & visualization",
    image: Image15,
    category: "Data analysis",
    level: "Beginner",
    mode: "Online",
    duration: "3–4 Months",
    shortDescription:
      "Learn to clean, analyze and visualize data for business decisions.",
    details: `
You’ll use Excel and SQL to work with datasets and build basic dashboards.
    `,
    keyTopics: [
      "Excel for analysis",
      "Descriptive statistics",
      "SQL SELECT & joins",
      "Basic visualizations",
      "Reporting & insights writing",
    ],
    futureScope: `
Entry path to:
• Data Analyst
• MIS/Reporting Executive
    `,
    averageSalary: "₹3 – 8 LPA",
  },

  {
    id: 16,
    title: "Generative ai",
    desc: "Prompting, LLM basics, AI APIs",
    image: Image16,
    category: "Generative ai",
    level: "Intermediate",
    mode: "Online",
    duration: "2–3 Months",
    shortDescription:
      "Build small tools and features using LLMs and generative AI APIs.",
    details: `
Covers LLM concepts, prompt design and integrating AI APIs into simple apps.
    `,
    keyTopics: [
      "LLM basics & limitations",
      "Prompt engineering fundamentals",
      "Using hosted AI APIs",
      "Building AI-powered features in apps",
      "Ethics & safety basics",
    ],
    futureScope: `
Useful for:
• Developers adding AI features
• Automation/ops roles using AI tools
    `,
    averageSalary: "₹7 – 20 LPA (with strong dev skills)",
  },



  {
    id: 18,
    title: "Software Development",
    desc: "Software engineering, Git, basic design patterns",
    image: Image17,
    category: "Software Development",
    level: "Intermediate",
    mode: "Offline",
    duration: "3–4 Months",
    shortDescription:
      "Practical software engineering fundamentals beyond just coding.",
    details: `
Focus on SDLC, clean code, Git workflows and basic design patterns
with any one language as base (Java/Python/JS).
    `,
    keyTopics: [
      "SDLC models",
      "Version control with Git",
      "Clean code practices",
      "Basic design patterns",
      "Code reviews & testing basics",
    ],
    futureScope: `
Helps you act like a real engineer, not just a coder, in any dev role.
    `,
    averageSalary: "₹4 – 12 LPA",
  },

  {
    id: 19,
    title: "Robotics and automation",
    desc: "Basic robotics, sensors, microcontrollers",
    image: Image18,
    category: "Robotics and automation",
    level: "Intermediate",
    mode: "Offline",
    duration: "3–4 Months",
    shortDescription:
      "Intro to robotics hardware plus simple automation projects.",
    details: `
You’ll work with microcontrollers (Arduino-type), sensors and actuators
and build small automation/robotics projects.
    `,
    keyTopics: [
      "Basics of robotics & kinematics (intro)",
      "Microcontroller fundamentals",
      "Sensors & actuators",
      "Simple control logic",
      "Automation project building",
    ],
    futureScope: `
Start point for:
• Robotics Engineer (with higher study)
• Industrial automation roles
    `,
    averageSalary: "₹4 – 10 LPA",
  },

  {
    id: 20,
    title: "Blockchain",
    desc: "Blockchain basics, Ethereum, smart contracts (intro)",
    image: Image19,
    category: "Blockchain",
    level: "Advanced",
    mode: "Online",
    duration: "3–4 Months",
    shortDescription:
      "Understand blockchain fundamentals and basic smart contract development.",
    details: `
Covers decentralization, consensus, Ethereum basics and a light intro to Solidity.
    `,
    keyTopics: [
      "Blockchain concepts",
      "Cryptographic hashes & signatures (intro)",
      "Ethereum & EVM overview",
      "Simple smart contracts",
      "Basic dApp flows",
    ],
    futureScope: `
Niche but high-paying for serious devs:
• Blockchain Developer
• Smart Contract Developer (with advanced skills)
    `,
    averageSalary: "₹8 – 25 LPA (skill + market dependent)",
  },

  {
    id: 21,
    title: "Business intelligence",
    desc: "Power BI / BI concepts, dashboards, KPIs",
    image: Image20,
    category: "Business intelligence",
    level: "Intermediate",
    mode: "Online",
    duration: "3–4 Months",
    shortDescription:
      "Learn BI concepts, dashboarding and KPI reporting for business teams.",
    details: `
Focus on BI tools, data modeling and visual dashboards for management.
    `,
    keyTopics: [
      "BI & data warehousing basics",
      "Data modeling concepts",
      "Dashboards & KPIs",
      "Role of BI in organizations",
    ],
    futureScope: `
You can aim for:
• BI Developer
• Reporting/BI Analyst
    `,
    averageSalary: "₹4 – 11 LPA",
  },

  

  
];

export default courses;
