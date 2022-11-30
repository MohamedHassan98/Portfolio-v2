const Footer: React.FC = () => {
  return (
    <footer className="bg-black flex-wrap p-2 lg:p-8 flex flex-row justify-between text-white">
      <p className="flex flex-col gap-8 w-full md:w-1/2 pb-10 lg:pb-0">
        <span className="text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw]">
          Available for hiring opportunities
        </span>
        <span className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.25vw]">
          Have an exciting project you need help with? Send me an{" "}
          <a
            href="mailto:mohamed.hassan2498@gmail.com"
            className="cursor-green-pointer italic bg-no-repeat bg-size-100%-40% bg-pos-0-90% hover:not-italic"
            style={{
              backgroundImage:
                "linear-gradient(65deg,#df058d 0%,#df058d 100%,rgba(255, 209, 0, 0) 100%)",
            }}
          >
            Email
          </a>{" "}
          or contact me via{" "}
          <span className="">
            <a
              href="https://www.linkedin.com/in/mohamed-hassan98/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-green-pointer italic bg-no-repeat bg-size-100%-40% bg-pos-0-90% hover:not-italic"
              style={{
                backgroundImage:
                  "linear-gradient(65deg, #2C49D8 0%, #2C49D8 100%, rgba(255, 209, 0, 0) 100%)",
              }}
            >
              LinkedIn
            </a>
            !
          </span>
        </span>
      </p>
      <ul className="flex gap-4 flex-col text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.25vw]">
        <li>
          <a
            href="https://github.com/MohamedHassan98"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-green-pointer italic hover:not-italic"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="mailto:mohamed.hassan2498@gmail.com"
            className="cursor-green-pointer italic hover:not-italic"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="tel:+2 01281468213"
            className="cursor-green-pointer italic hover:not-italic"
          >
            Phone Number
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohamed-hassan98/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-green-pointer italic hover:not-italic"
          >
            LinkedIn
          </a>
        </li>
        <li className="text-[3vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw]">
          Copyright © {new Date().getFullYear()} Mohamed Hassan <br /> All
          rights reserved.
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
