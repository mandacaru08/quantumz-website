import { ReactElement } from "react";
import Image from "next/image";

import PROJECTS from "../../../constants/projects-info.json";
import Project from "./Project";

function Projects(): ReactElement {
  return (
    <div className={"h-full w-full box-content overflow-y-hidden"}>
      <div
        className={
          "w-full h-1/5 flex flex-col justify-center items-center lg:flex-row"
        }
      >
        <Image
          src="/images/quantumz-full.svg"
          alt="quantumz"
          width="320"
          height="320"
        />
        <h1 className={"text-5xl font-extralight"}>EU Projects</h1>
      </div>
        <div className={"flex flex-col"}>
          {PROJECTS.projects.map((project) => {
            return (
              <Project key={project.id} project={project}/>
            );
          })}
        </div>
    </div>
  );
}

export default Projects;
