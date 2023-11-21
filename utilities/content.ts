import { Experience, Feed, Profile, Testimonial } from "./definitions";

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

export const profile: Profile = {
  name: "Mark Aloo",
  title: "Mark Aloo - Portfolio",
  tagline: "Frontend developer and Designer",
  work: "Frontend Engineer at Safaricom PLC",
  description:
    "I design and create beautiful web and mobile apps, speak, tweet and blog a lot about tech",
  gravatarUrl:
    "https://gravatar.com/avatar/7a76f3703c41097061ed71d0139ba9396c8470c6e27c88bafd5c0190d50d3641?size=1024",
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

export const feed: Feed[] = [
  {
    id: "project-crib-hunt",
    featured: false,
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
    id: "blog-nextjs-inflight-vulnerability",
    featured: false,
    title:
      "[Possible Fix] Inflight reported as a vulnerability in react project (Veracode SCA).",
    summary:
      "If you're facing an inflight vulnerability from a veracode (or any other SCA tool) scan, then read this.",
    type: "blog",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400",
    blogLink:
      "https://dev.to/thecodeinfluencer/possible-fix-inflight-reported-as-a-vulnerability-in-react-project-veracode-sca-2b1h",
    tags: ["React", "Next.js", "Veracode", "Security", "Vulnerability"],
  },
  {
    id: "blog-gpt3-usecases",
    featured: false,
    title: "Amazing developer use cases of openAI's GPT-3 (Chat GPT).",
    summary:
      "Here's a list of some ideas of possibilities that you can explore on OpenAI's language model.",
    type: "blog",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LcraTom0O9u0tEB_PfbMEg.png",
    blogLink:
      "https://medium.com/codeinfluence/amazing-developer-use-cases-of-openais-gpt-3-chat-gpt-faaf021f8150",
    tags: ["AI", "ChatGPT", "OpenAI", "GPT3", "Dalle-2"],
  },
  {
    id: "blog-mpesa-express-stk",
    featured: false,
    title:
      "Integrating payments with Lipa na M-Pesa online (M-Pesa Express/STK/NI Push) API the right way.",
    summary: "Here are the steps to follow to get the M-Pesa integation right.",
    type: "blog",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*w0PHU3n6HZ_OvpUNSfWRhg.png",
    blogLink:
      "https://medium.com/codeinfluence/integrating-payments-with-lipa-na-m-pesa-online-m-pesa-express-stk-push-api-the-right-way-3ded1166d452",
    tags: ["M-Pesa", "STK Push", "Safaricom", "Node.js", "Daraja"],
  },
  {
    id: "blog-mpesa-express-stk",
    featured: false,
    title: "Could YouTube Videos Be Slowing Down Your Dev Career?",
    summary:
      "Find out how you may be slowing down your learning and how not to.",
    type: "blog",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Imo-K9m8zy2et9VjFMnsgg.jpeg",
    blogLink:
      "https://medium.com/codeinfluence/could-youtube-videos-be-slowing-down-your-dev-career-aaf58d42cedc",
    tags: ["Productivity", "Development", "Programming", "Careers", "YouTube"],
  },
  {
    id: "project-my-kanisa",
    featured: false,
    title: "My kanisa",
    summary:
      "Your one stop Church companion app with post feed, services, payments crusades and more.",
    description:
      "Discover churches and ministers, interact with video, audio and image devotional posts, listen to live virtual crusade, have your own personal bible, register and login to your church account. Experiencing fellowship and devotion is faster and easier than ever. Join and follow churches and online ministers respectively, like and share your my Kanisa App favorite devotional contents and stay connected to your church",
    type: "project",
    image:
      "https://media.licdn.com/dms/image/C4D33AQGxFQQgNVO81g/productpage-image_1128_635/0/1626278967530/morfie_ltd_mykanisa_platform_image?e=1701176400&v=beta&t=vLYjAa0ZuaptsLwWVa-BdMuv6jqz55zE3KbAO8eTM3U",
    tags: ["React", "PWA", "Firebase", "JavaScript", "Typescript"],
  },
  {
    id: "blog-nextjs-envs",
    featured: false,
    title: "Next JS might be exposing your backend environment variables.",
    summary:
      "Find out if Next.JS might be exposing your backend environment variables.",
    type: "blog",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blogLink:
      "https://dev.to/thecodeinfluencer/next-js-might-be-exposing-your-backend-environment-variables-4bmd",
    tags: ["React", "Next.js", "Typescript", "Cybersecurity", "ENVs"],
  },
  {
    id: "talk-power-of-pwas-arusha",
    featured: false,
    title: "How powerful are PWAs?",
    summary: "Explore the power and potential of Progressive Web Applications.",
    description:
      "In this talk, we will explore the power and potential of Progressive Web Applications (PWAs). Attendees will discover the key features and benefits of PWAs, such as offline functionality, push notifications, and app-like experiences. By the end of the session, attendees will gain insights into the capabilities of PWAs and their significance in shaping the future of web development.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1z5_yeOtuU0dCRkY6tmO2IQWv2TU1MWqxi1PmGmR7QDs/edit?usp=sharing",
    image:
      "https://lh3.googleusercontent.com/d/1z5_yeOtuU0dCRkY6tmO2IQWv2TU1MWqxi1PmGmR7QDs=w640?authuser=0",
    tags: ["Web", "PWAs", "Perfomance", "JavaScript", "LightHouse"],
    details: {
      event: "IO Extended Arusha 2023",
      location: "Arusha, Tanzania (Virtual)",
      community: "Google Developer Groups, Arusha",
    },
    links: [],
  },
  {
    id: "talk-power-of-pwas-kisii",
    featured: false,
    title: "How powerful are PWAs?",
    summary: "Explore the power and potential of Progressive Web Applications.",
    description:
      "In this talk, we will explore the power and potential of Progressive Web Applications (PWAs). Attendees will discover the key features and benefits of PWAs, such as offline functionality, push notifications, and app-like experiences. By the end of the session, attendees will gain insights into the capabilities of PWAs and their significance in shaping the future of web development.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1hkMxdwrd0lL_DibvCosydFhfB_eoV4NVrZHUivz6VRw/edit?usp=sharing",
    image:
      "https://lh3.googleusercontent.com/d/1hkMxdwrd0lL_DibvCosydFhfB_eoV4NVrZHUivz6VRw=w640?authuser=0",
    tags: ["Web", "PWAs", "Perfomance", "JavaScript", "LightHouse"],
    details: {
      event: "IO Extended Kisii 2023",
      location: "Kisii National Polytechnic, Kisii, Kenya",
      community: "Google Developer Groups, Kisii",
    },
    links: [],
  },
  {
    id: "talk-firebase-data-modeling-101",
    featured: false,
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
    links: [],
  },
  {
    id: "talk-firebase-usecases",
    featured: false,
    title: "You can do that in Firebase!",
    summary:
      "Discover key strategies for structuring your data in Firebase to unlock full optimization.",
    description:
      "Firebase is an immensely powerful platform with a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server. In this session, we look at how powerful Firebase is, firebase extensions and features, getting started with firebase, serverless architecture with Firebase, what's new in Firebase and why you should use it in your next project.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1e75McrTqDjdTVaBIEl7-iUBuveawRX7lyzDrHMHEX0I/edit?usp=sharing",
    image:
      "https://lh3.googleusercontent.com/d/1e75McrTqDjdTVaBIEl7-iUBuveawRX7lyzDrHMHEX0I=w640?authuser=0",
    tags: ["Firebase", "Google Cloud", "Databases", "NoSQL", "Firestore"],
    details: {
      event: "Devfest Nyeri",
      location: "Dedan Kimathi University, Nyeri, Kenya",
      community: "Google Developer Groups, Nyeri",
    },
    links: [],
  },
  {
    id: "talk-mpesa-miniapp",
    featured: false,
    title: "Mini Apps (ft M-Pesa)",
    summary:
      "Discover what mini-apps are and why they're a thing of the future.",
    description:
      "Discover what mini-apps are and why they're a thing of the future. Get ahead of many developers by learning how to build these mini apps. The closest to home is building mini-apps for the M-Pesa platform.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1z_eQZffg04_FDHDf5zfzymDzkN76R2uqKpb45g5gQXs/edit?usp=sharing",
    image:
      "https://lh3.googleusercontent.com/d/1z_eQZffg04_FDHDf5zfzymDzkN76R2uqKpb45g5gQXs=w640?authuser=0",
    tags: ["Mini-Apps", "Web", "JavaScript", "M-Pesa", "Safaricom"],
    details: {
      event: "Web Session",
      location: "Dedan Kimathi University, Nyeri, Kenya",
      community: "Google Developer Student Clubs, DeKUT",
    },
    links: [],
  },
  {
    id: "talk-frontend-dev-panoramic",
    featured: false,
    title: "A Panoramic view of Frontend Development",
    summary: "A conclusive overview of the Frontend Development Landscape.",
    description: "A conclusive overview of the Frontend Development Landscape.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1rNJa_6qjFU_zlCHagRd0qCosZ98TqMVINcJqTZvNeXE/edit?usp=sharing",
    image: "https://img.youtube.com/vi/HmfNSLyJTfA/0.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Frameworks", "Career"],
    details: {
      event: "Safaricom PLC Chapter Boost",
      location: "Safaricom PLC, Virtual",
      community: "Koding and Kahawa",
    },
    links: [
      {
        label: "Talk Summary by Koding & Kahawa",
        url: "https://www.linkedin.com/posts/koding-kahawa_a-panoramic-view-of-frontend-development-activity-7114199617977655297-1BtI?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    id: "talk-understanding-apis",
    featured: false,
    title: "Understanding APIs",
    summary: "Find valuable insights into the world of APIs.",
    description: "Find valuable insights into the world of APIs.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1uPL1NnyXWxhBJWy_gD79-ChoK-55DwNUNuq8v-kJp2I/edit?usp=sharing",
    image:
      "https://media.licdn.com/dms/image/D4D22AQE0u8tS5OXUmw/feedshare-shrink_2048_1536/0/1683448533708?e=1703721600&v=beta&t=nABXJm3SRTbWMIb5_r7KpPUWfB_UqHrwGcHv0-Pnws0",
    tags: ["APIs", "REST", "JSON", "Frameworks", "HTTP"],
    details: {
      event: "Safaricom PLC Chapter Boost",
      location: "Safaricom PLC, Virtual",
      community: "Koding and Kahawa",
    },
    links: [
      {
        label: "Talk Summary by Koding & Kahawa Community",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7060894929975148545?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    id: "talk-next.js-portfolio",
    featured: false,
    title: "Why you should build a portfolio around your tech stack",
    summary:
      "Learn the importance of crafting a portfolio that showcases your expertise and proficiency.",
    description:
      "In this talk, I will delve into the importance of crafting a portfolio that showcases your expertise and proficiency in a specific tech stack, focusing on my chosen stack of Next.js and Tailwind CSS. A well-designed portfolio not only demonstrates your technical skills but also serves as a live example of your problem-solving abilities and creativity. I will discuss the benefits of aligning your portfolio with your preferred tech stack, such as deepening your understanding, enhancing your marketability, and attracting projects that align with your interests.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1n9s7kWVQXxCNj6cjm4pqTibgzctUYfHcnTHrcPur1hk/edit?usp=sharing",
    image: "https://pbs.twimg.com/media/F7LeqsAXUAAvD-i?format=jpg&name=medium",
    tags: ["Next.js", "React", "TailwindCSS", "Career", "Portfolio"],
    details: {
      event: "RenderconKE 2023",
      location: "KCA University, Nairobi, Kenya",
      community: "React Devs KE, Nairobi",
    },
    links: [],
  },
  {
    id: "project-assistall",
    featured: false,
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
