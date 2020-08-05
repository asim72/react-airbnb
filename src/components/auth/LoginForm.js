import React from "react";
import { Field, reduxForm } from "redux-form";
import inputField from "../Fields/Input";

let LoginForm = ({ handleSubmit, pristine, submitting, submitCb, valid }) => {
  return (
    <form
      onSubmit={handleSubmit((values) => {
        return submitCb(values);
      })}
      className="ui form"
      autoComplete="off"
    >
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
      <button
        type="submit"
        className="ui button teal "
        disabled={!valid || pristine || submitting}
      >
        Submit
      </button>
    </form>
  );
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export default reduxForm({
  form: "login",
  validate,
})(LoginForm);
