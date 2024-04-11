import Link from "next/link";

type Attachment = {
  title: string;
  url: string;
};

type AttachmentsProps = {
  attachments: Attachment[];
};

const Attachments = ({ attachments }: AttachmentsProps) => {
  return (
    <>
      {attachments.length > 0 && (
        <div>
          <h1 className={"font-semibold"}>Załączniki:</h1>
          <ul>
            {attachments.map((attachment, index) => (
              <li key={index}>
                <Link href={attachment.url} target="_blank" rel="noreferrer">
                  {attachment.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Attachments;
