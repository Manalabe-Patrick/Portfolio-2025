import { Link } from "react-router-dom";
import Button from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="flex justify-between items-center my-12">
        <h1 className="text-2xl">PM_</h1>
        <div className="md:hidden block">
          <Menu onClick={handleMenuClick} />
          {openMenu && (
            <div className="absolute top-0 right-0 bg-black z-20 w-full h-full">
              <div className="gap-8 text-xl font-light justify-center flex flex-col items-center z-20 pt-40">
                <Link
                  to="/"
                  className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full "
                >
                  <p>Home</p>
                </Link>
                <Link
                  to="/about-me"
                  className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full"
                >
                  <p className="cursor-pointer">About</p>
                </Link>
                <Link
                  to="/experience"
                  className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full"
                >
                  <p className="cursor-pointer">Experience</p>
                </Link>
                <Link
                  to="/projects"
                  className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full"
                >
                  <p className="cursor-pointer">Projects</p>
                </Link>
                <Link to="/contact-me" className="cursor-pointer">
                  <Button text="Contact me" />
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="gap-8 text-sm font-light items-center hidden md:flex">
          <Link
            to="/"
            className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full "
          >
            <p>Home</p>
          </Link>
          <Link
            to="/about-me"
            className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full"
          >
            <p className="cursor-pointer">About</p>
          </Link>
          <Link
            to="/experience"
            className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full"
          >
            <p className="cursor-pointer">Experience</p>
          </Link>
          <Link
            to="/projects"
            className="cursor-pointer hover:border border-2px border-white/30 px-4 rounded-full"
          >
            <p className="cursor-pointer">Projects</p>
          </Link>
          <Link to="/contact-me" className="cursor-pointer">
            <Button text="Contact me" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
