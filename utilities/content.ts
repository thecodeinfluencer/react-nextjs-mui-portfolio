import { Experience, Feed, Profile, Testimonial } from "./definitions";

export const profile: Profile = {
  name: "Mark Aloo",
  title: "Mark Aloo - Portfolio",
  tagline: "Frontend developer and Designer",
  work: "Frontend Engineer at Safaricom PLC",
  description:
    "I design and create beautiful web and mobile apps, speak, tweet and blog a lot about tech",
  gravatarUrl:
    "https://gravatar.com/avatar/7a76f3703c41097061ed71d0139ba9396c8470c6e27c88bafd5c0190d50d3641?size=256",
  socials: {
    twitter: "https://twitter.com/codeinfluencer/",
    linkedIn: "https://www.linkedin.com/in/thecodeinfluencer/",
    github: "https://github.com/thecodeinfluencer/",
    medium: "https://medium.com/@thecodeinfluencer/",
    hashnode: "https://hashnode.com/@thecodeinfluencer/",
    devto: "https://dev.to/thecodeinfluencer/",
    telegram: "https://t.me/thecodeinfluencer/",
  },
  skills: [
    { label: "React", category: "frameworks" },
    { label: "Next.js", category: "frameworks" },
    { label: "Node.js", category: "frameworks" },
    { label: "Express", category: "frameworks" },
    { label: "React Native", category: "frameworks" },
    { label: "Git", category: "tools" },
    { label: "MongoDB", category: "tools" },
    { label: "Firebase", category: "tools" },
    { label: "OpenShift", category: "tools" },
    { label: "Docker", category: "tools" },
    { label: "GraphQL", category: "tools" },
    { label: "Figma", category: "tools" },
    { label: "AWS", category: "tools" },
    { label: "MUI", category: "tools" },
    { label: "JavaScript", category: "languages" },
    { label: "TypeScript", category: "languages" },
    { label: "HTML", category: "languages" },
    { label: "CSS", category: "languages" },
    { label: "Java", category: "languages" },
  ],
};

