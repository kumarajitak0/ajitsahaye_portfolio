import React from "react";
import Jump from "react-reveal/Jump";
import profilePic from '../../assets/images/AjitSahaye.png'; 
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
                I am a Cybersecurity Professional with 2+ years of experience in Security Operations, Blue Team Defense, Incident Response, and Enterprise Payment Security. My work focuses on alert triage, security monitoring, threat detection, log analysis, incident investigation, and root cause analysis across high-availability production environments. I have hands-on experience with Splunk Enterprise, IBM Safer Payments, Grafana, AWS Security, Linux, Python, and SIEM-based investigation workflows. My background includes supporting enterprise fraud detection platforms, monitoring critical infrastructure, and responding to operational and security incidents. I am passionate about SOC operations, threat detection, cloud security, security automation, and building practical blue team solutions that improve enterprise security posture.
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
