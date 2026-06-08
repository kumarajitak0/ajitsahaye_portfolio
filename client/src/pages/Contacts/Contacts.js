import React from "react";
import "./Contacts.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container contact-container">
        <h2 className="text-center text-uppercase">Contact Me</h2>
        <hr />
        <div className="contact-box">
          <div className="contact-left">
            <h3>
              <MdSecurity /> Let's Connect
            </h3>

            <p className="contact-intro">
              Cybersecurity professional specializing in Security Operations,
              Incident Response, Alert Triage, Threat Detection, Cloud Security,
              and Enterprise Payment Security.
            </p>

            <h4>
              <FaEnvelope /> Email
            </h4>

            <p className="contact-email">
              <a href="mailto:sahayeajit@gmail.com">sahayeajit@gmail.com</a>
            </p>

            <h4>
              <FaPhoneAlt /> Phone
            </h4>

            <p>
              <a href="tel:+15712688792">+1 (571) 268-8792</a>
            </p>

            <h4>
              <FaWhatsapp /> WhatsApp
            </h4>

            <p>
              <a
                href="https://wa.me/15712688792"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>

            <h4>
              <FaMapMarkerAlt /> Location
            </h4>

            <p>Virginia, USA</p>

            <p className="contact-note">
              Open to SOC Analyst, Cybersecurity Analyst, Blue Team, Cloud
              Security, and Security Operations opportunities.
            </p>
          </div>

          <div className="contact-right">
            <h4>Professional Profiles</h4>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/ajitsahaye/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/kumarajitak0"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a href="mailto:sahayeajit@gmail.com" title="Email">
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/15712688792"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="message-title">Message</div>

            <form action="https://formspree.io/f/meewgbrv" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
