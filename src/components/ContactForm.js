import React from "react";

function ContactForm() {
  //don't like how the functions are presented but don't know a better way
  function validateForm(e) {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const success = document.querySelector("#success");
    const errorNodes = document.querySelectorAll(".error");

    e.preventDefault();

    clearMessages(name, email, message, success, errorNodes);

    if (name && name.value.length < 1) {
      errorNodes[0].innerText = "This field is required";
      name.classList.add("error-border");
    }

    if (!isEmailValid(email.value)) {
      errorNodes[1].innerText =
        "This field is incorrect (I.e: JohnDoe@dept.com)";
      email.classList.add("error-border");
    }

    if (message && message.value.length < 1) {
      errorNodes[2].innerText = "This field is required";
      message.classList.add("error-border");
    }
  }

  function clearMessages(name, email, message, success, errorNodes) {
    errorNodes.forEach((node) => {
      node.innerText = "";
    });

    name.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
  }

  function isEmailValid(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  return (
    <div>
      <form onSubmit={validateForm}>
        <label>Name:</label>
        <input type="text" id="name" placeholder=""></input>
        <small className="error"></small>

        <label>Email:</label>
        <input type="text" id="email" placeholder=""></input>
        <small className="error"></small>

        <label>Message:</label>
        <textarea type="text" id="message" placeholder="" rows="6"></textarea>
        <small className="error"></small>

        <div className="send">
          <input type="submit" value="SEND"></input>
          <p id="success"></p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
