import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";
import "./ContactUs.css";

function ShowAlert({ variant }) {
  return (
    <Alert variant={variant} dismissible>
      <h4>Congrats! Your message was sent successfully!</h4>
    </Alert>
  );
}

const ContactUs = () => {
  const [success, setSuccess] = useState(false);

  const handleAlert = () => {
    if (success) {
      return <ShowAlert variant="success" />;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "lebfreecycle_mail",
        e.target,
        "user_ldFKvtJ6BNkVIY4yP0J2R"
      )
      .then(
        (result) => {
          console.log(result);
          setSuccess(true);
        },
        (error) => {
          console.log(error);
          setSuccess(false);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container contact">
      {handleAlert}
      <div className="card contact__card">
        <form onSubmit={sendEmail}>
          <div className="contact__card--form">
            <div className="form-group">
              <label className="control-label" htmlFor="fname">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="Enter Full Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="lname">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter Subject"
                name="subject"
              />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="comment">
                Comment:
              </label>
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                name="message"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
