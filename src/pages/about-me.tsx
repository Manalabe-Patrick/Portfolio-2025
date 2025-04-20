import { motion } from "framer-motion";
import Background from "../components/background";
import NavMenu from "../components/nav-menu";
import Footer from "../components/footer";
import Button from "../components/ui/button";
import FinalCTA from "../components/final-cta";
import Badge from "../components/ui/badge";
import ScrollToTop from "../components/utils/scroll-on-top";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-22 ">
        <ScrollToTop />
        <Background style="max-h-[101rem]" />
        <NavMenu />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="mt-28">
            <div>
              <h1 className="text-[32px] lg:text-[48px] font-medium">About</h1>
              <p className="text-white/70 text-sm font-light mb-4 lg:mb-0">
                Hi, I'm <b className="font-bold text-white/80">Patrick</b>, a
                passionate web developer dedicated to crafting impactful
                software solutions that make a difference.
              </p>
            </div>
          </section>
          <hr className="text-white/30 my-4" />
          <section>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 md:col-span-3">
                <div>
                  <p className="text-white/70 text-sm font-light mb-4 lg:mb-0">
                    I'm a{" "}
                    <b className="font-bold text-white/80">
                      Full Stack Web Developer
                    </b>{" "}
                    with 3 years of experience and a passion for building
                    complete web applications from start to finish. On the
                    frontend, I work with modern frameworks like{" "}
                    <b className="font-bold text-white/80">
                      ReactJS, Angular, and Next.js
                    </b>{" "}
                    to create clean, responsive, and user-friendly interfaces.
                    On the backend, I use technologies like{" "}
                    <b className="font-bold text-white/80">ASP.NET</b> and{" "}
                    <b className="font-bold text-white/80">Node.js</b> to build
                    scalable, secure, and high-performing systems.
                  </p>
                  <p className="text-white/70 text-sm font-light mb-4 lg:mb-0 my-3">
                    I focus on writing{" "}
                    <b className="font-bold text-white/80">clean code</b> and
                    follow <b className="font-bold text-white/80">SOLID</b>{" "}
                    principles to ensure my codebase is maintainable, efficient,
                    and easy to scale.
                  </p>
                  <p className="text-white/70 text-sm font-light mb-4 lg:mb-0 my-3">
                    I'm always learning new tools and best practices to improve
                    my work and deliver high-quality solutions that solve
                    real-world problems.
                  </p>
                  <div className="my-4">
                    <Link to={"/contact-me"}>
                      <Button text="Contact Me" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/ppic1.png"
                  alt="profile pic"
                  className="w-full mx-auto"
                />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h1 className="text-[32px] lg:text-[18px] font-medium">
                Frameworks, Languages & Tools I Use
              </h1>
            </div>
          </section>
          <hr className="text-white/30 my-4" />
          <section>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 md:col-span-3 border border-white/30  bg-white/3 rounded-sm p-6">
                <h1 className="text-[16px] lg:text-[18px] font-medium">
                  Frontend
                </h1>
                <div>
                  <p className="text-white/70 text-sm font-light mb-4 lg:mb-0 my-3">
                    <span>Language & frameworks:</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 pt-2">
                    {[
                      "HTML",
                      "CSS",
                      "Javascript",
                      "Typescript",
                      "ReactJs",
                      "AngularJS",
                      "NextJs",
                      "SCSS",
                      "Pug",
                      "TailwindCSS",
                      "Bootstrap",
                    ].map((item: string, index: number) => (
                      <Badge key={index} text={item} />
                    ))}
                  </div>
                </div>
                <hr className="text-white/30 my-4" />
                <div>
                  <p className="text-white/70 text-sm font-light mb-4 lg:mb-0 my-3">
                    <span>State Management:</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 pt-2">
                    {["Zustand", "Redux", "Redux toolkit"].map(
                      (item: string, index: number) => (
                        <Badge key={index} text={item} />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-3 border border-white/30  bg-white/3 rounded-sm p-6">
                <h1 className="text-[16px] lg:text-[18px] font-medium">
                  Backend
                </h1>
                <div>
                  <div>
                    <p className="text-white/70 text-sm font-light mb-4 lg:mb-0 my-3">
                      <span>Language & Frameworks:</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 pt-2">
                      {["ASP.NET", "Express JS", "NextJS"].map(
                        (item: string, index: number) => (
                          <Badge key={index} text={item} />
                        )
                      )}
                    </div>
                  </div>
                  <hr className="text-white/30 my-4" />
                  <div>
                    <p className="text-white/70 text-sm font-light mb-4 lg:mb-0 my-3">
                      <span>Database & ORM:</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 pt-2">
                      {[
                        "SQL Server",
                        "MongoDB",
                        "MySQL",
                        "PostgreSQL",
                        "Mongoose",
                        "Entity Framework",
                        "Firebase",
                        "Supabase",
                      ].map((item: string, index: number) => (
                        <Badge key={index} text={item} />
                      ))}
                    </div>
                  </div>
                  <hr className="text-white/30 my-4" />
                  <div>
                    <p className="text-white/70 text-sm font-light mb-4 lg:mb-0 my-3">
                      <span>DevOps & Tools:</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 pt-2">
                      {["Azure", "Git", "Github", "Azure Repos", "Vercel"].map(
                        (item: string, index: number) => (
                          <Badge key={index} text={item} />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="lg:px-42 my-8 mt-22">
            <FinalCTA />
          </section>
        </motion.div>
      </div>
      <section className="mt-28">
        <Footer />
      </section>
    </div>
  );
};

export default AboutMePage;
