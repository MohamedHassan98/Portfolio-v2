import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import scrollUp from "../../scrollUp.json";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("scrolling down");
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const threshold = 300;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDirection(
        scrollY > lastScrollY ? "scrolling down" : "scrolling up"
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
    const onScrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScrollHandler);
    return () => window.removeEventListener("scroll", onScrollHandler);
  }, [scrollDirection]);

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed w-20 h-20 right-2 bottom-2 z-10 cursor-green-pointer ${
        visible && scrollDirection === "scrolling up" ? "inline" : "hidden"
      } ${visible ? "lg:inline" : "lg:hidden"}`}
    >
      <Lottie animationData={scrollUp} loop={true} />
    </button>
  );
};

export default ScrollButton;
