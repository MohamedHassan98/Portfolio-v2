import ReactTooltip from "react-tooltip";
import PostmanLogo from "../assets/ExpertiseLogos/PostmanLogo.webp";
import TypeScriptLogo from "../assets/ExpertiseLogos/TypeScriptLogo.webp";
import SASSLogo from "../assets/ExpertiseLogos/SassLogo.webp";
import GraphQLLogo from "../assets/ExpertiseLogos/GraphQLLogo.webp";
import GatsbyJS from "../assets/ExpertiseLogos/GatsbyJSLogo.webp";
import CSSLogo from "../assets/ExpertiseLogos/CSSLogo.webp";
import ChakraUILogo from "../assets/ExpertiseLogos/ChakraUILogo.webp";
import HTMLLogo from "../assets/ExpertiseLogos/HTMLLogo.webp";
import GitLogo from "../assets/ExpertiseLogos/GitLogo.webp";
import ReactLogo from "../assets/ExpertiseLogos/ReactLogo.webp";
import JavaScriptLogo from "../assets/ExpertiseLogos/JavaScriptLogo.webp";
import ReduxLogo from "../assets/ExpertiseLogos/ReduxLogo.webp";
import TailwindLogo from "../assets/ExpertiseLogos/TailwindLogo.webp";
import AntDesignLogo from "../assets/ExpertiseLogos/AntDesignLogo.webp";
import SemanticUILogo from "../assets/ExpertiseLogos/SemanticUILogo.webp";
import VSCodeLogo from "../assets/ExpertiseLogos/VSCodeLogo.webp";
import HTMLCode from "../assets/HTMLCode.webp";

const Expertise: React.FC = () => {
  const techsArray = [
    {
      src: HTMLLogo,
      name: "HTML",
    },
    {
      src: CSSLogo,
      name: "CSS",
    },
    {
      src: JavaScriptLogo,
      name: "JavaScript",
    },
    ,
    {
      src: TypeScriptLogo,
      name: "TypeScript",
    },
    ,
    {
      src: SASSLogo,
      name: "SASS",
    },
    {
      src: GitLogo,
      name: "Git",
    },
    {
      src: ReactLogo,
      name: "React",
    },
    {
      src: ReduxLogo,
      name: "Redux",
    },

    {
      src: GraphQLLogo,
      name: "GraphQL",
    },

    {
      src: GatsbyJS,
      name: "Gatsby",
    },
    {
      src: TailwindLogo,
      name: "Tailwind CSS",
    },
    {
      src: ChakraUILogo,
      name: "Chakra UI",
    },
    {
      src: AntDesignLogo,
      name: "Ant Design",
    },
    { src: SemanticUILogo, name: "Semantic UI" },
    {
      src: VSCodeLogo,
      name: "VSCode",
    },
    {
      src: PostmanLogo,
      name: "Postman",
    },
  ];

  return (
    <section className="text-white">
      <h1 className="flex justify-center text-[6vw] md:text-[4vw] lg:text-[3.5vw] font-bold pb-3 lg:pb-16 mt-32 text-[#00b200]">
        My Expertise
      </h1>
      <div className="grid justify-center content-center p-10 lg:p-0 gap-8 grid-rows-2 lg:grid-cols-4">
        <div className="p-4 lg:p-10 border-t-2 border-l-2 border-b-8 border-r-8 border-[#00b200] rounded-3xl col-span-1 lg:col-start-2 text-center lg:text-start">
          <h2 className="text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] pb-8 font-semibold">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(65deg,#df058d 0%,#df058d 100%,rgba(255, 209, 0, 0) 100%)",
              }}
              className="bg-no-repeat bg-size-100%-40% bg-pos-0-90%"
            >
              Software
            </span>
            <br /> Development
          </h2>
          <h3 className="text-[4vw] md:text-[2.8vw] lg:text-[1.5vw] xl:text-[1.25vw]">
            Experienced in both functional and OOP: C++, Python, JavaScript,
            TypeScript.
          </h3>
        </div>
        <div className="p-4 lg:p-10 border-t-2 border-l-2 border-b-8 border-r-8 border-[#00b200] rounded-3xl col-span-1 lg:col-start-3 text-center lg:text-start">
          <h2 className="text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] pb-8 font-semibold">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(65deg, #2C49D8 0%, #2C49D8 100%, rgba(255, 209, 0, 0) 100%)",
              }}
              className="bg-no-repeat bg-size-100%-40% bg-pos-0-90%"
            >
              Frontend
            </span>
            <br /> Development
          </h2>
          <div>
            <h3 className="text-[4vw] md:text-[2.8vw] lg:text-[1.5vw] xl:text-[1.25vw]">
              Passionate about creating websites. Building them using HTML, CSS,
              JS, TS, and React.
            </h3>
          </div>
        </div>
        <div className="grid p-4 lg:p-10 border-t-2 border-l-2 border-b-8 border-r-8 border-[#00b200] rounded-3xl col-span-1 lg:col-start-2 lg:col-span-2 text-center lg:text-start">
          <h2 className="text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] pb-8 font-semibold">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(65deg, #FF6B2B 0%, #FF6B2B 100%, rgba(255, 209, 0, 0) 100%)",
              }}
              className="bg-no-repeat bg-size-100%-40% bg-pos-0-90%"
            >
              All Techs & Tools
            </span>
          </h2>
          <div className="flex flex-wrap gap-6 justify-center content-center">
            {techsArray.map((tech) => (
              <div
                data-tip={tech?.name}
                key={tech?.name}
                className="cursor-green-pointer"
              >
                <img
                  alt={tech?.name}
                  className="h-10 hover:scale-150 transition-all"
                  src={tech?.src}
                />
                <ReactTooltip place="top" type="dark" effect="solid" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="opacity-30 bg-contain bg-no-repeat bg-pos-center-0vh h-44 sm:h-96"
        style={{
          backgroundImage: `url(${HTMLCode})`,
        }}
      />
    </section>
  );
};

export default Expertise;
