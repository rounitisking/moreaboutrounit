import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Html } from "@/components/ui/svgs/html";
import { Css } from "@/components/ui/svgs/css";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Expressjs } from "@/components/ui/svgs/expressjs";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Git } from "@/components/ui/svgs/git";
import { GithubIcon } from "@/components/ui/svgs/github";

type WorkExperience = {
  company: string;
  href?: string;
  badges?: readonly string[];
  location?: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description: string;
  image?: string;
  mlh?: string;
  links?: readonly {
    title: string;
    icon?: React.ReactNode;
    href: string;
  }[];
};

export const DATA = {
  name: "Rounit Singh",
  initials: "RS",
  url: "https://rounitsingh.dev",
  location: "Ghaziabad, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh",
  description:
    "Full-Stack Developer. I love building things for the web — from clean UIs to robust backends.",
  summary:
    "I'm a Full-Stack Developer from Ghaziabad, India, with a [Bachelor of Computer Applications (BCA)](/#education). I enjoy crafting end-to-end web experiences — designing pixel-perfect interfaces with React and Next.js, and building scalable backends with Node.js, Express, and PostgreSQL. I've built websites for real clients including institutes and businesses, and I'm always excited to take on new projects.",
  avatarUrl: "/rounit.jpeg",
  skills: [
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "JavaScript", icon: Javascript },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: Tailwindcss },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Expressjs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: Mongodb },
    { name: "Supabase", icon: Supabase },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: GithubIcon },
    { name: "Docker", icon: Docker },
    { name: "Vercel", icon: Vercel },
    { name: "Prisma", icon: Prisma },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rounitsingh1405@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rounitisking",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rounit-singh-a221ba324/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rounitsingh1405@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [] as readonly WorkExperience[],
  education: [
    {
      school: "Bachelor of Computer Applications (BCA)",
      href: "#",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Locus Institute Website",
      href: "https://github.com/rounitisking",
      dates: "2024",
      active: true,
      description:
        "A professional website for Locus Institute, built to showcase their courses, faculty, and admission process. Designed with a clean, responsive layout for students and parents.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rounitisking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ora Jewellers Website",
      href: "https://github.com/rounitisking",
      dates: "2024",
      active: true,
      description:
        "An elegant e-commerce-style website for Ora Jewellers, showcasing their jewellery collections. Features a product gallery and responsive design optimised for mobile and desktop.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rounitisking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tattoo Studio Website",
      href: "https://github.com/rounitisking",
      dates: "2024",
      active: true,
      description:
        "A visually striking website for a tattoo studio, highlighting the artists' portfolio, services, and booking information. Built with a bold, dark aesthetic that fits the brand identity.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rounitisking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Academica Institute Website",
      href: "https://github.com/rounitisking",
      dates: "2024",
      active: true,
      description:
        "A modern, informative website for Academica Institute, presenting their programs, faculty, and contact details. Designed with accessibility and a user-friendly experience in mind.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rounitisking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as readonly Hackathon[],
} as const;
