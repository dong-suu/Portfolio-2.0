import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mehran M",
  initials: "SS",
  url: "https://github.com/mxhran-m",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full-Stack JavaScript/TypeScript Developer with experience delivering scalable frontend and backend systems. I specialise in React, Node.js, TypeScript, REST/GraphQL APIs, and modern full-stack architectures.",
  summary:
    "Engineer passionate about building cool websites. Currently working on multiple projects and building [Projects](https://github.com/mxhran-m). I specialise in React, Next, Node, and backend development with Python and FastAPI.",
  avatarUrl: "/me.jpg",
  skills: [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "NestJS",
    "REST APIs",
    "GraphQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "SQL",
    "Authentication & Authorization",
    "System Design",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mehran3@duck.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mxhran-m",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mehran-m-610281246/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/heyymehran",
        icon: Icons.x,
        navbar: true,
      },
      Cal: {
        name: "Book a Call",
        url: "https://cal.com/",
        icon: Icons.calendar,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ofa Agency",
      badges: [],
      href: "https://ofaagency.in",
      location: "Remote",
      title: "Frontend Web developer",
      logoUrl: "/ofaimage.webp",
      start: "August 2024",
      end: "September 2024",
      description:
        "• Designed and developed a responsive, static service showcase website for a digital agency using Reactjs and Tailwind CSS \n• Implemented modular, reusable components to ensure maintainability and scalability of the codebase\n• Delivered a polished front-end interface aligned with the client’s brand identity and business goals",
    },
  ],
  education: [
    {
      school: "Karnataka University Dharwad",
      href: "",
      degree: "Bachelor of Computer Applications",
      logoUrl: "/uniImg.webp",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Mathsnap",
      href: "https://github.com/mxhran-m/MathSnap",
      // dates: "2024 - Present",
      active: true,
      description:
        "A web application that lets students capture photos of math problems and receive instant AI-generated solutions. Supports speech synthesis to read answers aloud for improved accessibility, and is designed with a mobile-first, responsive UI focused on smooth user experience.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Gemini API",
        "Web Speech API",
        "Responsive Design",
        "Mobile-First UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mathsnap-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mxhran-m/MathSnap",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ai Mock Interview",
      href: "https://github.com/Mxhran-m/ai-interview",
      //dates: "2024",
      active: true,
      description:
        "An intelligent mock interview platform that simulates real interview scenarios using an AI-driven agent. Users upload their resume and target job role, and the system generates role-specific questions and conducts spoken interviews through a lifelike talking avatar, delivering a personalized, human-like experience.",
      technologies: [
       "React",
       "TypeScript",
       "Gemini API",
       "Supabase",
       "Speech Synthesis",
       "Avatar Animation",
       "Real-Time Data",
       "Authentication",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https:///",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Mxhran-m/ai-interview",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Video Streaming Platform Backend",
      href: "https://github.com/Mxhran-m/Video-streaming-Backend",
      //dates: "2024",
      active: true,
      description:
        "Backend system for a YouTube-style video streaming platform with an additional 'tweet' feature for short-form posts. Designed scalable RESTful APIs to handle video uploads, user interactions, and short-form content, with a focus on performance and maintainability.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "Multer",
        "REST APIs",
        "Media Uploads",
        "Backend Architecture",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mxhran-m/Video-streaming-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Basic Cart",
      href: "https://github.com/samiksha0shukla/n8n",
      //dates: "2024",
      active: true,
      description:
        "A responsive e-commerce cart application with dynamic product data and core cart functionality, focused on clean UI and smooth user experience.",
      technologies: [
        "React",
        "Tailwind CSS",
        "FakeStore API",
        "React Hooks",
        "Netlify",
        "Responsive Design",
      ],
      links: [
        {
          type: "website",
          href: "https://cart-implementation.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mxhran-m/cart_proj",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "Smart India Hackathon (SIH)",
    //   dates: "August 25th - 26th, 2022",
    //   location: "India",
    //   description:
    //     "Represented 6-member team in designing IoT-based Sewage Problem Alert system, securing top finalist position among 30,000+ participating teams. Developed a comprehensive solution for real-time sewage monitoring and alerting.",
    //   image: "/SIH2.webp",
    //   links: [],
    // },
    // {
    //   title: "Hack JKLU",
    //   dates: "March 3rd - 4th, 2023",
    //   location: "India",
    //   description:
    //     "Conceptualised and prototyped Blockchain-based eVault system with 256-bit encryption, earning 3rd place recognition for innovation. Built a secure digital vault solution leveraging blockchain technology for enhanced data protection.",
    //   image: "/jklulogo.jpg",
    //   win: "3rd Place Winner",
    //   links: [],
    // },
  ],
} as const;
