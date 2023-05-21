import React, { useState } from 'react';
import "./header.scss";
import { Link } from 'react-scroll';

const Header = () => {
    const [changeColor, setChangeColor] = useState("");
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 0) {
            setChangeColor("scroll-color");
        } else {
            setChangeColor("");
        }
    });

    return (
        <header className={`header ${changeColor}`}>
            <div className="shell">
                <div className="header__inner">
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="intro" smooth={true} duration={500}>Intro</Link>
                            </li>

                            <li>
                                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                            </li>

                            <li>
                                <Link to="about" smooth={true} duration={500}>About Me</Link>
                            </li>

                            <li>
                                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header