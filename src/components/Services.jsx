import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { IoLogoDesignernews } from "react-icons/io5";
import { SiCodingninjas } from "react-icons/si";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <div id="services">
      <h2>TechStack</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3><FaComputer /></h3>
          <h2>HTML,CSS,SASS ,TAILWIND,<br/>JAVASCRIPT,REACT,TYPESCRIPT</h2>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <IoLogoDesignernews />
          <span>Figma</span>         
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <SiCodingninjas />
          <span>C++ , Python</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <GrDatabase />
          <span>Express, Node.js, MongoDb, Firebase, MySql, Postman </span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;