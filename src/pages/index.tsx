import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import Content from "@/components/Content";
import CustomHead from "@/components/common/CustomHead";
import FlowFieldEffect from "@/components/FlowFieldEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col z-0 items-center justify-between pt-16 px-5 md:p-14 lg:p-24 ${inter.className}`}
    >
      <CustomHead pageName={null} />
      <Header />
      <Content />
      <FlowFieldEffect/>
    </main>
  );
}
