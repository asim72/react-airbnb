import React from "react";
import { Field, reduxForm } from "redux-form";
import inputField from "../Fields/Input";

let RegisterForm = ({
  handleSubmit,
  pristine,

  submitting,
  submitCb,
  valid,
}) => {
  return (
    <form
      onSubmit={handleSubmit((values) => {
        return submitCb(values);
      })}
      className="ui form"
      autoComplete="off"
    >
      <div className="field ">
        <Field
          name="username"
          component={inputField}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="field">
        <Field
          name="email"
          component={inputField}
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div className="field">
        <Field
          name="password"
          component={inputField}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="field">
        <Field
          name="passwordConfirmation"
          component={inputField}
          type="password"
          placeholder="Repeat Password"
        />
      </div>
      <button
        type="submit"
        className="ui button teal "
        disabled={pristine || submitting || !valid}
      >
        Submit
      </button>
    </form>
  );
};

const validate = (values) => {
  let errors = {};

  if (values.username && values.username.length < 4) {
    errors.username = "Username must be atleast 4 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please repeat your password";
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = "Password Doesnt Match";
  }

  return errors;
};

export default reduxForm({
  form: "register",
  validate,
})(RegisterForm);
