import { node } from "globals";
import IconCloud from "./ui/icon-cloud";

const slugs = [
  "adobephotoshop", "webflow", "sass", "bootstrap", "tailwindcss", "sketch", "framer", "angular", "typescript",
    "javascript", "react", "html5", "css3", "git", "jira", "github", "gitlab", "visualstudiocode", "figma",
    "node", "express", "mongodb", "mysql", "postgresql", "docker", "kubernetes", "aws", "azure", "googlecloud",
    "firebase", "redux", "vuejs", "nuxtjs", "nextjs", "jest", "cypress", "webpack", "babel",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
