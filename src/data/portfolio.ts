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
        status: "Completed",
        period: "2025",
        role: "Full-Stack Developer",
        problem: "Perishable goods logistics suffer from poor visibility and delayed intervention, causing spoilage and losses.",
        architecture: [
            "Role-based MERN dashboards for vendor, driver, and customer workflows",
            "IoT ingestion pipeline for temperature, humidity, and gas sensor telemetry",
            "Visualization layer for anomaly tracking and shipment health"
        ],
        impact: [
            "Improved decision speed with real-time shipment monitoring",
            "Reduced manual coordination with centralized status visibility",
            "Built extensible architecture ready for additional sensor types"
        ],
        longDescription: "### Problem\n- Lack of real-time environmental tracking during agricultural transport leads to spoilage and delayed action.\n\n### Architecture\n- Built modular MERN services for authentication, role access, and logistics operations.\n- Integrated IoT sensor streams for live environmental health data.\n- Added dashboard visualizations to surface outliers and risk trends.\n\n### Role\n- Designed backend APIs, built responsive role-specific UI, and implemented monitoring panels.\n\n### Impact\n- Increased shipment traceability and improved operational confidence for stakeholders."
    },
    {
        id: "nutriiq",
        title: "NutriIQ – Diet & Meal Planner",
        description: "Comprehensive nutrition planning application with authentication, meal logging, and automated nutrition calculations. Modular frontend architecture with responsive design.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/nitheesh1122/Diet_and_meal_planner",
        live: "https://diet-and-meal-planner.vercel.app/",
        status: "Completed",
        period: "2025",
        role: "Full-Stack Developer",
        problem: "Users struggle to track meals consistently and map them to nutritional targets in one simple workflow.",
        architecture: [
            "JWT-based authentication and user-specific nutrition records",
            "Meal logging engine with macro and calorie calculations",
            "Responsive React UI with modular component structure"
        ],
        impact: [
            "Made daily nutrition tracking faster and more consistent",
            "Improved data clarity with structured meal history",
            "Shipped responsive experience across desktop and mobile"
        ],
        longDescription: "### Problem\n- Nutrition tracking is often fragmented across apps and manual notes, lowering consistency.\n\n### Architecture\n- Developed Express + MongoDB APIs for user profile, meal entries, and progress records.\n- Built React-based interface for meal capture and summary insights.\n- Implemented calculation utilities for calories and macronutrients.\n\n### Role\n- Owned full-stack implementation and deployment.\n\n### Impact\n- Reduced friction for diet planning and improved day-to-day adherence."
    },
    {
        id: "textile",
        title: "Textile Management System",
        description: "Enterprise-grade textile management solution with Next.js. Features authentication, REST API workflows, audit logs, analytics dashboards, and scalable backend architecture.",
        tech: ["Next.js", "TypeScript", "MongoDB", "REST API"],
        github: "https://github.com/nitheesh1122/Consultancy_Project",
        status: "In Progress",
        period: "2025 - Present",
        role: "Frontend + API Developer",
        problem: "Textile operations involve disconnected workflows across inventory, order handling, and reporting.",
        architecture: [
            "Next.js app with typed component and data layers",
            "REST API integration for inventory, orders, and audit records",
            "Analytics dashboard for operations visibility"
        ],
        impact: [
            "Established foundation for standardized workflows",
            "Improved traceability using audit-focused interactions",
            "Enabled analytics-first decision making"
        ],
        longDescription: "### Problem\n- Business-critical textile processes are often split across spreadsheets and isolated tools.\n\n### Architecture\n- Built typed Next.js frontend modules for inventory and workflow views.\n- Integrated secure REST API flows and audit-oriented event recording.\n- Implemented dashboard components for operational insight.\n\n### Role\n- Contributed to frontend architecture, endpoint integration, and core workflow UI.\n\n### Current Status\n- Actively iterating on analytics and process automation modules."
    },
    {
        id: "restaurant",
        title: "Smart Restaurant Queue & Table Management",
        description: "Real-time restaurant management system with JWT authentication and WebSocket updates. Optimized relational database schema for reservations and queue management.",
        tech: ["Angular", "Node.js", "MySQL", "JWT", "WebSockets"],
        github: "https://github.com/nitheesh1122/Capstone_project",
        status: "Completed",
        period: "2024",
        role: "Backend + Realtime Systems Developer",
        problem: "Restaurants need live queue and table visibility to reduce wait times and improve service throughput.",
        architecture: [
            "Node.js + MySQL backend with reservation and queue domain modeling",
            "JWT-secured APIs for staff and admin operations",
            "WebSocket channel for real-time queue and table updates"
        ],
        impact: [
            "Improved table allocation speed with live state updates",
            "Reduced customer waiting uncertainty",
            "Created scalable base for multi-branch expansion"
        ],
        longDescription: "### Problem\n- Manual queue handling causes table mismatches and long wait-time uncertainty.\n\n### Architecture\n- Implemented relational schema for reservations, queue state, and table inventory.\n- Built authenticated API endpoints for operational actions.\n- Added WebSocket-driven updates for real-time floor awareness.\n\n### Role\n- Built backend logic, security, and real-time communication pipeline.\n\n### Impact\n- Increased operational responsiveness during peak hours."
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
