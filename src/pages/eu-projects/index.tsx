import { ReactElement } from "react";
import CustomHead from "@/components/common/CustomHead";
import Header from "@/components/common/Header";
import Projects from "@/components/projects";

function EUProjects(): ReactElement {
  return (
    <div className={"w-full h-full flex justify-center items-center px-8 py-16 md:p-16 box-border"}>
      <CustomHead pageName="EU Projects" />
      <Header/>
      <Projects />
    </div>
  );
}

export default EUProjects;
