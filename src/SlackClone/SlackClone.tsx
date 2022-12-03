import ReactTooltip from "react-tooltip";

import Lottie from "lottie-react";
import githubButton from "../githubButton.json";
import SlackLogo from "../assets/SlackClone/SlackLogo.webp";
import JavaScriptLogo from "../assets/ExpertiseLogos/JavaScriptLogo.webp";
import ReactLogo from "../assets/ExpertiseLogos/ReactLogo.webp";
import ReduxLogo from "../assets/ExpertiseLogos/ReduxLogo.webp";
import SemanticUILogo from "../assets/ExpertiseLogos/SemanticUILogo.webp";
import HTMLLogo from "../assets/ExpertiseLogos/HTMLLogo.webp";
import CSSLogo from "../assets/ExpertiseLogos/CSSLogo.webp";
import SlackLogin from "../assets/SlackClone/SlackLogin.png";
import SlackSignup from "../assets/SlackClone/SlackSignup.png";
import SlackFirstChannelColor from "../assets/SlackClone/SlackFirstChannelColor.png";
import SlackSecondChannelColor from "../assets/SlackClone/SlackSecondChannelColor.png";
import AnimateDiv from "../components/AnimateDiv/AnimateDiv";

const techArray = [
  {
    name: "JavaScript",
    image: JavaScriptLogo,
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
    name: "Semantic UI",
    image: SemanticUILogo,
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

const SlackClone: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #222430, #232430, #252430, #26252f, #27252f, #27252e, #26242e, #26242d, #24232c, #22222c, #20222b, #1e212a)",
      }}
      className="text-white px-8 md:px-16 selection:bg-[#00b20036] pb-8"
    >
      <img
        src={SlackLogo}
        className="absolute top-[20%] left-0 xl:left-[6%] opacity-10 pointer-events-none"
      />
      <AnimateDiv type="left">
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] text-[#00b200] pt-32 lg:pt-80 pb-20">
          Slack Clone
        </h1>
      </AnimateDiv>
      <div className="grid md:grid-cols-2 font-['cursive'] tracking-widest gap-14 text-[4vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw] mb-10 lg:mb-36">
        <AnimateDiv type="left">
          <p>
            Slack is a collaboration hub that can replace email to help you and
            your team work together seamlessly. It’s designed to support the way
            people naturally work together, so you can collaborate with people
            online as efficiently as you do face-to-face, built using HTML, CSS,
            Semantic UI, React, Redux. The application uses all the new features
            introduced in ES6. The Application also used proper authentication
            and from validation and implements routing uses React Router.
          </p>
          <p className="text-[#00b200] font-bold">
            Available Below: Github Repo, and Screenshots of the Project.
          </p>
          <a
            className="cursor-green-pointer inline-block"
            href="https://github.com/MohamedHassan98/slack-clone-react"
            target="_blank"
          >
            <Lottie className="w-20" animationData={githubButton} loop={true} />
          </a>
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
          <img src={SlackLogin} alt="Project Image" />
          <img src={SlackSignup} alt="Project Image" />
          <img src={SlackFirstChannelColor} alt="Project Image" />
          <img src={SlackSecondChannelColor} alt="Project Image" />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default SlackClone;
