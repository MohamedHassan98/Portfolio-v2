import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionType {
  children: ReactNode;
  type: string;
}

export default function AnimateDiv({ children, type }: SectionType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
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
  );
}
