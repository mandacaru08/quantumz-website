import Link from "next/link";

type SocialMediaProps = {
  socialMedia: { title: string; url: string }[];
};

const SocialMedia = ({ socialMedia }: SocialMediaProps) => {
  return (
    <div className={"flex flex-col mt-12"}> 
      {socialMedia.map((social) => {
        return (
          <Link key={social.title} href={social.url}>
            {social.title}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
