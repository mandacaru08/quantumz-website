import Link from "next/link";

type MarketResearchResultsProps = {
  results: {
    title: string;
    url: string;
  }[];
};

const MarketResearchResults = ({ results }: MarketResearchResultsProps) => {
    return (
      results.length > 0 && (
        <div className={"flex flex-col justify-center items-center mt-12"}>
          <h2 className={"text-4xl"}>Wynik Rozeznania Rynku</h2>
          {results.map((result, index) => (
            <div key={index} className={"w-full h-fit"}>
              <span className={"w-full flex justify-start align-center"}>Załączniki:</span>
              <Link href={result.url} target="_blank">{result.title}</Link>
            </div>
          ))}
        </div>
      )
    );
  }

export default MarketResearchResults;
