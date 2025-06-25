import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Cybersecurity Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          These projects demonstrate my capabilities in offensive and defensive
          cybersecurity practices, integrating real-world techniques such as
          vulnerability exploitation, AI-based threat detection, and secure
          system development across databases, cloud platforms, and operating
          systems.
        </p>

        <div className="row" id="ads">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">AI Threat Analyzer</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkQlfFDXx6vxG81NHfA97Bu7H7fZqzDbUPw&s"
                  alt="AI-Based Threat Analyzer"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">AI/ML</span>
                <span className="card-detail-badge">Port Scanning</span>
                <span className="card-detail-badge">SQL Security</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    AI-Based Cyber Threat Analyzer
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Blue Team</span>
                <img
                  src="https://images.ctfassets.net/aoyx73g9h2pg/uRTu5qU5D27tfJGs3tcde/48cb4fe2403b0b3985a2ab1059aafa8b/What-is-Port-445-Diagram.png"
                  alt="SMBv1 Exploit"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">kali linux</span>
                <span className="card-detail-badge">SMBv1</span>
                <span className="card-detail-badge">Windows Server</span>
                <span className="card-detail-badge">Wireshark</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Exploiting SMBv1 on Windows Server
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Database Security</span>
                <img
                  src="https://www.insecure.in/images/cover/privilege-escalation-attack.webp"
                  alt="MySQL Exploit"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MySQL</span>
                <span className="card-detail-badge">SQL Injection</span>
                <span className="card-detail-badge">Wireshark</span>
                <span className="card-detail-badge">Privilege Escalation</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    MySQL Privilege Escalation Exploit
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
