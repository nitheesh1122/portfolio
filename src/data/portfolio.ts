import type { Project, Education, Award, Certification, SkillCategory } from '../types';

export const personalInfo = {
    name: "NITHEESH S",
    role: "Full Stack Developer",
    tagline: "Engineering scalable solutions at the intersection of web technology and real-world impact. Transforming complex problems into elegant, user-centric applications.",
    location: "Erode, Tamil Nadu, India",
    email: "nitheeshselvaraj01@gmail.com",
    phone: "+91 6381763494",
    socials: {
        github: "https://github.com/nitheesh1122",
        linkedin: "https://linkedin.com/in/nitheeshselvaraj",
        leetcode: "https://leetcode.com/u/nitheeshs06"
    },
    githubUsername: "nitheesh1122",
    leetcodeUsername: "nitheeshs06",
    about: "Computer Science undergraduate at Kongu Engineering College with a passion for building scalable web applications and IoT-integrated solutions. Specialized in MERN stack development with proven track record in hackathons and innovation challenges.",
    interests: ["Full-Stack Development", "Internet of Things (IoT)", "Cloud Computing"]
};

export const education: Education[] = [
    {
        id: "kongu",
        degree: "B.E. Computer Science and Engineering",
        institution: "Kongu Engineering College, Perundurai",
        period: "2023–2027",
    },
    {
        id: "maharishi",
        degree: "Higher Secondary (AISSCE)",
        institution: "Maharishi Vidya Mandir Higher Secondary School, Erode",
        period: "2021–2023",
    }
];

export const projects: Project[] = [
    {
        id: "niral",
        title: "NIRAL – Smart Agri Logistics System",
        description: "Agricultural logistics platform with IoT sensor integration for real-time monitoring of temperature, humidity, and gas levels. Features role-based dashboards for vendors, drivers, and customers with data visualization to reduce spoilage.",
        tech: ["MERN Stack", "IoT Sensors", "Data Visualization"],
        github: "https://github.com/nitheesh1122/Niral-Smart-Agri-Tracker",
    },
    {
        id: "nutriiq",
        title: "NutriIQ – Diet & Meal Planner",
        description: "Comprehensive nutrition planning application with authentication, meal logging, and automated nutrition calculations. Modular frontend architecture with responsive design.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/nitheesh1122/Diet_and_meal_planner",
        live: "https://diet-and-meal-planner.vercel.app/"
    },
    {
        id: "textile",
        title: "Textile Management System",
        description: "Enterprise-grade textile management solution with Next.js. Features authentication, REST API workflows, audit logs, analytics dashboards, and scalable backend architecture.",
        tech: ["Next.js", "TypeScript", "MongoDB", "REST API"],
        github: "https://github.com/nitheesh1122/Consultancy_Project"
    },
    {
        id: "restaurant",
        title: "Smart Restaurant Queue & Table Management",
        description: "Real-time restaurant management system with JWT authentication and WebSocket updates. Optimized relational database schema for reservations and queue management.",
        tech: ["Angular", "Node.js", "MySQL", "JWT", "WebSockets"],
        github: "https://github.com/nitheesh1122/Capstone_project"
    }
];

export const awards: Award[] = [
    {
        id: "algo-arena",
        title: "2nd Prize - Competitive Programming",
        organization: "Algo Arena | CSE Department, Kongu Engineering College",
        date: "2025",
        description: "Secured runner-up position in department-level competitive programming contest",
        icon: "🥈"
    },
    {
        id: "kagglethon",
        title: "Winner - Data Science Competition",
        organization: "Kagglethon | Manipal University Jaipur",
        date: "2026",
        description: "First place in national-level data science hackathon",
        icon: "🏆"
    },
    {
        id: "tn-innovation",
        title: "Top 10 Finalist + Government Grant",
        organization: "Tamil Nadu State Innovation Challenge | Government of Tamil Nadu",
        date: "2025",
        description: "Developed innovative solution for real-world problem statement; awarded startup seed grant",
        icon: "🚀"
    }
];

export const skills: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["C", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Frameworks",
        skills: ["React", "Node.js", "Express", "Angular", "Next.js"]
    },
    {
        title: "Databases",
        skills: ["MongoDB", "MySQL"]
    },
    {
        title: "Cloud & Tools",
        skills: ["AWS", "Git", "GitHub", "Postman", "Figma", "Power BI"]
    },
    {
        title: "Deployment",
        skills: ["Vercel", "Railway", "Render"]
    },
    {
        title: "Soft Skills",
        skills: ["Communication & Teamwork", "Adaptability & Quick Learning", "Leadership"]
    }
];

export const certifications: Certification[] = [
    {
        id: "java-se-17",
        title: "Oracle Certified Java SE 17 Developer",
        issuer: "Oracle",
        date: "May 2025"
    },
    {
        id: "oracle-apex",
        title: "Oracle APEX Certification",
        issuer: "Oracle",
        date: "March 2025"
    }
];
