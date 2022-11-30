import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const homeNavbar = [
    {
      name: "home",
      content: "// home",
      contentNumber: "01",
      id: 1,
    },
    {
      name: "expertise",
      content: "// expertise",
      contentNumber: "02",
      id: 2,
    },
    {
      name: "experience",
      content: "// experience",
      contentNumber: "03",
      id: 3,
    },
    {
      name: "work",
      content: "// work",
      contentNumber: "04",
      id: 4,
    },
    {
      name: "contact",
      content: "// contact",
      contentNumber: "05",
      id: 5,
    },
  ];

  const projectsNavbar = [
    {
      name: "WikiMovies",
      contentNumber: "01",
      id: 1,
      href: "/wiki-movies",
    },
    {
      name: "Burger Builder",
      contentNumber: "02",
      id: 2,
      href: "/burger-builder",
    },
    {
      name: "Slack Clone",
      contentNumber: "03",
      id: 3,
      href: "/slack-clone",
    },
    {
      name: "Natours",
      contentNumber: "04",
      id: 4,
      href: "/natours",
    },
    {
      name: "Snuggs Commerce",
      contentNumber: "05",
      id: 5,
      href: "/snuggs-commerce",
    },
    {
      name: "Nexter",
      contentNumber: "06",
      id: 6,
      href: "/nexter",
    },
    {
      name: "Trillo",
      contentNumber: "07",
      id: 7,
      href: "/trillo",
    },
    {
      name: "Old Portfolio",
      contentNumber: "08",
      id: 8,
      href: "/old-portfolio",
    },
    {
      name: "Spotify Mimic",
      contentNumber: "09",
      id: 9,
      href: "/spotify-mimic",
    },
  ];

  return (
    <section className="navbar bg-[#00b200]">
      <div className="navbar-start w-1/4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow rounded-box w-52 tracking-widest gap-3 font-semibold bg-[#00b200] text-black"
          >
            {window.location.pathname === "/" ? (
              <>
                {homeNavbar.map((homeItem) => (
                  <li key={homeItem.id}>
                    <Link activeClass="active" smooth spy to={homeItem.name}>
                      {homeItem.content}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                {projectsNavbar.map((projectItem) => (
                  <li key={projectItem.id}>
                    <a href={projectItem.href}>{projectItem.name}</a>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost bg-transparent normal-case text-xl sm:text-2xl lg:mt-10 cursor-green-pointer text-black"
        >
          MOHAMED HASSAN
        </a>
      </div>
      <div className="navbar-start w-3/4 hidden lg:flex justify-center">
        <ul className="menu menu-horizontal mt-10 tracking-widest gap-3 font-semibold bg-transparent text-xl text-black">
          {window.location.pathname === "/" ? (
            <>
              {homeNavbar.map((homeItem) => (
                <li key={homeItem.id}>
                  <Link
                    activeClass="active"
                    smooth
                    to={homeItem.name}
                    className={`cursor-green-pointer`}
                  >
                    {homeItem.content}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              {projectsNavbar.map((projectItem) => (
                <li key={projectItem.id}>
                  <a href={projectItem.href} className={`cursor-green-pointer`}>
                    {projectItem.name}
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
