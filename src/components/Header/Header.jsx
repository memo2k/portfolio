import React from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
        <div className="shell">
            <div className="header__inner">
                <nav className="header__nav">
                    <ul>
                        <li>
                            <Link>Intro</Link>
                        </li>
                        
                        <li>
                            <Link>Projects</Link>
                        </li>

                        <li>
                            <Link>About Me</Link>
                        </li>

                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header