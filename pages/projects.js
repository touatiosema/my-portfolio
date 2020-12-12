import Card from "../components/Card";

const projects = [
  {
    image: "/scanrenovation.png",
    projectLink: "www.scanrenovation.com",
    title: "ScanRenovation website",
    paragraphe1: `An inovative website that offers the ability to find interesting
  houses, apartements... And find professionals who offers maintaining,
  repaire and design services. This website implements virtual visite,
  video chat, screensharing through webRTC...`,
    paragraphe2: `I worked on the re-implementation of a part of the website using
  reactjs/nextjs with (SSR, ISG), and on the screensharing functionality
  with webRTC, I used lots of libraries like tailwindcss,
  styledcomponents...`,
  },

  {
    image: "/fullstack.png",
    projectLink: "https://github.com/touatiosema/catalog-fullstack-app",
    title: "Catalog fullstack app",
    paragraphe1: `This web application provides a list of items, each is a member of a specific category, it allows authentificated users to add/edit/delete items.`,
    paragraphe2: `I used django, postgresql, sqlalchemy, oauth... to create this website.`,
  },
  {
    image: "/pthread.jpg",
    projectLink: "https://github.com/touatiosema/pthread-library-api",
    title: "Pthread library api re-creation.",
    paragraphe1: `In this project, I tried to recreate the same API of pthread C library, with some multi-thread functionalities like preemption and pirority`,
  },
  {
    image: "/clinica.ico",
    projectLink: "https://github.com/touatiosema/2CPI-Project-Clinica",
    title: "Clinica, a java/javafx app.",
    paragraphe1: `This is a desktop application, it aims to help doctors in their medical cabinets to manage patients, their Rendez-vous, their documents, their medecins...
    It comes with a notification system, and uses the sqlite database.`,
  },
];

export default () => (
  <div>
    <div className="content">
      <div className="fading-in">
        {" "}
        <h1 className="text-2xl md:text-4xl">
          From desktop applications with{" "}
          <span className="text-yellow-500">java and javafx</span>, to Web apps
          with
          <span className="text-blue-500"> MERN</span> stack,{" "}
          <span className="text-pink-500">Graphql</span> or{" "}
          <span className="text-green-400">REST</span> APIs, I had various
          experiences with different technologies and done many projects in
          which I had the opportunity to learn a lot.
        </h1>
      </div>
    </div>
    {projects.map((cardInfo) => (
      <Card {...cardInfo}></Card>
    ))}
  </div>
);
