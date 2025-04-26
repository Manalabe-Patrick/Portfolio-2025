import { motion } from "framer-motion";
import Background from "../components/background";
import NavMenu from "../components/nav-menu";
import Footer from "../components/footer";
import Badge from "../components/ui/badge";
import { StepForward } from "lucide-react";
import ScrollToTop from "../components/utils/scroll-on-top";

interface Experience {
  company: string;
  title: string;
  duration: string;
  experience: string[];
  logo: string;
}

const Experiences: Experience[] = [
  {
    company: "Taxumo",
    title: "Software Engineer",
    duration: "Aug 2024 - Present",
    experience: [
      "Boosted application performance by up to 60% through optimization.",
      "Configured and deployed web applications on Azure App Services",
      "Implemented automated build and release pipelines using Azure DevOps",
      "Built clean and scalable web applications and features from scratch.",
    ],
    logo: "/taxumo.png",
  },
  {
    company: "Taxumo",
    title: "Junior Software Engineer",
    duration: "Mar 2023 - Aug 2024",
    experience: [
      "Improved backend code to increase application speed by up to 15%.",
      "Collaborated with the product team to deliver new features.",
    ],
    logo: "/taxumo.png",
  },
  {
    company: "Ace Medical Center - Baypointe",
    title: "MIS Programmer",
    duration: "Aug 2022 - Mar 2023",
    experience: [
      "Maintained and improved the hospital's website to enhance user experience.",
      "Optimized website SEO for improved search engine visibility.",
      "Wrote SQL queries to create reports and analyze data.",
      "Ensured website compliance with DOH regulations.",
      "Managed the hospital's information system to ensure smooth operations.",
    ],
    logo: "/ace.png",
  },
  {
    company: "Giolosts Technologies",
    title: "Software Engineer Intern",
    duration: "Mar 2022 - Jun 2022",
    experience: [
      "Designed and developed dynamic, responsive websites using React.js.",
      "Collaborated with cross-functional teams through project management tools like Microsoft Teams and Jira.",
      "Implemented best practices in component-based architecture to build scalable and maintainable web applications.",
    ],
    logo: "/gio.jpeg",
  },
];

const ExperiencePage = () => {
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
                My Work Experience
              </h1>
              <p className="text-white/70 text-sm font-light">
                I have over 3 years of experience in full-stack web development
                and software engineering.
              </p>
            </div>
          </section>
          <hr className="text-white/30 my-4" />
          <section className="mx-auto">
            <div className="h-20"></div>
            {Experiences.map((exp: Experience, i: number) => (
              <div
                className="grid grid-cols-10 h-[400px] w-full lg:w-240 mx-auto "
                key={i}
              >
                <div className="col-span-1">
                  <div className="relative h-full w-full">
                    <div className="absolute h-full w-[1px] bg-white/30 ml-6 z-[-2]"></div>
                    <img alt="work logo" src={exp.logo} className="w-12" />
                  </div>
                </div>
                <div className="col-span-9 hover:bg-white/3 px-4 py-2">
                  <h1 className="text-[24px] font-medium">{exp.company}</h1>
                  <Badge text="Remote" />
                  <div className="mt-4">
                    <h1 className="text-[16px] font-medium">{exp.title}</h1>
                    <p className="text-white/70 text-sm font-light">
                      {exp.duration}
                    </p>
                    <ul className="mt-4">
                      {exp.experience.map((exp: string, i: number) => (
                        <li
                          className="text-white/70 text-sm font-light flex gap-2 items-center my-4 tracking-wider"
                          key={i}
                        >
                          <StepForward size={16} /> {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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

export default ExperiencePage;
