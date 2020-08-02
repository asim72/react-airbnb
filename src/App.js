import "./App.css";
import NavBar from "./components/NavBar";

import HotelList from "./components/HotelList";

import React, { Component } from "react";
import HotelDetails from "./components/HotelDetails";
import { Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="ui container">
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/hotel" />;
            }}
          />
          <Route path="/hotel" component={HotelList} exact />
          <Route path="/hotel/:id" component={HotelDetails} exact />
        </div>
      </div>
    );
  }
}

export default App;
