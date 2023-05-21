import React from 'react';
import "./home.scss";
import { Link, Element } from 'react-scroll';

import pinpics from "../assets/images/pinpics.png";
import weatherApp from "../assets/images/weatherapp.png";
import homeRenovator from "../assets/images/homerenovator.png";
import ReactJSLogo from "../assets/images/reactjs.png";
import openWeatherLogo from "../assets/images/openweather.png";
import FirebaseLogo from "../assets/images/firebase.png";
import SassLogo from "../assets/images/sass.png";

import CardProject from '../components/CardProject.jsx/CardProject';

const projectProps = [
  {
    image: pinpics,
    title: "PinPics",
    description: "A wallpaper website that allows users to create an account, view, like and create posts. The website also provides an interface for searching. It is built using ReactJS and Firebase for the back-end.",
    tools: [ReactJSLogo, FirebaseLogo],
    code: "https://github.com/memo2k/PinPics",
    liveDemo: "https://pinpics-firebase.web.app/"
  },
  {
    image: weatherApp,
    title: "Weather App",
    description: "A Weather website that allows user to search the weather details for any city. It is built with ReactJS and OpenWeatherMap API.",
    tools: [ReactJSLogo, SassLogo, openWeatherLogo],
    code: "https://github.com/memo2k/react-weather-app",
    liveDemo: "https://lucky-empanada-cb76a7.netlify.app/"
  },
  {
    image: homeRenovator,
    title: "Home Renovator",
    description: "A website for a home renovation company built with ReactJS and SCSS",
    tools: [ReactJSLogo, SassLogo],
    code: "https://github.com/memo2k/home-renovator",
    liveDemo: "https://home-renovator.netlify.app/"
  }
]

const Home = () => {
  return (
    <>
      <Element name="intro" className="hero">
        <div className="shell">
          <div className="hero__inner">
            <div className="hero__heading">
              <h1><span>Hi, I'm Mehmed,</span></h1>
              <h1>a dedicated web developer</h1>
            </div>

            <div className="hero__description">
              <p>I am a front-end developer specializing in HTML, CSS, and React.
                I bring a strong foundation in creating clean and accessible code,
                building responsive designs, and crafting dynamic user interfaces.</p>
            </div>

            <div className="hero__actions">
              <Link to="projects" smooth={true} duration={500} className='btn btn--transparent'>My Projects</Link>
            </div>
          </div>
        </div>
      </Element>


      <Element name="projects" className="projects">
        <div className="shell">
          <div className="projects__inner">
            <div className="projects__subheading">
              <h2>Portfolio</h2>
            </div>

            <div className="projects__heading">
              <h1>My Recent Work</h1>
            </div>

            <div className="projects__work">
              <div className="grid">
                {projectProps.map((item, index) => {
                  return <CardProject data={item} key={index} />
                })}
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="about" className="about">
        <div className="shell">
          <div className="about__inner">
            <div className="about__subheading">
              <h2>About Me</h2>
            </div>

            <div className="about__heading">
              <h1>A dedicated Web Developer based in Varna, Bulgaria</h1>
            </div>

            <div className="about__description">
              <p>I'm a front-end developer specializing in HTML, CSS, and React.
                I bring a strong foundation in creating clean and accessible code,
                building responsive designs, and crafting dynamic user interfaces.
                Passionate about staying up-to-date with the latest industry trends,
                I'm eager to contribute my skills and collaborate with teams to create
                seamless web experiences.</p>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default Home