import Badge from "./ui/badge";
import Button from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  badges: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  badges,
  link,
}) => {
  return (
    <div className="grid grid-cols-7 border gap-6 border-2px border-white/30 rounded-md p-2 my-4 hover:bg-white/3 cursor-pointer">
      <div className="col-span-7 lg:col-span-2">
        <img
          className="w-50 md:w-80 lg:w-full mx-auto"
          alt="project img"
          src="/taletype.png"
        ></img>
      </div>
      <div className="col-span-7 lg:col-span-5 px-10 py-4">
        <h6 className="font-medium text-lg">{title}</h6>
        <p className="text-white/70 text-sm font-light mt-2">{description}</p>
        <div className="mb-6 mt-2">
          {badges.map((badge: string, i: number) => (
            <Badge text={badge} key={i} />
          ))}
        </div>
        <div className="flex justify-center lg:justify-end">
          <a href={link} target="_blank">
            <Button text="View project" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
