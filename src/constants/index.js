import {
    mobile,
    backend,
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
    carrent,
    jobit,
    tripguide,
    netflix,
    express,
    scss,
    mui,
    redis,
    firebase
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
      name: "SCSS",
      icon: scss,
    },
    {
      name: "Material UI",
      icon: mui,
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
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "Redis",
      icon: redis,
    },
  ];
  
  
  const projects = [
    {
      name: "Chat App",
      description:
        "Web-based chat app that allows users to chat, send attachments realtime. Users can create their groups and manage it realtime also enabling users to get notifications.",
      tags: [
        {
          name: "material-ui",
          color: "blue-text-gradient",
        },
        {
          name: "chartjs",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
        {
          name: "rtk query",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "jsonwebtoken",
          color: "pink-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/DavidGoyal/Chat-App-Frontend",
      deployed_link:"https://chat-app-frontend-rho-three.vercel.app/",
    },
    {
      name: "Shopio",
      description:
        "Full Stack Ecommerce Website enabling users to buy products and also having a special admin dashboard for admins to process orders, create new products, update existing products.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "chartjs",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
        {
          name: "rtk query",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "node-cache",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/DavidGoyal/MERN-ECommerce-FRONTEND.git",
      deployed_link:"https://mern-e-commerce-frontend-seven.vercel.app/",
    },
    {
      name: "XCrypto",
      description:
        "A crypto tracker website helping users to get realtime data about different crypto currencies and exchanges",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
        {
          name: "chartjs",
          color: "pink-text-gradient",
        },
        {
          name: "react-icons",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/DavidGoyal/Crypto_App",
      deployed_link:"https://crypto-app-tan-ten.vercel.app/"
    },
    {
      name: "Netflix Clone",
      description:
        "UI clone of Netflix made using html and css",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/DavidGoyal/Netflix-UI-Clone",
    },
  ];
  
  export { services, technologies, projects };