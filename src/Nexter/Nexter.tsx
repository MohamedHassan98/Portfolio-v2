import ReactTooltip from "react-tooltip";

import Lottie from "lottie-react";
import githubButton from "../githubButton.json";
import liveButton from "../liveButton.json";
import NexterLogo from "../assets/Nexter/NexterLogo.webp";
import SassLogo from "../assets/ExpertiseLogos/SassLogo.webp";
import HTMLLogo from "../assets/ExpertiseLogos/HTMLLogo.webp";
import CSSLogo from "../assets/ExpertiseLogos/CSSLogo.webp";
import NexterImage from "../assets/Nexter/NexterImage.png";
import NexterImageMobile from "../assets/Nexter/NexterImageMobile.png";
import AnimateDiv from "../components/AnimateDiv/AnimateDiv";

const techArray = [
  {
    name: "SASS",
    image: SassLogo,
    id: 1,
  },
  {
    name: "HTML",
    image: HTMLLogo,
    id: 2,
  },
  {
    name: "CSS",
    image: CSSLogo,
    id: 3,
  },
];

const Nexter: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #222430, #232430, #252430, #26252f, #27252f, #27252e, #26242e, #26242d, #24232c, #22222c, #20222b, #1e212a)",
      }}
      className="text-white px-8 md:px-16 selection:bg-[#00b20036] pb-8 overflow-x-hidden"
    >
      <img
        src={NexterLogo}
        className="absolute top-[10%] lg:top-[40%] left-[35%] lg:left-[45%] opacity-10 pointer-events-none scale-150"
      />
      <AnimateDiv type="left">
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] text-[#00b200] pt-32 lg:pt-80 pb-20">
          Nexter
        </h1>
      </AnimateDiv>
      <div className="grid md:grid-cols-2 font-mono tracking-widest gap-14 text-[4vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw] mb-10 lg:mb-36">
        <AnimateDiv type="left">
          <p>
            Nexter is a project based on advertising for real estate, built
            using only HTML and CSS. The application is a one page application
            is Mobile Responsive. The Application was also built using SCSS and
            used it as a training to master css grid layout and advanced
            responsive design.
          </p>
          <p className="text-[#00b200] font-bold">
            Available Below: Github Repo, Live Demo, and Screenshots of the
            Project.
          </p>
          <div className="flex items-center gap-x-10">
            <a
              className="cursor-green-pointer"
              href="https://github.com/MohamedHassan98/Nexter"
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
              href="https://nexterlandingpage.netlify.app/"
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
          <img src={NexterImage} alt="Project Image" />
          <img src={NexterImageMobile} alt="Project Image" />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default Nexter;
