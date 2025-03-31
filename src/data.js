import pro1 from "./images/pro1.png";
import pro2 from "./images/pro2.png";
import pro3 from "./images/pro3.png";
import pro4 from "./images/pro4.png";
import pro5 from "./images/pro5.png";
import pro6 from "./images/pro6.png";

export const menu = [
    {name:"Home"},
    {name:"About"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"},
]


export const projects = [
    { 
      id:1,
      title: 'Spotify Clone',
      image: pro1,
      data:{
         description: `A Full Stack Music streaming platform featuring seamless music playback,
         playlist management, and an admin panel for song and album control. `,
         github: "https://github.com/madhushikadissanayake/Spotify-Clone",      
      },
      stack:[
        {
          name:"React Js",
        },
        {
          name:"Node Js",
        },
        {
          name:"Express Js",
        },
        {
          name:"MongoDB",
        },
      ]
    },
    {
      id:2,
      title: 'My Portfolio',
      image: pro2,
     data:{
        description:`A Web platform to showcase my professional background,
                      qualifications, and projects.`,
        github: "https://github.com/madhushikadissanayake/My-Portfolio",
        website: "https://my-portfolio-blond-five-40.vercel.app/",
      },
      stack:[
        {
          name:"React Js",
        },
        {
          name:"JavaScript",
        },
      ]
    },
    {
      id:3,
      title: 'E Commerce Web Application',
      image: pro3,
     data:{
        description: `A Full Stack E Commerce website with secure login, shopping cart, 
        and product management features, user authentication, and admin panel management.`,
        github: "https://github.com/madhushikadissanayake/E-Commerce",
      },
      stack:[
        {
          name:"React JS",
        },
        {
          name:"Node Js",
        },
        {
          name:"Express Js",
        },
        {
          name:"MongoDB",
        },
      ]
    },
    {
      id:4,
      title: 'Coffee Shop App',
      image: pro4,
      data:{
        description: `A user-friendly app design with a visually engaging home screen, a favorites section, 
        and an intuitive layout for easy browsing and purchases.`,
        figma: "https://www.figma.com/design/8qjuJk3zMxiXhdRmtzRBAI/Coffee-Shop-App?node-id=0-1&t=otdYp31ksWfgv74r-1",
      },
      stack:[
        {
          name:"Figma",
        },
      ]
    },
    {
      id:5,
      title: 'Spiritual Bliss',
      image: pro5,
      data:{
        description: `A Yoga website offering class details, membership options, and wellness insights,
         featuring benefits, testimonials, and a blog on mindfulness and yoga practices. `,
        github: "https://github.com/madhushikadissanayake/Spiritual-Bliss",
        website: "https://madhushikadissanayake.github.io/Spiritual-Bliss/",
      },
      stack:[
        {
          name:"HTML",
        },
        {
          name:"CSS",
        },
        {
          name:"JavaScript",
        },
      ]
    },
    {
      id:6,
      title: 'Smoothie App',
      image: pro6,
      data:{
        description: `A  stunning 3D UI design for a smoothie app, featuring a dynamic 
        carousel of smoothie bowls with seamless visual transitions for an engaging user experience.`,
        figma: "https://www.figma.com/design/esafFIiZrt0aQf5GZE2fRe/Smoothie-Shop-App?node-id=27-2&t=LrNGC7HCd24UVwwm-1",
      },
      stack:[
        {
          name:"Figma",
        },
      ]
    },
  ]
  

