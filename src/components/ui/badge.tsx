interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="border border-2px border-white/30 text-[12px] bg-white/3 text-white/70 py-1 px-4 rounded-full mr-[5px]">
      {text}
    </span>
  );
};

export default Badge;
