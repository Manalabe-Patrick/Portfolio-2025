import { Link } from "react-router-dom";
import Button from "./ui/button";

const FinalCTA = () => {
  return (
    <div className="border border-2px border-white/30 rounded-md w-full mx-auto md:px-20 py-8 bg-white/3">
      <h1 className="text-center text-3xl">Let’s Launch Your Vision</h1>
      <p className="text-white/70 text-sm font-light text-center my-4">
        Have a project in mind or just want to connect? I’m ready to turn your
        ideas into reality!
      </p>
      <div className="flex justify-center mt-10">
        <Link to="/contact-me" className="cursor-pointer">
          <Button text="Contact me" />
        </Link>
      </div>
    </div>
  );
};

export default FinalCTA;
