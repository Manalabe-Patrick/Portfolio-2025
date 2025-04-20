interface BackgroundProps {
  style: string;
}

const Background: React.FC<BackgroundProps> = ({ style }) => {
  return (
    <div
      className={
        `absolute top-0 left-0 w-full z-[-2] opacity-80} overflow-hidden ` +
        style
      }
    >
      <img src="/bg_ellipse_1.png" alt="ellipse 1" className={`w-full`} />
    </div>
  );
};
export default Background;
