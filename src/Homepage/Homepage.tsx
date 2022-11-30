import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "./Hero";
import Expertise from "./Expertise";
import Experience from "./Experience";
import Work from "./Work";
import Footer from "./Footer";
import ScrollButton from "../components/ScrollButton/ScrollButton";
interface SectionType {
  children: ReactNode;
  type: string;
  id: string;
}

function Section({ children, type, id }: SectionType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <motion.div
        id={id}
        initial={
          type === "left"
            ? { x: -50, opacity: 0 }
            : type === "right"
            ? { x: 50, opacity: 0 }
            : type === "up"
            ? { y: 50, opacity: 0 }
            : { x: 0, y: 0, opacity: 0 }
        }
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : "none"}
        transition={{ ease: "easeInOut", duration: 1.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

const Homepage: React.FC = () => {
  return (
    <div
      className="selection:bg-[#00b20036]"
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        backgroundImage:
          "linear-gradient(to right, #222430, #232430, #252430, #26252f, #27252f, #27252e, #26242e, #26242d, #24232c, #22222c, #20222b, #1e212a)",
      }}
    >
      <div id="home">
        <Hero />
      </div>
      <Section type="left" id="expertise">
        <Expertise />
      </Section>
      <Section type="right" id="experience">
        <Experience />
      </Section>
      <Section type="left" id="work">
        <Work />
      </Section>
      <Section type="up" id="contact">
        <Footer />
      </Section>
      <ScrollButton />
    </div>
  );
};

export default Homepage;
