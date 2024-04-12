import Image from "next/image";
import Link from "next/link";

type LinkPage = {
  page: string;
};

const LogoHeader: React.FC<LinkPage> = ({page}) => {
  return (
    <Link href={page} className={"hidden md:block"}>
      <Image src="/images/quantumz.svg" alt="quantumz" width="32" height="32" />
    </Link>
  );
};

export default LogoHeader;
