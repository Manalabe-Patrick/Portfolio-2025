import { motion } from "framer-motion";
import Background from "../components/background";
import NavMenu from "../components/nav-menu";
import Footer from "../components/footer";
import ProjectCard, { ProjectCardProps } from "../components/project-card";
import ScrollToTop from "../components/utils/scroll-on-top";

const projects: ProjectCardProps[] = [
  {
    title: "Body Blueprint AI (Next.Js + Vapi AI + Convex + Clerk auth)",
    description:
      "Body Blueprint AI builds custom gym plans for your goals fat loss, muscle gain, or fitness and tracks your progress.",
    badges: [
      "SaaS",
      "NextJS",
      "Clerk",
      "Vapi.ai",
      "Convex",
      "Typescript",
      "Shadcn",
      "tailwind",
    ],
    link: "https://github.com/Manalabe-Patrick/body-blueprint-ai/tree/main",
    img: "/blueprint_ai.png",
  },
  {
    title: "TaleType (MERN Stack)",
    description:
      "TaleType is a real-time chat app with a game-like style. It uses Node.js and MongoDB on the backend and has a modern look on the front. Users can enjoy fun, role-playing chats that feel like a game.",
    badges: [
      "ReactJs",
      "NodeJs",
      "TailwindCSS",
      "Typescript",
      "MongoDB",
      "DaisyUI",
      "Vite",
      "Zustand",
    ],
    link: "https://github.com/Manalabe-Patrick/taletype",
    img: "/taletype.png",
  },
  {
    title: "Minimal API in ASP.NET 8",
    description:
      "This project is a simple demonstration of how to use Minimal APIs in .NET 8. It showcases the basics of setting up endpoints, handling requests, and building lightweight web applications with minimal configuration.",
    badges: [
      "rest api",
      "minimal api",
      "Asp.NET CORE 8.0",
      "C#",
      "sql server",
      "EF core",
      "code first migration",
      "api key authentication",
    ],
    link: "https://github.com/Manalabe-Patrick/MinimalApi-Net8-SqlServer-EFCore",
    img: "/api_proj.png",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-22 ">
        <ScrollToTop />
        <Background style="max-h-[60rem]" />
        <NavMenu />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="mt-28">
            <div>
              <h1 className="text-[32px] lg:text-[48px] font-medium">
                Projects
              </h1>
              <p className="text-white/70 text-sm font-light">
                A showcase of full stack web applications. Each project reflects
                my passion for clean architecture, modern tech, and solving
                real-world problems through code.
              </p>
            </div>
          </section>
          <hr className="text-white/30 my-4" />
          <section>
            {projects.map((project: ProjectCardProps, i: number) => (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                badges={project.badges}
                link={project.link}
                img={project.img}
              />
            ))}
          </section>
        </motion.div>
      </div>
      <section className="mt-28">
        <Footer />
      </section>
    </div>
  );
};

export default ProjectsPage;
