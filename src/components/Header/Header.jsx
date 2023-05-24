import React from 'react';
import "./header.scss";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Header = () => {

    return (
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="header">
            <div className="shell">
                <div className="header__inner">
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="intro" spy={true} smooth={true} offset={-50} duration={700}>Intro</Link>
                            </li>

                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-50} duration={700}>About Me</Link>
                            </li>
                            
                            <li>
                                <Link to="projects" spy={true} smooth={true} offset={-50} duration={700}>Projects</Link>
                            </li>


                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={-50} duration={700}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.header>
    )
}

export default Header