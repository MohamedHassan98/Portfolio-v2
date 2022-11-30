import ReactTooltip from "react-tooltip";

import Lottie from "lottie-react";
import githubButton from "../githubButton.json";
import BurgerBuilderLogo from "../assets/BurgerBuilder/BurgerBuilderLogo.webp";
import JavaScriptLogo from "../assets/ExpertiseLogos/JavaScriptLogo.webp";
import ReactLogo from "../assets/ExpertiseLogos/ReactLogo.webp";
import ReduxLogo from "../assets/ExpertiseLogos/ReduxLogo.webp";
import HTMLLogo from "../assets/ExpertiseLogos/HTMLLogo.webp";
import CSSLogo from "../assets/ExpertiseLogos/CSSLogo.webp";
import FirstPicture from "../assets/BurgerBuilder/FirstPicture.jpg";
import FirstPictureMobile from "../assets/BurgerBuilder/FirstPictureMobile.jpg";
import SecondPicture from "../assets/BurgerBuilder/SecondPicture.png";
import ThirdPicture from "../assets/BurgerBuilder/ThirdPicture.png";
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
    name: "HTML",
    image: HTMLLogo,
    id: 4,
  },
  {
    name: "CSS",
    image: CSSLogo,
    id: 5,
  },
];

const BurgerBuilder: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #222430, #232430, #252430, #26252f, #27252f, #27252e, #26242e, #26242d, #24232c, #22222c, #20222b, #1e212a)",
      }}
      className="text-white px-8 md:px-16 selection:bg-[#00b20036] pb-8"
    >
      <img
        src={BurgerBuilderLogo}
        className="absolute top-[10%] left-0 xl:left-[20%] opacity-10 pointer-events-none"
      />
      <AnimateDiv type="left">
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] text-[#00b200] pt-32 lg:pt-80 pb-20">
          Burger Builder
        </h1>
      </AnimateDiv>
      <div className="grid md:grid-cols-2 font-sans gap-14 text-[4vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw] mb-10 lg:mb-36">
        <AnimateDiv type="left">
          <p>
            Burger Builder is a project based on Maximilian Schwarzmüller's
            Udemy course, built using React and Redux. The application uses all
            the new features introduced in ES6. The application is a single page
            application with proper components and is Mobile Responsive. The
            Application also used proper authentication and form validation and
            implements routing uses React Router.
          </p>
          <p className="text-[#00b200] font-bold">
            Available Below: Github Repo, and Screenshots of the Project.
          </p>
          <a
            className="cursor-green-pointer inline-block"
            href="https://github.com/MohamedHassan98/React-Burger-Project"
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
          <img src={FirstPicture} alt="Project Image" />
          <img src={FirstPictureMobile} alt="Project Image" />
          <img src={SecondPicture} alt="Project Image" />
          <img src={ThirdPicture} alt="Project Image" />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default BurgerBuilder;
