import ReactTooltip from "react-tooltip";
import Lottie from "lottie-react";
import githubButton from "../githubButton.json";
import liveButton from "../liveButton.json";
import SpotifyFrame from "../assets/SpotifyMimic/DeviceFrame.png";
import TypeScriptLogo from "../assets/ExpertiseLogos/TypeScriptLogo.webp";
import ReactLogo from "../assets/ExpertiseLogos/ReactLogo.webp";
import ReduxLogo from "../assets/ExpertiseLogos/ReduxLogo.webp";
import ChakraUILogo from "../assets/ExpertiseLogos/ChakraUILogo.webp";
import HTMLLogo from "../assets/ExpertiseLogos/HTMLLogo.webp";
import CSSLogo from "../assets/ExpertiseLogos/CSSLogo.webp";
import Firstpage from "../assets/SpotifyMimic/Firstpage.png";
import Playlistpage from "../assets/SpotifyMimic/Playlistpage.png";
import Albumpage from "../assets/SpotifyMimic/Albumpage.png";
import Profilepage from "../assets/SpotifyMimic/Profilepage.png";
import Artistpage from "../assets/SpotifyMimic/Artistpage.png";
import Searchpage from "../assets/SpotifyMimic/Searchpage.png";
import AnimateDiv from "../components/AnimateDiv/AnimateDiv";

const techArray = [
  {
    name: "TypeScript",
    image: TypeScriptLogo,
    id: 1,
  },
  {
    name: "React",
    image: ReactLogo,
    id: 2,
  },
  {
    name: "Redux",
    image: ReduxLogo,
    id: 3,
  },
  {
    name: "Chakra UI",
    image: ChakraUILogo,
    id: 4,
  },
  {
    name: "HTML",
    image: HTMLLogo,
    id: 5,
  },
  {
    name: "CSS",
    image: CSSLogo,
    id: 6,
  },
];

const SpotifyMimic: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #222430, #232430, #252430, #26252f, #27252f, #27252e, #26242e, #26242d, #24232c, #22222c, #20222b, #1e212a)",
      }}
      className="text-white px-8 md:px-16 selection:bg-[#00b20036] pb-8 overflow-x-hidden"
    >
      <img
        src={SpotifyFrame}
        className="absolute top-[20%] left-0 opacity-10 pointer-events-none"
      />
      <AnimateDiv type="left">
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] text-[#00b200] pt-32 lg:pt-80 pb-20">
          Spotify Mimic
        </h1>
      </AnimateDiv>
      <div className="grid md:grid-cols-2 font-mono tracking-widest gap-14 text-[4vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw] mb-10 lg:mb-36">
        <AnimateDiv type="left">
          <p>
            Spotify Mimic is a project based on being a website that is close to
            Spotify, built using Vite, TypeScript, HTML, CSS, Chakra UI, React,
            and Redux Toolkit. The application is a single page application and
            is Mobile Responsive. The application also implements routing using
            React Router.
          </p>
          <p className="text-[#00b200] font-bold">
            Available Below: Github Repo, Live Demo, and Screenshots of the
            Project.
          </p>
          <p className="text-red-600 font-bold">
            Please read the note section of the README file on Github before
            using the Live Demo.
          </p>
          <div className="flex items-center gap-x-10">
            <a
              className="cursor-green-pointer"
              href="https://github.com/MohamedHassan98/Spotify-Mimic"
              target="_blank"
            >
              <Lottie
                className="w-20"
                animationData={githubButton}
                loop={true}
              />
            </a>
            <a
              className="cursor-green-pointer"
              href="https://mimic-spotify.netlify.app/"
              target="_blank"
            >
              <Lottie className="w-20" animationData={liveButton} loop={true} />
            </a>
          </div>
        </AnimateDiv>
        <AnimateDiv type="right">
          <div className="flex flex-row flex-wrap gap-8 md:justify-center items-center">
            Technologies Used:
            {techArray.map((techItem) => (
              <div
                key={techItem.id}
                data-tip={techItem.name}
                className="cursor-green-pointer"
              >
                <img
                  alt={techItem.name}
                  className="h-10 hover:scale-150 transition-all"
                  src={techItem.image}
                />
                <ReactTooltip place="top" type="dark" effect="solid" />
              </div>
            ))}
          </div>
        </AnimateDiv>
      </div>
      <AnimateDiv type="up">
        <div className="flex flex-col gap-y-10 items-center mb-8">
          <img src={Firstpage} alt="Project Image" className="z-10" />
          <img src={Playlistpage} alt="Project Image" />
          <img src={Albumpage} alt="Project Image" />
          <img src={Profilepage} alt="Project Image" />
          <img src={Artistpage} alt="Project Image" />
          <img src={Searchpage} alt="Project Image" />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default SpotifyMimic;
