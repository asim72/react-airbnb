import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import { register_user } from "../../actions/authActions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
  errors: state.auth.errors,
});

class Register extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      redirect: false,
    };

    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(userData) {
    register_user(userData).then(
      (register) => {
        this.setState({ redirect: true });
      },
      (error) => {
        this.setState({
          errors: error,
        });
      }
    );
  }
  render() {
    const { errors, redirect } = this.state;
    const { isAuth } = this.props;

    if (isAuth) {
      return (
        <Redirect
          to={{ pathname: "/hotel", state: { successRegister: true } }}
        />
      );
    }

    if (redirect) {
      return (
        <Redirect
          to={{ pathname: "/login", state: { successRegister: true } }}
        />
      );
    }
    return (
      <div>
        <div className="ui grid">
          <div className="sixteen wide column">
            <img alt="#" src="assets/3.jpg" className="login_image" />
            <div className="text">
              <div className="ui grid">
                <div className="eight wide column">
                  <h1>Join The Community</h1>
                  <p>
                    <b>Register</b> To Explore New World
                  </p>
                  {errors &&
                    errors.map((error, index) => {
                      return (
                        <p
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: 20,
                          }}
                          key={index}
                        >
                          {error.detail}
                        </p>
                      );
                    })}
                  <div>
                    <RegisterForm submitCb={this.registerUser} />
                  </div>
                  <p style={{ color: "white", marginTop: 4 }}>
                    Already Have An Account ? &nbsp;
                    <Link to="/login" style={{ color: "white" }}>
                      Login
                    </Link>
                  </p>
                </div>
                <div className="eight wide column">
                  <div style={{ marginTop: 250 }}>
                    <button className="ui button white fluid ">
                      Login With Google
                    </button>
                    <br />
                    <button className="ui button blue fluid">
                      Login With Facebook
                    </button>
                    <br />
                    <button className="ui button red fluid">
                      Login With Reddit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapState)(Register);
