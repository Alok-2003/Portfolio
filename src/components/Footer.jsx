import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://avatars.githubusercontent.com/u/123951091?v=4"}
                    alt="Founder"
                />

                <h2>Alok kumar yadav</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
                <h2>शक्ति सर्व प्रिय</h2>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://youtube.com" target={"blank"}>
                        <AiFillYoutube />
                    </a>
                    <a href="https://instagram.com/yadavalok2830" target={"blank"}>
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/Alok-2003" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;