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
      title: "Soon to be AWS expert",
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
        "Strong understanding of database concepts and experience working with MongoDB or other NoSQL databases."  ],
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
  ];
  
  const projects = [
    {
      name: "Colmedica Health Tracker Demo",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/tarrifa/Colmedica-Paciente",
    },
    {
      name: "Play Green",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/tarrifa/Play-Green",
    },
    {
      name: "Burger Restaurant Challenge",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/tarrifa/STGenetics",
    },
  ];
  
  export { services, technologies, experiences, projects };