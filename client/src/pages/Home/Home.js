import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.pdf'
import './Home.css';
import Fade from 'react-reveal/Fade';
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"

const  Home = () => {
  const [theme, setTheme] = useTheme();

  //Handle theem
const handleTheme = () => {
  setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
};

  return (
    <>
    <div className='container-fluid home-container' id='home'>
      <div className="theme-btn" onClick={handleTheme}>
        {theme === 'light' ? (<BsFillMoonStarsFill size={30}/>) : (<BsFillSunFill size={30}/>) }
      </div>
      <div className='container home-content'>
        <Fade right>
        <h2>Hi 👋 i'm a</h2>
        <h1>
          <Typewriter
            options={{
              strings: 
              ['Cybersecuity Engineer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        </Fade>
        <div className='home-buttons'>
        <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7893951328"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
          {/* <button className='btn btn-hire'>Hire Me</button> */}
          <a className='btn btn-cv' href={Resume} download='Ajitsah.pdf'>My Resume</a>
        </div>

      </div>
    </div>
    </>
  )
}

export default  Home;