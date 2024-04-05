import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const AnimatedTextH1 = (props) => {
  const { children, className } = props;

  return (
    <div className="overflow-hidden w-full">
      <motion.h1
        className={`inline-block font-bold text-white items-center ${className}`}
        variants={quote}
      >
        {children.split(" ").map((char, index) => (
          <motion.span
            className="inline-block"
            key={char + "-" + index}
            variants={singleWord}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.1,
            }}
          >
            {char}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedTextH1;
