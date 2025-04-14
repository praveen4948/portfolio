import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import details from "./_builder/data";
import Image from "next/image";
import aboutImage from "../../../../public/experience/scaler/scalerBG.jpeg";
import Link from "next/link";

const HeadingLink = ({ heading, link }) => {
  return (
    <>
      <div className="text-xl">{heading}</div>
      <Link href={link} className="cursor-pointer text-blue-400" target="_blank">
        {link}
      </Link>
    </>
  );
};

const Page = ({ params }) => {
  const { slug } = params;
  const data = details[slug];

  if (!data) {
    return null;
  }

  return (
    <>
      <Header />
      <section
        id="about"
        className="relative py-16 h-fit bg-fixed bg-center"
        style={{
          backgroundImage: `url(${aboutImage.src})`,
          backgroundSize: "100% 100%",
          backgroundColor: "#1a1a1a",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 px-10 mt-20 text-white">
          <div className="container max-w-5xl mx-auto flex flex-col gap-y-8">
            <div className="flex items-center justify-between gap-8">
              <Image src={`/logo/${slug}logo.jpeg`} width={100} height={100} />
              <div className="md:text-6xl text-2xl font-extrabold text-yellow-400">{data.name}</div>
            </div>

            <p className="text-lg text-gray-300">{data.description}</p>

            <div>
              <HeadingLink link={data.linkedInURL} heading={"LinkedIn"} />
              <HeadingLink link={data.website} heading={"Website"} />
            </div>
            {data.contributions && data.contributions.length > 0 && (
              <div>
                <div className="text-xl font-semibold text-yellow-300 mb-2">My Contributions at the Company:</div>
                <ul className="list-disc ml-4 text-gray-300">
                  {data.contributions.map((cont, index) => {
                    return <li key={index}>{cont}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Page;
