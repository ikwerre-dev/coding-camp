import {
  Smartphone,
  BotIcon,
  Palette,
  Cloud,
  Code,
  Server
} from 'lucide-react';

export const projects = [
  {
    name: "Veefa",
    desc: "Multi-vendor marketplace platform with advanced features",
    lang: "PHP + Bootstrap + jQuery",
    link: "https://veefa.co/",
  },
  {
    name: "My Portfolio",
    desc: "Personal portfolio showcasing projects and skills",
    lang: "React.js + Node.js + TailwindCSS",
    link: "https://UkonuDavid.vercel.app/",
  },
  {
    name: "Indulgetix",
    desc: "Comprehensive event management and ticketing solution",
    lang: "React.js + Node.js + TailwindCSS",
    link: "https://indulgetix.com/",
  }
];





export const userData = {
  username: "David",
  github: "https://github.com/ukonuzoidx",
  showEmoji: true,
  showExclamation: true
};


export const heroData = {
  title: "Full Stack Developer",
  tagline: "Building & scaling enterprise solutions with expertise and passion.",
  intro: {
    text1: "Hi there! I am David! An expert coder with 5+ years experience. As a Full Stack developer, I've worked with both startups and large corporations helping them to expertly build & massively scale their enterprises.",
    text2: "My passion for coding as well as the very tangible results I command has lead me into challenging myself with building Top company websites and applications."
  },
  socialLinks: {
    facebook: "https://www.facebook.com/David.Ukonu.1",
    twitter: "https://x.com/David_can_code",
    instagram: "https://www.instagram.com/UkonuDavid",
    linkedin: "https://ng.linkedin.com/in/UkonuDavidamadi"
  }
};


export const services = [
  {
    id: 1,
    title: "FRONTEND DEVELOPMENT",
    description: "Crafting responsive and interactive web applications using React, Next.js, and TypeScript. Focusing on modern UI/UX practices and optimal performance.",
    icon: Code,
    category: "Development"
  },
  {
    id: 2,
    title: "BACKEND DEVELOPMENT",
    description: "Building robust server-side applications and APIs using Node.js, Python, and database technologies. Ensuring scalability and security.",
    icon: Server,
    category: "Development"
  },
  {
    id: 3,
    title: "APP DEVELOPMENT",
    description: "Developing cross-platform mobile applications and desktop software solutions that deliver seamless user experiences across different devices.",
    icon: Smartphone,
    category: "Mobile"
  },
  {
    id: 4,
    title: "ROBOTICS ENGINEERING",
    description: "Creating and programming robotic systems, specializing in automation and control systems as a resource personnel for Airobot in Bonny Island.",
    icon: BotIcon,
    category: "Engineering"
  },
  {
    id: 5,
    title: "UI DESIGN",
    description: "Crafting intuitive and visually appealing user interfaces with a focus on user-centered design principles and modern design trends.",
    icon: Palette,
    category: "Design"
  },
  {
    id: 6,
    title: "CLOUD COMPUTING",
    description: "Implementing and managing cloud solutions, leveraging services for scalable and efficient application deployment and infrastructure management.",
    icon: Cloud,
    category: "Infrastructure"
  }
];



export const skills = [

  {
    id: 1,
    title: "Css",
  },
  {
    id: 2,
    title: "Bootstrap",
  },
  {
    id: 3,
    title: "TailwindCSS",
  },
  {
    id: 5,
    title: "JavaScript",
  },
  {
    id: 6,
    title: "TypeScript",
  },
  {
    id: 7,
    title: "Jquery",
  },
  {
    id: 8,
    title: "ReactJs",
  },
  {
    id: 9,
    title: "NextJs",
  },
  {
    id: 10,
    title: "Git",
  },
  {
    id: 11,
    title: "Github",
  },
  {
    id: 15,
    title: "NodeJs/Express",
  },
  {
    id: Math.random(),
    title: "MongoDB",
  },
];

