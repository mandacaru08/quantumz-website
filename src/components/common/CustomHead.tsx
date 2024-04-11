import Head from "next/head";

type CustomHeadProps = {
    pageName: string | null;
};

const CustomHead: React.FC<CustomHeadProps> = ({pageName}) => {
  return (
    <Head>
      <title>QuantumZ {pageName? `| ${pageName}` : ""}</title>
    </Head>
  );
}

export default CustomHead;