export const feed: Feed[] = [
  {
    id: "crib-hunt",
    title: "Crib Hunt",
    summary:
      "An android app built with React Native to find houses to rent or buy.",
    description:
      "This app is in development and will be released soon. This is an android app built with React Native to find houses to rent or buy. It has two modes, one for the landlord and one for the tenant. The landlord can post houses for rent or sale and the tenant can search for houses to rent or buy. The app is built with React Native, Firebase, and Typescript.",
    type: "project",
    image:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tags: ["React Native", "Firebase", "JavaScript", "Typescript", "Android"],
  },
  {
    id: "next-js-might-be-exposing-your-backend-environment-variables",
    title: "Next JS might be exposing your backend environment variables.",
    summary:
      "Find out if Next.JS might be exposing your backend environment variables.",
    description:
      "Find out if Next.JS might be exposing your backend environment variables.",
    type: "blog",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blogLink:
      "https://dev.to/thecodeinfluencer/next-js-might-be-exposing-your-backend-environment-variables-4bmd",
    tags: ["React", "Next.js", "Typescript", "Cybersecurity", "ENVs"],
  },
  {
    id: "1tP38vfi9Wi3Ydnawv-uHUyE1q6PtjzJ4N4KmGXaCUJs",
    title: "Firebase data modeling 101",
    summary:
      "Discover key strategies for structuring your data in Firebase to unlock full optimization.",
    description:
      "Discover key strategies for structuring your data in Firebase to optimize performance, enhance scalability, and ensure data integrity. From designing efficient data hierarchies to leveraging Firebase's real-time database capabilities, this talk provides essential tips and best practices for building robust and scalable applications.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1tP38vfi9Wi3Ydnawv-uHUyE1q6PtjzJ4N4KmGXaCUJs/edit?usp=sharing",
    image:
      "https://lh3.googleusercontent.com/d/1tP38vfi9Wi3Ydnawv-uHUyE1q6PtjzJ4N4KmGXaCUJs=w640?authuser=0",
    tags: ["Firebase", "Google Cloud", "Databases", "NoSQL", "Firestore"],
    details: {
      event: "Devfest Mt. Kenya",
      location: "Dedan Kimathi University, Nyeri, Kenya",
      community: "Google Developer Groups, Mt. Kenya",
    },
  },
  {
    id: "assistall",
    title: "AssistALL",
    githubLink: "",
    productLink:
      "https://play.google.com/store/apps/details?id=com.safaricom.mpesa.lifestyle",
    summary:
      "An app to help bridge the gap between the disabled and the abled.",
    description:
      "An app to help bridge the gap between the disabled and the abled. A Sign Language Interpreter plays a crucial role in the lives of deaf persons aiding ineffective communication, service delivery, and service acquisition. Through the assistALL app, a Sign Language Interpreter connects virtually to customers providing short-term services and bringing about economic benefits of productivity and employment. The app exists within the MPesa native application as a mini-app in the `services` section.",
    type: "project",
    image:
      "https://i0.wp.com/techtrendske.co.ke/wp-content/uploads/2023/09/assistALL-app.png?resize=780%2C470&ssl=1",
    tags: ["Javascript", "Mini Apps", "MPesa", "Safaricom", "Daraja"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Caroline Thuo",
    role: "Senior Agile Coach, Safaricom PLC",
    linkedIn: "https://www.linkedin.com/in/carolthuo/",
    image: "/images/caroline-linkedin.jpeg",
    comment:
      "Mark is an outstanding, multi-talented developer. I have witnessed his technical excellence, servant leadership and business acumen lead to delivery of both business and customer value. He is passionate about writing code and solving problems through the development of creative and innovative software.  He is also keen on producing quality user experiences that go along with his aesthetically superior user interface designs. His aptitude in successfully engaging stakeholders regardless of hierarchy was a key propeller of our team's success. His ability to boldly and respectfully present innovative ideas makes him an invaluable part of any team he works in.",
  },
  {
    name: "Brian Kidya Asava",
    role: "Senior Solutions Architect, Safaricom PLC",
    linkedIn: "https://www.linkedin.com/in/brian-kidiya-asava-80438355/",
    image: "/images/asava-linkedin.jpeg",
    comment:
      "I worked closely with Mark Aloo and i was privileged to be assigned as his peer buddy. He had joined the organisation as a Solution Architect intern, however he was ready and willing to provide support with any other tasks assigned to him specifically in UI/UX design in which he exemplarily performed. He fully filled the gap of a UI designer resource that was lacking in the team. He delivered all the designs for the various use cases that we are working on. Namely - C2B callback URL Management solution, Incident Management Solution, Documentation UI revamp, etc. Additionally, he went over and beyond to support other squads within the tribe where he supported the team in developing the Mali Miniapp and Paypal-mpesa Miniapp. Mark also showed great potential as a web developer, he has experience working with ReactJS, GraphQl, TypeScript, NextJs etc. I would highly recommend him for any available opportunity. He has demonstrated a good attitude and excellent collaboration skills with the team.",
  },
];

// https://www.linkedin.com/in/thecodeinfluencer/
export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Safaricom PLC",
    startDate: "Jan 2023",
    endDate: "Present",
    duration: "3 Mos",
    type: "Contract",
    location: "Nairobi, Kenya",
    highlights: [
      "Built a web portal to help team managers manage field engineers and site details",
      "Built a web portal to help manage changes and rollbacks",
    ],
    tags: ["React", "Next.js", "Typescript", "OpenShift", "UIPath"],
    links: [
      { label: "DigiSOC", url: "https://diginoc.safaricom.co.ke/" },
      {
        label: "Change Enablement",
        url: "https://change-enablement-portal.safaricom.co.ke/",
      },
    ],
  },
  {
    role: "Sr Frontend Developer",
    company: "Minet Kenya",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    duration: "4 Mos",
    type: "Contract",
    location: "Nairobi, Kenya",
    highlights: [
      "Built a web application to manage insurance",
      "Built a cross platform mobile app for members to get insurance services",
    ],
    tags: ["React", "React Native", "Typescript", "AntDesign"],
    links: [
      {
        label: "Faru Health",
        url: "https://faru.health/",
      },
    ],
  },
  {
    role: "Software Developer",
    company: "Safaricom PLC",
    startDate: "Mar 2022",
    endDate: "Aug 2022",
    duration: "6 Mos",
    type: "Contract",
    location: "Nairobi, Kenya",
    highlights: [
      "Developed `Mali` investment MPesa mini app ",
      "Developed UI/UX for Daraja developers' portal",
      "Architectured solutions for Daraja developers' portal",
    ],
    tags: ["JavaScript", "Solutions Architecture", "UI/UX", "Figma"],
    links: [
      {
        label: "Daraja Developers' Portal",
        url: "https://developer.safaricom.co.ke/",
      },
    ],
  },
  {
    role: "Lead Frontend Developer",
    company: "BitNorm",
    startDate: "Feb 2022",
    endDate: "Apr 2021",
    duration: "11 Mos",
    type: "Full-time",
    location: "Netherlands . Remote",
    highlights: [
      "Built the bitnorm.com website (17k active users)",
      "Led, defined and prioritized projects and tasks for 5 team members",
    ],
    tags: ["JavaScript", "Solutions Architecture", "UI/UX", "Figma"],
    links: [{ label: "BitNorm Website", url: "https://bitnorm.com/" }],
  },
  {
    role: "Frontend Developer",
    company: "Spacious Place",
    startDate: "Sep 2020",
    endDate: "Nov 2020",
    duration: "3 Mos",
    type: "Internship",
    location: "Nairobi, Kenya",
    highlights: [
      "Built and maintained the company website and graphics",
      "Provided thoughtful consultancy on technical issues and opportunities",
    ],
    tags: ["JavaScript", "HTML", "CSS", "Graphic Design", "Figma"],
    links: [
      {
        label: "Spacious Place Website",
        url: "http://www.spaciousplace.co.ke/",
      },
    ],
  },
];
