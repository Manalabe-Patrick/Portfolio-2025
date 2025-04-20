import { motion } from "framer-motion";
import Footer from "../components/footer";
import NavMenu from "../components/nav-menu";
import Button from "../components/ui/button";
import Background from "../components/background";
import ScrollToTop from "../components/utils/scroll-on-top";
import SocMed from "../components/soc-meds";
import { Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-22 ">
        <ScrollToTop />
        <Background style="max-h-[65rem]" />
        <NavMenu />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section>
            <div>
              <h1 className="text-[32px] lg:text-[48px] font-medium mt-28">
                Contact
              </h1>
            </div>
          </section>
          <hr className="text-white/30" />
          <section>
            <div className="md:grid grid-cols-6 gap-6 py-4 lg:py-12">
              <div className="col-span-3">
                <p className="text-white/70 text-sm font-light mb-4 lg:mb-0">
                  Interested in working together? I'm available for freelance
                  projects and full-time opportunities. Let’s connect and create
                  something great!
                </p>
                <div className="mt-4">
                  <p className="text-white/70 text-sm font-light flex gap-2 items-center">
                    <Mail size={16} />
                    manalabepatrick@gmail.com
                  </p>
                  <p className="text-white/70 text-sm font-light  flex gap-2 items-center mt-2">
                    <Phone size={16} />
                    +639666927694
                  </p>
                </div>
                <div className="w-16 flex mx-auto gap-4 mt-4 mb-4 lg:mb-0">
                  <SocMed />
                </div>
              </div>
              <div className="col-span-3">
                <div className=" border border-white/30  bg-white/3 rounded-sm p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 md:col-span-3">
                      <h6 className="text-sm mb-2">Name</h6>
                      <input
                        type="text"
                        className="border border-white/30 rounded-sm w-full p-2 text-sm"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <h6 className="text-sm mb-2">Email</h6>
                      <input
                        type="text"
                        className="border border-white/30 rounded-sm w-full p-2 text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <h6 className="text-sm mb-2">Subject</h6>
                      <input
                        type="text"
                        className="border border-white/30 rounded-sm w-full p-2 text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <h6 className="text-sm mb-2">Message</h6>
                      <textarea className="border border-white/30 rounded-sm w-full p-2 text-sm h-28" />
                    </div>
                    <div className="col-span-6 flex justify-center">
                      <Button text="Send Message" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
      <section className="mt-28">
        <Footer />
      </section>
    </div>
  );
};

export default ContactPage;
