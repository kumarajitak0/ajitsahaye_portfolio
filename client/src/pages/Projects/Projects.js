import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      {" "}
      <div className="container project" id="projects">
        {" "}
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Featured Security Projects{" "}
        </h2>{" "}
        <hr />
        <p className="pb-3 text-center">
          Projects focused on SOC operations, alert triage, threat detection,
          incident response, security automation, cloud security, and
          AI-assisted security solutions. These projects highlight practical
          experience in building tools and workflows for monitoring,
          investigation, root cause analysis, threat detection, and improving
          operational security within enterprise environments.
        </p>
        <div className="row" id="ads">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card rounded project-card">
              <div className="card-image">
                <span className="card-notify-badge">SOC Automation</span>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Enterprise AI SecOps Copilot"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">FastAPI</span>
                <span className="card-detail-badge">Splunk</span>
                <span className="card-detail-badge">MITRE ATT&CK</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Enterprise AI SecOps Copilot
                  </h5>
                </div>

                <p>
                  AI-powered SOC platform for alert triage, MITRE ATT&CK
                  mapping, incident investigation, and root cause analysis using
                  Splunk and local LLMs.
                </p>

                <a
                  href="https://github.com/kumarajitak0/enterprise-ai-secops-copilot"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-sm mx-1 project-btn"
                >
                  GitHub Repo
                </a>

                <button
                  className="btn btn-secondary btn-sm mx-1 project-btn disabled"
                  disabled
                >
                  Case Study Soon
                </button>

                <p className="project-note">
                  Demo available through documentation and screenshots.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card rounded project-card">
              <div className="card-image">
                <span className="card-notify-badge">AI Security</span>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="LLM Prompt Injection Firewall"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">LLM Security</span>
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">SQLite</span>
                <span className="card-detail-badge">OWASP LLM</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    LLM Prompt Injection Firewall
                  </h5>
                </div>

                <p>
                  Security solution designed to detect and block prompt
                  injection attacks using regex analysis, semantic validation,
                  and LLM security controls.
                </p>

                <a
                  href="https://github.com/kumarajitak0/llm-prompt-injection-firewall"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-sm mx-1 project-btn"
                >
                  GitHub Repo
                </a>

                <button
                  className="btn btn-secondary btn-sm mx-1 project-btn disabled"
                  disabled
                >
                  Case Study Soon
                </button>

                <p className="project-note">
                  Demo available through documentation and screenshots.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card rounded project-card">
              <div className="card-image">
                <span className="card-notify-badge">Threat Detection</span>
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                  alt="SMBv1 Exploitation and Detection Lab"
                />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Metasploit</span>
                <span className="card-detail-badge">Wireshark</span>
                <span className="card-detail-badge">SMBv1</span>
                <span className="card-detail-badge">Windows Server</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    SMBv1 Exploitation & Detection Lab
                  </h5>
                </div>

                <p>
                  Performed SMBv1 attack simulation, packet analysis, blue team
                  detection development using Wireshark and Metasploit.
                </p>

                <a
                  href="https://github.com/kumarajitak0/smbv1-exploit-lab"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-sm mx-1 project-btn"
                >
                  GitHub Repo
                </a>

                <button
                  className="btn btn-secondary btn-sm mx-1 project-btn disabled"
                  disabled
                >
                  Case Study Soon
                </button>

                <p className="project-note">
                  Demo available through documentation and screenshots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
