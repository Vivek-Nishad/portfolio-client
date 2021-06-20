import React, { useState } from "react";
import axios from "axios";

import "./Contact.css";
import ContactErrModal from "../components/ContactErrModal";

const EMAIL_URL = "https://portfolio-data-vk.herokuapp.com/api/email";

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMob, setContactMob] = useState("");
  const [contactSub, setContactSub] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [contactDisable, setContactDisable] = useState(false);

  const [mailStatus, setMailStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(EMAIL_URL, {
        contactName,
        contactEmail,
        contactMob,
        contactSub,
        contactMsg,
      })
      .then((res) => {
        console.log(res.data);
        setMailStatus("Email Sent");
        setContactDisable(true);
      })
      .catch((err) => {
        console.log("err" + err);
        setMailStatus("Email not Sent");
      });

    setMailStatus("");
  };

  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="contactHead">
          <h3>Contact</h3>
          <h1>Say Hello.</h1>
          <p>
            Submit the form below so I can get back to you as soon as possible
          </p>
        </div>
        <div className="contactMain">
          <div className="contactInfo">
            <h3>Contact Information</h3>
            <div>
              <a href="tel:+919028477947">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <p>(+91) 9028477947</p>
              </a>
            </div>
            <div>
              <a href="mailto:viveknishad99999@gmail.com">
                <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                <p>viveknishad99999@gmail.com</p>
              </a>
            </div>
            <div>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>

              <p>Pune Maharashtra India</p>
            </div>
            <div className="socialLinks">
              <a
                href="https://github.com/Vivek-Nishad"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-nishad-0458391b2/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="contactForm">
            <h3>Send a Message</h3>
            <form className="contactFormBox" onSubmit={handleSubmit}>
              <div className="inputBox w50">
                <input
                  type="text"
                  name="contactFormName"
                  id="contactFormName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
                <span>Name</span>
              </div>
              <div className="inputBox w50">
                <input
                  type="email"
                  name="contactFormEmail"
                  id="contactFormEmail"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
                <span>Email</span>
              </div>
              <div className="inputBox w50">
                <input
                  type="number"
                  name="contactFormMob"
                  id="contactFormMob"
                  value={contactMob}
                  onChange={(e) => setContactMob(e.target.value)}
                  required
                />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w50">
                <input
                  type="text"
                  name="contactFormSubject"
                  id="contactFormSubject"
                  value={contactSub}
                  onChange={(e) => setContactSub(e.target.value)}
                  required
                />
                <span>Subject</span>
              </div>
              <div className="inputBox w100">
                <textarea
                  name="contactFormMessage"
                  id="contactFormMessage"
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  required
                ></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox btnIB">
                <input
                  className="contactFormBtn"
                  type="submit"
                  value="Send"
                  disabled={contactDisable}
                />
                {mailStatus !== "" ? (
                  <ContactErrModal mailStatus={mailStatus} />
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
