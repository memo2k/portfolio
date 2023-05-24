import React from 'react';
import "./home.scss";
import { Link } from 'react-scroll';

import CardProject from '../components/CardProject.jsx/CardProject';
import Reveal from '../components/Reveal/Reveal';

const projectProps = [
  {
    image: require('../assets/images/pinpics.jpg'),
    title: "PinPics",
    description: "A wallpaper website that allows users to create an account, view, like and create posts. The website also provides an interface for searching. It is built using ReactJS and Firebase for the back-end.",
    tools: [require('../assets/images/reactjs.png'), require("../assets/images/firebase.png")],
    code: "https://github.com/memo2k/PinPics",
    liveDemo: "https://pinpics-firebase.web.app/"
  },
  {
    image: require('../assets/images/weatherapp.jpg'),
    title: "Weather App",
    description: "A Weather website that allows user to search the weather details for any city. It is built with ReactJS and OpenWeatherMap API.",
    tools: [require('../assets/images/reactjs.png'), require("../assets/images/sass.png"), require("../assets/images/openweathermap.png")],
    code: "https://github.com/memo2k/react-weather-app",
    liveDemo: "https://lucky-empanada-cb76a7.netlify.app/"
  },
  {
    image: require('../assets/images/homerenovator.jpg'),
    title: "Home Renovator",
    description: "A website for a home renovation company built with ReactJS and SCSS",
    tools: [require('../assets/images/reactjs.png'), require("../assets/images/sass.png")],
    code: "https://github.com/memo2k/home-renovator",
    liveDemo: "https://home-renovator.netlify.app/"
  }
]

const Home = () => {
  return (
    <>
      <section name="intro" className="hero">
        <div className="shell">
          <Reveal>
            <div className="hero__inner">
              <div className="hero__details">
                <div className="hero__heading">
                  <h1>Hi, my name is <span>Mehmed</span>,</h1>
                  <h1>a dedicated web developer</h1>
                </div>

                <div className="hero__description">
                  <p>I am a web developer specializing in HTML, CSS, and React.
                    I bring a strong foundation in creating clean and accessible code,
                    building responsive designs, and crafting dynamic user interfaces.</p>
                </div>

                <div className="hero__actions">
                  <Link to="projects" spy={true} smooth={true} offset={-50} duration={700} className='btn btn--green'>My Projects</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section name="about" className="about">
        <div className="shell">
          <Reveal>
            <div className="about__inner">
              <div className="about__heading">
                <h1>About Me</h1>
              </div>

              <div className="about__description">
                <p>Hello, I am Mehmed Mehmed and I am a web developer
                  dedicated to creating awesome websites and applications. I specialize
                  in crafting beautiful and functional websites that engage users.
                  I strive to stay up-to-date with the latest industry trends,
                  I'm eager to contribute my skills and collaborate with teams to create
                  seamless web experiences.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section name="projects" className="projects">
        <div className="shell">
          <div className="projects__inner">
            <div className="projects__subheading">
              <h2>Portfolio</h2>
            </div>

            <div className="projects__heading">
              <h1>My Recent Work</h1>
            </div>

            <div className="projects__work">
              {projectProps.map((item, index) => {
                return <CardProject data={item} key={index} />
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home