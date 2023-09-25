
import facebook from '@/public/assets/images/social/icons8-facebook-48.png';
import twitter from '@/public/assets/images/social/icons8-twitter-logo-96.png';
import instagram from '@/public/assets/images/social/icons8-instagram-48.png';
import linkden from '@/public/assets/images/social/icons8-linkedin-48.png';
import resume from '@/public/assets/images/social/icons8-resume-48.png';
import github from '@/public/assets/images/social/icons8-github-48.png';
import { CardDataProps, ListSectionProps, SocialProps, TechDataProps } from "@/types/types";
import ProjectImg1 from "@/public/assets/images/project/website app.png";
import ProjectImg2 from "@/public/assets/images/project/shusie web.jpg";
import ProjectImg3 from "@/public/assets/images/project/648072ef9ae5eb350d6ec46b.jpg";
import ProjectImg4 from "@/public/assets/images/project/movieflix.jpg";
import ProjectImg5 from "@/public/assets/images/project/movie.jpg";
import ProjectImg6 from "@/public/assets/images/project/prakash portfolio.png";
import ProjectImg7 from "@/public/assets/images/project/nextmeta.jpg";
import ProjectImg8 from "@/public/assets/images/project/tech blog.jpg";
import ProjectImg9 from "@/public/assets/images/project/helpscout.jpg"
import projectImg10 from '@/public/assets/images/project/nike-project.jpg';
import projectImg11 from '@/public/assets/images/project/famsecWebsite.jpg';
import projectImg12 from '@/public/assets/images/project/resumeproj.jpg';

import Imghtml from '@/public/assets/images/tech/html5.png';
import Imgcss from '@/public/assets/images/tech/css3.png';
import Imgjs from '@/public/assets/images/tech/javascript.png';
import Imgreact from '@/public/assets/images/tech/atom.png';
import ImgGit from "@/public/assets/images/tech/visual-studio-team-services-github.png";
import Imgtypescript from '@/public/assets/images/tech/typescript.png';
import Imgsass from '@/public/assets/images/tech/sass.png';
import ImgBoot from "@/public/assets/images/tech/bootstrap.png";
import Imgnext from '@/public/assets/images/tech/-nextjs-64.png';
import Imgtailwind from '@/public/assets/images/tech/pngwing.com.png';





const ListSection :ListSectionProps[] = [
  { id: 1, link: "/", title: "Home" },
  { id: 1, link: "#about", title: "about" },
  { id: 1, link: "#project", title: "project" },
  { id: 1, link: "https://resume-prakash.vercel.app/", title: "resume" },
  { id: 1, link: "#contact", title: " contact" },
];


