import WikiMoviesDeviceFrame from "../assets/WikiMovies/DeviceFrame.png";
import SnuggsDeviceFrame from "../assets/SnuggsCommerce/DeviceFrame.png";
import BurgerBuilderLogo from "../assets/BurgerBuilder/BurgerBuilderLogo.webp";
import SlackLogo from "../assets/SlackClone/SlackLogo.webp";
import NatoursLogo from "../assets/Natours/NatoursLogo.webp";
import NexterLogo from "../assets/Nexter/NexterLogo.webp";
import TrilloLogo from "../assets/Trillo/TrilloLogo.webp";
import OldPortfolioLogo from "../assets/OldPortfolio/OldPortfolioLogo.webp";
import SpotifyDeviceFrame from "../assets/SpotifyMimic/DeviceFrame.png";

const Work: React.FC = () => {
  const workArray = [
    {
      name: "WikiMovies",
      colStyles: "lg:col-start-2",
      href: "/wiki-movies",
      id: 1,
      imgName: WikiMoviesDeviceFrame,
      description:
        "WikiMovies is a website about movies, tv shows and their cast using TMDb API.",
    },
    {
      name: "Burger Builder",
      colStyles: "md:col-span-1",
      href: "/burger-builder",
      id: 2,
      imgName: BurgerBuilderLogo,
      description:
        "Burger Builder is a website about builidng a burger with your own ingredient.",
    },
    {
      name: "Slack Clone",
      colStyles: "md:col-span-1",
      href: "/slack-clone",
      id: 3,
      imgName: SlackLogo,
      description:
        "Slack Clone is a simple chat app that is close to Slack, a messaging app for business that connects people to the information they need.",
    },
    {
      name: "Natours",
      colStyles: "md:col-span-1 lg:col-start-2",
      href: "/natours",
      id: 4,
      imgName: NatoursLogo,
      description: "Natours is a landing page advertising for a travel agency.",
    },
    {
      name: "Snuggs Commerce",
      colStyles: "row-start-4 md:row-start-3 lg:col-start-3 lg:row-start-2",
      href: "/snuggs-commerce",
      id: 5,
      imgName: SnuggsDeviceFrame,
      description:
        "Snuggs Clone is a website about an e-commerce business shop.",
    },
    {
      name: "Nexter",
      colStyles: "md:col-span-1",
      href: "/nexter",
      id: 6,
      imgName: NexterLogo,
      description: "Nexter is a landing page advertising for real estate.",
    },
    {
      name: "Trillo",
      colStyles: "md:col-span-1 lg:col-start-2",
      href: "/trillo",
      id: 7,
      imgName: TrilloLogo,
      description:
        "Trillo is a landing page advertising for a booking website.",
    },
    {
      name: "Old Portfolio",
      colStyles: "md:col-span-1",
      href: "/old-portfolio",
      id: 8,
      imgName: OldPortfolioLogo,
      description:
        "My old portfolio showcasing my work and information about myself.",
    },
    {
      name: "Spotify Mimic",
      colStyles: "row-start-7 md:row-start-5 lg:col-start-4 lg:row-start-3",
      href: "/spotify-mimic",
      id: 9,
      imgName: SpotifyDeviceFrame,
      description:
        "Spotify Mimic is about digital music website that gives you access to millions of songs and other content from creators all over the world.",
    },
  ];

  return (
    <section className="text-white pb-16 mt-16">
      <h1 className="flex justify-center text-[6vw] md:text-[4vw] lg:text-[3.5vw] font-bold pb-16 text-[#00b200]">
        My Work
      </h1>
      <div className="grid gap-10 grid-rows-1 grid-cols-2 lg:grid-cols-6 auto-rows-min">
        {workArray.map((workItem) => (
          <div
            key={workItem.id}
            className={
              `p-4 lg:p-0 rounded-3xl col-span-2 text-center lg:text-start ` +
              workItem.colStyles
            }
          >
            <div className="card card-compact bg-gradient-to-r from-[#16222e] to-[#131b26] shadow-card-box group h-full border-t-2 border-l-2 border-b-8 border-r-8 border-[#00b200] transition hover:border-black">
              <a href={workItem.href} className="cursor-green-pointer">
                <figure>
                  <img
                    className={
                      `w-full p-2 rounded-3xl ` +
                      (workItem.id % 2
                        ? `group-hover:rotate-[-13deg] group-hover:scale-150 transition ease-in-out`
                        : `group-hover:rotate-[13deg] group-hover:scale-150 transition ease-in-out`)
                    }
                    src={workItem.imgName}
                    alt={workItem.name + "Image"}
                  />
                </figure>
              </a>
              <div className="card-body group-hover:bg-[#00b200] rounded-b-lg">
                <h2 className="card-title text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#00b200] group-hover:text-black">
                  <a href={workItem.href} className="cursor-green-pointer">
                    {workItem.name}
                  </a>
                </h2>
                <p className="text-[4vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1vw] tracking-widest leading-snug group-hover:text-black">
                  {workItem.description}
                </p>
                <div className="flex justify-evenly flex-wrap content-center align gap-y-4">
                  <a
                    href={workItem.href}
                    className="leading-10 rounded-3xl relative text-center tracking-widest uppercase bg-[#00b200] px-4 lg:px-0 xl:px-4 group-hover:bg-black cursor-green-pointer"
                  >
                    Show Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
