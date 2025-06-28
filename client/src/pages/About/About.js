import React from "react";
import Jump from "react-reveal/Jump";
import profilePic from '../../assets/images/AjitSahaye.jpg'; 
import "./About.css";


const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profilePic} alt="myphoto" />
            </div>
            <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                I'm Ajit Sah, a cybersecurity enthusiast pursuing a Master's in
                Cybersecurity with 2.5 years of experience as a full-stack
                developer. I specialize in securing systems and networks through
                proactive and reactive techniques. My hands-on skills include
                tools like Wireshark, Metasploit, Nmap, Burp Suite, and working
                knowledge of AI-driven threat detection, AWS (EC2, S3, IAM), and
                network traffic analysis. I’m well-versed in the CIA Triad, OSI
                model, firewalls, subnetting, and DNS, and have experience with
                SailPoint for identity governance. I enjoy scripting in Python
                for log analysis and automating threat response. I’m seeking
                internships to apply and expand my cybersecurity expertise.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </Jump>
    </>
  );
};

export default About;
