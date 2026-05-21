import type { Project, Education, Award, Certification, SkillCategory } from '../types';

export const personalInfo = {
    name: "Nitheesh.dev",
    fullName: "Nitheesh Selvaraj",
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
        title: "PERISENSE – Smart Agri Logistics System",
        description: "Agricultural logistics platform with IoT sensor integration for real-time monitoring of temperature, humidity, and gas levels. Features role-based dashboards for vendors, drivers, and customers with data visualization to reduce spoilage.",
        tech: ["MERN Stack", "IoT Sensors", "Data Visualization"],
        github: "https://github.com/nitheesh1122/Niral-Smart-Agri-Tracker",
        image: "NIRAL – Smart Agri Logistics System.png",
        status: "Completed",
        period: "2025",
        role: "Full-Stack Developer",
        tags: ["MERN", "Full-Stack", "IoT", "Real-time"],
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
        image: "NutriIQ – Diet & Meal Planner.png",
        status: "Completed",
        period: "2025",
        role: "Full-Stack Developer",
        tags: ["MERN", "Full-Stack", "React"],
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
        image: "Textile Management System.png",
        period: "2025 - Present",
        role: "Frontend + API Developer",
        tags: ["Full-Stack", "Next.js", "Backend"],
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
        image: "Smart Restaurant Queue & Table Management.png",
        period: "2024",
        role: "Backend + Realtime Systems Developer",
        tags: ["Backend", "Real-time", "Node.js"],
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
    },
    {
        id: "servicepro",
        title: "Home Service Management Platform",
        description: "Centralized marketplace connecting homeowners with trusted local service providers. Features role-specific dashboards, real-time communication, and location-aware service discovery using WebSocket-powered coordination.",
        tech: ["Flask", "MySQL", "WebSockets", "SQLAlchemy"],
        github: "https://github.com/nitheesh1122/Service_Pro",
        status: "Completed",
        image: "Home Service Management Platform.png",
        period: "2025",
        role: "Full-Stack Developer",
        tags: ["Backend", "Flask", "Real-time"],
        problem: "Homeowners struggle to find trusted service providers, while service professionals lack a centralized platform for customer acquisition and booking management.",
        architecture: [
            "Modular Flask backend with authentication, bookings, provider management, and admin workflows",
            "WebSocket-powered real-time communication for customer-provider interaction and booking coordination",
            "Role-specific dashboards for homeowners, service providers, and platform administrators with location-aware service discovery"
        ],
        impact: [
            "Improved booking transparency through centralized service tracking and provider management",
            "Reduced coordination delays with integrated real-time communication workflows",
            "Built scalable marketplace architecture adaptable for multi-service household ecosystems"
        ],
        longDescription: "### Problem\n- Service discovery is fragmented, and service providers lack centralized customer acquisition channels.\n\n### Architecture\n- Built Flask-SocketIO backend with role-based access control and booking workflows.\n- Integrated SQLAlchemy ORM for reliable data persistence.\n- Implemented pincode-based service discovery for location-aware filtering.\n- Added WebSocket real-time chat for instant customer-provider coordination.\n\n### Role\n- Developed backend APIs, database schema, authentication workflows, booking systems, and responsive dashboard interfaces.\n\n### Impact\n- Enhanced service accessibility and streamlined customer-provider coordination through centralized workflow management."
    },
    {
        id: "inventory",
        title: "Inventory Management System",
        description: "Scalable REST API-driven inventory platform with real-time stock tracking, automated low-stock monitoring, and analytics pipelines. Role-based access workflows for administrators and staff operations.",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
        github: "https://github.com/nitheesh1122/inventory-management-system",
        status: "Completed",
        image: "Inventory Management System.png",
        period: "2025",
        role: "Backend-Focused Full-Stack Developer",
        tags: ["MERN", "Backend", "Node.js"],
        problem: "Traditional inventory operations rely on disconnected tracking systems, resulting in stock inconsistencies, inefficient supplier coordination, and delayed operational insights.",
        architecture: [
            "Scalable REST APIs for inventory, supplier, billing, analytics, and authentication modules with JWT-based security",
            "Role-based access workflows for administrators and staff with validation middleware and centralized error handling",
            "Analytics pipelines for sales monitoring, stock valuation, and product performance insights"
        ],
        impact: [
            "Improved inventory visibility with real-time stock tracking and automated low-stock monitoring",
            "Reduced operational overhead through centralized supplier and sales management workflows",
            "Enhanced system security using JWT authentication, validation middleware, and protected route handling"
        ],
        longDescription: "### Problem\n- Inventory operations suffer from disconnected tracking, leading to stock mismatches and poor supplier coordination.\n\n### Architecture\n- Built modular Node.js + Express backend with MongoDB Atlas for data persistence.\n- Implemented JWT authentication and Joi validation for secure, validated API endpoints.\n- Integrated Winston logging for operational observability.\n- Created analytics dashboard for real-time inventory insights.\n\n### Role\n- Developed backend services, API architecture, authentication modules, analytics workflows, and frontend integration layers.\n\n### Impact\n- Enabled scalable inventory operations with centralized analytics, automated stock workflows, and secure role-based access systems."
    },
    {
        id: "recruiterpro",
        title: "RecruiterPRO – AI Resume Screening & ATS Optimization",
        description: "Dual-platform AI-powered resume screening and optimization system. Uses NLP-based parsing, ATS scoring, and ML recommendations to match candidates with job roles and identify skill gaps.",
        tech: ["NLP", "Machine Learning", "Python", "Resume Parsing"],
        github: "https://github.com/nitheesh1122/RecruiterPRO",
        status: "Completed",
        image: "RecruiterPRO.png",
        period: "2025",
        role: "Full-Stack Developer",
        tags: ["AI", "ML", "NLP", "Full-Stack"],
        problem: "Recruiters struggle to screen large resume volumes efficiently, while job seekers fail ATS evaluations due to missing keywords and weak skill alignment.",
        architecture: [
            "NLP-based resume parsing modules to extract skills, experience, and job relevance metrics",
            "Dual-platform workflows for recruiters and public users with separate screening and optimization pipelines",
            "ATS scoring engine comparing resumes against job descriptions with role-specific keyword requirements and recommendation workflows"
        ],
        impact: [
            "Improved recruiter efficiency through automated resume ranking and intelligent filtering workflows",
            "Enabled users to iteratively optimize resumes using ATS feedback and keyword analysis",
            "Enhanced candidate-job alignment with skill gap detection and personalized recommendation systems"
        ],
        longDescription: "### Problem\n- Manual resume screening is time-consuming, and job seekers lack clarity on resume optimization for ATS systems.\n\n### Architecture\n- Implemented NLP-based resume parsing to extract structured skill and experience data.\n- Built ML-powered ATS scoring engine with keyword matching algorithms.\n- Developed recommendation workflows identifying skill gaps and suggesting learning paths.\n- Created separate interfaces for recruiters (screening, filtering) and candidates (optimization feedback).\n\n### Role\n- Developed resume analysis workflows, ATS scoring logic, filtering systems, frontend dashboards, and recommendation modules.\n\n### Impact\n- Reduced manual resume screening effort while improving candidate optimization and role-based resume alignment."
    },
    {
        id: "isl-connect",
        title: "ISL Connect – Real-Time Indian Sign Language Translator",
        description: "Accessibility-focused real-time translation platform enabling bidirectional communication between hearing-impaired and non-sign language users. Uses TensorFlow-based gesture recognition and live video processing.",
        tech: ["React.js", "Flask", "TensorFlow", "Computer Vision"],
        github: "https://github.com/nitheesh1122/Indian_Sign_language_Translator",
        status: "Completed",
        image: "ISL Connect.png",
        period: "2025",
        role: "Full-Stack Developer",
        tags: ["AI", "ML", "Computer Vision", "Full-Stack"],
        problem: "Communication barriers between hearing-impaired individuals and non-sign language users reduce accessibility in real-time interactions and daily conversations.",
        architecture: [
            "TensorFlow-based gesture recognition pipelines for live sign prediction using captured video frames",
            "React frontend with dual communication workflows for Sign-to-Text and Text/Speech-to-Sign translation",
            "Flask backend APIs managing real-time communication between frontend and ML inference services with ISL rendering modules using GIF/image datasets"
        ],
        impact: [
            "Enabled real-time bidirectional communication between hearing-impaired and non-sign language users",
            "Reduced dependency on manual interpreters through AI-assisted gesture recognition workflows",
            "Improved accessibility with browser-based live video processing and speech-driven sign generation"
        ],
        longDescription: "### Problem\n- Communication barriers limit real-time interaction and accessibility for hearing-impaired individuals.\n\n### Architecture\n- Built React-based frontend with webcam capture, live video processing, and responsive UI for dual translation workflows.\n- Implemented Flask backend APIs to manage real-time communication and inference requests.\n- Integrated TensorFlow CNNs for gesture recognition trained on sign language datasets.\n- Developed ISL rendering modules using GIF/image datasets for alphabet-level and word-level sign visualization.\n\n### Role\n- Designed React frontend interfaces, developed Flask backend APIs, integrated TensorFlow prediction workflows, and implemented real-time communication systems.\n\n### Impact\n- Built extensible architecture supporting future continuous sentence-level sign recognition systems."
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
        title: "Programming Languages",
        skills: ["C", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "Angular"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js"]
    },
    {
        title: "Databases",
        skills: ["MongoDB", "MySQL"]
    },
    {
        title: "Cloud & Deployment",
        skills: ["AWS", "Vercel", "Railway", "Render"]
    },
    {
        title: "Developer Tools",
        skills: ["Git", "GitHub", "Postman"]
    },
    {
        title: "Design & Analytics",
        skills: ["Figma", "Power BI"]
    },
    {
        title: "Soft Skills",
        skills: ["Communication", "Teamwork", "Adaptability", "Quick Learning", "Leadership"]
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
