import Image from "next/image";

type BannerProps = {
  banner: string;
};

const Banner = ({ banner }: BannerProps) => {
  return (
    <div
      className={
        "w-full h-1/5 flex flex-col justify-center items-center lg:flex-row mt-12"
      }
    >
      <Image src={banner} alt="project-banner" width="800" height="200" className={"w-full"}/>
    </div>
  );
};

export default Banner;
