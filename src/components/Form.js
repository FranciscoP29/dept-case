import React from "react";
import ContactForm from "./ContactForm";
import "./Form.css";

function Form() {
  return (
    <div>
      <div class="grid-container">
        <div className="question-wrap">
          <h1>QUESTION? WE ARE HERE TO HELP!</h1>
        </div>
        <div className="form-wrap">
         <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default Form;
