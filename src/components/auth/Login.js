import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
  errors: state.auth.errors,
});

class Login extends Component {
  constructor() {
    super();

    this.LoginUser = this.LoginUser.bind(this);
  }

  LoginUser(userData) {
    this.props.dispatch(login(userData));
  }
  render() {
    const { errors, isAuth } = this.props;

    if (isAuth) {
      return (
        <Redirect
          to={{ pathname: "/hotel", state: { successRegister: true } }}
        />
      );
    }
    return (
      <Fragment>
        <div className="ui grid">
          <div className="sixteen wide column">
            <img alt="#" src="assets/6.jpg" className="login_image" />
            <div className="text">
              <div className="ui grid">
                <div className="eight wide column">
                  <h1>Welcome To Airbnb</h1>
                  <p>
                    <b>Login</b> To Find New Places
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
                    <LoginForm submitCb={this.LoginUser} />
                  </div>
                  <p style={{ color: "white", marginTop: 4 }}>
                    Dont Have An Account ? &nbsp;
                    <Link to="/register" style={{ color: "white" }}>
                      Register
                    </Link>
                  </p>
                </div>
                <div className="eight wide column">
                  <div style={{ marginTop: 190 }}>
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
      </Fragment>
    );
  }
}
export default connect(mapState)(Login);
