export const personalInfo = {
  name: "Anup Sawant",
  firstName: "Anup",
  lastName: "Sawant",
  role: "Software Engineer",
  location: "Mumbai, India",
  tagline: "Think Different.",
  status: "Open to opportunities",
  email: "anupsawant1209@gmail",
  aboutCopy: "I am a Software Engineer focused on full-stack development, problem solving, scalable systems, and strong computer science fundamentals. I bridge the gap between creative visual experiences and structured back-end architecture.",
  resumeUrl: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9BNUI3M0U2RUQ0NzA4MjIzL0lRQ01rM3hGX0ExaVRKRkhIWFhBZzVOZUFXOUlvRnJqYmp4ZktZR1ZyU3VlTGJjP2U9eWRFY2RY&cid=A5B73E6ED4708223&id=A5B73E6ED4708223%21s457c938c0dfc4c6291471d75c083935e&parId=A5B73E6ED4708223%21s4c4c89d4fd55429e82894ebb5c174cbf&o=OneUp"
};

export const socials = {
  github: "https://github.com/anup-sawant12",
  linkedin: "https://www.linkedin.com/in/anup-sawant-859238259/",
  leetcode: "http://leetcode.com/anup-sawant12",
  emailMailto: "mailto:anupsawant1209@gmail"
};

export const achievements = {
  dsaSolvedCount: 400,
  leetcodeCount: 350,
  cgpa: "8.70"
};

export const education = {
  institution: "Vidyalankar Institute of Technology",
  location: "Mumbai",
  degree: "Electronics and Computer Science Engineering (EXCS)",
  graduationYear: 2028,
  cgpa: "8.70"
};

export const projects = [
  {
    id: "01",
    name: "SmartInvoice",
    description: "Multi-tenant invoice management system for creating, managing and generating professional invoices for multiple shops.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Prisma ORM", "JWT", "Cloudinary"],
    liveDemo: "https://smart-invoice-client.vercel.app/",
    github: "", // Left empty/configurable as requested
    visualType: "dashboard",
    elements: ["Dashboard", "Invoices", "Shops", "Analytics"],
    image: "../src/assets/smartInv.png"
  },
  {
    id: "02",
    name: "Collaborative Project & Task Management",
    description: "Multi-tenant project management platform for managing workspaces, projects, team members and tasks with role-based collaboration.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Clerk", "Inngest", "Nodemailer", "Vercel"],
    liveDemo: "https://project-mgmt-client-pi.vercel.app/",
    github: "https://github.com/anup-sawant12/project-management/",
    visualType: "board",
    elements: ["Workspace", "Projects", "Tasks", "Members"],
    image: "../src/assets/projectMgmt.png"
  },
  {
    id: "03",
    name: "Daily LeetCode Generator",
    description: "Web application that generates daily LeetCode problem sets to help users practice Data Structures and Algorithms consistently.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://daily-leetcode-ten.vercel.app/",
    github: "https://github.com/anup-sawant12/daily-leetcode",
    visualType: "code",
    elements: ["ARRAY", "TREE", "BINARY SEARCH", "LINKED LIST", "STACK"],
    image: "../src/assets/lc.png"
  }
];

export const skillClusters = [
  {
    category: "LANGUAGES",
    skills: ["C++", "JavaScript", "Python", "SQL"]
  },
  {
    category: "FRONTEND",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "EJS"]
  },
  {
    category: "BACKEND",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "DATABASES",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "TOOLS",
    skills: ["Git", "GitHub", "Vercel", "Prisma ORM", "Postman"]
  },
  {
    category: "COMPUTER SCIENCE",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"]
  }
];

// Helper to get raw skills array
export const allSkillsList = skillClusters.reduce((acc, current) => {
  return [...acc, ...current.skills];
}, []);
