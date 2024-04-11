type SummaryProps = {
  summary: Array<{
    title: string;
    description: string;
  }>;
};

const Summary = ({ summary }: SummaryProps) => {
  return (
    <div>
      {summary.map((item, index) => (
        <div key={index} className={"mb-4"}>
          <span className={"font-semibold"}>{item.title}: </span><span>{ item.description}</span>
        </div>
      ))}
    </div>
  );
}

export default Summary;