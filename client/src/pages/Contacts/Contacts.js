import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contacts.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Contacts = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/portfolio/sendEmail`,
        {
          name,
          email,
          msg,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  const whatsappLink = `https://api.whatsapp.com/send?phone=+15712688792&text=Hi%20Ajit%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`;

  return (
    <div className="contact" id="contacts">
      <div className="card card0 border-0">
        <div className="row">
          {/* LEFT SIDE - WhatsApp and Gmail Info */}
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="text-center p-3">
              <h4>📱 WhatsApp:</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2 mb-3"
              >
                Message on WhatsApp{" "}
                <FaSquareWhatsapp className="ms-2" size={20} />
              </a>
              <h4>📧 Gmail:</h4>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#D44638",
                }}
              >
                ajitsahaye@gmail.com
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="col-lg-6 col-md-6">
            <div className="card2 d-flex card border-0 px-4 py-5">
              <div className="row">
                <div className="row mb-3">
                  <h6>
                    Contact With
                    <a
                      href="https://www.linkedin.com/in/ajitsahaye"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a
                      href="https://github.com/kumarajitak0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                    <a
                      href="https://www.facebook.com/KumarAjitER77"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </a>
                  </h6>
                </div>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3 form-control"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="mb-3 form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <textarea
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3 form-control"
                      rows="4"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
