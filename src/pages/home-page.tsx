import NavMenu from "../components/nav-menu";
import DynamicIconCloud from "../components/dynamic-icon-cloud";
import FinalCTA from "../components/final-cta";
import Footer from "../components/footer";
import Button from "../components/ui/button";
import { motion } from "framer-motion";
import Background from "../components/background";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/utils/scroll-on-top";
import { Download } from "lucide-react";
import SocMed from "../components/soc-meds";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-22">
        <ScrollToTop />
        <Background style="max-h-[167rem]" />
        <NavMenu />
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="my-30 md:my-46">
            <p className="text-white/70 text-sm ">Hello world, I'm Patrick</p>
            <div className="md:grid grid-cols-[65%_35%] gap-10">
              <div>
                <h1 className="text-[32px] lg:text-[48px] font-medium">
                  From backend logic to beautiful frontends, I build it all.
                </h1>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-6">
                  I build websites from start to finish. From clean designs to
                  smooth functionality, I make it all work.
                </p>
                <Link to={"/contact-me"}>
                  <Button text="Connect" />
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section>
            <div className="md:grid grid-cols-5 gap-4">
              <div className="col-span-2 border border-white/30 rounded-md p-6 px-10 bg-gradient-to-b from-slate-50/0 to-black/60 bg-white/3">
                <div className="w-50 md:w-53 lg:w-66 mx-auto">
                  <DynamicIconCloud />
                </div>
                <h6 className="font-medium text-md">Tech Stack</h6>
                <p className="text-white/70 text-sm font-light">
                  Tools and Technologies I used
                </p>
              </div>
              <div className="mt-4 md:mt-0 col-span-3 border border-2px border-white/30 rounded-md p-6 px-10 bg-gradient-to-b from-slate-50/0 to-black/60 bg-white/3 group cursor-pointer">
                <img
                  alt="projet background"
                  src="/proj.png"
                  className="blur-[3px] h-55"
                />
                <div className="grid grid-cols-6">
                  <div className="col-span-6 lg:col-span-4">
                    <h6 className="font-medium text-lg">Projects</h6>
                    <p className="text-white/70 text-sm font-light">
                      From ideas to fully functional web apps, here are some
                      things I’ve built.
                    </p>
                  </div>
                  <div className="col-span-6 lg:col-span-2 flex justify-center lg:justify-end">
                    <div className="block lg:hidden group-hover:block mt-6">
                      <Link to={"/projects"}>
                        <Button text="View projects" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/Patrick_Manalabe_soft-eng-resume.pdf" target="_blank">
              <div className="md:grid grid-cols-5 gap-4 mt-4">
                <div className="col-span-3 border border-2px border-white/30 rounded-md p-6 px-10 bg-gradient-to-b from-slate-50/0 to-black/60 bg-white/3 cursor-pointer hover:bg-white/10">
                  <h6 className="font-medium text-md">My Resume</h6>
                  <p className="text-white/70 text-sm font-light flex gap-2 items-center mt-2">
                    <Download size={42} />
                    Peek under the hood, view my resume for the full breakdown.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 col-span-2 border border-2px border-white/30 rounded-md p-6 px-10 bg-gradient-to-b from-slate-50/0 to-black/60 bg-white/3">
                  <h6 className="font-medium text-lg">Connect</h6>
                  <p className="text-white/70 text-sm font-light">
                    Let's connect and build something great together.
                  </p>
                  <div className="w-16 flex gap-4 my-2">
                    <SocMed />
                  </div>
                </div>
              </div>
            </a>
            <div className="flex justify-center mt-10">
              <Link to={"/about-me"}>
                <Button text=" Learn more about me" />
              </Link>
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="my-30 md:my-46">
            <h1 className="text-center text-5xl">My Services</h1>
            <p className="text-white/70 text-sm font-light text-center my-4">
              I help businesses turn ideas into powerful digital experiences.
            </p>
            <div className="md:grid grid-cols-6 gap-0 mt-16">
              <div className="col-span-2 border border-2px border-white/30 rounded-md p-6 px-10 h-[190px] bg-white/3">
                <h6 className="font-medium text-lg">🌐 Web Development</h6>
                <p className="text-white/70 text-sm font-light">
                  I build websites that are fast, modern, and work great on any
                  device.
                </p>
              </div>
              <div className="col-span-2 border border-2px border-white/30  rounded-md p-6 px-10 h-[190px] bg-white/3">
                <h6 className="font-medium text-lg">🛸 Custom Software</h6>
                <p className="text-white/70 text-sm font-light">
                  Need something special? I build software that fits your
                  business like a glove.
                </p>
              </div>
              <div className="col-span-2 border border-2px border-white/30 rounded-md p-6 px-10 h-[190px] bg-white/3">
                <h6 className="font-medium text-lg">🛰️ Code Quality</h6>
                <p className="text-white/70 text-sm font-light">
                  I check and improve code to make sure it’s clean, fast, and
                  ready for launch.
                </p>
              </div>
            </div>
            <div className="md:grid grid-cols-6 gap-0">
              <div className="col-span-2 border border-2px border-white/30 rounded-md p-6 px-10 h-[190px] bg-white/3">
                <h6 className="font-medium text-lg">
                  🛰️ Bug Fixing & Maintenance
                </h6>
                <p className="text-white/70 text-sm font-light">
                  Ongoing support to squash bugs and keep everything running
                  smoothly.
                </p>
              </div>
              <div className="col-span-2 border border-2px border-white/30  rounded-md p-6 px-10 h-[190px] bg-white/3">
                <h6 className="font-medium text-lg">
                  🧪 Performance & Scalability
                </h6>
                <p className="text-white/70 text-sm font-light">
                  I make sure your web app runs fast and can grow as your users
                  grow.
                </p>
              </div>
              <div className="col-span-2 border border-2px border-white/30 rounded-md p-6 px-10 h-[190px] bg-white/3">
                <h6 className="font-medium text-lg">
                  🧰 Database Design & Management
                </h6>
                <p className="text-white/70 text-sm font-light">
                  I set up and manage databases to keep your app’s data safe,
                  organized, and easy to access.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="lg:px-42 ">
            <FinalCTA />
          </section>
        </motion.div>
      </div>
      <section className="mt-46">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
