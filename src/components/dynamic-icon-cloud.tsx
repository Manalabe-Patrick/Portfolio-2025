import React, { JSX } from "react";
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
  SimpleIcon,
} from "react-icon-cloud";

interface IconData {
  simpleIcons: Record<string, SimpleIcon>;
}

const useIcons = (slugs: string[]): React.ReactNode[] | JSX.Element => {
  const [icons, setIcons] = React.useState<IconData | null>(null);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 90,
        aProps: {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs = [
  "typescript",
  "vercel",
  "javascript",
  "nodedotjs",
  "html5",
  "css",
  "github",
  "jirasoftware",
  "figma",
  "postgresql",
  "mongodb",
  "expressdotcom",
  "dotnet",
  "python",
  "react",
  "slack",
  "bootstrap",
  "postman",
  "postman",
  "git",
  "tailwindcss",
  "docker",
  "supabase",
  "render",
  "twilio",
];

const DynamicIconCloud: React.FC = () => {
  const icons = useIcons(slugs);

  return (
    <Cloud
      options={{
        initial: [0.2, -0.1], // Initial spin vector: [x, y]
        reverse: true,
        depth: 1.0,
        maxSpeed: 0.01, // Controls how fast it spins
        minSpeed: 0.01, // Ensures it doesn't stop completely
        wheelZoom: false, // Optional: disables zooming with mouse wheel
        dragControl: false, // Optional: disables manual dragging
      }}
    >
      {icons}
    </Cloud>
  );
};

export default DynamicIconCloud;
