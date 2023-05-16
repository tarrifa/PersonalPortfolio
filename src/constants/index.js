import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    MSD,
    TAD,
    tesla,
    IQVIA,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AWS",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "TAD",
      icon: TAD,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Proficient in mobile development using React Native, with experience building and deploying mobile applications for both iOS and Android platforms.",
        "Strong understanding of mobile development principles, including mobile-specific design patterns, performance optimization, and usability.",
        "Experience integrating mobile applications with Firebase services such as Firestore, Cloud Storage, and Cloud Functions.",
        "Strong understanding of user experience (UX) and user interface (UI) design principles, with experience using Figma or other design tools"
      ],
    },
    {
      title: "Site Managment Coordinator",
      company_name: "IQVIA",
      icon: IQVIA,
      iconBg: "#E6DEDD",
      date: "March 2021 - March 2022",
      points: [
        "Coordinated and Managed more than 25 clinical trials.",
      ],
    },
    {
      title: "Clinical Data Manager",
      company_name: "MSD",
      icon: MSD,
      iconBg: "#383E56",
      date: "October 2020 - February 2021",
      points: [
        "Data Management in Oncology Clinical Trials.",
      ],
    },
    {
      title: "FullSatck Engineer",
      company_name: "TAD",
      icon: TAD,
      iconBg: "#E6DEDD",
      date: "March 2019 - September 2020",
      points: [
        "Proficient in the MERN (MongoDB, Express.js, React, Node.js) stack, with experience building full-stack web applications from scratch.",
        "Strong understanding of web development principles, including web standards, browser compatibility, and accessibility.",
        "Experience with building RESTful APIs and integrating them with front-end applications.",
        "Strong understanding of database concepts and experience working with MongoDB or other NoSQL databases."
      ],
    },
    {
      title: "Junior Programmer",
      company_name: "TaxAdminSAS",
      iconBg: "#383E56",
      date: "March 2015 - February 2019",
      points: [
        "Proficient in HTML, CSS, and JavaScript, with experience in building responsive and user-friendly websites.",
        "Strong understanding of front-end development principles, including web standards, browser compatibility, and accessibility.",
        "Experience with popular front-end frameworks such as React",
        "Familiarity with version control systems such as Git and knowledge of agile methodologies"
      ],
    },
  ];
  
  const projects = [
    {
      name: "Colmedica Health Tracker Demo",
      description:
        "The web-based app developed in React and powered by Firebase is a comprehensive and user-friendly solution designed for medical tracking purposes, specifically tailored for Colmedica. This cutting-edge application seamlessly integrates various functionalities to streamline and enhance medical processes.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/tarrifa/Colmedica-Paciente",
    },
    {
      name: "Play Green Web responsive Challenge",
      description:
        "The web-based app, built with React and powered by Firebase, is a responsive and mobile-friendly platform that allows users to select and track their favorite football team. With its user-friendly interface and cross-device compatibility, this app offers a convenient and engaging experience for football enthusiasts to stay connected with their favorite teams on the go.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/tarrifa/Play-Green",
    },
    {
      name: "Burger Restaurant Challenge",
      description:
        "The web-based app, built with React and powered by Firebase, is a responsive platform designed for a burger restaurant. It allows customers to browse the menu, customize orders, and track delivery or pickup status.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/tarrifa/STGenetics",
    },
  ];
  
  export { services, technologies, experiences, projects };