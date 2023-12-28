import { Experience, Feed, Profile, Testimonial } from "./definitions";

export const contributing = [
  {
    project: "react-email",
    image: "https://react.email/static/favicon.svg",
    link: "https://github.com/resend/react-email/commits?author=thecodeinfluencer",
  },
  {
    project: "react-nextjs-mui-portfolio",
    image:
      "https://raw.githubusercontent.com/thecodeinfluencer/react-nextjs-mui-portfolio/main/app/favicon.ico",
    link: "https://github.com/thecodeinfluencer/react-nextjs-mui-portfolio/commits?author=thecodeinfluencer",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Caroline Thuo",
    role: "Senior Agile Coach, Safaricom PLC",
    linkedIn: "https://www.linkedin.com/in/carolthuo/",
    image:
      "https://drive.google.com/uc?export=view&id=1Yq93CxfDe6jCBwotkH5DUfCT1CYslo48",
    comment:
      "Mark is an outstanding, multi-talented developer. I have witnessed his technical excellence, servant leadership and business acumen lead to delivery of both business and customer value. He is passionate about writing code and solving problems through the development of creative and innovative software.  He is also keen on producing quality user experiences that go along with his aesthetically superior user interface designs. His aptitude in successfully engaging stakeholders regardless of hierarchy was a key propeller of our team's success. His ability to boldly and respectfully present innovative ideas makes him an invaluable part of any team he works in.",
  },
  {
    name: "Brian Kidya Asava",
    role: "Senior Solutions Architect, Safaricom PLC",
    linkedIn: "https://www.linkedin.com/in/brian-kidiya-asava-80438355/",
    image:
      "https://drive.google.com/uc?export=view&id=1xhTTYVNK1899bxUcnbrGi3OZ3hsq3-fs",
    comment:
      "I worked closely with Mark Aloo and i was privileged to be assigned as his peer buddy. He had joined the organisation as a Solution Architect intern, however he was ready and willing to provide support with any other tasks assigned to him specifically in UI/UX design in which he exemplarily performed. He fully filled the gap of a UI designer resource that was lacking in the team. He delivered all the designs for the various use cases that we are working on. Namely - C2B callback URL Management solution, Incident Management Solution, Documentation UI revamp, etc. Additionally, he went over and beyond to support other squads within the tribe where he supported the team in developing the Mali Miniapp and Paypal-mpesa Miniapp. Mark also showed great potential as a web developer, he has experience working with ReactJS, GraphQl, TypeScript, NextJs etc. I would highly recommend him for any available opportunity. He has demonstrated a good attitude and excellent collaboration skills with the team.",
  },
];