export const experiences = [
  {
    title: 'Full-stack Developer',
    company: 'LegitCar Africa',
    type: 'Full-time',
    date: 'Oct 2022 - Present',
    period: '2 yrs 8 mos',
    location: 'Abuja, Nigeria · Remote',
    description: [
      "Collaborated with other developers on the company's application",
      "Built APIs used to integrate external services",
      "Redesigned the dashboard to enable users to view their orders",
      "Designed and integrated backend APIs into the mobile application",
      "Refactored authentication modules for seamless login experience"
    ],
    skills: ['Laravel', 'GitLab', 'JavaScript', 'Flutter', 'GitHub', 'Jira', 'Alpine', 'Slack']
  },
  {
    title: 'Flutter Developer',
    company: 'WekiWork',
    type: 'Full-time',
    date: 'Jun 2022 - Oct 2023',
    period: '1 yr 5 mos',
    location: 'Abuja, Nigeria · Hybrid',
    description: [
      "Designed system architecture for a side project (Doci)",
      "Built real-time chat modules",
      "Co-developed Dropie Android & iOS apps",
      "Deployed mobile apps to Play Store and App Store"
    ],
    skills: ['Pocketbase', 'Flutter', 'Firebase', 'Git', 'Appwrite']
  },
  {
    title: 'Frontend Web Developer',
    company: 'WekiWork',
    type: 'Full-time',
    date: 'Nov 2021 - Oct 2023',
    period: '2 yrs',
    location: 'Abuja, Nigeria · On-site',
    description: [
      "Developed the full front-end Dropie app",
      "Built reusable components used across company projects",
      "Collaborated with web and mobile teams on side projects",
      "Deployed robust applications for both frontend and backend",
      "Implemented real-time backend API connections to mobile apps"
    ],
    skills: ['React.js', 'Next.js', 'Firebase', 'Jira', 'Cloud Firestore', 'Slack']
  },
  {
    title: 'Full-stack Developer',
    company: 'Landvigo',
    type: 'Contract',
    date: 'Apr 2021 - Oct 2022',
    period: '1 yr 7 mos',
    location: 'Abuja, Nigeria · Hybrid',
    description: [
      "Migrated the entire application architecture from .NET to Laravel",
      "Moved all databases from SQL to MariaDB using XAMPP",
      "Wrote extensive tests to validate application architecture"
    ],
    skills: ['Laravel', 'SQL', 'GitLab', 'ASP.NET', 'jQuery', 'Git']
  },
  {
    title: 'Full-stack Developer',
    company: 'eTranzact',
    type: 'Contract',
    date: 'Oct 2021 - Dec 2021',
    period: '3 mos',
    location: 'Abuja, Nigeria · Remote',
    description: [
      "Restructured backend applications for admin and customer users",
      "Built a responsive web application for both admin and users",
      "Integrated contract-based APIs between buyers and sellers",
      "Managed company tech infrastructure for efficient resource use",
      "Developed a payment gateway for SMEs",
      "Wrote extensive tests to ensure stability"
    ],
    skills: ['Laravel', 'SQL', 'JavaScript', 'Jira', 'jQuery']
  },
  {
    title: 'Frontend Engineer',
    company: 'National Space Research & Development Agency (NASRDA)',
    type: 'Full-time',
    date: 'Sep 2021 - Oct 2021',
    period: '2 mos',
    location: 'Abuja, Nigeria · Remote',
    description: [
      "Developed a fully functional GPS application",
      "Designed system architecture with microservices for APIs",
      "Built a powerful dashboard for client-side visibility"
    ],
    skills: ['Laravel', 'GitLab', 'JavaScript', 'jQuery', 'Git']
  },
  {
    title: 'Web Developer',
    company: 'Triune Built-Tech Solutions',
    type: 'Internship',
    date: 'Oct 2020 - Jul 2021',
    period: '10 mos',
    location: 'Abuja, Nigeria · On-site',
    description: [
      "Designed and developed the company's website",
      "Collaborated with developers on internal applications",
      "Built a learning management system using Redis and Laravel",
      "Learned SQL and MongoDB for database development"
    ],
    skills: ['HTML', 'Troubleshooting', 'Node.js', 'Web Development']
  }
];

export const contactData = {
  email: "codewithDavid@gmail.com",
  phone: "+2349163169949",
  locations: {
    morning: "metaverse!⚡",
    afternoon: "localhost:3000",
    evening: "127.0.0.1:5500"
  },
  description: "I can help you design, improve or build the product experience for your new or existing products. Feel free to get in touch with me."
};
