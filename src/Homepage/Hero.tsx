import Lottie from "lottie-react";
import { Link } from "react-scroll";
import scrollDownAnimation from "../scrollDown.json";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="absolute left-[58%] top-[29%] lg:left-[54%] lg:top-[33%] h-12 w-12 rounded-[50%] bg-white animate-[moveLeft_2s_ease-in-out_infinite] shadow-circle-box" />
      <div className="flex justify-center items-center flex-col text-white h-screen bg-cover bg-center bg-no-repeat bg-local bg-hero-image pt-24">
        <h1 className="font-bold text-[7vw] text-[#00b200]">MOHAMED HASSAN</h1>
        <h2 className="text-[3vw] md:text-[2vw] font-semibold tracking-wider text-[#00b200]">
          SOFTWARE ENGINEER & FRONT END DEVELOPER.
        </h2>
        <div className="relative top-32 cursor-green-pointer">
          <Link smooth to="expertise">
            <Lottie animationData={scrollDownAnimation} loop={true} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
