import { ReactElement } from "react";
import Image from "next/image";

function Content(): ReactElement {
  return (
    <section  className={"h-full w-full md:w-4/5 flex flex-col justify-center items-center"}>
      <Image src={"/images/quantumz-full.svg"} alt="quantumz-logo" height="940" width="940" />
      <div className={"h-10/12 w-10/12 flex flex-col justify-between items-center"}>
        <h2 className={"text-2xl lg:text-5xl font-light"}>Empowering Optimization with</h2>
        <h1 className={"text-4xl lg:text-6xl font-medium mt-12"}>Physics-Inspired Algorithms</h1>
        <span className="my-8 text-justify">
          Harnessing the methodologies of quantum mechanics, statistical
          physics, and science-inspired computation, our adept consortium
          pioneers avant-garde optimization strategies. By capitalizing on these
          physicomimetic algorithms, we unshackle untapped potential in
          problem-solving.
        </span>
      </div>
    </section>
  );
}

export default Content;
