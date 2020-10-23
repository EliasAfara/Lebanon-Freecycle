import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [subjectErr, setSubjectErr] = useState({});
  const [messageErr, setMessageErr] = useState({});

  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isSubjectCorrect, setIsSubjectCorrect] = useState(true);
  const [isMessageCorrect, setIsMessageCorrect] = useState(true);

  const [showAlert, setShowAlert] = useState(false);

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const subjectErr = {};
    const messageErr = {};

    let isValid = true;

    if (name.length === 0) {
      nameErr.nameIsRequired = "The name field is Required";
      isValid = false;
      setIsNameCorrect(false);
    } else if (name.trim().length < 2) {
      nameErr.nameTooShort =
        "Name is too short. It must be at least 2 characters.";
      isValid = false;
      setIsNameCorrect(false);
    }
    if (name.length > 40) {
      nameErr.nameTooLong =
        "Name is too long. It must be at most 30 characters with spaces.";
      isValid = false;
      setIsNameCorrect(false);
    }

    if (email.length === 0) {
      emailErr.emailIsRequired = "The email field is Required";
      isValid = false;
      setIsEmailCorrect(false);
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      emailErr.emailIsRequired =
        "Invalid email address. e.g., email@example.com";
      isValid = false;
      setIsEmailCorrect(false);
    }

    if (subject.length === 0) {
      subjectErr.subjectIsRequired = "The subject field is Required";
      isValid = false;
      setIsSubjectCorrect(false);
    } else if (subject.trim().length < 5) {
      subjectErr.subjectTooShort =
        "Subject is too short. It must be at least 5 characters";
      isValid = false;
      setIsSubjectCorrect(false);
    }
    if (subject.length > 40) {
      subjectErr.subjectTooLong =
        "Subject is too long. It must be at most 40 characters";
      isValid = false;
      setIsSubjectCorrect(false);
    }

    if (message.length === 0) {
      messageErr.messageIsRequired = "The description field is Required";
      isValid = false;
      setIsMessageCorrect(false);
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setSubjectErr(subjectErr);
    setMessageErr(messageErr);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    const isValid = formValidation();
    if (isValid) {
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
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setIsNameCorrect(true);
            setIsSubjectCorrect(true);
            setIsEmailCorrect(true);
            setIsMessageCorrect(true);
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 4000);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  function ShowSuccessAlert() {
    return (
      <Alert
        variant="success"
        onClose={() => setShowAlert(false)}
        style={{ paddingBottom: 0 }}
        dismissible
      >
        <p>Congrats! Your message was sent successfuly.</p>
      </Alert>
    );
  }

  const DisplayErrorMessage = ({ errLabel }) => {
    const ErrorMessage = Object.keys(errLabel).map((key, index) => {
      return (
        <div key={index} className="required">
          {errLabel[key]}
        </div>
      );
    });
    return ErrorMessage;
  };

  return (
    <div className="container contact">
      {showAlert ? <ShowSuccessAlert /> : null}
      <div className="card contact__card">
        <form onSubmit={sendEmail}>
          <div className="contact__card--form">
            <div className="form-group">
              <label className="control-label" htmlFor="name">
                Full Name<span className="required"> *</span>
              </label>
              <input
                type="text"
                className={
                  isNameCorrect ? "form-control" : "form-control error"
                }
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Enter Full Name"
                name="name"
              />
              <DisplayErrorMessage errLabel={nameErr} />
            </div>

            <div className="form-group">
              <label className="control-label" htmlFor="email">
                Email<span className="required"> *</span>
              </label>
              <input
                type="text"
                className={
                  isEmailCorrect ? "form-control" : "form-control error"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter email"
                name="email"
              />
              <DisplayErrorMessage errLabel={emailErr} />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="lname">
                Subject<span className="required"> *</span>
              </label>
              <input
                type="text"
                className={
                  isSubjectCorrect ? "form-control" : "form-control error"
                }
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                id="lname"
                placeholder="Enter Subject"
                name="subject"
              />
              <DisplayErrorMessage errLabel={subjectErr} />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="message">
                Description<span className="required"> *</span>
              </label>
              <textarea
                className={
                  isMessageCorrect ? "form-control" : "form-control error"
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                id="message"
                name="message"
              ></textarea>
              <DisplayErrorMessage errLabel={messageErr} />
            </div>
            <div className="form-group">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
            <span className="contact__form__required">
              All fields with * are required
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
