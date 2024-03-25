import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {  BsChevronDown } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import me from "../assets/img.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 3, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed(1)),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Alok kumar yadav
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A-Developer", "A-Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:alok953280@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <ImArrowUpRight2 />
            </a>
          </div>

          {/* <article>
            <p>
              +
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
              <FaPlus />
                {/* {ratio < 2 && ( */}
                  <motion.span
                    ref={clientCount}
                    whileInView={animationClientsCount}
                  >
                  </motion.span>
                {/* )} */}
              </p>
              <span>Worldwide Client</span>
            </article>

            <article data-special>
              <p>
              <MdTaskAlt />
                {/* {ratio < 2 && ( */}
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                  </motion.span>
                {/* )} */}
              </p>
              <span>Projects Done</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Alok Image" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;