import React from 'react';
import "./home.scss";
import { Link } from 'react-router-dom';
import SVGBackground from '../components/SVGBackground/SVGBackground';

const Home = () => {
  return (
    <>
      <section className="hero">
        <SVGBackground />

        <div className="shell">
          <div className="hero__inner">
            <div className="hero__heading">
              <h1>Hi, I'm Mehmed,</h1>
              <h1>a dedicated Web Developer</h1>
            </div>

            <div className="hero__actions">
              <Link className='btn btn--red'>My Projects</Link>
            </div>
          </div>
        </div>
      </section>


      <section className="projects">
      </section>
    </>
  )
}

export default Home