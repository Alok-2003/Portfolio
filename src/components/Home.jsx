import React from 'react'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'

const Home = () => {

    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,

            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,

            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1  {...animation.h1}>
                        Hi, I Am <br /> Abhishek Singh
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["A Developer", "A Designer", "A Creator"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                    />
                    <div>
                        <a href="mailto:official.6packprogrammer@gmail.com">Hire Me</a>
                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                    <article>
                        <p>
                            +
                            {ratio < 2 && (
                                <motion.span
                                    whileInView={animationClientsCount}
                                    ref={clientCount}
                                ></motion.span>
                            )}
                        </p>
                        <span>Clients Worldwide</span>
                    </article>
                </div>
            </section>
            <section></section>
        </div>
    )
}

export default Home