export const profile: Profile = {
  primaryColor: "#22C55E",
  url: "thecodeinfluencer.dev",
  name: "Mark Aloo",
  title: "Mark Aloo - Portfolio",
  tagline: "Frontend developer and Designer",
  work: "Frontend Engineer at Safaricom PLC",
  description:
    "I design and create beautiful web and mobile apps, speak, tweet and blog a lot about tech",
  gravatarUrl:
    "https://gravatar.com/avatar/7a76f3703c41097061ed71d0139ba9396c8470c6e27c88bafd5c0190d50d3641?size=1024",
  spotify: {
    track: "https://open.spotify.com/track/5mhM7bfzv52bzfCzlq8vH1",
    artist: "Crayon, Ayra Starr",
    album: "Ngozi",
  },
  socials: {
    twitter: "https://twitter.com/codeinfluencer/",
    linkedIn: "https://www.linkedin.com/in/thecodeinfluencer/",
    github: "https://github.com/thecodeinfluencer/",
    medium: "https://medium.com/@thecodeinfluencer/",
    hashnode: "https://hashnode.com/@thecodeinfluencer/",
    devto: "https://dev.to/thecodeinfluencer/",
    telegram: "https://t.me/thecodeinfluencer/",
    sessionize: "https://sessionize.com/thecodeinfluencer",
    figma: "https://www.figma.com/@codeinfluencer/",
  },
  skills: [
    { label: "React.js", category: "frameworks" },
    { label: "Next.js", category: "frameworks" },
    { label: "Express.js", category: "frameworks" },
    { label: "React Native", category: "frameworks" },
    { label: "Expo", category: "frameworks" },
    { label: "Apollo GraphQL", category: "frameworks" },

    { label: "Git", category: "tools" },
    { label: "MongoDB", category: "tools" },
    { label: "Firebase", category: "tools" },
    { label: "OpenShift", category: "tools" },
    { label: "Docker", category: "tools" },
    { label: "Figma", category: "tools" },
    { label: "AWS", category: "tools" },

    { label: "JavaScript", category: "languages" },
    { label: "TypeScript", category: "languages" },
    { label: "HTML", category: "languages" },
    { label: "CSS", category: "languages" },
    { label: "Java", category: "languages" },
    { label: "Python", category: "languages" },
    { label: "Node.js", category: "languages" },

    // { label: "Azure", category: "tools" },
    // { label: "PostgreSQL", category: "tools" },
    // { label: "C#", category: "languages" },
  ],
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Safaricom PLC",
    startDate: "Jan 2023",
    endDate: "Present",
    duration: "12 Mos",
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
    id: "project-portfolio-nextjs",
    bgTheme: "#dddddd",
    featured: true,
    title: "Next.js Portfolio",
    githubLink: "",
    productLink: "",
    summary: "A portfolio template built with Next.js, MUI and TypeScript.",
    description:
      "A portfolio template built with Next.js, MUI and TypeScript. It is a simple, beautiful, and responsive portfolio template for developers. It is a perfect template for beginner and advanced developers. It is built using Next.js, Material UI, and TypeScript. It is easy to edit and is fully customizable. It is well-structured and is easily customizable via the theme file. It is built with SEO in mind and is fully responsive. It is a perfect template for a developer's portfolio. ",
    type: "project",
    image: "https://thecodeinfluencer.dev/images/hero.png",
    links: [],
    tags: ["React", "Next", "Typescript", "MUI", "Node"],
    details: {
      startDate: "Nov 2023",
      endDate: "Dec 2023",
      releasedDate: "Dec 2023",
      projectType: "Workplace",
    },
  },
  {
    id: "project-digisoc-web",
    bgTheme: "#3CB54F",
    featured: false,
    title: "DigiSOC Portal",
    githubLink: "",
    productLink: "",
    summary:
      "A web app to help field engineers and the NOC with network monitoring.",
    description:
      "In today's technology-run world, digitisation has made a significant impact on the telecommunication industry. [Safaricom]() has fully embraced this direction and has developed a solution that will support how Field Engineers maintain the company's network landscape in order to achieve 99.9% network availability.\n\n The DigiSOC web app is a solution that will help Field Engineers and the NOC with network monitoring. The app will provide a platform for Field Engineers to view all alarms related to Sites Down, Sectors Down and environmental irregularities. The app will also provide a platform to manage the fiels engineers and site allocation details.\n\nThe web app complements an android app. Through the DigiSOC app, Safaricom's Field Engineers will have access to all of the following features:  \n- Visibility of all alarms related to Sites Down, Sectors Down and environmental irregularities.\n- Details outlining the specific cause of an alarm failure.   \n- Ability to check the alarm status; whether resolved or unresolved.   \n- Ability to enter and exit any site within the app.  \n- Access to the exact location of all sites through google maps.\n\n Overall, the DigiSOC suite of apps empower Field Engineers with real-time information, streamlined workflows, and enhanced tools to address and resolve network issues promptly.",
    type: "project",
    image:
      "https://drive.google.com/uc?export=view&id=1LzwLqDidIZYzCBFVarhC9XrSsgZQ5BGK",
    links: [],
    tags: ["React", "Next", "Typescript", "MUI", "Node"],
    details: {
      startDate: "Jan 2023",
      endDate: "Ongoing",
      releasedDate: "",
      projectType: "Workplace",
    },
  },
  {
    id: "project-change-web",
    bgTheme: "#3CB54F",
    featured: false,
    title: "Change Enablement Portal",
    githubLink: "",
    productLink: "",
    summary: "A web app to digitize the change enablement process.",
    description:
      "The Change Enablement Portal is a powerful web application designed to revolutionize and streamline the change enablement process within organizations. Developed using cutting-edge technologies such as React, Next.js, Material-UI (MUI), and Node.js, this portal offers a robust and user-friendly platform for managing organizational changes efficiently. The portal provides a centralized location for managing all change requests, approvals, and rollbacks. It also offers a comprehensive dashboard for tracking the status of all changes and rollbacks. The portal is designed to enhance collaboration and communication between stakeholders, thereby ensuring that all changes are implemented successfully.",
    type: "project",
    image:
      "https://drive.google.com/uc?export=view&id=1Y5s31qOifBRELVPLvDpvikGS4s9aCH_6",
    links: [],
    tags: ["React", "Next", "Typescript", "MUI", "Node"],
    details: {
      startDate: "Apr 2023",
      endDate: "Ongoing",
      releasedDate: "",
      projectType: "Workplace",
    },
  },
  {
    id: "project-mtandao-web",
    bgTheme: "#3CB54F",
    featured: false,
    title: "Mtandao Portal",
    githubLink: "",
    productLink: "",
    summary: "A web app to show network coverage and complaints.",
    description:
      "Mtandao Portal is a comprehensive web application designed to enhance the user's experience in understanding and interacting with network coverage data. The app provides a user-friendly interface that allows users to visualize network coverage on an interactive map. Users can easily identify areas with strong signals, weak signals, or dead zones, enabling them to make informed decisions about connectivity.\n\nOne of the key features of Mtandao Portal is its ability to display network Key Performance Indicators (KPIs) in a clear and understandable manner. Through intuitive charts and graphs, users can analyze data related to network performance, such as signal strength, data speed, and reliability. This empowers both consumers and network administrators to assess the quality of service and identify areas for improvement.\n\nAdditionally, Mtandao Portal serves as a centralized hub for customer complaints and feedback. Users can submit and track their connectivity-related issues, allowing network providers to address concerns promptly. The portal streamlines the customer support process, fostering improved communication between users and service providers.",
    type: "project",
    image:
      "https://drive.google.com/uc?export=view&id=1aSaTopdxJt-UD44p0iNwD8N07DIiXwZ6",
    links: [],
    tags: ["React", "Next", "Typescript", "MUI", "Node"],
    details: {
      startDate: "Jun 2023",
      endDate: "Ongoing",
      releasedDate: "",
      projectType: "Workplace",
    },
  },
  {
    id: "project-gumzo-ai",
    bgTheme: "#008b8b",
    featured: true,
    title: "Gumzo AI",
    githubLink: "",
    productLink: "https://gumzoai.web.app/",
    summary: "AI chat simulation use-cases using React.js and Node.js",
    description:
      "The Gumzo AI Chat project is a sophisticated chat simulation built on OpenAI technology, offering users an interactive and personalized experience. Leveraging cutting-edge technologies such as React, JavaScript, TypeScript, MUI, Node, Firebase, Express, and Google Cloud, the application provides a seamless and responsive interface for users to engage with different AI chatbots. The utilization of React and MUI ensures a modern and visually appealing frontend, while JavaScript and TypeScript enable efficient and maintainable code. The backend, powered by Node and Express, facilitates the seamless communication between the user interface and the underlying AI engine. This project showcases a strong technical foundation, combining frontend and backend technologies to create a robust and interactive chat application.",
    type: "project",
    image:
      "https://drive.google.com/uc?export=view&id=1QkOs8BfqfG9MnttiJb_IkpOvzgQLWplq",
    links: [
      {
        label: "Gumzo Chat",
        url: "https://gumzoai.web.app/",
      },
      {
        label: "Gumzo API",
        url: "https://gumzoai.el.r.appspot.com/",
      },
    ],
    tags: [
      "React",
      "JavaScript",
      "Typescript",
      "MUI",
      "Node",
      "Firebase",
      "Express",
      "Google Cloud",
    ],
    details: {
      startDate: "Jan 2023",
      endDate: "Feb 2023",
      releasedDate: "",
      projectType: "Personal",
    },
  },
  {
    id: "project-quotez-motivation",
    bgTheme: "#DDDDDD",
    featured: false,
    title: "Quotez App",
    githubLink: "",
    productLink:
      "https://play.google.com/store/apps/details?id=com.appeazy.quotez",
    summary:
      "An android app built with React Native to get motivational quotes.",
    description:
      "Available on PlayStore, Quotez is a mobile app crafted with TypeScript and React Native Expo, seamlessly delivering a motivational boost. Leveraging an external API, it dynamically loads curated quotes. The app embraces user preferences with both light and dark themes, ensuring a personalized and visually pleasing experience. Immerse yourself in motivation with this technically sophisticated and visually adaptable application.",
    type: "project",
    image:
      "https://lh3.googleusercontent.com/yUH2ziBY-VqlQPvRFzoxDIFkBfj-BpN__GEjB7cuwVA-2NWCMndCFekXMYSar4MDQos",
    links: [
      {
        label: "Quotez on PlayStore ",
        url: "https://play.google.com/store/apps/details?id=com.appeazy.quotez",
      },
    ],
    tags: ["React Native", "JavaScript", "Typescript", "Android", "Expo"],
    details: {
      startDate: "Nov 2023",
      endDate: "Ongoing",
      releasedDate: "",
      projectType: "Personal",
    },
  },
  {
    id: "project-crib-hunt",
    bgTheme: "#DDDDDD",
    featured: false,
    title: "Crib Hunt",
    summary:
      "An android app built with React Native to find houses to rent or buy.",
    description:
      "This app is in development and will be released soon. This is an android app built with React Native to find houses to rent. It has two modes, one for the landlord and one for the tenant. The landlord can post houses for rent or sale and the tenant can search for houses to rent or buy. The major tech stack associated with the app is React Native, Expo, Firebase, and Typescript.",
    type: "project",
    image:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
    links: [],
    tags: ["React Native", "Firebase", "Expo", "Typescript", "Android"],
    productLink: "",
    githubLink: "",
    details: {
      startDate: "Oct 2023",
      endDate: "Ongoing",
      releasedDate: "",
      projectType: "Personal",
    },
  },
  {
    id: "project-assistall",
    bgTheme: "#6f42c1",
    featured: false,
    title: "AssistALL (Mini App)",
    githubLink: "",
    productLink: "https://assistallapp.com/",
    summary:
      "An app to help bridge the gap between the disabled and the abled.",
    description:
      "An app to help bridge the gap between the disabled and the abled. A Sign Language Interpreter plays a crucial role in the lives of deaf persons aiding ineffective communication, service delivery, and service acquisition. Through the assistALL app, a Sign Language Interpreter connects virtually to customers providing short-term services and bringing about economic benefits of productivity and employment. The app exists within the MPesa native application as a mini-app in the `services` section.",
    type: "project",
    image:
      "https://i0.wp.com/techtrendske.co.ke/wp-content/uploads/2023/09/assistALL-app.png?resize=780%2C470&ssl=1",
    links: [
      { label: "assistALL Website", url: "https://assistallapp.com/" },
      { label: "MPesa App", url: "https://assistallapp.com/" },
      {
        label: "Techarena News - AssistALL on M-Pesa ",
        url: "https://www.techarena.co.ke/2023/10/03/signs-media-assistall-mini-app-on-m-pesa/",
      },
      {
        label: "The Star News - IEBC AssistALL Partnership",
        url: "https://www.the-star.co.ke/news/2022-07-14-iebc-rolls-out-mobile-application-to-aid-deaf-voters/",
      },
    ],
    tags: ["Javascript", "Mini Apps", "MPesa", "Safaricom", "Daraja"],
    details: {
      startDate: "Sep 2022",
      endDate: "Sep 2023",
      releasedDate: "Sep 2023",
      projectType: "Client",
    },
  },
  {
    id: "project-my-kanisa",
    bgTheme: "#0d6efd",
    featured: false,
    title: "My kanisa",
    summary: "Church app with feed, services, payments, crusades and more.",
    description:
      "Discover churches and ministers, interact with video, audio and image devotional posts, listen to live virtual crusade, have your own personal bible, register and login to your church account. Experiencing fellowship and devotion is faster and easier than ever. Join and follow churches and online ministers respectively, like and share your my Kanisa App favorite devotional contents and stay connected to your church",
    type: "project",
    image:
      "https://play-lh.googleusercontent.com/R-nST0ebJhCbpKWm_zozVpp2kTaUq5-JXGgxm-Z7asVyVtKErOHiTHeypG3pjTY2YCGq=w416-h235-rw",
    links: [
      {
        label: "myKanisa on PlayStore ",
        url: "https://play.google.com/store/apps/details?id=com.morfie.kanisa",
      },
    ],
    tags: ["React", "PWA", "Firebase", "JavaScript", "Typescript"],
    productLink:
      "https://play.google.com/store/apps/details?id=com.morfie.kanisa",
    githubLink: "",
    details: {
      startDate: "Mar 2021",
      endDate: "Nov 2022",
      releasedDate: "Jun 2021",
      projectType: "Client",
    },
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
    details: { date: "Nov 10, 2023" },
  },
  {
    id: "blog-nextjs-envs",
    featured: true,
    title: "Next JS might be exposing your backend environment variables.",
    summary: "Find out if you are exposed!",
    type: "blog",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blogLink:
      "https://dev.to/thecodeinfluencer/next-js-might-be-exposing-your-backend-environment-variables-4bmd",
    tags: ["React", "Next.js", "Typescript", "Cybersecurity", "ENVs"],
    details: { date: "Nov 8, 2023" },
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
    details: { date: "Dec 31, 2022" },
  },
  {
    id: "blog-mpesa-express-stk",
    featured: true,
    title: "M-Pesa Online/STK Push",
    summary: "This is how to get the M-Pesa integation right.",
    type: "blog",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*w0PHU3n6HZ_OvpUNSfWRhg.png",
    blogLink:
      "https://medium.com/codeinfluence/integrating-payments-with-lipa-na-m-pesa-online-m-pesa-express-stk-push-api-the-right-way-3ded1166d452",
    tags: ["M-Pesa", "STK Push", "Safaricom", "Node.js", "Daraja"],
    details: { date: "Dec 2, 2022" },
  },
  {
    id: "blog-youtube-dev-career",
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
    details: { date: "Jul 26, 2020" },
  },
  {
    id: "talk-firebase-data-modeling-101",
    bgTheme: "#F9AB00",
    featured: true,
    title: "Firebase data modeling 101",
    summary: "Key strategies for structuring your data in Firebase.",
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
      date: "Nov 11, 2023",
    },
    links: [
      {
        label: "Wrap Up - LinkedIn",
        url: "https://www.linkedin.com/posts/thecodeinfluencer_firebase-devfest2023-devfestmtkenya-activity-7129878745217126400-ulb4?utm_source=share&utm_medium=member_desktop",
      },
      {
        label: "Wrap Up - Twitter (X)",
        url: "https://twitter.com/codeinfluencer/status/1723780454103322654",
      },
    ],
  },
  {
    id: "talk-power-of-pwas-arusha",
    bgTheme: "#4285F4",
    featured: true,
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
      date: "Oct 23, 2023",
      event: "IO Extended Arusha 2023",
      location: "Arusha, Tanzania (Virtual)",
      community: "Google Developer Groups, Arusha",
    },
    links: [],
  },
  {
    id: "talk-next.js-portfolio",
    bgTheme: "#3D1F5B",
    featured: false,
    title: "Building a portfolio in your stack",
    summary: "Importance of a portfolio that showcases your expertise.",
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
      date: "Sep 29, 2023",
    },
    links: [
      {
        label: "Rendercon Talk on X",
        url: "https://twitter.com/codeinfluencer/status/1707672357236535581",
      },
      {
        label: "RenderconKE 2023 - X",
        url: "https://twitter.com/renderconke/status/1708136086768087434",
      },
    ],
  },
  {
    id: "talk-frontend-dev-panoramic",
    bgTheme: "#3CB54F",
    featured: false,
    title: "A Panoramic view of Frontend Development",
    summary: "A conclusive overview.",
    description: "A conclusive overview of the Frontend Development Landscape.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1rNJa_6qjFU_zlCHagRd0qCosZ98TqMVINcJqTZvNeXE/edit?usp=sharing",
    image: "https://pbs.twimg.com/media/F62vQ5zXgAAGkvC?format=jpg&name=small",
    tags: ["HTML", "CSS", "JavaScript", "Frameworks", "Career"],
    details: {
      event: "Safaricom PLC Chapter Boost",
      location: "Safaricom PLC, Virtual",
      community: "Koding and Kahawa",
      date: "Sep 29, 2023",
    },
    links: [
      {
        label: "Talk Summary by Koding & Kahawa",
        url: "https://www.linkedin.com/posts/koding-kahawa_a-panoramic-view-of-frontend-development-activity-7114199617977655297-1BtI?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    id: "talk-power-of-pwas-kisii",
    bgTheme: "#4285F4",
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
      date: "Jul 29, 2023",
    },
    links: [
      {
        label: "GDG Kisii Post - LinkedIn",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7090007955068063744/",
      },
      {
        label: "Twitter (X) Post",
        url: "https://twitter.com/codeinfluencer/status/1683495245697232905",
      },
    ],
  },
  {
    id: "talk-understanding-apis",
    bgTheme: "#4FABCC",
    featured: false,
    title: "Understanding APIs",
    summary: "Find valuable insights into the world of APIs.",
    description: "Find valuable insights into the world of APIs.",
    type: "talk",
    slidesLink:
      "https://docs.google.com/presentation/d/1uPL1NnyXWxhBJWy_gD79-ChoK-55DwNUNuq8v-kJp2I/edit?usp=sharing",
    image: "https://pbs.twimg.com/media/FvVmOTvWIAILskV?format=jpg&name=small",
    tags: ["APIs", "REST", "JSON", "Frameworks", "HTTP"],
    details: {
      event: "Safaricom PLC Chapter Boost",
      location: "Safaricom PLC, Virtual",
      community: "Koding and Kahawa",
      date: "May 5, 2023",
    },
    links: [
      {
        label: "Invitation by Koding & Kahawa Community",
        url: "https://www.linkedin.com/posts/koding-kahawa_api-apiworkshop-restapi-activity-7059110328747401216-_fj6/?utm_source=share&utm_medium=member_desktop",
      },
      {
        label: "Talk Summary by Koding & Kahawa Community",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7060894929975148545?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    id: "talk-firebase-usecases",
    bgTheme: "#FFBA00",
    featured: false,
    title: "You can do that in Firebase!",
    summary: "Key strategies for structuring your data in Firebase.",
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
      date: "Nov 12, 2022",
    },
    links: [
      {
        label: "Invitation Post - LinkedIn",
        url: "https://www.linkedin.com/posts/thecodeinfluencer_devfestnyeri-devfest2022-developer-activity-6996029794286989313-90y6?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    id: "talk-mpesa-miniapp",
    bgTheme: "#4E91F0",
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
      date: "Oct 19, 2022",
    },
    links: [
      {
        label: "Invitation - LinkedIn Post",
        url: "https://www.linkedin.com/posts/thecodeinfluencer_webdevelopment-javascript-ant-activity-6987676300962344960-EmAc?utm_source=share&utm_medium=member_desktop",
      },
      {
        label: "Summary - LinkedIn Post",
        url: "https://www.linkedin.com/posts/thecodeinfluencer_webdev-miniapps-tech-activity-6988718088720388096-OOC_?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
];
