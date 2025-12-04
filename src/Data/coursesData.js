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

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    desc: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
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
After this course you can target roles like:

• Frontend Developer
• Backend Developer
• Full Stack Developer
• Web Developer (Product / Startup / Agency)

With 2–3 years of experience you can move towards Team Lead or Tech Lead roles.
Freelancing and remote work opportunities are also very strong in this field.
    `,

    averageSalary: "₹4 – 12 LPA (fresher to 2 yrs, depends on company & city)",
  },

  {
    id: 2,
    title: "UI/UX Design",
    desc: "Learn Figma, wireframes, prototypes, design systems",
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
UI/UX designers are needed in all digital products – apps, websites, SaaS,
fintech, edtech, e-commerce etc.

After this course you can move into roles like:

• UI Designer
• UX Designer
• Product Designer
• Interaction Designer

With a strong portfolio, you can land jobs at product companies, agencies, or
work as a freelance designer.
    `,

    averageSalary: "₹4 – 10 LPA (depends heavily on portfolio & city)",
  },

  {
    id: 3,
    title: "Machine Learning Essentials",
    desc: "Python, ML models, data preprocessing",
    image: Image3,
    category: "AI/ML",
    level: "Advanced",
    mode: "Online",
    duration: "4–5 Months",

    shortDescription:
      "Learn core machine learning concepts, algorithms and workflows using Python.",

    details: `
This course focuses on the foundation of Machine Learning.
You will learn how to clean data, build models, evaluate performance,
and improve accuracy using standard libraries.

The goal is to make you comfortable with the full ML pipeline, not just theory.
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
Machine Learning skills are used in data science, analytics, and AI products.

After this course, with further practice and projects, you can target roles like:

• ML Engineer (entry-level)
• Data Analyst / Junior Data Scientist
• AI Engineer (with additional deep learning skills)

The field is competitive, so portfolio and continuous learning matter a lot.
    `,

    averageSalary: "₹6 – 18 LPA (strongly skill and company dependent)",
  },

  {
    id: 4,
    title: "Cyber Security Fundamentals",
    desc: "Ethical hacking, network security, tools",
    image: Image4,
    category: "Cyber Security",
    level: "Beginner",
    mode: "Offline",
    duration: "3–4 Months",

    shortDescription:
      "Hands-on introduction to ethical hacking, vulnerabilities and defense techniques.",

    details: `
This course introduces you to core concepts of cyber security – how attacks
work, how systems are compromised, and how to protect them.

You will get practical exposure to tools used for scanning, exploitation,
and securing systems in a controlled environment.
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
Cyber Security is growing every year because every company goes digital.

After building strong fundamentals and certifications, you can go towards:

• Security Analyst
• SOC Analyst
• Penetration Tester (with advanced skills)
• Information Security Engineer

It’s a long-term career path with strong salaries, but requires continuous learning.
    `,

    averageSalary: "₹4 – 12 LPA (entry to mid-level, depends on skills & certs)",
  },

  {
    id: 5,
    title: "Cloud Computing with AWS",
    desc: "EC2, S3, Lambda, IAM, VPC",
    image: Image5,
    category: "Cloud",
    level: "Intermediate",
    mode: "Online",
    duration: "3–4 Months",

    shortDescription:
      "Learn core AWS services and how to deploy scalable applications on the cloud.",

    details: `
This course teaches the essential AWS services used in real projects:
compute, storage, networking and security.

You will create and manage EC2 instances, S3 buckets, IAM users,
VPC networks and basic serverless functions.
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
Cloud skills are mandatory for modern backend and DevOps roles.

After this course and some practical exposure, you can move towards:

• Cloud Support Engineer
• AWS Cloud Engineer (junior)
• DevOps Engineer (with extra tools like Docker, CI/CD)
• SysAdmin with cloud specialization
    `,

    averageSalary: "₹5 – 15 LPA (company, role, experience dependent)",
  },

  {
    id: 6,
    title: "Data Science Bootcamp",
    desc: "Pandas, NumPy, Matplotlib, ML workflow",
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

You will work on multiple datasets and learn how to tell stories with data.
    `,

    keyTopics: [
      "Python for data analysis",
      "Pandas & NumPy in depth",
      "Data visualization with Matplotlib/Seaborn",
      "Exploratory data analysis (EDA)",
      "End-to-end ML workflow",
      "Basic model deployment concepts",
    ],

    futureScope: `
Data Science is highly in demand but also competitive.

With solid projects, you can aim for:

• Data Analyst
• Business/Data Analyst
• Junior Data Scientist

Real datasets and a strong portfolio matter more than just certificates.
    `,

    averageSalary: "₹5 – 14 LPA (heavily varies by domain & company)",
  },

  {
    id: 7,
    title: "Digital Marketing",
    desc: "SEO, social media marketing, Google ads, analytics & brand growth strategy",
    image: Image7,
    category: "Marketing",
    level: "Advanced",
    mode: "Offline",
    duration: "3–4 Months",

    shortDescription:
      "Practical digital marketing: SEO, ads, content, social media and analytics.",

    details: `
This Digital Marketing program gives you hands-on experience in growing
businesses online.

You will learn how to plan campaigns, run Google/Facebook ads, do SEO,
build content strategies and track performance using analytics tools.
    `,

    keyTopics: [
      "Search Engine Optimization (SEO)",
      "Google Ads & PPC campaigns",
      "Social Media Marketing (Instagram, Facebook, YouTube)",
      "Content marketing basics",
      "Email marketing & automation",
      "Google Analytics & reporting",
      "Lead generation & funnels",
    ],

    futureScope: `
Every business wants online visibility, so digital marketing skills are
highly monetizable.

After this course you can work as:

• Digital Marketing Executive
• SEO Specialist
• Social Media Manager
• Performance Marketing Executive

You can work in agencies, startups, e-commerce brands or as a freelancer.
    `,

    averageSalary: "₹3 – 10 LPA (plus high freelance/commission potential)",
  },
  {
  id: 8,
  title: "Mobile App Development ",
  desc: "Flutter, Dart, Android & iOS apps",
  image: Image8,
  category: "Mobile Development",
  level: "Intermediate",
  mode: "Online",
  duration: "4–5 Months",

  shortDescription:
    "Build high-performance Android and iOS apps using Flutter & Dart.",

  details: `
This course teaches cross-platform mobile app development with Flutter.

You will build real applications including login flows, APIs integration,
Firebase auth, push notifications and app publishing techniques.
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
Flutter developers are increasingly in demand for quick cross-platform app delivery.

Career roles include:

• Flutter Developer
• Mobile Application Engineer
• Startup App Developer
• Freelance Mobile Developer

Excellent remote freelance opportunities as well.
  `,

  averageSalary: "₹4 – 12 LPA",
},

{
  id: 9,
  title: "DevOps Engineering",
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

You will create pipelines, manage containers using Docker,
and deploy apps using Kubernetes.
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
DevOps engineers bridge development and IT operations.

Career roles include:

• DevOps Engineer
• Cloud Operations Engineer
• Platform Engineer
• Site Reliability Engineer

High-paying domain with strong enterprise demand.
  `,

  averageSalary: "₹6 – 18 LPA",
},

