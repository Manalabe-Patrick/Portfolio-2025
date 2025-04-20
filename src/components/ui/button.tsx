import { CircleDotDashed } from "lucide-react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="before:ease relative h-12 px-6 overflow-hidden border border-white/80 text-white/80 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32 cursor-pointer rounded-full">
      <span className="relative z-10 flex items-center gap-2 justify-center">
        <CircleDotDashed size={20} /> {text}
      </span>
    </button>
  );
};

export default Button;
