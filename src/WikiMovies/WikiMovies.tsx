import ReactTooltip from "react-tooltip";

import Lottie from "lottie-react";
import githubButton from "../githubButton.json";
import liveButton from "../liveButton.json";
import JavaScriptLogo from "../assets/ExpertiseLogos/JavaScriptLogo.webp";
import ReactLogo from "../assets/ExpertiseLogos/ReactLogo.webp";
import ReduxLogo from "../assets/ExpertiseLogos/ReduxLogo.webp";
import SemanticUILogo from "../assets/ExpertiseLogos/SemanticUILogo.webp";
import HTMLLogo from "../assets/ExpertiseLogos/HTMLLogo.webp";
import CSSLogo from "../assets/ExpertiseLogos/CSSLogo.webp";
import SigninWeb from "../assets/WikiMovies/SigninWeb.png";
import SignupWeb from "../assets/WikiMovies/SignupWeb.png";
import SigninMobile from "../assets/WikiMovies/SigninMobile.png";
import HomeWeb from "../assets/WikiMovies/HomeWeb.png";
import HomeMobile from "../assets/WikiMovies/HomeMobile.png";
import DiscoverMoviesWeb from "../assets/WikiMovies/DiscoverMoviesWeb.png";
import DiscoverMoviesMobile from "../assets/WikiMovies/DiscoverMoviesMobile.png";
import MovieDetailsWeb from "../assets/WikiMovies/MovieDetailsWeb.png";
import MovieDetailsMobile from "../assets/WikiMovies/MovieDetailsMobile.png";
import TvShowDetailsWeb from "../assets/WikiMovies/TvShowDetailsWeb.png";
import TvShowDetailsMobile from "../assets/WikiMovies/TvShowDetailsMobile.png";
import PopularPeopleWeb from "../assets/WikiMovies/PopularPeopleWeb.png";
import PersonDetailsWeb from "../assets/WikiMovies/PersonDetailsWeb.png";
import PersonDetailsMobile from "../assets/WikiMovies/PersonDetailsMobile.png";
import SearchResultWeb from "../assets/WikiMovies/SearchResultWeb.png";
import SearchResultMobile from "../assets/WikiMovies/SearchResultMobile.png";
import WikiMoviesFrame from "../assets/WikiMovies/DeviceFrame.png";
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

const WikiMovies: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #222430, #232430, #252430, #26252f, #27252f, #27252e, #26242e, #26242d, #24232c, #22222c, #20222b, #1e212a)",
      }}
      className="text-white px-8 md:px-16 selection:bg-[#00b20036] pb-8 overflow-x-hidden"
    >
      <img
        src={WikiMoviesFrame}
        className="absolute top-[20%] left-0 opacity-10 pointer-events-none"
      />
      <AnimateDiv type="left">
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] text-[#00b200] pt-32 lg:pt-80 pb-20">
          WikiMovies
        </h1>
      </AnimateDiv>
      <div className="grid md:grid-cols-2 font-mono tracking-widest gap-14 text-[4vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw] mb-10 lg:mb-36">
        <AnimateDiv type="left">
          <p>
            WikiMovies is a project based on movies, tv shows and cast, built
            using React, Redux and Semantic UI. The application is a single page
            application with proper components and is Mobile Responsive. The
            Application also used proper authentication (Redux) and form
            validation (Formik) and implements routing using React Router.
          </p>
          <p className="text-[#00b200] font-bold">
            Available Below: Github Repo, Live Demo, and Screenshots of the
            Project.
          </p>
          <div className="flex items-center gap-x-10">
            <a
              className="cursor-green-pointer"
              href="https://github.com/MohamedHassan98/WikiMovies"
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
              href="https://wikimovies2498.netlify.app/"
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
          <img src={SigninWeb} alt="Project Image" className="z-10" />
          <img src={SignupWeb} alt="Project Image" />
          <img src={SigninMobile} className="w-1/4" alt="Project Image" />
          <img src={HomeWeb} alt="Project Image" />
          <img src={HomeMobile} className="w-1/4" alt="Project Image" />
          <img src={DiscoverMoviesWeb} alt="Project Image" />
          <img
            src={DiscoverMoviesMobile}
            className="w-1/4"
            alt="Project Image"
          />
          <img src={MovieDetailsWeb} alt="Project Image" />
          <img src={MovieDetailsMobile} className="w-1/4" alt="Project Image" />
          <img src={TvShowDetailsWeb} alt="Project Image" />
          <img
            src={TvShowDetailsMobile}
            className="w-1/4"
            alt="Project Image"
          />
          <img src={PopularPeopleWeb} alt="Project Image" />
          <img src={PersonDetailsWeb} alt="Project Image" />
          <img
            src={PersonDetailsMobile}
            className="w-1/4"
            alt="Project Image"
          />
          <img src={SearchResultWeb} alt="Project Image" />
          <img src={SearchResultMobile} className="w-1/4" alt="Project Image" />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default WikiMovies;
