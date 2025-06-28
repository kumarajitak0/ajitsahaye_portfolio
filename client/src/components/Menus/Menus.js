import React from 'react'
import "./Menus.css";
import {Link} from "react-scroll";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import profilePic from '../../assets/images/AjitSahaye.jpg';
import {FcHome, 
  FcAbout,
   FcPortraitMode,
    FcBiotech,
     FcReadingEbook,
      FcVideoProjector,
       FcBusinessContact}
        from "react-icons/fc";
// import profile1 from "../MERN-PORTFOLIO/client/src/images/profile1.JPG";

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
        <Zoom>
          <div className='navbar-profile-pic'>
             <img src={profilePic} alt="Ajit Sahaye" />
          </div>
        </Zoom>

        <Fade left >
          <div className='nav-items'>
              <div className='nav-item'>
                  <div className='nav-link'><Link to="home" spy={true} smooth={true} offset={-100} duration={100}><FcHome/>Home</Link></div>
                  <div className='nav-link'><Link to="about" spy={true} smooth={true} offset={-100} duration={100}><FcAbout/>About</Link></div>
                   <div className='nav-link'><Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}><FcPortraitMode/>Work Experience</Link></div>
                  <div className='nav-link'><Link to="projects" spy={true} smooth={true} offset={-100} duration={100}><FcVideoProjector/>Projects</Link></div>
                  <div className='nav-link'><Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}><FcBiotech/>Tech Stack</Link></div>
                  <div className='nav-link'><Link to="education" spy={true} smooth={true} offset={-100} duration={100}><FcReadingEbook/>Education</Link></div>
                  <div className='nav-link'><Link to="contacts" spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact/>Contacts</Link></div>
              </div>
          </div>
        </Fade>
      </>
      ) : (
        
       <>

       <Fade right>
            <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'><Link to="home" spy={true} smooth={true} offset={-100} duration={100}><FcHome title='Home'/></Link></div>
                    <div className='nav-link'><Link to="about" spy={true} smooth={true} offset={-100} duration={100}><FcAbout title='About'/></Link></div>
                    <div className='nav-link'><Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}><FcPortraitMode title='Work Experience'/></Link></div>
                    <div className='nav-link'><Link to="projects" spy={true} smooth={true} offset={-100} duration={100}><FcVideoProjector title='Projects'/></Link></div>
                    <div className='nav-link'><Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}><FcBiotech title='Tech Stack'/></Link></div>
                    <div className='nav-link'><Link to="education" spy={true} smooth={true} offset={-100} duration={100}><FcReadingEbook title='Education'/></Link></div>
                    <div className='nav-link'><Link to="contacts" spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact title='Contacts'/></Link></div>
                </div>
            </div>
        </Fade>
       </>

      )}
         
        
    </>
  )
}

export default Menus;