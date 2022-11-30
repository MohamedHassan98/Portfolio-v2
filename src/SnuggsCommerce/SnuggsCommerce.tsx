import ReactTooltip from "react-tooltip";
import Lottie from "lottie-react";
import githubButton from "../githubButton.json";
import liveButton from "../liveButton.json";
import SnuggsFrame from "../assets/SnuggsCommerce/DeviceFrame.png";
import JavaScriptLogo from "../assets/ExpertiseLogos/JavaScriptLogo.webp";
import ReactLogo from "../assets/ExpertiseLogos/ReactLogo.webp";
import ReduxLogo from "../assets/ExpertiseLogos/ReduxLogo.webp";
import AntDesignLogo from "../assets/ExpertiseLogos/AntDesignLogo.webp";
import HTMLLogo from "../assets/ExpertiseLogos/HTMLLogo.webp";
import CSSLogo from "../assets/ExpertiseLogos/CSSLogo.webp";
import Firstpage from "../assets/SnuggsCommerce/Firstpage.png";
import CategoryWeb from "../assets/SnuggsCommerce/CategoryWeb.png";
import ProductWeb from "../assets/SnuggsCommerce/ProductWeb.png";
import CartEmptyWeb from "../assets/SnuggsCommerce/CartEmptyWeb.png";
import CartWeb from "../assets/SnuggsCommerce/CartWeb.png";
import ContactUsWeb from "../assets/SnuggsCommerce/ContactUsWeb.png";
import ReturnWeb from "../assets/SnuggsCommerce/ReturnWeb.png";
import OurStoryWeb from "../assets/SnuggsCommerce/OurStoryWeb.png";
import FAQsWeb from "../assets/SnuggsCommerce/FAQsWeb.png";
import CreateAccountWeb from "../assets/SnuggsCommerce/CreateAccountWeb.png";
import LoginWeb from "../assets/SnuggsCommerce/LoginWeb.png";
import PreviousPurchasesWeb from "../assets/SnuggsCommerce/PreviousPurchasesWeb.png";
import HomePageMobile from "../assets/SnuggsCommerce/HomePageMobile.png";
import CategoryMobile from "../assets/SnuggsCommerce/CategoryMobile.png";
import ProductMobile from "../assets/SnuggsCommerce/ProductMobile.png";
import CartEmptyMobile from "../assets/SnuggsCommerce/CartEmptyMobile.png";
import CartMobile from "../assets/SnuggsCommerce/CartMobile.png";
import ContactUsMobile from "../assets/SnuggsCommerce/ContactUsMobile.png";
import ReturnMobile from "../assets/SnuggsCommerce/ReturnMobile.png";
import OurStoryMobile from "../assets/SnuggsCommerce/OurStoryMobile.png";
import FAQsMobile from "../assets/SnuggsCommerce/FAQsMobile.png";
import CreateAccountMobile from "../assets/SnuggsCommerce/CreateAccountMobile.png";
import LoginMobile from "../assets/SnuggsCommerce/LoginMobile.png";
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
    name: "Ant Design",
    image: AntDesignLogo,
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

const SnuggsCommerce: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #222430, #232430, #252430, #26252f, #27252f, #27252e, #26242e, #26242d, #24232c, #22222c, #20222b, #1e212a)",
      }}
      className="text-white px-8 md:px-16 selection:bg-[#00b20036] pb-8"
    >
      <img
        src={SnuggsFrame}
        className="absolute top-[20%] left-0 opacity-10 pointer-events-none"
      />
      <AnimateDiv type="left">
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] text-[#00b200] pt-32 lg:pt-80 pb-20">
          Snuggs Commerce
        </h1>
      </AnimateDiv>
      <div className="grid md:grid-cols-2 font-sans gap-14 text-[4vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw] mb-10 lg:mb-36">
        <AnimateDiv type="left">
          <p>
            Snuggs Clone is a project based on being an online shop, built using
            HTML, CSS, Ant Design, React and Redux. The application is a single
            page application and is Mobile Responsive. The application also used
            proper authentication (Redux) and form validation (Formik) and
            implements routing using React Router.
          </p>
          <p className="text-[#00b200] font-bold">
            Available Below: Github Repo, Live Demo, and Screenshots of the
            Project.
          </p>
          <div className="flex items-center gap-x-10">
            <a
              className="cursor-green-pointer"
              href="https://github.com/MohamedHassan98/E-Commerce"
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
              href="https://snuggs-commerce.netlify.app/"
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
          <img src={Firstpage} alt="Project Image" />
          <img src={CategoryWeb} alt="Project Image" />
          <img src={ProductWeb} alt="Project Image" />
          <img src={CartEmptyWeb} alt="Project Image" />
          <img src={CartWeb} alt="Project Image" />
          <img src={ContactUsWeb} alt="Project Image" />
          <img src={ReturnWeb} alt="Project Image" />
          <img src={OurStoryWeb} alt="Project Image" />
          <img src={FAQsWeb} alt="Project Image" />
          <img src={CreateAccountWeb} alt="Project Image" />
          <img src={LoginWeb} alt="Project Image" />
          <img src={PreviousPurchasesWeb} alt="Project Image" />
          <img src={HomePageMobile} alt="Project Image" />
          <img src={CategoryMobile} alt="Project Image" />
          <img src={ProductMobile} alt="Project Image" />
          <img src={CartEmptyMobile} alt="Project Image" />
          <img src={CartMobile} alt="Project Image" />
          <img src={ContactUsMobile} alt="Project Image" />
          <img src={ReturnMobile} alt="Project Image" />
          <img src={OurStoryMobile} alt="Project Image" />
          <img src={FAQsMobile} alt="Project Image" />
          <img src={CreateAccountMobile} alt="Project Image" />
          <img src={CartEmptyMobile} alt="Project Image" />
          <img src={LoginMobile} alt="Project Image" />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default SnuggsCommerce;
