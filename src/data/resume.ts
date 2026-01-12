import type { Project } from "../types";


export const resume = {
  personal: {
    name: "Nitheesh S",
    role: "Computer Science Student",
    location: "Erode, Tamil Nadu",
    email: "nitheeshselvaraj01@gmail.com",
    github: "https://github.com/nitheesh1122",
    linkedin: "https://www.linkedin.com/in/nitheeshselvaraj/",
    leetcode: "https://leetcode.com/u/nitheeshs06",
  },
  summary:
    "Computer Science Student with experience in full-stack development and IoT projects. Worked on academic and personal projects using the MERN stack, MongoDB, and MySQL. Interested in learning and applying software development concepts through practical implementations.",
  education: [
    {
      institution: "Kongu Engineering College, Perundurai",
      degree: "B.E. Computer Science and Engineering",
      year: "2023 – Present",
      grade: "CGPA: 7.6",
    },
    {
      institution: "Maharishi Vidya Mandir Higher Secondary School, Erode",
      degree: "AISSCE",
      year: "2021 – 2023",
      grade: "75%",
    },
  ],
  projects: [
    {
      title: "Smart Restaurant Queue & Table Management",
      tech: "Angular, Node.js, MySQL",
      description: "Full-stack system for real-time table booking, queue tracking, and restaurant management.",
      github: "https://github.com/nitheesh1122/Capstone_project",
      longDescription: `
### Objective
Develop a full-stack web application that enables restaurants to manage table availability, waiting queues, and reservations in real time.

### Tech Stack
- **Frontend:** Angular 16+ (Angular Material)
- **Backend:** Node.js + Express + TypeScript
- **Database:** MySQL

### Key Features
- **User Roles:** Customer, Manager.
- **Table Management:** Tables List, Add Table (Manager), Update Status.
- **Queue Management:** Join Queue, View Position, Leave Queue.
- **Authentication:** JWT-based Login/Register.
      `
    },
    {
      title: "NIRAL: Smart Agri Logistics System",
      tech: "IoT + Mobile App",
      description:
        "End-to-end smart logistics platform for farmers and distributors, providing live sensor insights and automated alerts to prevent spoilage during transit.",
      github: "https://github.com/nitheesh1122/Niral-Smart-Agri-Tracker"
    },
    {
      title: "ISL Translator",
      tech: "React, Flask, AI Model",
      description:
        "Real-time Sign-to-Text and Text-to-Sign translator with interactive learning modules.",
      github: "https://github.com/nitheesh1122/Indian_Sign_language_Translator"
    },
    {
      title: "NutriIQ: Diet and Meal Planner",
      tech: "MERN Stack",
      description:
        "Full-stack nutrition and meal planning application with calorie analysis, diet suggestions, macro tracking, and food breakdowns.",
      link: "https://diet-and-meal-planner.vercel.app",
    },
    {
      title: "Inventory Management System",
      tech: "MERN Stack",
      description:
        "Full-stack stock tracking system with dashboards; improved accuracy and reduced manual errors by 25%.",
      github: "https://github.com/nitheesh1122/Inventory_Management_System",
    },
  ] as Project[],
  skills: {
    languages: ["C", "Java"],
    frameworks: ["MERN Stack"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git/GitHub", "Postman"],
    soft: ["Problem Solving", "Team Collaboration"],
    spoken: ["English (Fluent)", "Tamil (Native)", "Telugu (Basic)"],
  },
  certifications: [
    { name: "Oracle Certified Java SE 17 Developer", link: "/certificates/java.pdf" },
    { name: "Oracle APEX Developer", link: "/certificates/apex.pdf" },
  ],
  achievements: [
    "Finalist in the 24-hour Hackathon (ISL Translator Project)",
    "Recognized for teamwork and innovation in academic projects",
  ],
};
