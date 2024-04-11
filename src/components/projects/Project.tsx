import { useState } from "react";

import Summary from "./Summary";
import Sections from "./Sections";
import Attachments from "./Attachments";
import MarketResearchResults from "./MarketResearchResults";
import Banner from "./Banner";
import SocialMedia from "./SocialMedia";

type ProjectType = {
  id: number;
  title: string;
  subtitle: string;
  banner: string;
  summary: { title: string; description: string }[];
  sections: { title: string; text: string | string[] }[];
  attachments: { title: string; url: string }[];
  results: { title: string; url: string }[];
  socialMedia: { title: string; url: string }[];
};

type ProjectContentProps = {
  project: ProjectType;
};

const Project = ({ project }: ProjectContentProps) => {
  const [showProject, setShowProject] = useState(false);

  return (
    <div
      key={project.id}
      className={
        "flex flex-col justify-center items-center mb-4 gb-primary-color box-content overflow-y-hidden"
      }
    >
      <button
        onClick={() => setShowProject(!showProject)}
        className={
          "w-full h-9 flex flex-start items-center mt-12 px-3 bg-neutral-900 text-white hover:bg-white hover:text-black transition-all duration-600"
        }
      >
        {project.subtitle}
      </button>
      <div
        className={`h-fit w-3/5 pt-12 overflow-y-hidden ${showProject ? "initial" : "hidden"}`}
      >
        <div
          className={
            "flex flex-col justify-center items-center pb-5 border-b-2 border-dashed"
          }
        >
          <h2 className={"pb-10 text-4xl"}>{project.title}</h2>
          <Summary summary={project.summary} />
        </div>
        <Sections sections={project.sections} />
        <Attachments attachments={project.attachments} />
        <MarketResearchResults results={project.results} />
        <SocialMedia socialMedia={project.socialMedia} />
        <Banner banner={project.banner} />
      </div>
    </div>
  );
};

export default Project;