const technology :TechDataProps[]= [
  { title: "html", icon: Imghtml, id: 1 },
  { title: "css", icon: Imgcss, id: 2 },
  { title: "javascript", icon:Imgjs, id: 3 },
  { title: "reactjs", icon: Imgreact, id: 4 },
  { title: "Nextjs", icon: Imgnext, id: 5 },
  { title: "typescript", icon: Imgtypescript, id: 6 },
  { title: "scss", icon: Imgsass, id: 7},
  { title: "tailwind css", icon: Imgtailwind, id: 8 },
  { title: "bootstrap", icon:ImgBoot , id: 9 },
  { title: "git & github", icon:ImgGit , id: 10 },
];




  const cardData:CardDataProps[]= [
    {
      id: 1343434,
      title: "my resume",
      description:
        "Created a responsive and visually appealing resume using HTML, CSS, and JavaScript with Vite, demonstrating proficiency in web development .",
      poster: projectImg12,

      tech1: "Html", 
      tech2:'css',
      tech3: "javascript",
      webLink: "https://resume-prakash.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/resume-prakash.git",
      icon1: Imghtml,
      icon2: Imgcss,
      icon3: Imgjs,
    },
    {
      id: 1,
      title: "Famsec website",
      description:
        "Crafted Famsec landing page with Next.js, TypeScript and SCSS demonstrating modern web development expertise. Practice project for skill showcase.",
      poster: projectImg11,

      tech1: "typescript",
      tech2:'scss',
      tech3: "nextjs ",
      webLink: "https://family-website-exco.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/family-website.git",
      icon1: Imgnext,
      icon2: Imgsass,
      icon3: Imgtypescript,
    },
    {
      id: 2,
      title: "nike website",
      description:
        "I recreated the nike website using Next.js, TypeScript, SCSS, Tailwind CSS  and framer Motion as a practice project for web development.",
      poster: projectImg10,

      tech1: "typescript",
      tech2:'tailwindCss',
      tech3: "nextjs ",
      webLink: "https://shoes-nike.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/shoes-nike.git",
      icon1: Imgnext,
      icon2: Imgtailwind,
      

      icon3: Imgtypescript,
    },
    {
      id: 3,
      title: "Help scout",
      description:
        "Recreated Help Scout website with Next.js, TypeScript, SCSS, and Tailwind CSS, showcasing web development skills in practice.",
      poster: ProjectImg9,

      tech1: "scss",
      tech2:'tailwindCss',
      tech3: "nextjs ",
      webLink: "https://help-scout.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/help-scout.git",
      icon1: Imgsass,
      icon2: Imgtailwind,
      

      icon3: Imgnext,
    },
    {
      id: 4,
      title: "my portfolio",
      description:
        "My personal portfolio website showcases my mastery in crafting responsive web applications with a dark theme using SCSS, Next.js and  Framer Motion.",
      poster: ProjectImg6,

      tech1: "scss",
      tech2: "react",
      webLink: "https://prakash-portfolio-delta.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/Prakash-Portfolio-.git",
      icon1: Imgsass,
       icon2: Imgnext,
      icon3:Imgtypescript ,
    },
    {
      id: 5,
      title: "MovieFlix",
      description:
        "Create a seamless and captivating movie search website, MovieFlix, using Next.js and Tailwind CSS.  movie collection with a search bar powered by the OMDB API  ",
      poster: ProjectImg4,
      tech1:'tailwindCss',
      tech2: "nextjs ",
      webLink: "https://movieflix-theta-ruddy.vercel.app/",
      gitLink:
        "https://github.com/PrakashCodeLab/movieflix.git",
      
       icon1:Imgtailwind ,
       icon2:Imgnext,
    },
    {
      id: 6,
      title: "Sushi Restaurant",
      description:
        "Create a visually stunning and user-friendly website using React, showcasing the menu, services, and a contemporary sushi  japanese restaurant feel the taste",
      poster: ProjectImg2,
      tech1: "scss",
      tech2: "react",
      webLink: "https://sushiman-website-seven.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/sushiman-website-.git",
      icon1: Imgsass,
      icon2: Imgreact,
    },
    {
      id: 7,
      title: "tech blog",
      description:
        "Tech blog! Built with Next.js , I utilized the efficiency of Sass and Tailwind CSS to bring you concise, cutting-edge content in a sleek and responsive design.",
      poster: ProjectImg8,

      tech1: "scss",
      tech2:'tailwindCss',
      tech3: "nextjs ",
      webLink: "https://tech-nextjs-website.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/tech-nextjs-website.git",
      icon1: Imgsass,
      icon2: Imgtailwind,
      

      icon3: Imgnext,
    },
   
    {
      id: 8,
      title: "Metaverse nextjs ",
      description:
        "Metaverse UI, Designed with Next.js and enhanced by the versatility of Sass and the Tailwind CSS, this project serves as a perfect playground for  Next.js skills ",
      poster: ProjectImg7,

      tech1: "scss",
      tech2: "Tailwindcss",
      tech3:"Next.js",
      webLink: "https://meta-nextjs-website-i6tejh6pr-prakashcodelab.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/meta-nextjs-website.git",
      icon1: Imgsass,

      icon2: Imgnext,
    },
   
    {
      id: 9,
      title: "GPT3 Chat UI",
      description:
        " Develop a responsive website using React to provide users with an interactive and user-friendly interface for engaging in AI-driven conversations powered by GPT-3.",
      poster: ProjectImg1,

      tech1: "scss",
      tech2: "react js",
      webLink: "https://chat-gpt3-website-react.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/chat-gpt3-website-react.git",
      icon1:Imgsass,
      icon2:Imgreact,
    },
   
    {
      id: 10,
      title: "Promising Startup",
      description:
        " Develop a captivating and responsive landing page using HTML, CSS, and JavaScript of the startup company, and driving conversions.",
      poster: ProjectImg3,
      tech1: "html5",
      tech2: "css3",
      tech3: "javascript",
      webLink: "https://startup-landing-page-iota.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/Startup-landing-page-.git",
      icon1: Imghtml,
      icon2: Imgcss,
      icon3:Imgjs,
    },
   
    {
      id: 11,
      title: "CineTop100",
      description:
        " Develop a feature-rich movie application  for exploring  cinematic gems ,Rapid API to fetch movie data, providing users with comprehensive details.",
      poster: ProjectImg5,
      tech1: "html5",
      tech2: "css3",
      tech3: "javascript",
      webLink: "https://movie-website-omega.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/movie-website.git",
      icon1: Imghtml,
      icon2: Imgcss,
      icon3: Imgjs,
    },
   
  ];


 const socialData : SocialProps[] = [
    {
        id: 1,
        socialName: "Linkedin",
        socialIcon: linkden ,
        socialLink: "https://www.linkedin.com/in/prakash-m-21543a249",
    },
    {
      id: 2,
      socialName: "github",
      socialIcon:github ,
      socialLink: "https://github.com/PrakashCodeLab ",
    },
    {
      id: 3,
      socialName: "twitter",
      socialIcon:twitter,
      socialLink: "https://twitter.com/Prakash77481399/ ",
    },

    {
      id: 4,
      socialName: "resume",
      socialIcon: resume ,
      socialLink:'https://resume-prakash.vercel.app/',
    },
    {
      id: 5,
      socialName: "facebook",
      socialIcon:facebook,
      socialLink: "https://www.facebook.com/profile.php?id=100009177674130",
    },
    {
      id: 6,
      socialName: "instagram",
      socialIcon: instagram,
      socialLink: " https://www.instagram.com/prakashtechweb/",
    },
  ];

  export {socialData , cardData ,technology, ListSection};