{
  id: 10,
  title: "Python Programming",
  desc: "Core Python, automation, scripting",
  image: Image10,
  category: "Programming",
  level: "Beginner",
  mode: "Online",
  duration: "2–3 Months",

  shortDescription:
    "Learn Python fundamentals for automation, scripting, and backend prep.",

  details: `
This beginner-friendly course introduces Python programming from scratch.

You will practice scripting, loops, functions,
file handling and automation tasks.
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
Python is a core skill across many tech fields.

After this course you can move into:

• Junior Python Developer
• QA Automation Tester
• Data analyst trainee
• Backend development track

Python opens doors into ML, AI & DevOps fields.
  `,

  averageSalary: "₹3 – 8 LPA",
},

{
  id: 11,
  title: "Ethical Hacking Pro",
  desc: "Advanced penetration testing & tools",
  image: Image11,
  category: "Cyber Security",
  level: "Advanced",
  mode: "Offline",
  duration: "4–5 Months",

  shortDescription:
    "Advanced ethical hacking focusing on penetration testing techniques.",

  details: `
This advanced program builds real-world hacking skills.

Students practice vulnerability scanning, web attacks,
payload testing and reporting methodologies.
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
Cyber Security specialists are globally demanded.

Possible roles:

• Penetration Tester
• Bug Bounty Hunter
• Cyber Security Consultant
• SOC Analyst

Strong earning potential including freelance contracts.
  `,

  averageSalary: "₹6 – 18 LPA",
},

{
  id: 12,
  title: "Game Development ",
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

You will build playable games,
implement player mechanics and learn scene layouts.
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
The gaming industry is growing fast across mobile and PC platforms.

Career roles include:

• Game Developer
• Unity Developer
• Indie game creator
• Simulation developer

Freelance and indie publishing opportunities are increasing.
  `,

  averageSalary: "₹4 – 15 LPA",
},

];

export default courses;
