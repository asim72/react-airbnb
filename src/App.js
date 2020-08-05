import "./App.css";

import HotelList from "./components/HotelList";

import React, { Component } from "react";
import HotelDetails from "./components/HotelDetails";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { checkAuthState } from "./actions/authActions";
import store from "./store/Store";
import { ProtectedRoute } from "./ProtectedRoute";

class App extends Component {
  UNSAFE_componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(checkAuthState());
  }
  render() {
    return (
      <div>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/login" />;
            }}
          />

          <ProtectedRoute path="/hotel" component={HotelList} exact />

          <ProtectedRoute path="/hotel/:id" component={HotelDetails} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </div>
      </div>
    );
  }
}

export default App;
