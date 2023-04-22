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
    meta,
    starbucks,
    tesla,
    shopify,
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
      id: "works",
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
      alt: "Web Developer: Internet icons created by Freepik - Flaticon",
    },
    {
      title: "React Native Developer",
      icon: mobile,
      alt: "Web Developer: Internet icons created by Freepik - Flaticon",
    },
    {
      title: "Backend Developer",
      icon: backend,
      alt: "Web Developer: Internet icons created by Freepik - Flaticon",
    },
    {
      title: "Content Creator",
      icon: creator,
      alt: "Web Developer: Internet icons created by Freepik - Flaticon",
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
      title: "QA Analyst",
      company_name: "Second Spectrum",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2015 - March 2016",
      points: [
        "Recorded Live NBA Games and was Lead on my team designated by game",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Tested new functionalities and writing feedback reports and bug reports.",
        "Participating in reviews and providing constructive feedback to other analysts.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "GumGum",
      icon: meta,
      iconBg: "#383E56",
      date: "March 2016 - Sept 2018",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Setting up and Debugging Programmatic Ads",
      ],
    },
    {
      title: "Photography Studio Manager",
      company_name: "Industry League Studios",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2015 - Jan 2020",
      points: [
        "Daily advertisement posting to multiple platforms.",
        "Client walk-through and check-ins.",
        "Second Shooter and assistant for main photographer.",
        "Event coordination and setup.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Alduxx: Aspects / Angles",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Code Pen Doodles",
      description:
        "Just a small collection of ideas and things I have remodeled and played with over the years. I included this to show my curiosities and how I am always researching coming trends.",
      tags: [
        {
          name: "Code Pen Doodles",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "threeJS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      demo: "https://codepen.io/steisaden",
    },
    {
      name: "Ahole By Nature",
      description:
        "Web app e-commerce store that I built for a friend needing a website at low cost. I used Express, MongoDB, and Sanity for the backend. The page has an admin page where I set up settings so he could change most elements on a page without having to change the code.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "stripe api",
          color: "pink-text-gradient",
        },
        {
          name: "nextJS",
          color: "blue-text-gradient",
        },
        {
          name: "vercel",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/steisaden/aholenatural",
      demo: "https://aholenature.vercel.app/",
    },
    {
      name: "ThreeJS OpenAI",
      description:
        "I made this recently just to get a look at how to use openAI. I use threeJS 3d library to render a 3d t-shirt onto the page. I have three different ways you can edit the shirt, color, uploading an image to the logo area or apply it to the shirt as a texture, with an ability to toggle the logo or full shirt texture on or off, and using prompt to image AI tool DALL-E by leveraging openAI API to generate a logo image or full shirt texture.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "nodemon",
          color: "pink-text-gradient",
        },
        {
          name: "mongoose",
          color: "blue-text-gradient",
        },
        {
          name: "openAI",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/steisaden/threejs",
      demo: "https://three-js-blue.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };