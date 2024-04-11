type SectionProps = {
  sections: { title: string; text: string | string[] }[];
};

const Sections = ({ sections }: SectionProps) => {
  return (
    <div className={"mt-10"}>
      {sections.map((item) => {
        return (
          <article key={item.title} className={"mb-10"}>
            <h2
              className={
                "w-full flex justify-center items -center text-4xl mb-6"
              }
            >
              {item.title}
            </h2>
            {Array.isArray(item.text) ? (
              <ul className={"list-disc list-inside"}>
                {item.text.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            ) : (
              <span className={"mb-5 text-base"}>{item.text}</span>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default Sections;
